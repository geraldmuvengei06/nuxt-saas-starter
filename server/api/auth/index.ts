import { NewTeam, NewTeamMember, User } from './../../../lib/db/schema';
import { eq, and, sql } from "drizzle-orm";
import { z } from "zod";
import { comparePasswords, hashPassword, setSession } from "~/lib/auth/session";
import { db } from "~/lib/db/drizzle";
import { getUser, getUserWithTeam } from '~/lib/db/queries';
import { activityLogs, ActivityType, invitations, NewActivityLog, NewUser, teamMembers, teams, users } from "~/lib/db/schema";
import { createCheckoutSession } from "~/lib/payments/stripe";
import { signInSchema, signUpSchema, updatePasswordSchema } from "~/lib/schema/auth";


async function logActivity(
    teamId: number | null | undefined,
    userId: number,
    type: ActivityType,
    ipAddress?: string
) {
    if (teamId === null || teamId === undefined) {
        return;
    }
    const newActivity: NewActivityLog = {
        teamId,
        userId,
        action: type,
        ipAddress: ipAddress || '',
    };
    await db.insert(activityLogs).values(newActivity);
}

export const signIn = defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { email, password,
            //  redirectTo,
            //   priceId 
        } = signInSchema.parse(body);

        const userWithTeam = await db
            .select({
                user: users,
                team: teams,
            })
            .from(users)
            .leftJoin(teamMembers, eq(users.id, teamMembers.userId))
            .leftJoin(teams, eq(teamMembers.teamId, teams.id))
            .where(eq(users.email, email))
            .limit(1)

        if (userWithTeam.length === 0) {
            return {
                status: 400,
                success: false, body: {
                    error: 'Invalid email or password. Please try again.'
                }
            };
        }

        const { user: foundUser, team: foundTeam } = userWithTeam[0];

        const isPasswordValid = await comparePasswords(password, foundUser.passwordHash);

        if (!isPasswordValid) {
            return {
                status: 400,
                success: false, body: {
                    error: 'Invalid email or password. Please try again.'
                }
            };
        }

        await Promise.all([
            setSession(foundUser),
            logActivity(foundTeam?.id, foundUser.id, ActivityType.SIGN_IN)
        ])

        return {
            status: 200,
            success: true,
            body: {
                user: foundUser,
                team: foundTeam,
            }
        }

        // if (redirectTo == 'checkout') {
        //     await createCheckoutSession({ team: foundTeam, priceId });
        // }

    } catch (error) {

        if (error instanceof z.ZodError) {
            return {
                status: 400,
                success: false,
                message: 'Validation error',
                body: {
                    error: error.errors
                }
            }
        }

        return {
            status: 500,
            success: false,
            message: 'An error occurred',
        }
    }



});


export const signUp = defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { email, password, inviteId } = signUpSchema.parse(body);

        const existingUser = await db
            .select()
            .from(users)
            .where(eq(users.email, email))
            .limit(1);

        if (existingUser.length > 0) {
            return {
                status: 400,
                success: false,
                message: 'Email already exists',
            }
        }

        const passwordHash = await hashPassword(password);

        const newUser: NewUser = {
            email,
            passwordHash,
            role: 'owner', // Default role, will be overridden if there's an invitation
        }

        const [createdUser] = await db.insert(users).values(newUser).returning();

        if (!createdUser) {
            return {
                status: 500,
                success: false,
                message: 'Failed to create user. Please try again.',
            }
        }

        let teamId: number;
        let userRole: string;
        let createdTeam: typeof teams.$inferSelect | null = null;

        if (inviteId) {
            // Check if there's a valid invitation
            const [invitation] = await db
                .select()
                .from(invitations)
                .where(
                    and(
                        eq(invitations.id, parseInt(inviteId)),
                        eq(invitations.email, email),
                        eq(invitations.status, 'pending')
                    )
                )
                .limit(1);

            if (invitation) {
                teamId = invitation.teamId;
                userRole = invitation.role;

                // Update the invitation status
                await db.update(invitations)
                    .set({ status: 'accepted' })
                    .where(eq(invitations.id, invitation.id))
                // .execute();

                // Write to logs
                await logActivity(teamId, createdUser.id, ActivityType.ACCEPT_INVITATION);

                [createdTeam] = await db
                    .select()
                    .from(teams)
                    .where(eq(teams.id, teamId))
                    .limit(1);
            } else {
                return {
                    status: 400,
                    success: false,
                    message: 'Invalid or expired invitation',
                }
            }
        } else {
            // Create a new team
            const newTeam: NewTeam = {
                name: `${email}'s Team`,
            };

            [createdTeam] = await db.insert(teams).values(newTeam).returning();

            if (!createdTeam) {
                return {
                    status: 500,
                    success: false,
                    message: 'Failed to create team. Please try again.',
                }
            }

            teamId = createdTeam.id;
            userRole = 'owner';

            await logActivity(teamId, createdUser.id, ActivityType.CREATE_TEAM);

        }

        const newTeamMember: NewTeamMember = {
            teamId,
            userId: createdUser.id,
            role: userRole,
        }

        await Promise.all([
            db.insert(teamMembers).values(newTeamMember),
            logActivity(teamId, createdUser.id, ActivityType.SIGN_UP),
            setSession(createdUser),
        ])

        return {
            status: 200,
            success: true,
            body: {
                user: createdUser,
                team: createdTeam,
            }
        }

        // create checkout session

        // const redirectTo = formData.get('redirect') as string | null;
        // if (redirectTo === 'checkout') {
        //     const priceId = formData.get('priceId') as string;
        //     return createCheckoutSession({ team: createdTeam, priceId });
        // }



    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                status: 400,
                success: false,
                message: 'Validation error',
                body: {
                    error: error.errors
                }
            }
        }

        return {
            status: 500,
            success: false,
            message: 'An error occurred',
        }
    }
});

export const signOut = defineEventHandler(async (event) => {
    try {
        const user = (await getUser()) as User;
        const userWithTeam = await getUserWithTeam(user.id);
        await logActivity(userWithTeam?.teamId, user.id, ActivityType.SIGN_OUT);
        // cookies().delete('session');
        return {
            status: 200,
            success: true,
            message: 'Signed out successfully',
        }
    } catch (error) {
      

        return {
            status: 500,
            success: false,
            message: 'An error occurred',
        }
    }
});

export const updatePassword = defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { currentPassword, newPassword, confirmPassword } = updatePasswordSchema.parse(body);

        
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                status: 400,
                success: false,
                message: 'Validation error',
                body: {
                    error: error.errors
                }
            }
        }
        
        return {
            status: 500,
            success: false,
            message: 'An error occurred',
        }
    }
});
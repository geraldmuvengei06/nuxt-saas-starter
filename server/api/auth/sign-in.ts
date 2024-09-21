import { db } from "~/lib/db/drizzle";
import { ActivityType, teamMembers, teams, users } from "~/lib/db/schema";
import { signInSchema } from "~/lib/schema/auth";
import { eq, and, sql } from "drizzle-orm";
import { z } from "zod";
import { comparePasswords, logActivity } from "~/lib/auth/session";


export default defineEventHandler(async (event) => {
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
            // setSession(foundUser),
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


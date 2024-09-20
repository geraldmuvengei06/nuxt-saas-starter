import { z } from 'zod';


export const signInSchema = z.object({
    email: z.string().email().min(3).max(255),
    password: z.string().min(8).max(100),
});

export const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    inviteId: z.string().optional(),
});

export const updatePasswordSchema = z
    .object({
        currentPassword: z.string().min(8).max(100),
        newPassword: z.string().min(8).max(100),
        confirmPassword: z.string().min(8).max(100),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });


export const deleteAccountSchema = z.object({
    password: z.string().min(8).max(100),
});

export const updateAccountSchema = z.object({
    name: z.string().min(1, 'Name is required').max(100),
    email: z.string().email('Invalid email address'),
});

export const removeTeamMemberSchema = z.object({
    memberId: z.number(),
});


export const inviteTeamMemberSchema = z.object({
    email: z.string().email('Invalid email address'),
    role: z.enum(['member', 'owner']),
});
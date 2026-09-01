import { z } from "zod";

export const signUpSchemas = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.email("Enter a valid email").trim().min(1, "Email is required"),
  password: z.string().trim().min(8, "Password must be atleast 8 character"),
});

export type SignUpFormValues = z.infer<typeof signUpSchemas>;

export const signInSchemas = z.object({
  email: z.email("Enter a valid email").trim().min(1, "Email is required"),
  password: z.string().trim().min(8, "Password must be atleast 8 character"),
});

export type SignInFormValues = z.infer<typeof signInSchemas>;

export const codeSchema = z.object({
  code: z.string().min(1, "Enter the verification code."),
});
export type codeFormValues = z.infer<typeof codeSchema>;

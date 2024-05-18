import * as z from "zod";

export const LoginSchema = z.object({
  username: z
    .string({
      invalid_type_error: "Must be a valid email address",
      required_error: "Email is required",
    })
    .email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z
  .object({
    // displayName: z.string().min(1, { message: "Display Name is required" }),
    username: z.string().min(1, { message: "Username is required" }),
    email: z
      .string({
        invalid_type_error: "Must be a valid email address",
        required_error: "Email is required",
      })
      .email(),
    password: z.string().min(1, { message: "Password is required" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Confirm do not match",
  });

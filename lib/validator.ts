import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Must be a valid email address",
      required_error: "Email is required",
    })
    .email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
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

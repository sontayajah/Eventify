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

export const RegisterSchema = z.object({
  fullname: z.string().min(1, { message: "Fullname is required" }),
  email: z
    .string({
      invalid_type_error: "Must be a valid email address",
      required_error: "Email is required",
    })
    .email(),
  password: z.string().min(1, { message: "Password is required" }),
});

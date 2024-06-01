"use server";
import * as z from "zod";

import { LoginSchema } from "@/lib/validator";
import { signIn } from "next-auth/react";
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  return { success: "Login Success" };
};

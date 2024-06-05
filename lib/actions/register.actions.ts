"use server";
import * as z from "zod";

import { RegisterSchema } from "@/lib/validator";

import db from "@/lib/prisma";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { username } = validatedFields.data;

  const existingUser = await db.user.findUnique({
    where: { username },
  });

  if (existingUser) {
    return { error: "Username already in use!" };
  }

  return { success: "User Created!" };
};

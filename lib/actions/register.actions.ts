"use server";
import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/lib/validator";

import db from "@/lib/prisma";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { username, password, email } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: { username },
  });

  if (existingUser) {
    return { error: "Username already in use!" };
  }

  await db.user.create({
    data: { username, password: hashedPassword, email },
  });

  return { success: "User Created!" };
};

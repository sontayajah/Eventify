"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import db from "@/lib/prisma";

import { RegisterSchema } from "@/lib/validator";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const existingUser = await db.user.findUnique({
    where: { username: values.username },
  });

  if (existingUser) {
    return {
      success: false,
      message: "Username already in use!",
    };
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(values.password, salt);

  const user = await db.user.create({
    data: {
      username: values.username,
      password: hashedPassword,
      email: values.email,
    },
  });

  await db.profile.create({
    data: {
      userId: user.id,
      displayName: user.username,
      isVerified: false,
      verifyTypeId: "0",
    },
  });

  return { success: true, message: "User Data Successfully Created!" };
};

import db from "@/lib/prisma";
import bcrypt from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password, email } = await request.json();

    const existingUser = await db.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Username already in use!" },
        { status: 409 },
      );
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    await db.user.create({
      data: {
        username: username,
        password: hashedPassword,
        email: email,
      },
    });

    return NextResponse.json(
      { success: true, message: "User Data Successfully Created!" },
      { status: 201 },
    );
  } catch (error) {
    console.log({ error });
  }
}

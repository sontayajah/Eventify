import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const existingUser = await db.user.findUnique({
      where: { username, password: hashedPassword },
    });

    if (!existingUser) {
      return NextResponse.json(
        { success: false, message: "Username or password is incorrect" },
        { status: 401 },
      );
    }
    return NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 },
    );
  } catch (error) {
    console.log({ error });
  }
}

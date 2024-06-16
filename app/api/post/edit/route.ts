import { type NextRequest, NextResponse } from "next/server";

import db from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { title, content, postId } = await request.json();

    const post = await db.post.update({
      where: { id: postId },
      data: {
        title: title,
        content: content,
      },
    });

    return NextResponse.json(
      { success: true, message: "Edit Post Successfully", data: { post } },
      { status: 201 },
    );
  } catch (error) {
    console.log({ error });
  }
}
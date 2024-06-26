import { type NextRequest, NextResponse } from "next/server";

import db from "@/lib/prisma";
import { put } from "@vercel/blob";
import { generateSlug } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const authorId = formData.get("authorId") as string;
    const categories = formData.getAll("category") as string[];
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file provided" },
        { status: 400 },
      );
    }

    // Upload the file
    const blob = await put(file.name, file, {
      access: "public",
    });

    const post = await db.post.create({
      data: {
        title: title,
        content: content,
        authorId: authorId,
        imageUrl: blob.url,
        imageAlt: (await generateSlug(title)) + "-" + "image",
        slug: await generateSlug(title),
        url: "/post/" + (await generateSlug(title)),
        isPublished: false,
        categories: {
          connect:
            categories.length > 0
              ? categories.map((id: string) => ({ id: id }))
              : [],
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Create Draft Post Successfully",
        redirect: post.url,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while editing the post",
      },
      { status: 500 },
    );
  }
}

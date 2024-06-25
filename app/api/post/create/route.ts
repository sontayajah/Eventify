import { type NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

import db from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const authorId = formData.get("authorId") as string;
    const categories = formData.getAll("category[]") as string[];
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
        isPublished: true,
        publishedDate: new Date(),
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
        message: "Create Post Successfully",
        redirect: post.url,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error({ error });
  }
}

async function generateSlug(title: string) {
  const baseSlug = title
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\u0E00-\u0E7F-]+/g, "") // Remove non-word characters except Thai characters and -
    .replace(/-+/g, "-") // Replace multiple - with single -
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing -

  let slug = baseSlug;
  let attempt = 1;

  while (true) {
    const existingPost = await db.post.findUnique({
      where: { slug },
    });

    if (!existingPost) {
      return slug; // Return the slug if it's unique
    }

    // If slug already exists, append a random number
    slug = `${baseSlug}-${attempt}`;

    attempt++;

    // Add additional logic to limit attempts or modify the slug as needed
    if (attempt > 10) {
      // Example: Limit to 10 attempts
      throw new Error("Failed to generate a unique slug after 10 attempts.");
    }
  }
}

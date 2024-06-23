import { type NextRequest, NextResponse } from "next/server";

import db from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { title, content, authorId } = await request.json();

    const post = await db.post.create({
      data: {
        title: title,
        content: content,
        authorId: authorId,
        imageUrl: "/images/card-cover/bus7-brother-zone-release-plan.jpg",
        imageAlt: "bus7_brother_zone_release_plan",
        slug: await generateSlug(title),
        url: "/post/" + (await generateSlug(title)),
        isPublished: false,
      },
    });

    return NextResponse.json(
      { success: true, message: "Create Post Successfully", data: { post } },
      { status: 201 },
    );
  } catch (error) {
    console.log({ error });
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

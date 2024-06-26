import { type NextRequest, NextResponse } from "next/server";

import db from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const authorId = formData.get("authorId") as string;
    const postId = formData.get("postId") as string;
    const categories = formData.getAll("category") as string[];

    // const file = formData.get("file") as File;

    const post = await db.post.findUnique({
      where: { id: postId },
      include: {
        categories: true,
      },
    });

    if (!post) {
      return {
        success: false,
        message: "No posts found",
      };
    }

    if (post.authorId !== authorId) {
      return {
        success: false,
        message: "No permissions to edit the post",
      };
    }

    // if (!file) {
    //   return NextResponse.json(
    //     { success: false, message: "No file provided" },
    //     { status: 400 },
    //   );
    // }

    // // Upload the file
    // const blob = await put(file.name, file, {
    //   access: "public",
    // });

    const currentCategoryIds = post.categories.map((category) => category.id);

    // Determine categories to connect and disconnect
    const categoriesToConnect = categories.filter(
      (id) => !currentCategoryIds.includes(id),
    );
    const categoriesToDisconnect = currentCategoryIds.filter(
      (id) => !categories.includes(id),
    );

    const updatedPost = await db.post.update({
      where: { id: postId },
      data: {
        title: title,
        content: content,
        // imageUrl: blob.url,
        // imageAlt: (await generateSlug(title)) + "-" + "image",
        categories: {
          connect: categoriesToConnect.map((id) => ({ id })),
          disconnect: categoriesToDisconnect.map((id) => ({ id })),
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Edit Post Successfully",
        redirect: updatedPost.url,
      },
      { status: 201 },
    );
  } catch (error) {
    console.log({ error });
  }
}

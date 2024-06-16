"use server";

import db from "@/lib/prisma";
import { Post } from "@/types";

interface GetPostBySlugProps {
  slug: string;
}

export async function getPostBySlug(props: GetPostBySlugProps) {
  const slug = props.slug;

  const post = await db.post.findUnique({
    where: {
      slug,
    },
    include: {
      author: {
        include: {
          profile: {
            include: {
              verifyType: true,
            },
          },
        },
      },
      tags: true,
    },
  });

  return post as Post;
}

interface GetPostByIdProps {
  id: string;
}

export async function getPostById(props: GetPostByIdProps) {
  const id = props.id;

  const post = await db.post.findUnique({
    where: {
      id,
    },
    include: {
      author: {
        include: {
          profile: {
            include: {
              verifyType: true,
            },
          },
        },
      },
      tags: true,
    },
  });

  return post as Post;
}

interface GetAllPostsProps {
  isPublished?: boolean;
  postType?: "official" | "unofficial";
  take?: number;
}

export async function getAllPosts(props: GetAllPostsProps) {
  const { isPublished, postType, take } = props;

  const posts = await db.post.findMany({
    where: {
      ...(postType
        ? {
            author: {
              profile: {
                verifyTypeId:
                  postType === "official" ? "2" : { in: ["0", "1"] },
              },
            },
          }
        : {}),
      ...(isPublished
        ? {
            isPublished: isPublished,
          }
        : {}),
    },
    include: {
      author: {
        include: {
          profile: {
            include: {
              verifyType: true,
            },
          },
        },
      },
      tags: true,
    },
    take: take,
    orderBy: {
      createdAt: "desc",
    },
  });

  return posts;
}

interface CreatePostProps {
  title: string;
  content: string;
  authorId: string;
}
// export async function createPost(props: CreatePostProps) {
//   const { title, content, authorId } = props;
//   try {
//     const slug = generateSlug(title);

//     await db.post.create({
//       data: {
//         title: title,
//         content: content,
//         authorId: authorId,
//         imageUrl: "/images/card-cover/bus7-brother-zone-release-plan.jpg",
//         imageAlt: "bus7_brother_zone_release_plan",
//         slug: await generateSlug(title),
//         url: "/post/" + (await generateSlug(title)),
//       },
//     });

//     return {
//       success: true,
//       message: "Created post successfully",
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

async function generateSlug(title: string) {
  const baseSlug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove all non-word characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-|-$/g, ""); // Remove hyphens from the start and end

  const existingSlug = await db.post.findUnique({
    where: { slug: baseSlug },
  });

  if (!existingSlug) {
    return `${baseSlug}`;
  }

  const date = new Date().toISOString().split("T")[0];
  return `${baseSlug}-${date}`;
}

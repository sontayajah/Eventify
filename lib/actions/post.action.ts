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
  authorId?: string;
  isPublished?: boolean;
  isDeleted?: boolean;
  postType?: "official" | "unofficial";
  take?: number;
  skip?: number;
}

export async function getAllPosts(props: GetAllPostsProps) {
  const { authorId, isPublished, isDeleted, postType, take, skip } = props;

  const posts = await db.post.findMany({
    where: {
      ...(authorId !== undefined
        ? {
            authorId: {
              equals: authorId,
            },
          }
        : {}),
      ...(postType !== undefined
        ? {
            author: {
              profile: {
                verifyTypeId:
                  postType === "official" ? "2" : { in: ["0", "1"] },
              },
            },
          }
        : {}),
      ...(isPublished !== undefined
        ? {
            isPublished: isPublished,
          }
        : {}),
      ...(isDeleted !== undefined
        ? {
            isDeleted: isDeleted,
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
    skip: skip,
    orderBy: {
      createdAt: "desc",
    },
  });

  return posts as Post[];
}

interface GetAllPublishedPostsOfUserProps {
  authorId: string;
}
export async function getAllPublishedPostsOfUser(
  props: GetAllPublishedPostsOfUserProps,
) {
  const { authorId } = props;

  const posts = await db.post.findMany({
    where: {
      authorId: {
        equals: authorId,
      },
      isPublished: {
        equals: true,
      },
      isDeleted: {
        equals: false,
      },
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
    // take: take,
    // skip: skip,
    orderBy: {
      createdAt: "desc",
    },
  });

  return posts as Post[];
}

interface GetAllDraftPostsOfUserProps {
  authorId: string;
}
export async function getAllDraftPostsOfUser(
  props: GetAllDraftPostsOfUserProps,
) {
  const { authorId } = props;

  const posts = await db.post.findMany({
    where: {
      authorId: {
        equals: authorId,
      },
      isPublished: {
        equals: false,
      },
      isDeleted: {
        equals: false,
      },
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
    // take: take,
    // skip: skip,
    orderBy: {
      createdAt: "desc",
    },
  });

  return posts as Post[];
}

interface GetAllDeletedPostsOfUserProps {
  authorId: string;
}
export async function getAllDeletedPostsOfUser(
  props: GetAllDeletedPostsOfUserProps,
) {
  const { authorId } = props;

  const posts = await db.post.findMany({
    where: {
      authorId: {
        equals: authorId,
      },
      isDeleted: {
        equals: true,
      },
      isPublished: {
        equals: false,
      },
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
    // take: take,
    // skip: skip,
    orderBy: {
      createdAt: "desc",
    },
  });

  return posts as Post[];
}

interface DeletePostOfUserProps {
  authorId: string;
  postId: string;
}
export async function DeletePostOfUser(props: DeletePostOfUserProps) {
  const { authorId, postId } = props;

  const posts = await db.post.findUnique({
    where: { id: postId },
  });

  if (!posts) {
    return {
      success: false,
      message: "No posts found",
    };
  }

  if (posts.authorId !== authorId) {
    return {
      success: false,
      message: "No permissions to delete the post",
    };
  }

  await db.post.update({
    where: { id: postId },
    data: { isPublished: false, isDeleted: true, deletedAt: new Date() },
  });

  return {
    success: true,
    message: "Post deleted successfully",
  };
}

interface RecoveryPostOfUserProps {
  authorId: string;
  postId: string;
}
export async function RecoveryPostOfUser(props: RecoveryPostOfUserProps) {
  const { authorId, postId } = props;

  const posts = await db.post.findUnique({
    where: { id: postId },
  });

  if (!posts) {
    return {
      success: false,
      message: "No posts found",
    };
  }

  if (posts.authorId !== authorId) {
    return {
      success: false,
      message: "No permissions to recovery the post",
    };
  }

  await db.post.update({
    where: { id: postId },
    data: {
      isPublished: false,
      isDeleted: false,
      deletedAt: null,
      createdAt: new Date(),
    },
  });

  return {
    success: true,
    message: "Post deleted successfully",
  };
}

interface MakePublishedPostOfUserProps {
  authorId: string;
  postId: string;
}
export async function MakePublishedPostOfUser(
  props: MakePublishedPostOfUserProps,
) {
  const { authorId, postId } = props;

  const posts = await db.post.findUnique({
    where: { id: postId },
  });

  if (!posts) {
    return {
      success: false,
      message: "No posts found",
    };
  }

  if (posts.authorId !== authorId) {
    return {
      success: false,
      message: "No permissions to recovery the post",
    };
  }

  await db.post.update({
    where: { id: postId },
    data: {
      isPublished: true,
      isDeleted: false,
      publishedDate: new Date(),
    },
  });

  return {
    success: true,
    message: "Post deleted successfully",
  };
}

// interface CreatePostProps {
//   title: string;
//   content: string;
//   authorId: string;
// }
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

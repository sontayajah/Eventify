import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FolderXIcon } from "lucide-react";
import {
  DeletePostOfUser,
  MakePublishedPostOfUser,
  RecoveryPostOfUser,
  getAllDeletedPostsOfUser,
  getAllDraftPostsOfUser,
  getAllPublishedPostsOfUser,
} from "@/lib/actions/post.action";
import { getCurrentUser } from "@/lib/session";
import { formatDateTime } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types";

interface DashboardPostTableProps {
  type: "Published" | "Draft" | "Deleted";
}

import DashboardDropdownMenu from "./DashboardDropdownMenu";

export default async function DashboardPostTable({
  type,
}: DashboardPostTableProps) {
  const user = await getCurrentUser();
  const authorId = user.id;
  const posts: Post[] = [];

  if (type === "Published") {
    const getPosts: Post[] = await getAllPublishedPostsOfUser({
      authorId,
    });

    getPosts.forEach((post) => posts.push(post));
  }

  if (type === "Draft") {
    const getPosts: Post[] = await getAllDraftPostsOfUser({
      authorId,
    });

    getPosts.forEach((post) => posts.push(post));
  }

  if (type === "Deleted") {
    const getPosts: Post[] = await getAllDeletedPostsOfUser({
      authorId,
    });

    getPosts.forEach((post) => posts.push(post));
  }

  const deletePost = async (postId: string) => {
    "use server";

    // Perform the actual deletion without client-side dependencies
    const response = await DeletePostOfUser({
      authorId,
      postId,
    });

    // Handle redirection or response handling on the server-side
    if (response.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  };

  const recoveryPost = async (postId: string) => {
    "use server";

    // Perform the actual deletion without client-side dependencies
    const response = await RecoveryPostOfUser({
      authorId,
      postId,
    });

    // Handle redirection or response handling on the server-side
    if (response.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  };

  const makePublishedPost = async (postId: string) => {
    "use server";

    // Perform the actual deletion without client-side dependencies
    const response = await MakePublishedPostOfUser({
      authorId,
      postId,
    });

    // Handle redirection or response handling on the server-side
    if (response.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  };

  return (
    <div className="mt-8 overflow-x-auto">
      <>
        {posts.length > 0 ? (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[450px]">โพสต์</TableHead>
                  <TableHead className="min-w-[80px]">ถูกใจ</TableHead>
                  <TableHead className="min-w-[80px]">แชร์</TableHead>
                  <TableHead className="min-w-[200px]">
                    {type === "Published" && <>วันที่เผยแพร่</>}
                    {type === "Draft" && <>วันที่บันทึกฉบับร่าง</>}
                    {type === "Deleted" && <>วันที่ลบโพสต์</>}
                  </TableHead>
                  {/* <TableHead className="min-w-[200px]">
                    วันที่แก้ไขล่าสุด
                  </TableHead> */}
                  <TableHead className="min-w-[50px] text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => {
                  return (
                    <React.Fragment key={post.id}>
                      <TableRow>
                        <TableCell className="group">
                          <Link href={`/post/${post.slug}`}>
                            <div className="flex items-center">
                              <div className="me-4 size-20 overflow-hidden rounded-md">
                                <Image
                                  src={post.imageUrl}
                                  alt={post.imageAlt}
                                  width={80}
                                  height={80}
                                  className="size-20 rounded-md object-cover transition-all group-hover:scale-105"
                                />
                              </div>
                              <p
                                className="max-w-[350px] truncate overflow-ellipsis font-medium"
                                title={post.title}
                              >
                                {post.title}
                              </p>
                            </div>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <p>{post.likes}</p>
                        </TableCell>
                        <TableCell>
                          <p>{post.shares}</p>
                        </TableCell>
                        <TableCell>
                          <>
                            {type === "Published" && (
                              <p
                                title={
                                  post.publishedDate
                                    ? formatDateTime(post.publishedDate)
                                        .dateTime
                                    : "-"
                                }
                              >
                                {post.publishedDate
                                  ? formatDateTime(post.publishedDate).dateTime
                                  : "-"}
                              </p>
                            )}
                            {type === "Draft" && (
                              <p
                                title={
                                  post.createdAt
                                    ? formatDateTime(post.createdAt).dateTime
                                    : "-"
                                }
                              >
                                {post.createdAt
                                  ? formatDateTime(post.createdAt).dateTime
                                  : "-"}
                              </p>
                            )}
                            {type === "Deleted" && (
                              <p
                                title={
                                  post.deletedAt
                                    ? formatDateTime(post.deletedAt).dateTime
                                    : "-"
                                }
                              >
                                {post.deletedAt
                                  ? formatDateTime(post.deletedAt).dateTime
                                  : "-"}
                              </p>
                            )}
                          </>
                        </TableCell>
                        {/* <TableCell>
                          <p
                            title={
                              post.updatedAt
                                ? formatDateTime(post.updatedAt).dateTime
                                : "-"
                            }
                          >
                            {post.updatedAt
                              ? formatDateTime(post.updatedAt).dateTime
                              : "-"}
                          </p>
                        </TableCell> */}
                        <TableCell>
                          <DashboardDropdownMenu
                            post={post}
                            deletePost={deletePost}
                            recoveryPost={recoveryPost}
                            makePublishedPost={makePublishedPost}
                          />
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </>
        ) : (
          <div className="border py-8">
            <FolderXIcon className="mx-auto size-14" strokeWidth={1} />

            <p className="mt-2 text-center font-semibold">ไม่พบโพสต์</p>
            <p className="mt-2 text-center text-muted-foreground">
              คุณยังไม่มีโพสต์
              {type === "Published" ? "ที่เผยแพร่แล้ว" : "ฉบับร่าง"}{" "}
              กรุณาสร้างโพสต์แล้วลองใหม่อีกครั้ง
            </p>
          </div>
        )}
      </>
    </div>
  );
}

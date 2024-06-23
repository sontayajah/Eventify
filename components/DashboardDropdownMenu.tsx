"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ClipboardCopyIcon,
  EllipsisIcon,
  RocketIcon,
  SquarePenIcon,
  Trash2Icon,
  Undo2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Post } from "@/types";
import { toast } from "react-toastify";

interface DashboardDropdownMenuProps {
  post: Post;
  deletePost: (postId: string) => Promise<{ success: boolean }>;
  recoveryPost: (postId: string) => Promise<{ success: boolean }>;
  makePublishedPost: (postId: string) => Promise<{ success: boolean }>;
}
export default function DashboardDropdownMenu({
  post,
  deletePost,
  recoveryPost,
  makePublishedPost,
}: DashboardDropdownMenuProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="focus-visible:ring-transparent"
          >
            <EllipsisIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="end"
          className="flex w-64 flex-col gap-1"
        >
          <>
            <DropdownMenuItem
              className="px-4 py-2"
              onClick={() => {
                toast.success("คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว");
                navigator.clipboard.writeText(
                  "https://tpopnow.vercel.app/" + post.url,
                );
              }}
            >
              <ClipboardCopyIcon className="mr-2 h-5 w-5" />
              <span className="text-base">คัดลอกลิงก์</span>
            </DropdownMenuItem>
          </>
          {!post.isDeleted && (
            <>
              <DropdownMenuItem className="px-4 py-2">
                <Link
                  href={`/dashboard/posts/edit/${post.id}`}
                  className="flex flex-grow text-base"
                >
                  <SquarePenIcon className="mr-2 h-5 w-5" />
                  <span>แก้ไขโพสต์</span>
                </Link>
              </DropdownMenuItem>
            </>
          )}
          {!post.isPublished && !post.isDeleted && (
            <>
              <DropdownMenuItem
                className="px-4 py-2"
                onClick={async () => {
                  try {
                    // Show pending toast while waiting for the server response
                    const makePublishedPostResponse = await toast.promise(
                      makePublishedPost(post.id), // Calling the server-side function
                      {
                        pending: "กำลังเผยแพร่โพสต์...",
                        success: "เผยแพร่โพสต์สำเร็จ 👌",
                        error: "เผยแพร่โพสต์ไม่สำเร็จ 🤯",
                      },
                    );

                    if (makePublishedPostResponse.success) {
                      location.reload();
                    }
                  } catch (error) {
                    // Handle error case (in case of exception)
                    toast.error("มีข้อผิดพลาดในการเผยแพร่โพสต์ 🤯");
                  }
                }}
              >
                <RocketIcon className="mr-2 h-5 w-5" />
                <span className="text-base">เผยแพร่โพสต์</span>
              </DropdownMenuItem>
            </>
          )}
          {!post.isPublished && post.isDeleted && (
            <>
              <DropdownMenuItem
                className="px-4 py-2"
                onClick={async () => {
                  try {
                    // Show pending toast while waiting for the server response
                    const recoveryPostResponse = await toast.promise(
                      recoveryPost(post.id), // Calling the server-side function
                      {
                        pending: "กำลังกู้คืนโพสต์...",
                        success: "กู้คืนโพสต์สำเร็จ 👌",
                        error: "กู้คืนโพสต์ไม่สำเร็จ 🤯",
                      },
                    );

                    if (recoveryPostResponse.success) {
                      location.reload();
                    }
                  } catch (error) {
                    // Handle error case (in case of exception)
                    toast.error("มีข้อผิดพลาดในการกู้คืนโพสต์ 🤯");
                  }
                }}
              >
                <Undo2Icon className="mr-2 h-5 w-5" />
                <span className="text-base">กู้คืนไปที่ฉบับร่าง</span>
              </DropdownMenuItem>
            </>
          )}
          {!post.isDeleted && (
            <>
              <DropdownMenuItem
                className="px-4 py-2"
                onClick={async () => {
                  try {
                    // Show pending toast while waiting for the server response
                    const createPostResponse = await toast.promise(
                      deletePost(post.id), // Calling the server-side function
                      {
                        pending: "กำลังลบโพสต์...",
                        success: "ลบโพสต์สำเร็จ 👌",
                        error: "ลบโพสต์ไม่สำเร็จ 🤯",
                      },
                    );

                    if (createPostResponse.success) {
                      location.reload();
                    }
                  } catch (error) {
                    // Handle error case (in case of exception)
                    toast.error("มีข้อผิดพลาดในการลบโพสต์ 🤯");
                  }
                }}
              >
                <Trash2Icon className="mr-2 h-5 w-5" />
                <span className="text-base">ลบโพสต์</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

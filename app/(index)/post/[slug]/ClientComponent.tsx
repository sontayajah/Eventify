"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import { CircleAlert, ExternalLink, Heart } from "lucide-react";

import { formatDateTime } from "@/lib/utils";
import { generateHTML } from "@tiptap/html";

import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import EditorLink from "@tiptap/extension-link";
import EditorImage from "@tiptap/extension-image";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

import parse from "html-react-parser";

import "@/styles/editor.css";
import { Category, Post, Tag } from "@/types";

export default function ClientComponent(props: any) {
  const colorVariants: any = {
    slate:
      "bg-slate-50 text-slate-700 ring-slate-600/20 hover:bg-slate-600 hover:text-slate-100",
    zinc: "bg-zinc-50 text-zinc-700 ring-zinc-600/20 hover:bg-zinc-600 hover:text-zinc-100",
    red: "bg-red-50 text-red-700 ring-red-600/20 hover:bg-red-600 hover:text-red-100",
    orange:
      "bg-orange-50 text-orange-700 ring-orange-600/20 hover:bg-orange-600 hover:text-orange-100",
    yellow:
      "bg-yellow-50 text-yellow-700 ring-yellow-600/20 hover:bg-yellow-600 hover:text-yellow-100",
    lime: "bg-lime-50 text-lime-700 ring-lime-600/20 hover:bg-lime-600 hover:text-lime-100",
    green:
      "bg-green-50 text-green-700 ring-green-600/20 hover:bg-green-600 hover:text-green-100",
    sky: "bg-sky-50 text-sky-700 ring-sky-600/20 hover:bg-sky-600 hover:text-sky-100",
    blue: "bg-blue-50 text-blue-700 ring-blue-600/20 hover:bg-blue-600 hover:text-blue-100",
    violet:
      "bg-violet-50 text-violet-700 ring-violet-600/20 hover:bg-violet-600 hover:text-violet-100",
    fuchsia:
      "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-600/20 hover:bg-fuchsia-600 hover:text-fuchsia-100",
    pink: "bg-pink-50 text-pink-700 ring-pink-600/20 hover:bg-pink-600 hover:text-pink-100",
  };

  const postData: Post = props.postData;
  const blogContent = JSON.parse(postData.content);

  const output = useMemo(() => {
    if (blogContent) {
      return generateHTML(blogContent, [
        Color,
        TextStyle,
        StarterKit,
        Underline,
        TextAlign,
        Highlight,
        EditorLink,
        EditorImage,
      ]);
    }
  }, [blogContent]);

  return (
    <main className="m-auto mt-10 px-4 sm:container">
      {postData && (
        <>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" title="หน้าหลัก">
                    หน้าหลัก
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  {/* <Link href="/news" title="ข่าวสาร"> */}
                  <Link href="/" title="ข่าวสาร">
                    ข่าวสาร
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage
                  className="line-clamp-1 max-w-40 select-none lg:max-w-96"
                  title={postData?.title}
                >
                  {postData?.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {!postData.isPublished && !postData.isDeleted && (
            <>
              <div className="my-6 flex items-center gap-x-2 rounded-md bg-yellow-500/15 p-4 text-sm font-semibold text-yellow-500 dark:bg-yellow-500/85 dark:text-white">
                <CircleAlert className="h-4 w-4" />
                หน้านี้เป็นตัวอย่างของโพสต์ฉบับร่าง
                เฉพาะคุณเท่านั้นที่สามารถเห็นหน้านี้ได้
              </div>
            </>
          )}

          {!postData.isPublished && postData.isDeleted && (
            <>
              <div className="my-6 flex items-center gap-x-2 rounded-md bg-red-500/15 p-4 text-sm font-semibold text-red-500 dark:bg-red-500/85 dark:text-white">
                <CircleAlert className="h-4 w-4" />
                โพสต์นี้ถูกลบแล้ว เฉพาะคุณเท่านั้นที่สามารถเห็นหน้านี้ได้
              </div>
            </>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {postData?.categories?.map((category: Category) => {
              return (
                <div key={category.id}>
                  <Link
                    title={category.categoryName}
                    // href={category.categoryUrl}
                    href="/"
                    className={`${colorVariants[category.categoryColor]} rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset transition-colors duration-300`}
                  >
                    {category.categoryName}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-4 w-full">
            <div
              className="mb-2 line-clamp-2 inline-block text-lg font-semibold sm:text-xl md:text-2xl lg:mb-2 lg:text-3xl lg:leading-normal"
              title={postData?.title}
            >
              <span>{postData?.title}</span>
            </div>

            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <Link
                // href={`/@${postData?.author.username}`}
                href="/"
                className="flex items-center text-xs text-neutral-700 group-hover/item:text-black dark:text-neutral-300 dark:hover:text-white"
              >
                {postData?.author.profile?.imageUrl ? (
                  <>
                    <Image
                      src={postData?.author.profile?.imageUrl}
                      alt="profile image"
                      width="40"
                      height="40"
                      className="mr-2 size-10 rounded-full"
                    />
                  </>
                ) : (
                  <>
                    <div className="mr-2 size-10 rounded-full bg-primary"></div>
                  </>
                )}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center">
                    <div className="overflow-hidden truncate whitespace-normal">
                      <span
                        className="line-clamp-1 text-base font-semibold"
                        title={postData?.author.profile?.displayName}
                      >
                        {postData?.author.profile?.displayName}
                      </span>
                    </div>
                    {postData?.author.profile?.isVerified && (
                      <>
                        <Image
                          src={`/images/icons/verify-icons/verify-${postData?.author.profile.verifyType.type}.png`}
                          alt="verify icon"
                          width="16"
                          height="16"
                          className="ml-2"
                        />
                      </>
                    )}
                  </div>
                  <div
                    className="flex min-w-max items-center text-xs leading-none text-muted-foreground transition-colors"
                    title={formatDateTime(postData?.createdAt!).dateTime}
                  >
                    <p>
                      โพสต์เมื่อ {formatDateTime(postData?.createdAt!).dateTime}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex justify-between">
                <div className="flex gap-1">
                  <div className="flex items-center text-xs leading-none transition-colors">
                    <Button
                      variant="ghost"
                      className="rounded-full hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-transparent dark:hover:bg-blue-800 dark:hover:text-blue-100"
                      size="icon"
                      title="แชร์โพสต์"
                    >
                      <ExternalLink
                        size={16}
                        strokeWidth={1.5}
                        className="size-5 rounded-full"
                      />
                    </Button>
                    <span className="ms-2 min-w-[1.125rem] flex-shrink-0 text-start duration-100">
                      {postData?.shares}
                    </span>
                  </div>

                  <div className="flex items-center text-xs leading-none transition-colors">
                    <Button
                      variant="ghost"
                      className="rounded-full hover:bg-red-100 hover:text-red-800 focus-visible:ring-transparent dark:hover:bg-red-800 dark:hover:text-red-100"
                      size="icon"
                      title="ถูกใจ"
                    >
                      <Heart
                        size={16}
                        strokeWidth={1.5}
                        className="size-5 rounded-full"
                      />
                    </Button>
                    <span className="ms-2 min-w-[1.125rem] flex-shrink-0 text-start duration-100">
                      {postData?.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 h-48 overflow-hidden rounded-md sm:h-60 md:mt-6 md:h-72 lg:h-96">
              <Image
                src={postData?.imageUrl!}
                alt="bus7-brother-zone-release-plan"
                width="1280"
                height="720"
                className="h-full w-full object-cover"
                priority={true}
              />
            </div>

            <div className="prose my-10 w-full max-w-full dark:prose-invert lg:prose-lg">
              {output && <>{parse(output)}</>}
            </div>
          </div>
        </>
      )}

      {!postData && <p className="text-center">กำลังโหลด...</p>}
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatDateTime, formatTimeAgo } from "@/lib/utils";
import PostCardContent from "@/components/PostCardContent";
import { Category, Post, Tag } from "@/types";
import { useEffect, useState } from "react";

export default function PostCard({ allPosts }: { allPosts: Post[] }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  return (
    allPosts && (
      <>
        <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 xl:grid-cols-4">
          {allPosts.map((post: Post) => {
            return (
              <div key={post.id}>
                <div className="group flex h-full flex-row-reverse items-center md:block">
                  <div className="z-0 ms-4 block h-40 w-1/3 flex-shrink-0 overflow-hidden rounded-xl object-cover sm:h-60 md:ms-0 md:w-full">
                    <Link href={post.url}>
                      <Image
                        src={post.imageUrl}
                        alt={post.imageAlt}
                        width="1280"
                        height="720"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </Link>
                  </div>
                  <div className="mt-0 flex flex-grow flex-col gap-3 overflow-hidden truncate whitespace-normal md:mt-4">
                    <div className="flex flex-wrap gap-x-1 gap-y-2 py-1.5">
                      {post.categories.length > 0 && (
                        <>
                          {post.categories.map((category: Category) => {
                            return (
                              <div key={category.id} className="flex-shrink-0">
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
                        </>
                      )}
                    </div>

                    <Link href={post.url} className="flex flex-col gap-3">
                      <div
                        className="line-clamp-2 h-10 text-sm font-semibold hover:text-primary sm:h-14 sm:text-lg"
                        title={post.title}
                      >
                        {post.title}
                      </div>

                      <p className="line-clamp-1 text-xs text-muted-foreground sm:line-clamp-2 sm:text-sm">
                        <PostCardContent htmlString={post.content} />
                      </p>
                    </Link>
                    <div className="flex items-center">
                      <Link
                        // href={`/@${post?.author.username}`}
                        href="/"
                        className="flex items-center text-xs text-neutral-700 group-hover/item:text-black dark:text-neutral-300 dark:hover:text-white"
                      >
                        {post?.author.profile?.imageUrl ? (
                          <>
                            <Image
                              src={post?.author.profile?.imageUrl}
                              alt="profile image"
                              width="28"
                              height="28"
                              className="mr-2 size-5 rounded-full sm:size-7"
                            />
                          </>
                        ) : (
                          <>
                            <div className="mr-2 size-5 rounded-full bg-primary sm:size-7"></div>
                          </>
                        )}
                        <div className="overflow-hidden truncate whitespace-normal">
                          <span
                            className="line-clamp-1"
                            title={post?.author.profile?.displayName}
                          >
                            {post?.author.profile?.displayName}
                          </span>
                        </div>
                        {post?.author.profile?.isVerified && (
                          <>
                            <Image
                              src={`/images/icons/verify-icons/verify-${post?.author.profile.verifyType.type}.png`}
                              alt="verify icon"
                              width="16"
                              height="16"
                              className="ml-2"
                            />
                          </>
                        )}
                      </Link>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex gap-2">
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
                            {post.shares}
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
                            {post.likes}
                          </span>
                        </div>
                      </div>

                      <div
                        className="flex min-w-max items-center text-xs leading-none text-muted-foreground transition-colors"
                        title={
                          formatDateTime(new Date(post?.createdAt!)).dateTime
                        }
                      >
                        {isClient && (
                          <p>{formatTimeAgo(new Date(post?.createdAt!))}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  );
}

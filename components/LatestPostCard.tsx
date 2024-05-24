"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function LatestPostCard() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
      <div className="group flex flex-row items-center">
        <div className="z-0 me-3 block h-full w-24 flex-shrink-0 overflow-hidden rounded-3xl sm:mb-0 sm:me-6 sm:w-36 md:w-44 xl:w-56">
          <Link href="/">
            <Image
              src="/youtube-cover/marckris-sarahsalola-live-session.jpg"
              alt="youtube logo"
              width="1280"
              height="720"
              className="h-full w-full rounded-3xl object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        </div>
        <div className="flex h-full flex-grow flex-col gap-3 overflow-hidden truncate whitespace-normal">
          <div className="flex flex-wrap gap-1.5">
            <Link
              href="/"
              className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 transition-colors duration-300 hover:bg-blue-600 hover:text-blue-100"
            >
              BUS 🚌
            </Link>

            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 transition-colors duration-300 hover:bg-red-600 hover:text-red-100"
            >
              Youtube{" "}
              <Image
                src="/logo/yt_icon_rgb.png"
                alt="youtube logo"
                width={16}
                height={16}
                className="ms-1 size-3"
              />
            </Link>
          </div>

          <Link href="/" className="flex flex-col gap-3">
            <div className="line-clamp-2 text-sm font-semibold hover:text-primary sm:text-lg">{`MARCKRIS พาบุกกองถ่าย #sarahsalolaxMARCKRIS Live Session ✨`}</div>

            <div className="hidden sm:block">
              <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
                บรรยากาศในกองเป็นยังไงบ้าง ตามมาดู VLOG นี้กันได้เลย :
                https://youtu.be/jl8BzlE5sfU
                แล้วอย่าลืมไปฟังเพลงจากมาร์คคริสและพี่ซาร่าห์กันด้วยนะครับ🤍
                #sarahsolola #MARCKRIS #BUS_แค่ไหนแค่นั้น #BUSbecauseofyouishine
              </p>
            </div>
          </Link>
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-xs text-neutral-700 group-hover/item:text-black dark:text-neutral-300 dark:hover:text-white"
            >
              <Image
                src="/logo/bus-logo.jpg"
                alt="youtube logo"
                width="28"
                height="28"
                className="mr-2 size-5 rounded-full sm:size-7"
              />
              <div className="overflow-hidden truncate whitespace-normal">
                <span className="line-clamp-1">
                  BUS because of you i shine{" "}
                </span>
              </div>
              <Image
                src="/icons/verify-icons/verify-gold.png"
                alt="verify icon"
                width="16"
                height="16"
                className="ml-1"
              />
            </Link>
            <span className="mx-[6px] font-medium text-neutral-500 dark:text-neutral-400">
              ·
            </span>
            <div className="min-w-max text-xs text-muted-foreground">
              May 16, 2024
            </div>
          </div>

          <div className="flex items-center text-xs leading-none  transition-colors">
            <Button
              variant="ghost"
              className="rounded-full focus-visible:ring-transparent"
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
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

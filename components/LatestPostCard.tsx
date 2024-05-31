"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Bookmark, ExternalLink, Heart } from "lucide-react";
import Link from "next/link";

export default function LatestPostCard() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
      <div className="group flex flex-row items-center">
        <div className="z-0 me-3 block h-[164px] w-24 flex-shrink-0 overflow-hidden rounded-3xl object-cover sm:mb-0 sm:me-6 sm:h-60 sm:w-36 lg:h-60 lg:w-44 xl:size-60">
          <Link href="/news/bus-marckris-sarahsalola-live-session-vlog">
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
              href="/artists/bus"
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

          <Link
            href="/news/bus-marckris-sarahsalola-live-session-vlog"
            className="flex flex-col gap-3"
          >
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
              href="/profiles/bus"
              className="flex items-center text-xs text-neutral-700 group-hover/item:text-black dark:text-neutral-300 dark:hover:text-white"
            >
              <Image
                src="/logo/bus-logo.jpg"
                alt="bus logo"
                width="28"
                height="28"
                className="mr-2 size-5 rounded-full border sm:size-7"
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

          <div className="flex justify-between">
            <div className="flex gap-1">
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

              <div className="flex items-center text-xs leading-none  transition-colors">
                <Button
                  variant="ghost"
                  className="rounded-full focus-visible:ring-transparent"
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
                  0
                </span>
              </div>
            </div>

            <div className="flex items-center text-xs leading-none  transition-colors">
              <Button
                variant="ghost"
                className="rounded-full focus-visible:ring-transparent"
                size="icon"
                title="บันทึก"
              >
                <Bookmark
                  size={16}
                  strokeWidth={1.5}
                  className="size-5 rounded-full"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="group flex flex-row items-center">
        <div className="z-0 me-3 block h-[164px] w-24 flex-shrink-0 overflow-hidden rounded-3xl object-cover sm:mb-0 sm:me-6 sm:h-60 sm:w-36 lg:h-60 lg:w-44 xl:size-60">
          <Link href="/news/gotcha-pop-2-concert">
            <Image
              src="/card-cover/gotchapop2-concert.jpeg"
              alt="gotcha pop 2 concert cover"
              width="1280"
              height="720"
              className="h-full w-full rounded-3xl object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        </div>
        <div className="flex h-full flex-grow flex-col gap-3 overflow-hidden truncate whitespace-normal">
          <div className="flex flex-wrap gap-1.5">
            <Link
              href="/concerts"
              className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 transition-colors duration-300 hover:bg-green-600 hover:text-green-100"
            >
              คอนเสิร์ต 🎤
            </Link>
          </div>

          <Link
            href="/news/gotcha-pop-2-concert"
            className="flex flex-col gap-3"
          >
            <div className="line-clamp-2 text-sm font-semibold hover:text-primary sm:text-lg">{`GOTCHA POP 2 CONCERT`}</div>

            <div className="hidden sm:block">
              <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
                กลับมาส่งความสนุก ความมันส์แบบจัดเต็มกันอีกครั้งกับคอนเสิร์ต
                GOTCHA POP 2 CONCERT
                หลังจากที่เมื่อปีที่ผ่านมาสร้างความประทับใจให้กับผู้เข้าชมคอนเสิร์ตกันเป็นอย่างดีแล้ว
                ในปีนี้ยังเตรียมส่งความสนุกอีกเช่นเคย พร้อมไลน์อัพศิลปิน T-POP
                ชื่อดัง ซึ่งก่อนหน้าที่จะประกาศไลน์อัพครั้งนี้ ทาง ATIMESHOWBIZ
                ก็ได้ออกมาบอกใบ้ ผ่านรูปภาพ และเอกลักษณ์ของวงให้เหล่าแฟนๆ
                ได้ทายกันก่อนที่จะเผยไลน์อัพ ไม่ว่าจะเป็น TRINITY, PRETZELLE,
                PiXXiE, PROXIE, PERSES, LYKN, BUS Because of you i shine, NONT
                TANONT, NuNew
              </p>
            </div>
          </Link>
          <div className="flex items-center">
            <Link
              href="/profiles/atimeshowbiz"
              className="flex items-center text-xs text-neutral-700 group-hover/item:text-black dark:text-neutral-300 dark:hover:text-white"
            >
              <Image
                src="/logo/ATIMESHOWBIZ.jpg"
                alt="ATIMESHOWBIZ logo"
                width="28"
                height="28"
                className="mr-2 size-5 rounded-full border sm:size-7"
              />
              <div className="overflow-hidden truncate whitespace-normal">
                <span className="line-clamp-1">ATIMESHOWBIZ</span>
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

          <div className="flex justify-between">
            <div className="flex gap-1">
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

              <div className="flex items-center text-xs leading-none  transition-colors">
                <Button
                  variant="ghost"
                  className="rounded-full focus-visible:ring-transparent"
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
                  0
                </span>
              </div>
            </div>

            <div className="flex items-center text-xs leading-none  transition-colors">
              <Button
                variant="ghost"
                className="rounded-full focus-visible:ring-transparent"
                size="icon"
                title="บันทึก"
              >
                <Bookmark
                  size={16}
                  strokeWidth={1.5}
                  className="size-5 rounded-full"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

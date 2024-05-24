"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { ChevronsRight } from "lucide-react";

export default function LatestPosts() {
  return (
    <div className="w-full select-none border-b py-8 lg:border-none lg:py-12">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 lg:text-3xl">
            ประกาศล่าสุด
          </h2>
          {/* <Image
            src="/logo/twitter/logo-black.png"
            alt="youtube logo"
            width="1280"
            height="720"
            className="block h-3 w-3 dark:hidden lg:h-4 lg:w-4"
          />
          <Image
            src="/logo/twitter/logo-white.png"
            alt="youtube logo"
            width="1280"
            height="720"
            className="hidden h-3 w-3 dark:block lg:h-4 lg:w-4"
          />
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 lg:text-3xl">
            ทางการ
          </h2> */}
        </div>

        <div className="text-base text-muted-foreground lg:mt-1 lg:text-lg">
          ข่าวสาร กิจกรรม และบทความต่าง ๆ
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2">
        <div className="flex flex-row items-center">
          <div className="flex h-full flex-grow flex-col bg-red-200">
            Card 1
          </div>

          <div className="ms-3 w-24 overflow-hidden rounded-3xl sm:ms-6 sm:w-36 md:w-44 xl:w-56">
            <Image
              src="/youtube-cover/bus-nmtw.webp"
              alt="youtube logo"
              width="1280"
              height="720"
              className="h-24 w-full rounded-3xl object-cover transition-transform duration-500 hover:scale-110 lg:h-56"
            />
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground ring-1">
          <div className="flex flex-row items-center space-y-1.5 p-6">
            Card 2
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end">
        <Button
          variant="link"
          className="h-min w-fit px-0 py-0 hover:text-primary/90 hover:no-underline dark:text-primary"
          onClick={() => {
            window.open("http://localhost:3000/LatestPosts", "_blank");
          }}
        >
          ดูเพิ่มเติม <ChevronsRight size={16} className="ml-0.5" />
        </Button>
      </div>
    </div>
  );
}

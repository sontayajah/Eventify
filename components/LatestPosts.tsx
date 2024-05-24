"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ChevronsRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import LatestPostCard from "./LatestPostCard";

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
            className="block size-3 dark:hidden lg:size-4"
          />
          <Image
            src="/logo/twitter/logo-white.png"
            alt="youtube logo"
            width="1280"
            height="720"
            className="hidden size-3 dark:block lg:size-4"
          />
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 lg:text-3xl">
            ทางการ
          </h2> */}
        </div>

        <div className="text-base text-muted-foreground lg:mt-1 lg:text-lg">
          ข่าวสาร กิจกรรม และบทความต่าง ๆ
        </div>
      </div>

      <LatestPostCard />

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

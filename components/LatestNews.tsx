"use client";

import { Button } from "@/components/ui/button";

import { ChevronsRight } from "lucide-react";
import LatestNewsCard from "./LatestNewsCard";

export default function LatestNews() {
  return (
    <div className="w-full select-none border-b pb-8 pt-8 lg:border-none lg:pb-0 lg:pt-12">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 lg:text-3xl">
            ข่าวสารล่าสุด
          </h2>
        </div>

        <div className="text-base text-muted-foreground lg:mt-1 lg:text-lg">
          อัพเดทข่าวสารเกี่ยวกับวงการ T-Pop
          ติดตามทุกความเคลื่อนไหวของศิลปินที่คุณชื่นชอบ
        </div>
      </div>

      <LatestNewsCard />

      <div className="mt-4 flex items-center justify-end">
        <Button
          variant="link"
          className="h-min w-fit px-0 py-0 hover:text-primary/90 hover:no-underline dark:text-primary"
          onClick={() => {
            window.open("/news", "_blank");
          }}
        >
          ดูเพิ่มเติม <ChevronsRight size={16} className="ml-0.5" />
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";

import { ChevronsRight } from "lucide-react";
import FanCommunityCard from "./FanCommunityCard";

export default function FanCommunity() {
  return (
    <div className="w-full select-none border-b pb-8 pt-8 lg:border-none lg:pt-12">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 lg:text-3xl">
            ชุมชนแฟนคลับ
          </h2>
        </div>

        <div className="text-base text-muted-foreground lg:mt-1 lg:text-lg">
          แหล่งรวมการสนทนาและการจัดกิจกรรมของแฟนคลับ แลกเปลี่ยนความคิดเห็น
          แบ่งปันประสบการณ์กับแฟนคลับคนอื่น ๆ
        </div>
      </div>

      <FanCommunityCard />

      <div className="mt-4 flex items-center justify-end">
        <Button
          variant="link"
          className="h-min w-fit px-0 py-0 hover:text-primary/90 hover:no-underline dark:text-primary"
          onClick={() => {
            window.open("/community", "_blank");
          }}
        >
          ดูเพิ่มเติม <ChevronsRight size={16} className="ml-0.5" />
        </Button>
      </div>
    </div>
  );
}

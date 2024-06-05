import React, { Dispatch, SetStateAction } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import { X } from "lucide-react";

interface HamburgerMenuType {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HamburgerMenu({
  navOpen,
  setNavOpen,
}: HamburgerMenuType) {
  return (
    <div
      className={`fixed inset-y-0 start-0 z-50 flex flex-col ${!navOpen ? "-translate-x-full" : ""} w-screen max-w-sm bg-background transition-all`}
    >
      <div className="flex w-full items-center justify-between gap-2 px-8 py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="mt-0.5 text-xl font-bold tracking-tight">
            T-Pop Now
          </span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full focus-visible:ring-transparent"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <X size={16} strokeWidth={1.5} />
        </Button>
      </div>

      <div className="px-8">
        <p className="text-sm text-muted-foreground">
          แหล่งรวบรวมข่าวสารและข้อมูลในวงการ T-Pop ที่ครบถ้วนที่สุด!
          ติดตามศิลปินที่คุณชื่นชอบและความเคลื่อนไหวที่ไม่ควรพลาดได้ที่นี่
        </p>
      </div>

      <div className="mb-2 mt-4 px-4">
        <Separator />
      </div>

      <div className="flex h-full flex-col justify-between overflow-y-auto px-4">
        <Accordion type="multiple" className="w-full" defaultValue={["item-2"]}>
          <AccordionItem value="item-1">
            <AccordionTrigger className="chevronDownDisable rounded-md px-4 py-2 hover:bg-muted hover:no-underline">
              ข่าวสาร
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="mt-1 rounded-md px-4 py-2 hover:bg-muted hover:no-underline">
              ศิลปิน
            </AccordionTrigger>
            <div className="relative">
              <AccordionContent className="pb-0 ps-8 pt-0">
                {/* <div className="absolute bottom-2 start-4 top-1 border-s-2 border-neutral-100 dark:border-neutral-700"></div> */}
                <Separator
                  orientation="vertical"
                  className="absolute bottom-0 start-4 h-full"
                />
                <AccordionItem value="item-2-1">
                  <AccordionTrigger className="mt-1 rounded-md px-4 py-2 hover:bg-muted hover:no-underline">
                    เดี่ยว
                  </AccordionTrigger>
                  <div className="relative">
                    <AccordionContent className="pb-0 ps-8 pt-0">
                      <Separator
                        orientation="vertical"
                        className="absolute bottom-0 start-4 h-full"
                      />
                      <Button
                        className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                        variant="ghost"
                        onClick={() => setNavOpen((prev) => !prev)}
                      >
                        ชาย
                      </Button>
                      <Button
                        className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                        variant="ghost"
                        onClick={() => setNavOpen((prev) => !prev)}
                      >
                        หญิง
                      </Button>
                    </AccordionContent>
                  </div>
                </AccordionItem>
                <AccordionItem value="item-2-2">
                  <AccordionTrigger className="mt-1 rounded-md px-4 py-2 hover:bg-muted hover:no-underline">
                    คู่และกลุ่ม
                  </AccordionTrigger>
                  <div className="relative">
                    <AccordionContent className="pb-0 ps-8 pt-0">
                      <Separator
                        orientation="vertical"
                        className="absolute bottom-0 start-4 h-full"
                      />

                      <Button
                        className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                        variant="ghost"
                        onClick={() => setNavOpen((prev) => !prev)}
                      >
                        ชาย
                      </Button>
                      <Button
                        className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                        variant="ghost"
                        onClick={() => setNavOpen((prev) => !prev)}
                      >
                        หญิง
                      </Button>
                      <Button
                        className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                        variant="ghost"
                        onClick={() => setNavOpen((prev) => !prev)}
                      >
                        ผสม
                      </Button>
                    </AccordionContent>
                  </div>
                </AccordionItem>

                <Button
                  className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                  variant="ghost"
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  วงดนตรี
                </Button>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="mt-1 rounded-md px-4 py-2 hover:bg-muted hover:no-underline">
              ผลงาน
            </AccordionTrigger>
            <div className="relative">
              <AccordionContent className="pb-0 ps-8 pt-0">
                {/* <div className="absolute bottom-2 start-4 top-1 border-s-2 border-neutral-100 dark:border-neutral-700"></div> */}
                <Separator
                  orientation="vertical"
                  className="absolute bottom-0 start-4 h-full"
                />
                <Button
                  className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                  variant="ghost"
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  เพลง
                </Button>
                <Button
                  className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                  variant="ghost"
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  วิดีโอ
                </Button>
                <Button
                  className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                  variant="ghost"
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  รูปภาพ
                </Button>
                <Button
                  className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                  variant="ghost"
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  รายการโทรทัศน์/ออนไลน์
                </Button>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="mt-1 rounded-md px-4 py-2 hover:bg-muted hover:no-underline">
              กิจกรรม
            </AccordionTrigger>
            <div className="relative">
              <AccordionContent className="pb-0 ps-8 pt-0">
                {/* <div className="absolute bottom-2 start-4 top-1 border-s-2 border-neutral-100 dark:border-neutral-700"></div> */}
                <Separator
                  orientation="vertical"
                  className="absolute bottom-0 start-4 h-full"
                />
                <Button
                  className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                  variant="ghost"
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  งานอีเวนต์
                </Button>
                <Button
                  className="mt-0.5 block w-full text-left focus-visible:ring-transparent"
                  variant="ghost"
                  onClick={() => setNavOpen((prev) => !prev)}
                >
                  คอนเสิร์ต
                </Button>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="chevronDownDisable mt-0.5 rounded-md px-4 py-2 hover:bg-muted hover:no-underline">
              ชุมชนแฟนคลับ
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="chevronDownDisable mt-0.5 rounded-md px-4 py-2 hover:bg-muted hover:no-underline">
              ปฏิทิน
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>

        <div className="sticky bottom-0 mt-4 flex flex-col gap-1 border-t bg-background py-5">
          <Button className="w-full">เข้าสู่ระบบ</Button>
          <Button className="w-full" variant="ghost">
            สมัครสมาชิก
          </Button>
        </div>
      </div>
    </div>
  );
}

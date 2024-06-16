"use client";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FolderOpen, UserIcon, X } from "lucide-react";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";
import { AccordionHeader } from "@radix-ui/react-accordion";

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div
        style={{ scrollbarWidth: "none" }}
        className="flex grow flex-col gap-y-5 overflow-y-auto border-e bg-background px-6 pb-4"
      >
        <div className="flex w-full items-center justify-between gap-2 pt-5">
          <Link href="/" className="flex items-center gap-2">
            <span className="mt-0.5 text-xl font-bold tracking-tight">
              T-Pop Now
            </span>
          </Link>
        </div>

        <div
          className="flex h-full flex-col justify-between overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={["item-1", "item-2"]}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="mt-1 rounded-md px-4 py-2 hover:bg-muted hover:no-underline">
                <div className="flex items-center">
                  <FolderOpen className="mr-3 size-5" /> <span>โพสต์</span>
                </div>
              </AccordionTrigger>
              <div className="relative">
                <AccordionContent className="pb-0 ps-8 pt-0">
                  {/* <div className="absolute bottom-2 start-4 top-1 border-s-2 border-neutral-100 dark:border-neutral-700"></div> */}
                  <Separator
                    orientation="vertical"
                    className="absolute bottom-0 start-4 h-full"
                  />
                  <AccordionItem value="item-1-2">
                    <Button
                      asChild
                      variant="ghost"
                      className={`chevronDownDisable mt-0.5 rounded-md px-4 py-2 hover:bg-muted hover:no-underline ${pathname === "/dashboard/posts/published" ? " bg-muted" : ""} flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180`}
                    >
                      <Link
                        href="/dashboard/posts/published"
                        className="w-full text-left"
                      >
                        โพสต์ที่เผยแพร่แล้ว
                      </Link>
                    </Button>
                  </AccordionItem>
                  <AccordionItem value="item-1-2">
                    <Button
                      asChild
                      variant="ghost"
                      className={`chevronDownDisable mt-0.5 rounded-md px-4 py-2 hover:bg-muted hover:no-underline ${pathname === "/dashboard/posts/pending" ? " bg-muted" : ""} flex flex-1 justify-between py-4 font-medium`}
                    >
                      <Link
                        href="/dashboard/posts/pending"
                        className="w-full text-left"
                      >
                        โพสต์ที่รอตรวจสอบ
                      </Link>
                    </Button>
                  </AccordionItem>
                  <AccordionItem value="item-1-3">
                    <Button
                      asChild
                      variant="ghost"
                      className={`chevronDownDisable mt-0.5 rounded-md px-4 py-2 hover:bg-muted hover:no-underline ${pathname === "/dashboard/posts/draft" ? " bg-muted" : ""} flex flex-1 justify-between py-4 font-medium`}
                    >
                      <Link
                        href="/dashboard/posts/draft"
                        className="w-full text-left"
                      >
                        โพสต์ฉบับร่าง
                      </Link>
                    </Button>
                  </AccordionItem>
                  <AccordionItem value="item-1-4">
                    <Button
                      asChild
                      variant="ghost"
                      className={`chevronDownDisable mt-0.5 rounded-md px-4 py-2 hover:bg-muted hover:no-underline ${pathname === "/dashboard/posts/deleted" ? " bg-muted" : ""} flex flex-1 justify-between py-4 font-medium`}
                    >
                      <Link
                        href="/dashboard/posts/deleted"
                        className="w-full text-left"
                      >
                        โพสต์ที่ถูกลบ
                      </Link>
                    </Button>
                  </AccordionItem>
                </AccordionContent>
              </div>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="mt-1 rounded-md px-4 py-2 hover:bg-muted hover:no-underline">
                <div className="flex items-center">
                  <UserIcon className="mr-3 size-5" /> <span>บัญชีผู้ใช้</span>
                </div>
              </AccordionTrigger>
              <div className="relative">
                <AccordionContent className="pb-0 ps-8 pt-0">
                  {/* <div className="absolute bottom-2 start-4 top-1 border-s-2 border-neutral-100 dark:border-neutral-700"></div> */}
                  <Separator
                    orientation="vertical"
                    className="absolute bottom-0 start-4 h-full"
                  />
                  <AccordionItem value="item-2-1">
                    <Button
                      asChild
                      variant="ghost"
                      className={`chevronDownDisable mt-0.5 rounded-md px-4 py-2 hover:bg-muted hover:no-underline ${pathname === "/dashboard/edit/profile" ? " bg-muted" : ""} flex flex-1 justify-between py-4 font-medium`}
                    >
                      <Link
                        href="/dashboard/edit/profile"
                        className="w-full text-left"
                      >
                        แก้ไขโปรไฟล์
                      </Link>
                    </Button>
                  </AccordionItem>
                  <AccordionItem value="item-2-2">
                    <Button
                      asChild
                      variant="ghost"
                      className={`chevronDownDisable mt-0.5 rounded-md px-4 py-2 hover:bg-muted hover:no-underline ${pathname === "/dashboard/edit/account" ? " bg-muted" : ""} flex flex-1 justify-between py-4 font-medium`}
                    >
                      <Link
                        href="/dashboard/edit/account"
                        className="w-full text-left"
                      >
                        ข้อมูลบัญชี
                      </Link>
                    </Button>
                  </AccordionItem>
                  <AccordionItem value="item-2-3">
                    <Button
                      asChild
                      variant="ghost"
                      className={`chevronDownDisable mt-0.5 rounded-md px-4 py-2 hover:bg-muted hover:no-underline ${pathname === "/dashboard/edit/password" ? " bg-muted" : ""} flex flex-1 justify-between py-4 font-medium`}
                    >
                      <Link
                        href="/dashboard/edit/password"
                        className="w-full text-left"
                      >
                        เปลี่ยนรหัสผ่าน
                      </Link>
                    </Button>
                  </AccordionItem>
                  <AccordionItem value="item-2-4">
                    <Button
                      asChild
                      variant="ghost"
                      className={`chevronDownDisable mt-0.5 rounded-md px-4 py-2 hover:bg-muted hover:no-underline ${pathname === "/dashboard/edit/account-deleted" ? " bg-muted" : ""} flex flex-1 justify-between py-4 font-medium`}
                    >
                      <Link
                        href="/dashboard/edit/account-deleted"
                        className="w-full text-left"
                      >
                        ลบบัญชี
                      </Link>
                    </Button>
                  </AccordionItem>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>

          {/* {!user && (
          <>
            <div className="sticky bottom-0 mt-4 flex flex-col gap-1 border-t bg-background py-5">
              <Button className="w-full">เข้าสู่ระบบ</Button>
              <Button className="w-full" variant="ghost">
                สมัครสมาชิก
              </Button>
            </div>
          </>
        )} */}
        </div>
      </div>
    </div>
  );
}

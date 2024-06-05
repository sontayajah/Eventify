"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

// Icons
import { FileImage, Music, PartyPopper, Ticket, Tv, Video } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

export default function IndexNavbarArtistsMenu() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/news" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-inherit text-sm font-semibold hover:bg-inherit hover:text-primary focus:bg-inherit focus:text-primary focus:outline-none",
              )}
            >
              ข่าวสาร
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit text-sm font-semibold hover:bg-inherit hover:text-primary">
            ศิลปิน
          </NavigationMenuTrigger>
          <NavigationMenuContent className="max-h-[75vh] overflow-auto">
            <ul className="grid-4 grid p-3 lg:w-[500px] lg:grid-cols-[1fr]">
              <li>
                <div className="px-3 pb-1 pt-3">
                  <p className="block select-none rounded-md font-bold">
                    ศิลปินเดี่ยว
                  </p>
                  <p className="line-clamp-2 select-none text-sm leading-snug text-muted-foreground">
                    ศิลปินที่ทำงานเพลงหรือแสดงเดี่ยว
                    โดยมีผลงานและกิจกรรมในนามของตัวเอง
                  </p>
                </div>
                <ul className="grid-3 grid gap-2 lg:grid-cols-[1fr_1fr_1fr]">
                  <li>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/artists/soloist/male"
                    >
                      <Image
                        src={"/artists/jeffsatur.png"}
                        alt="artist jeff satur image"
                        width="1280"
                        height="720"
                        className="w-full rounded-md object-cover"
                      />
                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        ชาย
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/artists/soloist/female"
                    >
                      <Image
                        src={"/artists/milli.png"}
                        alt="artist milli image"
                        width="1280"
                        height="720"
                        className="w-full rounded-md object-cover"
                      />
                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        หญิง
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

              <Separator className="my-2" />

              <li>
                <div className="px-3 pb-1 pt-3">
                  <p className="block select-none rounded-md font-bold">
                    ศิลปินคู่และกลุ่ม
                  </p>
                  <p className="line-clamp-2 select-none text-sm leading-snug text-muted-foreground">
                    ศิลปินที่ทำงานร่วมกันเป็นกลุ่ม โดยมีสมาชิกตั้งแต่ 2-3
                    คนขึ้นไป โดยมีผลงานเพลงและกิจกรรมร่วมกันในนามของวง
                  </p>
                </div>
                <ul className="grid-3 grid gap-2 lg:grid-cols-[1fr_1fr_1fr]">
                  <li>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/artists/groups/male"
                    >
                      <Image
                        src={"/artists/bus.png"}
                        alt="artist bus image"
                        width="1280"
                        height="720"
                        className="w-full rounded-md object-cover"
                      />
                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        ชาย
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/artists/groups/female"
                    >
                      <Image
                        src={"/artists/4eve.png"}
                        alt="artist 4eve image"
                        width="1280"
                        height="720"
                        className="w-full rounded-md object-cover"
                      />
                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        หญิง
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/artists/groups/co-ed"
                    >
                      <Image
                        src={"/artists/bamm.png"}
                        alt="artist bamm image"
                        width="1280"
                        height="720"
                        className="w-full rounded-md object-cover"
                      />
                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        ผสม
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

              <Separator className="my-2" />

              <li>
                <div className="px-3 pb-1 pt-3">
                  <p className="block select-none rounded-md font-bold">
                    วงดนตรี
                  </p>
                  <p className="line-clamp-2 select-none text-sm leading-snug text-muted-foreground">
                    กลุ่มของศิลปินที่ประกอบไปด้วยสมาชิกที่เล่นเครื่องดนตรีและร้องเพลง
                    ทั้งวงดนตรีชาย วงดนตรีหญิง หรือวงดนตรีผสม
                  </p>
                </div>
                <ul className="grid gap-2 lg:grid-cols-[1fr_1fr_1fr]">
                  <li>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/artists/bands"
                    >
                      <div className="flex w-full gap-8">
                        <Image
                          src={"/artists/threemandown.png"}
                          alt="artist three man down image"
                          width="1280"
                          height="720"
                          className="h-[72px] w-[129px] rounded-md object-cover"
                        />
                      </div>

                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        วงดนตรี
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit text-sm font-semibold hover:bg-inherit hover:text-primary">
            ผลงาน
          </NavigationMenuTrigger>
          <NavigationMenuContent className="max-h-[75vh] overflow-auto">
            <ul className="grid p-3 lg:w-[500px] lg:grid-cols-[1fr]">
              <li>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/events"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <Music width={16} height={16} />
                    เพลง
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    ผลงานดนตรีของศิลปิน เช่น ซิงเกิ้ล อัลบั้ม
                    หรือเพลงประกอบซีรีส์และภาพยนตร์
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/concerts"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <Video width={16} height={16} />
                    วิดีโอ
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    คลิปวิดีโอต่าง ๆ ของศิลปิน เช่น มิวสิกวิดีโอ,
                    วิดีโอเบื้องหลังการถ่ายทำ, ไลฟ์, Vlog, Live Session
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/concerts"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <FileImage width={16} height={16} />
                    รูปภาพ
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    ภาพถ่ายต่าง ๆ ของศิลปิน เช่น ภาพจากการถ่ายแบบ
                    ภาพจากกิจกรรมต่าง ๆ หรือคอนเสิร์ตของศิลปิน
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/concerts"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <Tv width={16} height={16} />
                    รายการโทรทัศน์/ออนไลน์
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    รายการที่ศิลปินเข้าร่วม ไม่ว่าจะเป็นรายการวาไรตี้,
                    ทอล์คโชว์, ซีรีส์, หรือการแสดงผ่านรายการเพลง
                  </p>
                </a>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit text-sm font-semibold hover:bg-inherit hover:text-primary">
            กิจกรรม
          </NavigationMenuTrigger>
          <NavigationMenuContent className="max-h-[75vh] overflow-auto">
            <ul className="grid-2 grid p-3 lg:w-[500px] lg:grid-cols-[1fr]">
              <li>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/events"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <PartyPopper width={16} height={16} />
                    งานอีเวนต์
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    กิจกรรมอย่างเป็นทางการจากค่ายต้นสังกัดของศิลปิน
                    หรือแบรนด์ต่าง ๆ ที่มีศิลปินเข้าร่วมงาน
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/concerts"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <Ticket width={16} height={16} />
                    คอนเสิร์ต
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    การแสดงสดของศิลปิน ทั้งมินิคอนเสิร์ต คอนเสิร์ตเดี่ยว
                    คอนเสิร์ตรวมศิลปิน หรือการแสดงสดในเทศกาลพิเศษต่าง ๆ
                  </p>
                </a>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/community" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-inherit text-sm font-semibold hover:bg-inherit hover:text-primary focus:bg-inherit focus:text-primary focus:outline-none",
              )}
            >
              ชุมชนแฟนคลับ
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/calender" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-inherit text-sm font-semibold hover:bg-inherit hover:text-primary focus:bg-inherit focus:text-primary focus:outline-none",
              )}
            >
              ปฏิทิน
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

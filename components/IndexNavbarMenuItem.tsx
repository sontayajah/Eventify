"use client";

// External libraries
import React from "react"; // React
import Link from "next/link"; // Next.js link component
import Image from "next/image"; // Next.js image component

// Project UI components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"; // Navigation menu components
import { Separator } from "@/components/ui/separator"; // Separator component

// Icons
import { FileImage, Music, PartyPopper, Ticket, Tv, Video } from "lucide-react"; // Icons

// Utils
import { cn } from "@/lib/utils"; // Utility function
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"; // Navigation menu trigger style

export default function IndexNavbarArtistsMenu() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* <Link href="/news" legacyBehavior passHref> */}
          <Link href="/" legacyBehavior passHref>
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
                  <p
                    className="line-clamp-2 select-none text-sm leading-snug text-muted-foreground"
                    title="ศิลปินที่ทำงานเพลงหรือแสดงเดี่ยว โดยมีผลงานและกิจกรรมในนามของตัวเอง"
                  >
                    ศิลปินที่ทำงานเพลงหรือแสดงเดี่ยว
                    โดยมีผลงานและกิจกรรมในนามของตัวเอง
                  </p>
                </div>
                <ul className="grid-3 grid gap-2 lg:grid-cols-[1fr_1fr_1fr]">
                  <li>
                    <Link
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      // href="/artists/soloist/male"
                      href="/"
                    >
                      <Image
                        src={"/images/artists/jeffsatur.png"}
                        alt="artist jeff satur image"
                        width="1280"
                        height="720"
                        className="w-full rounded-md object-cover"
                      />
                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        ชาย
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      // href="/artists/soloist/female"
                      href="/"
                    >
                      <Image
                        src={"/images/artists/milli.png"}
                        alt="artist milli image"
                        width="1280"
                        height="720"
                        className="w-full rounded-md object-cover"
                      />
                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        หญิง
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>

              <Separator className="my-2" />

              <li>
                <div className="px-3 pb-1 pt-3">
                  <p className="block select-none rounded-md font-bold">
                    ศิลปินคู่และกลุ่ม
                  </p>
                  <p
                    className="line-clamp-2 select-none text-sm leading-snug text-muted-foreground"
                    title="ศิลปินที่ทำงานร่วมกันเป็นกลุ่ม โดยมีสมาชิกตั้งแต่ 2-3 คนขึ้นไป โดยมีผลงานเพลงและกิจกรรมร่วมกันในนามของวง"
                  >
                    ศิลปินที่ทำงานร่วมกันเป็นกลุ่ม โดยมีสมาชิกตั้งแต่ 2-3
                    คนขึ้นไป โดยมีผลงานเพลงและกิจกรรมร่วมกันในนามของวง
                  </p>
                </div>
                <ul className="grid-3 grid gap-2 lg:grid-cols-[1fr_1fr_1fr]">
                  <li>
                    <Link
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      // href="/artists/groups/male"
                      href="/"
                    >
                      <Image
                        src={"/images/artists/bus.png"}
                        alt="artist bus image"
                        width="1280"
                        height="720"
                        className="w-full rounded-md object-cover"
                      />
                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        ชาย
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      // href="/artists/groups/female"
                      href="/"
                    >
                      <Image
                        src={"/images/artists/4eve.png"}
                        alt="artist 4eve image"
                        width="1280"
                        height="720"
                        className="w-full rounded-md object-cover"
                      />
                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        หญิง
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      // href="/artists/groups/co-ed"
                      href="/"
                    >
                      <Image
                        src={"/images/artists/bamm.png"}
                        alt="artist bamm image"
                        width="1280"
                        height="720"
                        className="w-full rounded-md object-cover"
                      />
                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        ผสม
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>

              <Separator className="my-2" />

              <li>
                <div className="px-3 pb-1 pt-3">
                  <p className="block select-none rounded-md font-bold">
                    วงดนตรี
                  </p>
                  <p
                    className="line-clamp-2 select-none text-sm leading-snug text-muted-foreground"
                    title="กลุ่มของศิลปินที่ประกอบไปด้วยสมาชิกที่เล่นเครื่องดนตรีและร้องเพลง ทั้งวงดนตรีชาย วงดนตรีหญิง หรือวงดนตรีผสม"
                  >
                    กลุ่มของศิลปินที่ประกอบไปด้วยสมาชิกที่เล่นเครื่องดนตรีและร้องเพลง
                    ทั้งวงดนตรีชาย วงดนตรีหญิง หรือวงดนตรีผสม
                  </p>
                </div>
                <ul className="grid gap-2 lg:grid-cols-[1fr_1fr_1fr]">
                  <li>
                    <Link
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      // href="/artists/bands"
                      href="/"
                    >
                      <div className="flex w-full gap-8">
                        <Image
                          src={"/images/artists/threemandown.png"}
                          alt="artist three man down image"
                          width="1280"
                          height="720"
                          className="h-[72px] w-[129px] rounded-md object-cover"
                        />
                      </div>

                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold leading-none">
                        วงดนตรี
                      </div>
                    </Link>
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
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  // href="/events"
                  href="/"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <Music width={16} height={16} />
                    เพลง
                  </div>
                  <p
                    className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    title="ผลงานดนตรีของศิลปิน เช่น ซิงเกิ้ล อัลบั้ม หรือเพลงประกอบซีรีส์และภาพยนตร์"
                  >
                    ผลงานดนตรีของศิลปิน เช่น ซิงเกิ้ล อัลบั้ม
                    หรือเพลงประกอบซีรีส์และภาพยนตร์
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  // href="/concerts"
                  href="/"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <Video width={16} height={16} />
                    วิดีโอ
                  </div>
                  <p
                    className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    title="คลิปวิดีโอต่าง ๆ ของศิลปิน เช่น มิวสิกวิดีโอ, วิดีโอเบื้องหลังการถ่ายทำ, ไลฟ์, Vlog, Live Session"
                  >
                    คลิปวิดีโอต่าง ๆ ของศิลปิน เช่น มิวสิกวิดีโอ,
                    วิดีโอเบื้องหลังการถ่ายทำ, ไลฟ์, Vlog, Live Session
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  // href="/concerts"
                  href="/"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <FileImage width={16} height={16} />
                    รูปภาพ
                  </div>
                  <p
                    className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    title="ภาพถ่ายต่าง ๆ ของศิลปิน เช่น ภาพจากการถ่ายแบบ ภาพจากกิจกรรมต่าง ๆ หรือคอนเสิร์ตของศิลปิน"
                  >
                    ภาพถ่ายต่าง ๆ ของศิลปิน เช่น ภาพจากการถ่ายแบบ
                    ภาพจากกิจกรรมต่าง ๆ หรือคอนเสิร์ตของศิลปิน
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  // href="/concerts"
                  href="/"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <Tv width={16} height={16} />
                    รายการโทรทัศน์/ออนไลน์
                  </div>
                  <p
                    className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    title="รายการที่ศิลปินเข้าร่วม ไม่ว่าจะเป็นรายการวาไรตี้, ทอล์คโชว์, ซีรีส์, หรือการแสดงผ่านรายการเพลง"
                  >
                    รายการที่ศิลปินเข้าร่วม ไม่ว่าจะเป็นรายการวาไรตี้,
                    ทอล์คโชว์, ซีรีส์, หรือการแสดงผ่านรายการเพลง
                  </p>
                </Link>
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
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/"
                  // href="/events"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <PartyPopper width={16} height={16} />
                    งานอีเวนต์
                  </div>
                  <p
                    className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    title="กิจกรรมอย่างเป็นทางการจากค่ายต้นสังกัดของศิลปิน หรือแบรนด์ต่าง ๆ ที่มีศิลปินเข้าร่วมงาน"
                  >
                    กิจกรรมอย่างเป็นทางการจากค่ายต้นสังกัดของศิลปิน
                    หรือแบรนด์ต่าง ๆ ที่มีศิลปินเข้าร่วมงาน
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  // href="/concerts"
                  href="/"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold leading-none">
                    <Ticket width={16} height={16} />
                    คอนเสิร์ต
                  </div>
                  <p
                    className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    title="การแสดงสดของศิลปิน ทั้งมินิคอนเสิร์ต คอนเสิร์ตเดี่ยว คอนเสิร์ตรวมศิลปิน หรือการแสดงสดในเทศกาลพิเศษต่าง ๆ"
                  >
                    การแสดงสดของศิลปิน ทั้งมินิคอนเสิร์ต คอนเสิร์ตเดี่ยว
                    คอนเสิร์ตรวมศิลปิน หรือการแสดงสดในเทศกาลพิเศษต่าง ๆ
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/community" legacyBehavior passHref> */}
          <Link href="/" legacyBehavior passHref>
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
          {/* <Link href="/calender" legacyBehavior passHref> */}
          <Link href="/" legacyBehavior passHref>
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

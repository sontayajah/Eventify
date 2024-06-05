"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { ExternalLink, Heart } from "lucide-react";
import Link from "next/link";

export default function FanCommunityCard() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 xl:grid-cols-4">
      {/* Card 1 */}
      <div className="group flex flex-row-reverse md:block">
        <div className="z-0 ms-4 block h-40 w-1/3 flex-shrink-0 overflow-hidden rounded-xl object-cover sm:h-60 md:ms-0 md:w-full">
          <Link href="/community/siam-square-t-pop-random-dance">
            <Image
              src={"/card-cover/siam-square-block-i.jpg"}
              alt="siam-square-block-i"
              width="1280"
              height="720"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        </div>
        <div className="mt-0 flex flex-grow flex-col gap-3 overflow-hidden truncate whitespace-normal md:mt-4">
          <div className="flex flex-wrap gap-1.5">
            <Link
              href="/community/events"
              className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20 transition-colors duration-300 hover:bg-purple-600 hover:text-purple-100"
            >
              กิจกรรมแฟนคลับ
            </Link>
          </div>

          <Link
            href="/community/siam-square-t-pop-random-dance"
            className="flex flex-col gap-3"
          >
            <div className="line-clamp-2 text-sm font-semibold hover:text-primary sm:text-lg md:min-h-14">
              กิจกรรม T-Pop Random Dance Party ที่ Siam Square
            </div>

            <div className="hidden sm:block">
              <p className="line-clamp-3 text-xs text-muted-foreground sm:text-sm">
                เตรียมพบกับความสนุกสนานในงาน T-Pop Random Dance ที่ Siam Square
                Block I! มาร่วมเต้นแบบสุดมันส์ไปพร้อมกับแฟน ๆ T-Pop ในวันที่ 1
                กรกฎาคม 2567 เวลา 17:30 น. เป็นต้นไป
                งานนี้ไม่มีค่าใช้จ่ายและเปิดรับทุกคนที่ชื่นชอบเพลง T-Pop
                มาสนุกและแชร์ความรักในดนตรีไปด้วยกัน
                อย่าลืมเตรียมรองเท้าคู่ใจและมาพบกับพวกเรานะคะ!
              </p>
            </div>
          </Link>
          <div className="flex items-center">
            <Link
              href="/profile/tpopdancecrew"
              className="flex items-center text-xs text-neutral-700 group-hover/item:text-black dark:text-neutral-300 dark:hover:text-white"
            >
              {/* <Image
                src={"/logo/bus-logo.jpg"}
                alt="bus logo"
                width="28"
                height="28"
                className="mr-2 size-5 rounded-full sm:size-7"
              /> */}
              <div className="mr-2 size-5 rounded-full bg-orange-300 sm:size-7"></div>
              <div className="overflow-hidden truncate whitespace-normal">
                <span className="line-clamp-1">T-Pop Dance Crew</span>
              </div>
              <Image
                src={"/icons/verify-icons/verify-blue.png"}
                alt="verify blue icon"
                width="16"
                height="16"
                className="ml-2"
              />
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-1">
              <div className="flex items-center text-xs leading-none transition-colors">
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

              <div className="flex items-center text-xs leading-none transition-colors">
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

            <div className="flex min-w-max items-center text-xs leading-none text-muted-foreground transition-colors">
              May 16, 2024
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group flex flex-row-reverse md:block">
        <div className="z-0 ms-4 block h-40 w-1/3 flex-shrink-0 overflow-hidden rounded-xl object-cover sm:h-60 md:ms-0 md:w-full">
          <Link href="/news/bus-marckris-sarahsalola-live-session-vlog">
            <Image
              src={"/youtube-cover/marckris-sarahsalola-live-session.jpg"}
              alt="marckris sarahsalola live session cover"
              width="1280"
              height="720"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        </div>
        <div className="mt-0 flex flex-grow flex-col gap-3 overflow-hidden truncate whitespace-normal md:mt-4">
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
                src={"/logo/yt_icon_rgb.png"}
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
            <div className="line-clamp-2 text-sm font-semibold hover:text-primary sm:text-lg md:min-h-14">{`MARCKRIS พาบุกกองถ่าย #sarahsalolaxMARCKRIS Live Session ✨`}</div>

            <div className="hidden sm:block">
              <p className="line-clamp-3 text-xs text-muted-foreground sm:text-sm">
                บรรยากาศในกองเป็นยังไงบ้าง ตามมาดู VLOG นี้กันได้เลย :
                https://youtu.be/jl8BzlE5sfU
                แล้วอย่าลืมไปฟังเพลงจากมาร์คคริสและพี่ซาร่าห์กันด้วยนะครับ🤍
                #sarahsolola #MARCKRIS #BUS_แค่ไหนแค่นั้น #BUSbecauseofyouishine
              </p>
            </div>
          </Link>
          <div className="flex items-center">
            <Link
              href="/profile/bus"
              className="flex items-center text-xs text-neutral-700 group-hover/item:text-black dark:text-neutral-300 dark:hover:text-white"
            >
              <Image
                src={"/logo/bus-logo.jpg"}
                alt="bus logo"
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
                src={"/icons/verify-icons/verify-gold.png"}
                alt="verify icon"
                width="16"
                height="16"
                className="ml-2"
              />
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-1">
              <div className="flex items-center text-xs leading-none transition-colors">
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

              <div className="flex items-center text-xs leading-none transition-colors">
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

            <div className="flex min-w-max items-center text-xs leading-none text-muted-foreground transition-colors">
              May 16, 2024
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group flex flex-row-reverse md:block">
        <div className="z-0 ms-4 block h-40 w-1/3 flex-shrink-0 overflow-hidden rounded-xl object-cover sm:h-60 md:ms-0 md:w-full">
          <Link href="/news/gotcha-pop-2-concert">
            <Image
              src={"/card-cover/gotchapop2-concert.jpeg"}
              alt="gotcha pop 2 concert cover"
              width="1280"
              height="720"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        </div>
        <div className="mt-0 flex flex-grow flex-col gap-3 overflow-hidden truncate whitespace-normal md:mt-4">
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
            <div className="line-clamp-2 text-sm font-semibold hover:text-primary sm:text-lg md:min-h-14">{`GOTCHA POP 2 CONCERT`}</div>

            <div className="hidden sm:block">
              <p className="line-clamp-3 text-xs text-muted-foreground sm:text-sm">
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
              href="/profile/atimeshowbiz"
              className="flex items-center text-xs text-neutral-700 group-hover/item:text-black dark:text-neutral-300 dark:hover:text-white"
            >
              <Image
                src={"/logo/ATIMESHOWBIZ.jpg"}
                alt="ATIMESHOWBIZ logo"
                width="28"
                height="28"
                className="mr-2 size-5 rounded-full sm:size-7"
              />
              <div className="overflow-hidden truncate whitespace-normal">
                <span className="line-clamp-1">ATIMESHOWBIZ </span>
              </div>
              <Image
                src={"/icons/verify-icons/verify-gold.png"}
                alt="verify icon"
                width="16"
                height="16"
                className="ml-2"
              />
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-1">
              <div className="flex items-center text-xs leading-none transition-colors">
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

              <div className="flex items-center text-xs leading-none transition-colors">
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

            <div className="flex min-w-max items-center text-xs leading-none text-muted-foreground transition-colors">
              May 16, 2024
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group flex flex-row-reverse md:block">
        <div className="z-0 ms-4 block h-40 w-1/3 flex-shrink-0 overflow-hidden rounded-xl object-cover sm:h-60 md:ms-0 md:w-full">
          <Link href="/news/aim-hour-episode-khunpol-bus-postponed">
            <Image
              src={"/card-cover/aim-hour-episode-khunpol-bus-postponed.jpg"}
              alt="aim hour episode khunpol bus postponed cover"
              width="1280"
              height="720"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        </div>
        <div className="mt-0 flex flex-grow flex-col gap-3 overflow-hidden truncate whitespace-normal md:mt-4">
          <div className="flex flex-wrap gap-1.5">
            <Link
              href="/artists/bus"
              className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 transition-colors duration-300 hover:bg-blue-600 hover:text-blue-100"
            >
              BUS 🚌
            </Link>
          </div>

          <Link
            href="/news/aim-hour-episode-khunpol-bus-postponed"
            className="flex flex-col gap-3"
          >
            <div className="line-clamp-2 text-sm font-semibold hover:text-primary sm:text-lg md:min-h-14">{`เลื่อนการออกอากาศรายการ AIM HOUR Episode ขุนพล วง BUS`}</div>

            <div className="hidden sm:block">
              <p className="line-clamp-3 text-xs text-muted-foreground sm:text-sm">
                สวัสดีค่ะ BEUS และแฟนคลับน้องขุนพลทุกคน ทางรายการ AIM HOUR
                ต้องขออภัยอย่างสูงที่ต้องประกาศเลื่อนการออกอากาศรายการ AIM HOUR
                Episode น้องขุนพล วง BUS ออกไป จากกำหนดเดิมคือวันที่ 1 มิถุนายน
                เวลา 19:00 น. เป็นวันที่ 2 มิถุนายน เวลา 19:00 น. โดยทางทีม AIM
                HOUR เสียใจอย่างยิ่งที่ทำให้แฟนคลับน้องขุนพล และวง BUS
                ทุกคนที่รอชมคลิปวิดีโอต้องผิดหวังและรอนานกว่าที่ควร
                ทีมงานต้องขออภัยอีกครั้งในความผิดพลาดครั้งนี้
                รวมถึงขออภัยที่เพิ่งมาแจ้งแฟนคลับทุกคนอย่างกะทันหันด้วยนะคะ
                #AIMHOURXKHUNPOL #KHUNPOL #BUSbecauseofyouishine #AIMHOUR
                #สำนักข่าวทูเดย์
              </p>
            </div>
          </Link>
          <div className="flex items-center">
            <Link
              href="/profile/todayth"
              className="flex items-center text-xs text-neutral-700 group-hover/item:text-black dark:text-neutral-300 dark:hover:text-white"
            >
              <Image
                src={"/logo/todayth.jpg"}
                alt="bus logo"
                width="28"
                height="28"
                className="mr-2 size-5 rounded-full sm:size-7"
              />
              <div className="overflow-hidden truncate whitespace-normal">
                <span className="line-clamp-1">TODAY</span>
              </div>
              <Image
                src={"/icons/verify-icons/verify-gold.png"}
                alt="verify icon"
                width="16"
                height="16"
                className="ml-2"
              />
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-1">
              <div className="flex items-center text-xs leading-none transition-colors">
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

              <div className="flex items-center text-xs leading-none transition-colors">
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

            <div className="flex min-w-max items-center text-xs leading-none text-muted-foreground transition-colors">
              May 16, 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

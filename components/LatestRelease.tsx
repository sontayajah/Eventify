"use client";

// External libraries
import React from "react"; // React
import Image from "next/image"; // Next.js image component

// Project UI components
import { Button } from "@/components/ui/button"; // Button component

// Icons
import { ChevronsRight, Sparkle } from "lucide-react"; // Icons

export default function LatestRelease() {
  return (
    <div className="w-full select-none border-b py-8 lg:w-1/3 lg:border-none lg:py-0 lg:pl-4">
      <div className="flex items-center gap-2">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          ผลงานใหม่
        </h4>
        <div className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 transition-colors duration-300 hover:bg-green-600 hover:text-green-100">
          ใหม่ <Sparkle width={12} height={12} />
        </div>
      </div>

      <div className="block text-base text-muted-foreground lg:mt-1 lg:hidden lg:text-lg">
        อัพเดทล่าสุดเกี่ยวกับผลงานใหม่จากศิลปิน
      </div>

      <div className="mt-4 flex h-full flex-col lg:mt-0">
        <div
          className="group flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card px-4 text-card-foreground transition-all hover:cursor-pointer hover:bg-accent"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=Wcp2gfuZFRc",
              "_blank",
            );
          }}
        >
          <div className="h-20 w-28 shrink-0 overflow-hidden">
            <Image
              src={"/images/youtube-cover/bus-nmtw-reaction.jpg"}
              alt="youtube logo"
              width="1280"
              height="720"
              className="h-20 max-h-[85px] w-28 max-w-[127px] rounded-xl py-3 transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <small
              className="line-clamp-2 text-sm font-semibold"
              title={`[BUS REACTION] BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' OFFICIAL MV`}
            >
              {`[BUS REACTION] BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' OFFICIAL MV`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src={"/images/logo/yt_icon_rgb.png"}
                alt="youtube logo"
                width={16}
                height={11}
                style={{ width: "auto", height: "auto" }}
              />
              <p
                className="line-clamp-1 text-sm text-muted-foreground"
                title="BUS because of you i shine"
              >
                BUS because of you i shine
              </p>
            </div>
          </div>
        </div>

        <div
          className="group flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card px-4 text-card-foreground transition-all hover:cursor-pointer hover:bg-accent"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=0HeOd3sVNz4",
              "_blank",
            );
          }}
        >
          <div className="h-20 w-28 shrink-0 overflow-hidden">
            <Image
              src={"/images/youtube-cover/bus-nmtw-artist-ver.jpg"}
              alt="youtube logo"
              width="1280"
              height="720"
              className="h-20 max-h-[85px] w-28 max-w-[127px] rounded-xl py-3 transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <small
              className="line-clamp-2 text-sm font-semibold"
              title={`BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' (Artist version)`}
            >
              {`BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' (Artist version)`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src={"/images/logo/yt_icon_rgb.png"}
                alt="youtube logo"
                width={16}
                height={11}
                style={{ width: "auto", height: "auto" }}
              />
              <p
                className="line-clamp-1 text-sm text-muted-foreground"
                title="TADA LABELS"
              >
                TADA LABELS
              </p>
            </div>
          </div>
        </div>

        <div
          className="group flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card px-4 text-card-foreground transition-all hover:cursor-pointer hover:bg-accent"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=FuadV-aiigQ",
              "_blank",
            );
          }}
        >
          <div className="h-20 w-28 shrink-0 overflow-hidden">
            <Image
              src={"/images/youtube-cover/bus-nmtw.webp"}
              alt="youtube logo"
              width="1280"
              height="720"
              className="h-20 max-h-[85px] w-28 max-w-[127px] rounded-xl py-3 transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <small
              className="line-clamp-2 text-sm font-semibold"
              title={`BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' OFFICIAL MV`}
            >
              {`BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' OFFICIAL MV`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src={"/images/logo/yt_icon_rgb.png"}
                alt="youtube logo"
                width={16}
                height={11}
                style={{ width: "auto", height: "auto" }}
              />
              <p
                className="line-clamp-1 text-sm text-muted-foreground"
                title="TADA LABELS"
              >
                TADA LABELS
              </p>
            </div>
          </div>
        </div>

        <div
          className="group flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card px-4 text-card-foreground transition-all hover:cursor-pointer hover:bg-accent"
          onClick={() => {
            window.open("https://youtube.com/watch?v=HwcSy5OwP8E", "_blank");
          }}
        >
          <div className="h-20 w-28 shrink-0 overflow-hidden">
            <Image
              src={"/images/youtube-cover/bus5-marckris-Introduction.jpg"}
              alt="youtube logo"
              width="1280"
              height="720"
              className="h-20 max-h-[85px] w-28 max-w-[127px] rounded-xl py-3 transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <small
              className="line-clamp-2 text-sm font-semibold"
              title={`BUS5 Member Introduction - MARCKRIS`}
            >
              {`BUS5 Member Introduction - MARCKRIS`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src={"/images/logo/yt_icon_rgb.png"}
                alt="youtube logo"
                width={16}
                height={11}
                style={{ width: "auto", height: "auto" }}
              />
              <p
                className="line-clamp-1 text-sm text-muted-foreground"
                title="BUS because of you i shine"
              >
                BUS because of you i shine
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Button
            variant="link"
            className="h-min w-fit px-0 py-0 hover:text-primary/90 hover:no-underline dark:text-primary"
            onClick={() => {
              // window.open("/latest-release", "_blank");
              window.open("/", "_blank");
            }}
          >
            ดูเพิ่มเติม <ChevronsRight size={16} className="ml-0.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

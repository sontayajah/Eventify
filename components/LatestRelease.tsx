"use client";

import React from "react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ChevronsRight } from "lucide-react";

export default function LatestRelease() {
  return (
    <div className="lg:w-1/8 w-full border-b py-8 pl-4 lg:border-none lg:py-0">
      <div className="flex items-center gap-2">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          ผลงานใหม่ล่าสุด
        </h4>
        <Badge className="hover:cursor-pointer">NEW</Badge>
      </div>

      <div className="flex h-full flex-col">
        <div
          className="flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card text-card-foreground hover:cursor-pointer hover:bg-accent hover:px-2"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=Wcp2gfuZFRc",
              "_blank",
            );
          }}
        >
          <Image
            src="/youtube-cover/bus-nmtw-reaction.jpg"
            alt="youtube logo"
            width="1280"
            height="720"
            className="i max-h-[85px] w-1/4 max-w-[127px] py-3"
            loading="lazy"
          />
          <div className="w-full overflow-hidden truncate whitespace-normal">
            <small className="line-clamp-2 text-sm font-semibold">
              {`[BUS REACTION] BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' OFFICIAL MV`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src="/logo/yt_icon_rgb.png"
                alt="youtube logo"
                width="16"
                height="16"
              />
              <p className="flex items-center text-sm text-muted-foreground">
                BUS because of you i shine
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card text-card-foreground hover:cursor-pointer hover:bg-accent hover:px-2"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=0HeOd3sVNz4",
              "_blank",
            );
          }}
        >
          <Image
            src="/youtube-cover/bus-nmtw-artist-ver.jpg"
            alt="youtube logo"
            width="1280"
            height="720"
            className="i max-h-[85px] w-1/4 max-w-[127px] py-3"
            loading="lazy"
          />
          <div className="w-full overflow-hidden truncate whitespace-normal">
            <small className="line-clamp-2 text-sm font-semibold">
              {`BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' (Artist version)`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src="/logo/yt_icon_rgb.png"
                alt="youtube logo"
                width="16"
                height="16"
              />
              <p className="flex items-center text-sm text-muted-foreground">
                TADA LABELS
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card text-card-foreground hover:cursor-pointer hover:bg-accent hover:px-2"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=FuadV-aiigQ",
              "_blank",
            );
          }}
        >
          <Image
            src="/youtube-cover/bus-nmtw.webp"
            alt="youtube logo"
            width="1280"
            height="720"
            className="i max-h-[85px] w-1/4 max-w-[127px] py-3"
            loading="lazy"
          />
          <div className="w-full overflow-hidden truncate whitespace-normal">
            <small className="line-clamp-2 text-sm font-semibold">
              {`BUS5 'แค่ไหนแค่นั้น (NO MATTER WHAT)' OFFICIAL MV`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src="/logo/yt_icon_rgb.png"
                alt="youtube logo"
                width="16"
                height="16"
              />
              <p className="flex items-center text-sm text-muted-foreground">
                TADA LABELS
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex h-1/4 max-h-[85px] items-center gap-2 rounded-sm bg-card text-card-foreground hover:cursor-pointer hover:bg-accent hover:px-2"
          onClick={() => {
            window.open("https://youtube.com/watch?v=HwcSy5OwP8E", "_blank");
          }}
        >
          <Image
            src="/youtube-cover/bus5-marckris-Introduction.jpg"
            alt="youtube logo"
            width="1280"
            height="720"
            className="i max-h-[85px] w-1/4 max-w-[127px] py-3"
            loading="lazy"
          />
          <div className="w-full overflow-hidden truncate whitespace-normal">
            <small className="line-clamp-2 text-sm font-semibold">
              {`BUS5 Member Introduction - MARCKRIS`}
            </small>
            <div className="flex items-center gap-1">
              <Image
                src="/logo/yt_icon_rgb.png"
                alt="youtube logo"
                width="16"
                height="16"
              />
              <p className="flex items-center text-sm text-muted-foreground">
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
              window.open("https://youtube.com/watch?v=HwcSy5OwP8E", "_blank");
            }}
          >
            ดูทั้งหมด <ChevronsRight size={16} className="ml-0.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

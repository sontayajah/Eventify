// External libraries
import React from "react";
import Image from "next/image";

// Local components
import TrendingArtistsCard from "./TrendingArtistsCard";

// Icons
import { Flame } from "lucide-react";
import { formatDateTime } from "@/lib/utils";

export default function TrendingArtists() {
  return (
    <div className="w-full select-none border-b pb-8 pt-8 lg:border-none lg:pb-0 lg:pt-12">
      <div>
        <div className="flex items-baseline gap-2">
          <div className="flex items-center gap-2">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 lg:text-3xl">
              ศิลปินมาแรง
            </h2>
            <Flame fill="#ef4444" strokeWidth={0} />
          </div>
          <span className="flex items-baseline text-sm">
            (อัพเดท {formatDateTime(new Date()).dateOnly})
          </span>
        </div>

        <div className="text-base text-muted-foreground lg:mt-1 lg:text-lg">
          ค้นพบศิลปินที่กำลังเป็นที่นิยมในขณะนี้
        </div>
      </div>

      <TrendingArtistsCard />

      <div className="mt-4 flex items-center justify-center text-sm text-muted-foreground">
        <p className="mr-2">ที่มา :</p>
        <Image
          src={"/images/logo/spotify-logo.png"}
          alt="spotify"
          width="1280"
          height="720"
          className="mr-1 size-4"
        />{" "}
        <p className="mr-1 font-bold">Spotify</p>
        <p className="">( T-Pop Now Playlist )</p>
      </div>
    </div>
  );
}

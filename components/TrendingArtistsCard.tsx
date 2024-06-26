// External libraries
import React from "react";
import Image from "next/image";

export default function TrendingArtistsCard() {
  return (
    <div className="mt-4 grid grid-cols-5 justify-items-start gap-y-4 overflow-auto pb-4">
      <div className="flex w-full flex-col items-center rounded-xl">
        <div className="size-16 overflow-hidden rounded-xl md:size-32 lg:size-40 xl:size-52">
          <Image
            src={"/images/artists/spotify/bus.jpg"}
            alt="bus"
            width="1280"
            height="720"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
          />
        </div>
        <p className="mt-2 hidden text-center text-sm font-bold hover:cursor-pointer hover:text-primary lg:block lg:text-base">
          BUS
        </p>
      </div>

      <div className="flex w-full flex-col items-center rounded-xl">
        <div className="size-16 overflow-hidden rounded-xl md:size-32 lg:size-40 xl:size-52">
          <Image
            src={"/images/artists/spotify/nunew.jpg"}
            alt="nunew"
            width="1280"
            height="720"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
          />
        </div>
        <p className="mt-2 hidden text-center text-sm font-bold hover:cursor-pointer hover:text-primary lg:block lg:text-base">
          Nunew
        </p>
      </div>

      <div className="flex w-full flex-col items-center rounded-xl">
        <div className="size-16 overflow-hidden rounded-xl md:size-32 lg:size-40 xl:size-52">
          <Image
            src={"/images/artists/spotify/bowkylion.jpg"}
            alt="bowkylion"
            width="1280"
            height="720"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
          />
        </div>
        <p className="mt-2 hidden text-center text-sm font-bold hover:cursor-pointer hover:text-primary lg:block lg:text-base">
          BOWKYLION
        </p>
      </div>

      <div className="flex w-full flex-col items-center rounded-xl">
        <div className="size-16 overflow-hidden rounded-xl md:size-32 lg:size-40 xl:size-52">
          <Image
            src={"/images/artists/spotify/jeff-satur.jpg"}
            alt="jeffsatur"
            width="1280"
            height="720"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
          />
        </div>
        <p className="mt-2 hidden text-center text-sm font-bold hover:cursor-pointer hover:text-primary lg:block lg:text-base">
          Jeff Satur
        </p>
      </div>

      <div className="flex w-full flex-col items-center rounded-xl">
        <div className="size-16 overflow-hidden rounded-xl md:size-32 lg:size-40 xl:size-52">
          <Image
            src={"/images/artists/spotify/nont-tanont.jpg"}
            alt="nonttanont"
            width="1280"
            height="720"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
          />
        </div>
        <p className="mt-2 hidden text-center text-sm font-bold hover:cursor-pointer hover:text-primary lg:block lg:text-base">
          NONT TANONT
        </p>
      </div>

      <div className="flex w-full flex-col items-center rounded-xl">
        <div className="size-16 overflow-hidden rounded-xl md:size-32 lg:size-40 xl:size-52">
          <Image
            src={"/images/artists/spotify/4eve.jpg"}
            alt="4eve"
            width="1280"
            height="720"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
          />
        </div>
        <p className="mt-2 hidden text-center text-sm font-bold hover:cursor-pointer hover:text-primary lg:block lg:text-base">
          4EVE
        </p>
      </div>

      <div className="flex w-full flex-col items-center rounded-xl">
        <div className="size-16 overflow-hidden rounded-xl md:size-32 lg:size-40 xl:size-52">
          <Image
            src={"/images/artists/spotify/billkin.jpg"}
            alt="billkin"
            width="1280"
            height="720"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
          />
        </div>
        <p className="mt-2 hidden text-center text-sm font-bold hover:cursor-pointer hover:text-primary lg:block lg:text-base">
          Billkin
        </p>
      </div>

      <div className="flex w-full flex-col items-center rounded-xl">
        <div className="size-16 overflow-hidden rounded-xl md:size-32 lg:size-40 xl:size-52">
          <Image
            src={"/images/artists/spotify/pixxie.jpg"}
            alt="pixxie"
            width="1280"
            height="720"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
          />
        </div>
        <p className="mt-2 hidden text-center text-sm font-bold hover:cursor-pointer hover:text-primary lg:block lg:text-base">
          PiXXiE
        </p>
      </div>

      <div className="flex w-full flex-col items-center rounded-xl">
        <div className="size-16 overflow-hidden rounded-xl md:size-32 lg:size-40 xl:size-52">
          <Image
            src={"/images/artists/spotify/bamm.jpg"}
            alt="bamm"
            width="1280"
            height="720"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
          />
        </div>
        <p className="mt-2 hidden text-center text-sm font-bold hover:cursor-pointer hover:text-primary lg:block lg:text-base">
          bamm
        </p>
      </div>

      <div className="flex w-full flex-col items-center rounded-xl">
        <div className="size-16 overflow-hidden rounded-xl md:size-32 lg:size-40 xl:size-52">
          <Image
            src={"/images/artists/spotify/proxie.jpg"}
            alt="proxie"
            width="1280"
            height="720"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 hover:cursor-pointer"
          />
        </div>
        <p className="mt-2 hidden text-center text-sm font-bold hover:cursor-pointer hover:text-primary lg:block lg:text-base">
          PROXIE
        </p>
      </div>
    </div>
  );
}

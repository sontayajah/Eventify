import React, { Dispatch, SetStateAction } from "react";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
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
      className={`fixed inset-y-0 start-0 z-50 ${!navOpen ? "-translate-x-full" : ""} w-screen max-w-sm bg-background transition-all`}
    >
      <div className="flex w-full items-center justify-between gap-2 border-b px-5 py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="mt-0.5 text-xl font-bold tracking-tight">
            T-Pop Now
          </span>

          {/* <Image
            src="/logo/bus-logo-black.png"
            alt="bus logo"
            width="1280"
            height="720"
            className="block h-6 w-12 dark:hidden"
          />
          <Image
            src="/logo/bus-logo-white.png"
            alt="bus logo"
            width="1280"
            height="720"
            className="hidden h-6 w-12 dark:block"
          /> */}
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
    </div>
  );
}

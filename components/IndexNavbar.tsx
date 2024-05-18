"use client";

// Components
import Link from "next/link";
import Image from "next/image";

// Icons
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background shadow-sm">
        <nav className="mx-auto flex justify-between px-4 py-4 xl:container">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="focus-visible:ring-transparent sm:hidden"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <Menu />
            </Button>

            <Link href="/" className="flex items-center gap-2">
              <Image
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
              />
              <span className="mt-0.5 hidden text-xl font-bold tracking-tight md:block">
                Because of You, I Shine
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="focus-visible:ring-transparent"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="hidden font-semibold sm:flex"
            >
              <Link href="/login">เข้าสู่ระบบ</Link>
            </Button>
            <Button asChild className="hidden font-semibold sm:flex">
              <Link href="/register">สมัครสมาชิก</Link>
            </Button>
          </div>
        </nav>
      </header>

      <div className="relative z-50 sm:hidden">
        {navOpen ? (
          <div
            className="fixed inset-0 bg-neutral-900 bg-opacity-50 opacity-100"
            onClick={() => setNavOpen(false)}
          ></div>
        ) : null}
        <div
          className={`fixed inset-y-0 start-0 z-50 ${!navOpen ? "-translate-x-full" : ""} w-screen max-w-sm bg-background transition-all`}
        >
          <div className="flex w-full items-center justify-between gap-2 px-5 py-4">
            <Link href="/" className="flex items-center gap-2">
              {/* <span className="mt-0.5 text-xl font-bold tracking-tight">
                BUS
              </span> */}
              <Image
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
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 h-8 w-8 rounded-full focus-visible:ring-transparent"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <X size={16} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

// Components
import Link from "next/link";

// Icons
import { Menu, Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import ProfileDropdownMenu from "./ProfileDropdownMenu";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background shadow-sm">
        <nav className="mx-auto flex justify-between px-4 py-4 sm:container">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="focus-visible:ring-transparent lg:hidden"
                onClick={() => setNavOpen((prev) => !prev)}
              >
                <Menu />
              </Button>

              <Link href="/" className="flex items-center gap-2">
                <span className="logo mt-0.5 text-xl font-bold tracking-tight">
                  T-Pop Now
                </span>
              </Link>
            </div>
            <div className="mx-2 hidden h-8 border-l border-neutral-200 dark:border-neutral-700 lg:block"></div>
            <ul className="hidden gap-8 text-sm font-semibold lg:flex">
              <li>
                <Link
                  href="https://tpopnow.vercel.app/"
                  className="transition-colors hover:text-primary"
                >
                  หน้าหลัก
                </Link>
              </li>
              <li>
                <Link
                  href="https://tpopnow.vercel.app/news"
                  className="transition-colors hover:text-primary"
                >
                  ประกาศ
                </Link>
              </li>
              <li>
                <Link
                  href="https://tpopnow.vercel.app/release"
                  className="transition-colors hover:text-primary"
                >
                  ผลงาน
                </Link>
              </li>
              <li>
                <Link
                  href="https://tpopnow.vercel.app/events"
                  className="transition-colors hover:text-primary"
                >
                  กิจกรรม
                </Link>
              </li>
              <li>
                <Link
                  href="https://tpopnow.vercel.app/calendar"
                  className="transition-colors hover:text-primary"
                >
                  ปฏิทิน
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            {/* <Button
              variant="ghost"
              size="icon"
              className="hidden focus-visible:ring-transparent lg:flex"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button> */}

            <ProfileDropdownMenu />

            {/* <Button
              asChild
              variant="ghost"
              className="hidden font-semibold lg:flex"
            >
              <Link href="/login">เข้าสู่ระบบ</Link>
            </Button>
            <Button asChild className="hidden font-semibold lg:flex">
              <Link href="/register">สมัครสมาชิก</Link>
            </Button> */}
          </div>
        </nav>
      </header>

      <div className="relative z-50 lg:hidden">
        {navOpen ? (
          <div
            className="fixed inset-0 bg-neutral-900 bg-opacity-50 opacity-100"
            onClick={() => setNavOpen(false)}
          ></div>
        ) : null}
        <HamburgerMenu navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </>
  );
}

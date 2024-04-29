"use client";

// Components
import Link from "next/link";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Icons
import { Menu } from "lucide-react";

export default function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="absolute left-0 right-0 top-0">
      <nav className="mx-auto flex max-w-screen-2xl justify-between px-8 pt-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Eventify</span>
        </Link>
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
          <Menu className="block sm:hidden" />
        </div>
      </nav>
    </header>
  );
}

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  CreditCard,
  Fingerprint,
  LogOut,
  Moon,
  User,
  UserPlus,
} from "lucide-react";

import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";
import Link from "next/link";

export default function ProfileDropdownMenu() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="focus-visible:ring-transparent"
          >
            <User className="h-[1.2rem] w-[1.2rem] items-center" />
            <span className="sr-only">Toggle Profile Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-[-20px] w-72">
          <DropdownMenuLabel className="text-base">
            บัญชีของฉัน
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/login" className="flex flex-grow text-base">
                <Fingerprint className="mr-4 h-6 w-6" />
                เข้าสู่ระบบ
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/login" className="flex flex-grow text-base">
                <UserPlus className="mr-4 h-6 w-6" />
                สมัครสมาชิก
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <div className="relative cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <Moon className="mr-4 h-6 w-6" />
                  <span className="text-base">ธีมสีเข้ม</span>
                </div>{" "}
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked: boolean) => {
                    if (checked) {
                      setTheme("dark");
                    } else {
                      setTheme("light");
                    }
                  }}
                />
              </div>
            </div>
            <DropdownMenuItem>
              <LogOut className="mr-4 h-6 w-6" />
              <span className="text-base">ออกจากระบบ</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

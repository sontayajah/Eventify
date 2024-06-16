"use client";

// External libraries
import { Moon } from "lucide-react"; // Icon

// Project UI components
import { Switch } from "@/components/ui/switch"; // Switch component

// Utilities
import { useTheme } from "next-themes"; // Hook for theme management

export default function ThemeSwitchButton() {
  const { setTheme, theme, systemTheme } = useTheme();

  return (
    <div
      className="relative cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-muted focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
        } else if (theme === "light") {
          setTheme("dark");
        }
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex">
          <Moon className="mr-4 h-6 w-6" />
          <span className="text-base">ธีมสีเข้ม</span>
        </div>{" "}
        <Switch
          checked={
            theme === "dark" || (theme === "system" && systemTheme === "dark")
          }
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
  );
}

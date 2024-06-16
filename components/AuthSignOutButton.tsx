"use client";

// External libraries
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

// Project UI components
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function AuthSignOutButton() {
  return (
    <DropdownMenuItem onClick={() => signOut()}>
      <LogOut className="mr-4 h-6 w-6" />
      <span className="text-base">ออกจากระบบ</span>
    </DropdownMenuItem>
  );
}

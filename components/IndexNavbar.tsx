import Link from "next/link";

// Components

import ProfileDropdownMenu from "./ProfileDropdownMenu";

import IndexNavbarMenuItem from "./IndexNavbarMenuItem";

// import { useSession } from "next-auth/react";

import IndexNavbarButton from "./IndexNavbarButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function Navbar() {
  // const { data: session } = useSession();
  const session = await getServerSession(authOptions);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background shadow-sm">
        <nav className="mx-auto flex justify-between px-4 py-4 sm:container">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <IndexNavbarButton />

              <Link href="/" className="flex items-center gap-2">
                <span className="logo mt-0.5 text-xl font-bold tracking-tight">
                  T-Pop Now
                </span>
              </Link>
            </div>
            <div className="mx-2 hidden h-8 border-l border-neutral-200 dark:border-neutral-700 lg:block"></div>

            <IndexNavbarMenuItem />
          </div>
          <div className="flex items-center gap-2">
            {session?.user && (
              <>
                <span>สวัสดี!</span>
                <span className="font-semibold">{session.user.username}</span>
              </>
            )}

            <ProfileDropdownMenu />
          </div>
        </nav>
      </header>
    </>
  );
}

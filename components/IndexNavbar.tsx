import Link from "next/link";
import Image from "next/image";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import IndexNavbarMenuItem from "./IndexNavbarMenuItem";
import NavbarButton from "./NavbarButton";
import { getCurrentUser } from "@/lib/session";
import { getUserProfile } from "@/lib/actions/user.action";

export default async function Navbar() {
  const user = await getCurrentUser();

  let profile;
  if (user) {
    profile = await getUserProfile(user.id);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-background shadow-sm">
        <nav className="mx-auto flex justify-between px-4 py-4 sm:container">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <NavbarButton type="index" />

              <Link href="/" className="flex items-center gap-2">
                <span className="logo mt-0.5 truncate text-xl font-bold tracking-tight">
                  T-Pop Now
                </span>
              </Link>
            </div>
            <div className="mx-2 hidden h-8 border-l border-neutral-200 dark:border-neutral-700 lg:block"></div>

            <IndexNavbarMenuItem />
          </div>
          <div className="flex items-center">
            <ProfileDropdownMenu />
          </div>
        </nav>
      </header>
    </>
  );
}

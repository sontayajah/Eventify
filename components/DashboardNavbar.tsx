import Image from "next/image";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import NavbarButton from "./NavbarButton";
import { getCurrentUser } from "@/lib/session";
import { getUserProfile } from "@/lib/actions/user.action";
import Link from "next/link";

export default async function DashboardNavbar({ page }: { page?: string }) {
  const user = await getCurrentUser();

  let profile;
  if (user) {
    profile = await getUserProfile(user.id);
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-background shadow-sm ${page === "dashboard" ? "lg:ms-72" : "lg:ms-0"}`}
      >
        <nav className="mx-auto flex justify-between px-4 py-4 sm:container lg:justify-end">
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <NavbarButton type="dashboard" />

              {page === "dashboard" ? (
                <></>
              ) : (
                <>
                  <Link href="/" className="flex items-center gap-2">
                    <span className="logo mt-0.5 truncate text-xl font-bold tracking-tight">
                      T-Pop Now
                    </span>
                  </Link>
                </>
              )}
            </div>

            <ProfileDropdownMenu />
          </div>
        </nav>
      </header>
    </>
  );
}

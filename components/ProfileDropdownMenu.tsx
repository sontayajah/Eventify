// External libraries
import Link from "next/link"; // Next.js navigation
import {
  ClipboardList,
  ClipboardPen,
  Fingerprint,
  Heart,
  User,
  UserCog,
  UserPlus,
} from "lucide-react"; // Icons
import Image from "next/image";

// Project UI components
import { Button } from "@/components/ui/button"; // Button
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Dropdown menu

// Local components
import ThemeSwitchButton from "./ThemeSwitchButton"; // Theme switcher
import AuthSignOutButton from "./AuthSignOutButton"; // Sign out

// Utilities
import { getCurrentUser } from "@/lib/session"; // Get user session
import { getUserProfile } from "@/lib/actions/user.action";

export default async function ProfileDropdownMenu() {
  const user = await getCurrentUser();

  let profile;
  if (user) {
    profile = await getUserProfile(user.id);
  }

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative flex items-center gap-2">
            {user ? (
              profile?.imageUrl ? (
                <>
                  <Image
                    src={profile?.imageUrl}
                    alt="profile image"
                    width="28"
                    height="28"
                    className="size-9 rounded-full hover:cursor-pointer"
                  />
                </>
              ) : (
                <>
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white hover:cursor-pointer lg:text-sm">
                    {user?.username.toUpperCase().substring(0, 2)}
                  </div>
                </>
              )
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full focus-visible:ring-transparent"
                >
                  <User className="h-5 w-5 items-center" />
                </Button>
              </>
            )}
            {user && (
              <div className="hidden lg:block">
                <Link href={`/@${profile?.user.username}`}>
                  <div className="col-span-5 flex flex-col justify-center">
                    <div className="flex items-center">
                      <div
                        className="truncate text-sm font-bold"
                        title={profile?.displayName}
                      >
                        {profile?.displayName}
                      </div>
                      {profile?.isVerified && (
                        <>
                          <Image
                            src={`/images/icons/verify-icons/verify-${profile?.verifyType.type}.png`}
                            alt="verify icon"
                            width="16"
                            height="16"
                            className="ml-1"
                          />
                        </>
                      )}
                    </div>
                    <div
                      className="truncate text-xs text-muted-foreground"
                      title={profile?.user.username}
                    >
                      @{profile?.user.username}
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`absolute ${user ? "right-[-20px] lg:right-[-130px]" : ""} ${!user ? "right-[-20px]" : ""} top-[10px] z-50 w-80`}
        >
          {user && (
            <div className="lg:hidden">
              <DropdownMenuLabel>
                <Link href={`/@${profile?.user.username}`}>
                  <div className="grid grid-cols-6">
                    {profile?.imageUrl ? (
                      <div className="flex items-center">
                        <Image
                          src={profile?.imageUrl}
                          alt="profile image"
                          width="28"
                          height="28"
                          className="mr-2 size-9 rounded-full"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="mr-2 flex size-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white lg:text-sm">
                          {user?.username.toUpperCase().substring(0, 2)}
                        </div>
                      </>
                    )}
                    <div className="col-span-5 flex flex-col justify-center">
                      <div className="flex items-center">
                        <div
                          className="truncate text-sm font-bold"
                          title={profile?.displayName}
                        >
                          {profile?.displayName}
                        </div>
                        {profile?.isVerified && (
                          <>
                            <Image
                              src={`/images/icons/verify-icons/verify-${profile?.verifyType.type}.png`}
                              alt="verify icon"
                              width="16"
                              height="16"
                              className="ml-1"
                            />
                          </>
                        )}
                      </div>
                      <div
                        className="truncate text-xs text-muted-foreground"
                        title={profile?.user.username}
                      >
                        @{profile?.user.username}
                      </div>
                    </div>
                  </div>
                </Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
            </div>
          )}
          {!user ? (
            <>
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/login" className="flex flex-grow text-base">
                    <Fingerprint className="mr-4 h-6 w-6" />
                    เข้าสู่ระบบ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register" className="flex flex-grow text-base">
                    <UserPlus className="mr-4 h-6 w-6" />
                    สมัครสมาชิก
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </>
          ) : (
            <>
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link
                    href={`/@${profile?.user.username}`}
                    className="flex flex-grow text-base"
                  >
                    <User className="mr-4 h-6 w-6" />
                    หน้าโปรไฟล์
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/profile/edit"
                    className="flex flex-grow text-base"
                  >
                    <UserCog className="mr-4 h-6 w-6" />
                    ตั้งค่าบัญชี
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/posts/create"
                    className="flex flex-grow text-base"
                  >
                    <ClipboardPen className="mr-4 h-6 w-6" />
                    เขียนโพสต์ใหม่
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/posts/published"
                    className="flex flex-grow text-base"
                  >
                    <ClipboardList className="mr-4 h-6 w-6" />
                    โพสต์ของฉัน
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/posts/likes"
                    className="flex flex-grow text-base"
                  >
                    <Heart className="mr-4 h-6 w-6" />
                    รายการโปรด
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              {profile?.verifyTypeId === "3" && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>เมนูแอดมิน</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href="/admin" className="flex flex-grow text-base">
                        <ClipboardPen className="mr-4 h-6 w-6" />
                        แดชบอร์ด
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </>
              )}
            </>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <ThemeSwitchButton />
            {user && (
              <>
                <AuthSignOutButton />
              </>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

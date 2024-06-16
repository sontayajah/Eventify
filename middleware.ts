import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard2")) {
    return NextResponse.redirect(new URL("/dashboard/user", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)"],
};

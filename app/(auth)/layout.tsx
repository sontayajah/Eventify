import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "../globals.css";

import Link from "next/link";

import { ThemeProvider } from "@/components/ThemeProvider";

import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

const noto_sans_thai = Noto_Sans_Thai({ subsets: ["thai"] });

export const metadata: Metadata = {
  title: {
    default: "T-Pop Now",
    template: "%s | T-Pop Now",
  },
  description:
    "Discover, create, and share events with T-Pop Now - the ultimate T-Pop platform.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <html lang="en">
      <body className={noto_sans_thai.className}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="mx-auto flex min-h-[100vh] max-w-screen-2xl">
              <div className="hidden w-1/2 bg-[url('/bus.jpg')] bg-cover lg:block"></div>
              <div className="w-full lg:w-1/2">
                <nav className="mx-auto flex h-14 max-w-screen-2xl justify-between px-8 pt-4">
                  <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight">
                      T-Pop Now
                    </span>
                  </Link>
                </nav>
                {children}
              </div>
            </main>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

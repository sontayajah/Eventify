import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "../globals.css";

import Link from "next/link";

import { ThemeProvider } from "@/components/ThemeProvider";

import { useTheme } from "next-themes";

const noto_sans_thai = Noto_Sans_Thai({ subsets: ["thai"] });

export const metadata: Metadata = {
  title: {
    default: "Eventify",
    template: "%s | Eventify",
  },
  description:
    "Discover, create, and share events with Eventify - the ultimate event platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto_sans_thai.className}>
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
                    Eventify
                  </span>
                </Link>
              </nav>
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

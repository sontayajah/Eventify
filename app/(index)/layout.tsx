import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IndexNavbar from "@/components/IndexNavbar";

import { ThemeProvider } from "@/components/ThemeProvider";

import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";

const noto_sans_thai = Noto_Sans_Thai({
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: {
    default: "T-Pop Now",
    template: "%s | T-Pop Now",
  },
  description:
    "Discover, create, and share events with T-Pop Now - the ultimate T-Pop platform.",
  icons: "/logo/bus-logo.jpg",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${noto_sans_thai.className}`}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <IndexNavbar />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

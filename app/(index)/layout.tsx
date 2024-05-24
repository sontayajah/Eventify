import type { Metadata } from "next";
import { Noto_Sans_Thai_Looped, Noto_Sans_Thai } from "next/font/google";
import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IndexNavbar from "@/components/IndexNavbar";

import { ThemeProvider } from "@/components/ThemeProvider";

const noto_sans_thai = Noto_Sans_Thai({
  subsets: ["thai"],
});

const noto_sans_thai_looped = Noto_Sans_Thai_Looped({
  weight: "400",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_sans_thai.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <IndexNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

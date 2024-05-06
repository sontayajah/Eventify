import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IndexNavbar from "@/components/IndexNavbar";

import { ThemeProvider } from "@/components/ThemeProvider";

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

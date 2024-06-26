// External libraries
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Project components and styles
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastContainer } from "react-toastify";

import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import ProgressBarProvider from "@/components/ProgressBarProvider";

// Font setup
const noto_sans_thai = Noto_Sans_Thai({
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: {
    absolute: "Dashboard",
    template: "%s | T-Pop Now",
  },
  description:
    "Discover, create, and share events with T-Pop Now - the ultimate T-Pop platform.",
  icons: "/images/logo/bus-logo.jpg",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentUser();

  if (!session) {
    return redirect("/login");
  }

  return (
    <html lang="en">
      <body className={`${noto_sans_thai.className}`}>
        <ProgressBarProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover={false}
              theme="light"
            />
          </ThemeProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}

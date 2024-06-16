// External libraries
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/ReactToastify.min.css";

// Project components and styles
import "../globals.css";
import IndexNavbar from "@/components/IndexNavbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastContainer } from "react-toastify";

// Font setup
const noto_sans_thai = Noto_Sans_Thai({
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: {
    absolute: "T-Pop Now",
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
      </body>
    </html>
  );
}

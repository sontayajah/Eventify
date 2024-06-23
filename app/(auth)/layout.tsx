// External libraries
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";

// Project components and styles
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getCurrentUser } from "@/lib/session";
import { ToastContainer } from "react-toastify";

// Font setup
const noto_sans_thai = Noto_Sans_Thai({ subsets: ["thai"] });

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
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

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
            <div className="hidden w-1/2 bg-[url('/images/bus.jpg')] bg-cover lg:block"></div>
            <div className="w-full lg:w-1/2">
              <nav className="mx-auto flex h-14 max-w-screen-2xl justify-between px-8 pt-4">
                <Link href="/" className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight">
                    T-Pop Now
                  </span>
                </Link>
              </nav>
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
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";

import ProfileDropdownMenu from "./ProfileDropdownMenu";
import HamburgerMenu from "./HamburgerMenu";
import IndexNavbarArtistsMenu from "./IndexNavbarArtistsMenu";

// Icons
import { Menu } from "lucide-react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background shadow-sm">
        <nav className="mx-auto flex justify-between px-4 py-4 sm:container">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="focus-visible:ring-transparent lg:hidden"
                onClick={() => setNavOpen((prev) => !prev)}
              >
                <Menu />
              </Button>

              <Link href="/" className="flex items-center gap-2">
                <span className="logo mt-0.5 text-xl font-bold tracking-tight">
                  T-Pop Now
                </span>
              </Link>
            </div>
            <div className="mx-2 hidden h-8 border-l border-neutral-200 dark:border-neutral-700 lg:block"></div>

            <IndexNavbarArtistsMenu />
          </div>
          <div className="flex items-center gap-2">
            <ProfileDropdownMenu />
          </div>
        </nav>
      </header>

      <div className="relative z-50 lg:hidden">
        {navOpen ? (
          <div
            className="fixed inset-0 bg-neutral-900 bg-opacity-50 opacity-100"
            onClick={() => setNavOpen(false)}
          ></div>
        ) : null}
        <HamburgerMenu navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </>
  );
}

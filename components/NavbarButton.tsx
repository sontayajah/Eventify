"use client";

// External libraries
import React, { useState } from "react"; // React and useState hook

// Project UI components
import { Button } from "@/components/ui/button"; // Button component

// Local components
import HamburgerMenu from "./HamburgerMenu"; // Hamburger menu component

// Icons
import { Menu } from "lucide-react";
import DashboardHamburgerMenu from "./DashboardHamburgerMenu";
export default function IndexNavbarButton({
  type,
}: {
  type: "index" | "dashboard";
}) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="focus-visible:ring-transparent lg:hidden"
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <Menu />
      </Button>
      <div className="relative z-50 lg:hidden">
        {navOpen ? (
          <div
            className="fixed inset-0 bg-neutral-900 bg-opacity-50 opacity-100 transition-opacity"
            onClick={() => setNavOpen(false)}
          ></div>
        ) : null}
        {type === "index" && (
          <>
            <HamburgerMenu navOpen={navOpen} setNavOpen={setNavOpen} />
          </>
        )}
        {type === "dashboard" && (
          <>
            <DashboardHamburgerMenu navOpen={navOpen} setNavOpen={setNavOpen} />
          </>
        )}
      </div>
    </>
  );
}

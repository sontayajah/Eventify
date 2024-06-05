"use client";

import { Button } from "@/components/ui/button";
import HamburgerMenu from "./HamburgerMenu";
import React, { useState } from "react";

// Icons
import { Menu } from "lucide-react";
export default function IndexNavbarButton() {
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
            className="fixed inset-0 bg-neutral-900 bg-opacity-50 opacity-100"
            onClick={() => setNavOpen(false)}
          ></div>
        ) : null}
        <HamburgerMenu navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </>
  );
}

"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ProgressBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#7c3aed"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}

"use client";

import { ChevronsRight } from "lucide-react"; // Icon

// Project UI components
import { Button } from "@/components/ui/button"; // Button component

type SeeMoreButtonProps = {
  url: string;
};
export default function SeeMoreButton({ url }: SeeMoreButtonProps) {
  return (
    <Button
      variant="link"
      className="h-min w-fit px-0 py-0 hover:text-primary/90 hover:no-underline dark:text-primary"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      ดูเพิ่มเติม <ChevronsRight size={16} className="ml-0.5" />
    </Button>
  );
}

// External libraries
import Image from "next/image";

// Types
import { carouselImageProps } from "@/types";

export default function CarouselImage(props: carouselImageProps) {
  const { src, alt } = props;

  return (
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      className="max-h-96 rounded-md"
      style={{
        objectFit: "cover",
      }}
      priority={true}
    />
  );
}

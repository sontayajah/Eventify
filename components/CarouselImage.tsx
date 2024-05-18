import Image, { StaticImageData } from "next/image";

interface carouselImageProps {
  src: StaticImageData;
  alt: string;
}

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
    />
  );
}

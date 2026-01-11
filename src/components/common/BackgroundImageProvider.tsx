import React, { PropsWithChildren } from "react";
import Image from "next/image";

type BackgroundImageProviderProps = PropsWithChildren<{
  className?: string;
  image: {
    src: string;
    alt: string;
    className?: string;
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  };
}>;

export default function BackgroundImageProvider({
  children,
  className,
  image,
}: BackgroundImageProviderProps) {
  const { objectFit = "cover", ...imageProps } = image;

  return (
    <span className={`relative group px-2  ${className}`}>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        fill
        className={`absolute inset-0 -z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300 object-${objectFit} ${
          imageProps.className || ""
        }`}
      />
      {children}
    </span>
  );
}

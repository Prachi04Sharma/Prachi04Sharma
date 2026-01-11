import Image, { type ImageProps } from "next/image";

/**
 * A wrapper component around Next.js Image for inline images.
 *
 * This component enforces required src and alt props for accessibility,
 * while allowing all other Next.js Image props for maximum flexibility.
 *
 * @example
 * // Fixed size image (requires width and height)
 * <InlineImage src="/icon.png" alt="Icon" width={50} height={50} />
 *
 * @example
 * // Responsive image using fill
 * <div className="relative w-full h-64">
 *   <InlineImage src="/hero.jpg" alt="Hero" fill className="object-cover" />
 * </div>
 */
type InlineImageProps = Omit<ImageProps, "src" | "alt"> &
  Required<Pick<ImageProps, "src" | "alt">> & {
    className?: string;
  };

export default function InlineImage({
  src,
  alt,
  className,
  ...rest
}: InlineImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`inline-block ${className}`}
      {...rest}
    />
  );
}

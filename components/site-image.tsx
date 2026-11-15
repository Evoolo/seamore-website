import Image, { type ImageProps } from "next/image";

/** Prefix public images when the static site is served from a GitHub Pages project path. */
export default function SiteImage({ src, ...props }: ImageProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolvedSrc = typeof src === "string" && src.startsWith("/")
    ? `${basePath}${src}`
    : src;

  return <Image src={resolvedSrc} {...props} />;
}

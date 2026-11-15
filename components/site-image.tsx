import Image, { type ImageProps } from "next/image";

export function siteMediaUrl(src: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = src.startsWith("/seamore/media/") ? src.slice("/seamore".length) : src;
  return normalized.startsWith("/") ? `${basePath}${normalized}` : normalized;
}

/** Prefix public images when the static site is served from a GitHub Pages project path. */
export default function SiteImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" && src.startsWith("/")
    ? siteMediaUrl(src)
    : src;

  return <Image src={resolvedSrc} {...props} />;
}

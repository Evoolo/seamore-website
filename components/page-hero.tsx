import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "@/components/site-image";
import { Words } from "@/components/words";

type PageHeroProps = { eyebrow: string; title: string; description: string; image: string; alt: string; compact?: boolean; back?: { href: string; label: string } };

export function PageHero({ eyebrow, title, description, image, alt, compact = false, back }: PageHeroProps) {
  return <section className={`hero-enter relative isolate flex items-end overflow-hidden bg-[#071d34] text-white ${compact ? "min-h-[540px] lg:min-h-[62svh]" : "min-h-[640px] lg:min-h-[78svh]"}`}>
    <div className="parallax" data-parallax><Image src={image} alt={alt} fill priority sizes="100vw" className="hero-image object-cover object-center" /></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#071d34] via-[#071d34]/55 to-[#071d34]/20" />
    <div className="shell relative pb-14 pt-40 lg:pb-20">
      {back && <Link href={back.href} className="hero-fade group mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-white/80 transition-colors hover:text-white" style={{ "--i": -4 } as CSSProperties}><ArrowLeft className="size-4 transition-transform duration-500 group-hover:-translate-x-1" /> {back.label}</Link>}
      <p className="eyebrow eyebrow-rule hero-fade mb-7 text-[#ff5a61]" style={{ "--i": -3 } as CSSProperties}>{eyebrow}</p>
      <h1 className="h-xl max-w-6xl"><Words text={title} /></h1>
      <div className="hero-rule mt-9 h-px bg-white/25" />
      <p className="lede hero-fade mt-7 max-w-xl text-white/80" style={{ "--i": 1 } as CSSProperties}>{description}</p>
    </div>
  </section>;
}

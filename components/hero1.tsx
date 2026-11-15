import type { CSSProperties } from "react";
import Image from "@/components/site-image";
import { ButtonLink } from "@/components/arrow";
import { Words, wordCount } from "@/components/words";

export type HomeHero = { eyebrow: string; titleFirst: string; titleEmphasis: string; titleLast: string; description: string; image: string; imageAlt: string; asideTitle: string; asideText: string };

const step = (index: number) => ({ "--i": index }) as CSSProperties;

export function Hero1({ content }: { content: HomeHero }) {
  const first = wordCount(content.titleFirst);
  const emphasis = wordCount(content.titleEmphasis);
  return (
    <section className="hero-enter relative isolate flex min-h-[calc(100svh-var(--header-h))] flex-col justify-end overflow-hidden bg-[#071d34] text-white">
      <div className="parallax" data-parallax>
        <Image src={content.image} alt={content.imageAlt} fill priority sizes="100vw" className="hero-image object-cover object-[52%_38%]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,35,.28)_0%,rgba(4,20,35,.08)_32%,rgba(4,20,35,.9)_100%)]" />
      <div className="shell relative pb-9 pt-36 md:pb-12">
        <p className="eyebrow eyebrow-rule hero-fade mb-6 text-white/90 md:mb-8" style={step(-3)}>{content.eyebrow}</p>
        <h1 className="h-hero max-w-[1100px]">
          <Words text={content.titleFirst} /><br />
          <Words text={content.titleEmphasis} start={first} className="italic font-normal" /><Words text={content.titleLast} start={first + emphasis} />
        </h1>
        <div className="hero-rule mt-9 h-px bg-white/30 md:mt-12" />
        <div className="grid gap-7 pt-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-end lg:grid-cols-[minmax(0,34rem)_auto_minmax(0,1fr)] lg:gap-12">
          <p className="lede hero-fade max-w-lg text-white/85" style={step(1)}>{content.description}</p>
          <div className="hero-fade" style={step(2)}><ButtonLink href="/expeditions" variant="light">Explore expeditions</ButtonLink></div>
          <div className="hero-fade hidden items-end justify-end gap-8 lg:flex" style={step(3)}>
            <p className="max-w-[17rem] text-xs leading-relaxed text-white/70"><span className="eyebrow mb-2 flex text-[10px] text-white">{content.asideTitle}</span>{content.asideText}</p>
            <a href="#discover" aria-label="Scroll to discover" className="scroll-cue shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

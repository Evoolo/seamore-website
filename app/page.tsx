import type { CSSProperties } from "react";
import Link from "next/link";
import { Compass, Waves, Camera } from "lucide-react";
import { Hero1, type HomeHero } from "@/components/hero1";
import { Feature1 } from "@/components/feature1";
import { Blog1 } from "@/components/blog1";
import { Faq1 } from "@/components/faq1";
import { Cta1 } from "@/components/cta1";
import { ExpeditionCard } from "@/components/expedition-card";
import { Marquee } from "@/components/marquee";
import { Arrow, TextLink } from "@/components/arrow";
import { Words, wordCount } from "@/components/words";
import { expeditions, posts, readPage } from "@/lib/content";

type HomeContent = {
  hero: HomeHero;
  intro: { eyebrow: string; heading: string; emphasis: string; body: string };
  selected: { eyebrow: string; headingLine1: string; headingLine2: string; slugs: string[] };
  story: { eyebrow: string; heading: string; body: string; image: string; imageAlt: string };
  travel: { eyebrow: string; headingLine1: string; headingLine2: string; body: string; formats: { title: string; body: string }[] };
};

const travelIcons = [Waves, Compass, Camera];

export default function Home() {
  const content = readPage<HomeContent>("home");
  const selected = content.selected.slugs.map((slug) => expeditions.find((item) => item.slug === slug)).filter((item) => item !== undefined);
  const introWords = wordCount(content.intro.heading);

  return <main id="main">
    <Hero1 content={content.hero} />
    <Marquee items={expeditions.map((expedition) => expedition.animal)} />

    <section id="discover" className="section scroll-mt-10 bg-[#f7f9f8]">
      <div className="shell grid gap-10 lg:grid-cols-12">
        <p data-reveal="up" className="eyebrow eyebrow-rule self-start text-[#b52337] lg:col-span-3 lg:mt-4">{content.intro.eyebrow}</p>
        <div className="lg:col-span-9">
          <h2 data-scrub className="h-statement max-w-[62rem]" style={{ "--n": introWords + wordCount(content.intro.emphasis) } as CSSProperties}>
            <Words text={content.intro.heading} /><Words text={content.intro.emphasis} start={introWords} className="italic text-[#116e98]" />
          </h2>
          <div data-reveal="up" className="rule mt-12 flex flex-col gap-8 pt-8 md:mt-16 md:flex-row md:items-end md:justify-between">
            <p className="lede max-w-xl text-[#526a78]">{content.intro.body}</p>
            <TextLink href="/about" className="shrink-0 self-start md:self-auto">The Sea More story</TextLink>
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-white">
      <div className="shell">
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div><p data-reveal="up" className="eyebrow eyebrow-rule mb-6 text-[#b52337]">{content.selected.eyebrow}</p><h2 data-reveal="words" className="h-xl"><Words text={content.selected.headingLine1} /><br /><Words text={content.selected.headingLine2} start={wordCount(content.selected.headingLine1)} /></h2></div>
          <TextLink href="/expeditions" className="mb-3 self-start md:self-auto">All expeditions</TextLink>
        </div>
        <div className="grid gap-4 lg:grid-cols-[7fr_5fr]">{selected.slice(0, 2).map((expedition, index) => <ExpeditionCard key={expedition.slug} expedition={expedition} featured delay={index * 140} />)}</div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-[5fr_7fr]">{selected.slice(2, 4).map((expedition, index) => <ExpeditionCard key={expedition.slug} expedition={expedition} delay={index * 140} />)}</div>
        <p className="mt-8 max-w-xl text-xs leading-relaxed text-[#526a78]">These journeys are based on Sea More&apos;s archived expedition themes. Ask us to confirm current availability.</p>
      </div>
    </section>

    <Feature1 dark eyebrow={content.story.eyebrow} heading={content.story.heading} body={content.story.body} image={content.story.image} alt={content.story.imageAlt} href="/about" action="Discover our story" />

    <section className="section bg-[#d9eef4]">
      <div className="shell">
        <div className="mb-14 grid gap-8 md:mb-20 lg:grid-cols-12">
          <div className="lg:col-span-8"><p data-reveal="up" className="eyebrow eyebrow-rule mb-6 text-[#b52337]">{content.travel.eyebrow}</p><h2 data-reveal="words" className="h-xl"><Words text={content.travel.headingLine1} /><br /><Words text={content.travel.headingLine2} start={wordCount(content.travel.headingLine1)} /></h2></div>
          <p data-reveal="up" className="lede max-w-md self-end text-[#526a78] lg:col-span-4">{content.travel.body}</p>
        </div>
        <div data-reveal="stagger" className="grid border-t border-[#8db1c1] lg:grid-cols-3">
          {content.travel.formats.map((item, index) => {
            const Icon = travelIcons[index % travelIcons.length];
            return <Link key={item.title} href={index === 0 ? "/expeditions" : "/journeys"} className="format arrow-host flex min-h-[300px] flex-col justify-between border-b border-[#8db1c1] px-6 py-8 md:px-8 lg:min-h-[380px] lg:border-r lg:last:border-r-0 lg:first:border-l">
              <div className="flex items-center justify-between"><Icon className="format-icon size-8 stroke-[1.25] text-[#0c4d78]" /><span className="eyebrow tabular format-muted text-[#0c4d78]">0{index + 1} / 0{content.travel.formats.length}</span></div>
              <div><h3 className="h-md">{item.title}</h3><p className="format-muted mt-4 max-w-sm text-sm leading-[1.7] text-[#526a78]">{item.body}</p><span className="mt-7 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em]">{index === 0 ? "See expeditions" : "See journeys"} <Arrow className="!size-5" /></span></div>
            </Link>;
          })}
        </div>
      </div>
    </section>

    <Blog1 posts={posts} compact />
    <Faq1 />
    <Cta1 />
  </main>;
}

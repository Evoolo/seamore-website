import Link from "next/link";
import { ArrowUpRight, Compass, Waves, Camera } from "lucide-react";
import { Hero1, type HomeHero } from "@/components/hero1";
import { Feature1 } from "@/components/feature1";
import { Blog1 } from "@/components/blog1";
import { Faq1 } from "@/components/faq1";
import { Cta1 } from "@/components/cta1";
import { ExpeditionCard } from "@/components/expedition-card";
import { Reveal } from "@/components/reveal";
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

  return <main>
    <Hero1 content={content.hero} />
    <section id="discover" className="bg-[#f7f9f8] py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:px-12 lg:grid-cols-[.55fr_1.45fr] lg:gap-24 lg:px-20">
        <Reveal><p className="eyebrow flex items-center gap-3 text-[#b52337]"><span className="h-px w-9 bg-[#b52337]" /> {content.intro.eyebrow}</p></Reveal>
        <Reveal delay={100}><h2 className="font-display max-w-5xl text-[clamp(3.6rem,6.5vw,7.5rem)] leading-[.95] tracking-[-.055em]">{content.intro.heading} <em className="font-normal text-[#116e98]">{content.intro.emphasis}</em></h2><div className="mt-10 flex flex-col gap-6 border-t border-[#b7cbd2] pt-8 md:flex-row md:items-end md:justify-between"><p className="max-w-xl text-base leading-[1.7] text-[#526a78] md:text-lg">{content.intro.body}</p><Link href="/about" className="shrink-0 text-xs font-semibold uppercase tracking-[.16em] underline decoration-[#b52337] underline-offset-8">The Sea More story <ArrowUpRight className="ml-1 inline size-4" /></Link></div></Reveal>
      </div>
    </section>
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="mb-11 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow mb-5 text-[#b52337]">{content.selected.eyebrow}</p><h2 className="font-display text-[clamp(4rem,7vw,7.5rem)] leading-[.9] tracking-[-.055em]">{content.selected.headingLine1}<br />{content.selected.headingLine2}</h2></div><Link href="/expeditions" className="mb-2 text-xs font-semibold uppercase tracking-[.16em] underline decoration-[#b52337] underline-offset-8">All expeditions <ArrowUpRight className="ml-1 inline size-4" /></Link></div>
        <div className="grid gap-4 lg:grid-cols-[1.3fr_.7fr]">{selected.slice(0, 2).map((expedition, index) => <ExpeditionCard key={expedition.slug} expedition={expedition} featured={index === 0} />)}</div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">{selected.slice(2, 4).map((expedition) => <ExpeditionCard key={expedition.slug} expedition={expedition} />)}</div>
        <p className="mt-7 text-xs text-[#526a78]">These journeys are based on Sea More&apos;s archived expedition themes. Ask us to confirm current availability.</p>
      </div>
    </section>
    <Feature1 dark eyebrow={content.story.eyebrow} heading={content.story.heading} body={content.story.body} image={content.story.image} alt={content.story.imageAlt} href="/about" action="Discover our story" />
    <section className="bg-[#d9eef4] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20"><div className="mb-16 grid gap-8 lg:grid-cols-2"><div><p className="eyebrow mb-5 text-[#b52337]">{content.travel.eyebrow}</p><h2 className="font-display text-[clamp(4rem,7vw,7rem)] leading-[.9] tracking-[-.055em]">{content.travel.headingLine1}<br />{content.travel.headingLine2}</h2></div><p className="max-w-md self-end text-base leading-[1.7] text-[#526a78]">{content.travel.body}</p></div>
        <div className="grid border-t border-[#8db1c1] lg:grid-cols-3">
          {content.travel.formats.map((item, index) => {
            const Icon = travelIcons[index % travelIcons.length];
            return <Reveal key={item.title} className="border-b border-[#8db1c1] py-9 lg:border-r lg:px-8 first:lg:pl-0 last:lg:border-r-0"><div className="flex items-center justify-between"><Icon className="size-7 stroke-[1.4] text-[#0c4d78]" /><span className="eyebrow text-[#0c4d78]">0{index + 1} / 0{content.travel.formats.length}</span></div><h3 className="font-display mt-12 text-4xl leading-tight">{item.title}</h3><p className="mt-4 max-w-sm text-sm leading-[1.7] text-[#526a78]">{item.body}</p></Reveal>;
          })}
        </div>
        <Link href="/journeys" className="mt-10 inline-flex items-center gap-2 border-b-2 border-[#b52337] pb-2 text-xs font-semibold uppercase tracking-[.16em]">Explore journeys <ArrowUpRight className="size-4" /></Link>
      </div>
    </section>
    <Blog1 posts={posts} compact />
    <Faq1 />
    <Cta1 />
  </main>;
}

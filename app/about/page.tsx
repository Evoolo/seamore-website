import type { Metadata } from "next";
import Image from "@/components/site-image";
import { PageHero } from "@/components/page-hero";
import { Feature1 } from "@/components/feature1";
import { Cta1 } from "@/components/cta1";
import { Reveal } from "@/components/reveal";
import { readPage } from "@/lib/content";

type AboutContent = {
  hero: { eyebrow: string; title: string; description: string; image: string; imageAlt: string };
  origin: { eyebrow: string; heading: string; emphasis: string; paragraphs: string[] };
  approach: { eyebrow: string; heading: string; body: string; image: string; imageAlt: string };
  leader: { eyebrow: string; name: string; body: string; image: string; imageAlt: string };
  values: { eyebrow: string; heading: string; items: { title: string; body: string }[] };
};

export const metadata: Metadata = { title: "Our story", description: "The story and principles behind Sea More Expeditions: curiosity, experience and respect for wildlife." };

export default function AboutPage() {
  const content = readPage<AboutContent>("about");
  return <main>
    <PageHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} image={content.hero.image} alt={content.hero.imageAlt} />
    <section className="bg-[#f7f9f8] py-28 md:py-40"><div className="mx-auto grid max-w-[1600px] gap-12 px-6 md:px-12 lg:grid-cols-[.45fr_1fr] lg:gap-24 lg:px-20"><Reveal><p className="eyebrow text-[#b52337]">{content.origin.eyebrow}</p></Reveal><Reveal delay={100}><h2 className="font-display max-w-5xl text-[clamp(3.7rem,6.5vw,7.2rem)] leading-[.94] tracking-[-.055em]">{content.origin.heading} <em className="font-normal text-[#116e98]">{content.origin.emphasis}</em></h2><div className="mt-10 grid gap-7 text-base leading-[1.8] text-[#526a78] md:grid-cols-2">{content.origin.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></Reveal></div></section>
    <Feature1 dark reverse eyebrow={content.approach.eyebrow} heading={content.approach.heading} body={content.approach.body} image={content.approach.image} alt={content.approach.imageAlt} href="/expeditions" action="Explore expeditions" />
    <section className="bg-white py-24 md:py-32"><div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20"><p className="eyebrow mb-6 text-[#b52337]">{content.leader.eyebrow}</p><div className="grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><div className="relative aspect-[4/5] overflow-hidden bg-[#d9eef4]"><Image src={content.leader.image} alt={content.leader.imageAlt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" /></div><div><h2 className="font-display text-[clamp(4rem,7vw,7rem)] leading-[.9] tracking-[-.055em]">{content.leader.name}</h2><p className="mt-8 max-w-2xl text-lg leading-[1.7] text-[#526a78]">{content.leader.body}</p></div></div></div></section>
    <section className="bg-[#d9eef4] py-24 md:py-32"><div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20"><p className="eyebrow mb-6 text-[#b52337]">{content.values.eyebrow}</p><h2 className="font-display max-w-4xl text-[clamp(3.8rem,6.5vw,7rem)] leading-[.92] tracking-[-.055em]">{content.values.heading}</h2><div className="mt-16 grid gap-8 border-t border-[#8db1c1] pt-10 md:grid-cols-3">{content.values.items.map((item, index) => <div key={item.title}><span className="eyebrow text-[#0c4d78]">0{index + 1} / Principle</span><h3 className="font-display mt-7 text-4xl">{item.title}</h3><p className="mt-4 max-w-sm text-sm leading-[1.7] text-[#526a78]">{item.body}</p></div>)}</div></div></section>
    <Cta1 />
  </main>;
}

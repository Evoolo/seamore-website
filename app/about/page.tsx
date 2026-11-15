import type { Metadata } from "next";
import Image from "@/components/site-image";
import { PageHero } from "@/components/page-hero";
import { Feature1 } from "@/components/feature1";
import { Cta1 } from "@/components/cta1";
import { Words, wordCount } from "@/components/words";
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
  return <main id="main">
    <PageHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} image={content.hero.image} alt={content.hero.imageAlt} />
    <section className="section bg-[#f7f9f8]"><div className="shell grid gap-10 lg:grid-cols-12">
      <p data-reveal="up" className="eyebrow eyebrow-rule self-start text-[#b52337] lg:col-span-3 lg:mt-4">{content.origin.eyebrow}</p>
      <div className="lg:col-span-9">
        <h2 data-reveal="words" className="h-xl max-w-5xl"><Words text={content.origin.heading} /><br /><Words text={content.origin.emphasis} start={wordCount(content.origin.heading)} className="italic font-normal text-[#116e98]" /></h2>
        <div data-reveal="up" className="rule lede mt-12 grid gap-8 pt-9 text-[#526a78] md:mt-16 md:grid-cols-2 md:gap-12">{content.origin.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
    </div></section>
    <Feature1 dark reverse eyebrow={content.approach.eyebrow} heading={content.approach.heading} body={content.approach.body} image={content.approach.image} alt={content.approach.imageAlt} href="/expeditions" action="Explore expeditions" />
    <section className="section bg-white"><div className="shell grid gap-10 lg:grid-cols-12">
      <p data-reveal="up" className="eyebrow eyebrow-rule self-start text-[#b52337] lg:col-span-3 lg:mt-4">{content.leader.eyebrow}</p>
      <div className="grid gap-10 sm:grid-cols-[200px_1fr] sm:gap-12 lg:col-span-9 lg:grid-cols-[240px_1fr] lg:gap-16">
        <div data-reveal="clip" className="frame aspect-[2/3] w-[200px] self-start lg:w-[240px]"><Image src={content.leader.image} alt={content.leader.imageAlt} fill sizes="240px" className="image-drift object-cover" /></div>
        <div><h2 data-reveal="words" className="h-lg"><Words text={content.leader.name} /></h2><p data-reveal="up" className="lede mt-8 max-w-2xl text-[#526a78]">{content.leader.body}</p></div>
      </div>
    </div></section>
    <section className="section bg-[#d9eef4]"><div className="shell">
      <p data-reveal="up" className="eyebrow eyebrow-rule mb-6 text-[#b52337]">{content.values.eyebrow}</p>
      <h2 data-reveal="words" className="h-xl max-w-5xl"><Words text={content.values.heading} /></h2>
      <div data-reveal="stagger" style={{ "--rule": "#8db1c1" } as React.CSSProperties} className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">{content.values.items.map((item, index) => <div key={item.title} className="border-t border-[#8db1c1] pt-7"><span className="eyebrow tabular text-[#0c4d78]">0{index + 1} / Principle</span><h3 className="h-md mt-8">{item.title}</h3><p className="mt-4 max-w-sm text-sm leading-[1.7] text-[#526a78]">{item.body}</p></div>)}</div>
    </div></section>
    <Cta1 />
  </main>;
}

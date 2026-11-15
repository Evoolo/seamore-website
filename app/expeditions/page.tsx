import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ExpeditionCard } from "@/components/expedition-card";
import { Cta1 } from "@/components/cta1";
import { Words } from "@/components/words";
import { expeditions, readPage } from "@/lib/content";

export const metadata: Metadata = { title: "Expeditions", description: "Explore Sea More's wildlife-led expedition themes, from whale sharks and orcas to sharks, rays and crocodiles." };

export default function ExpeditionsPage() {
  const content = readPage<{ hero: { eyebrow: string; title: string; description: string; image: string; imageAlt: string }; intro: { heading: string; body: string } }>("expeditions");
  return <main id="main"><PageHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} image={content.hero.image} alt={content.hero.imageAlt} />
    <section className="section bg-[#f7f9f8]"><div className="shell">
      <div className="mb-12 grid gap-8 md:mb-16 lg:grid-cols-12"><h2 data-reveal="words" className="h-lg lg:col-span-8"><Words text={content.intro.heading} /></h2><p data-reveal="up" className="lede max-w-md self-end text-[#526a78] lg:col-span-4">{content.intro.body}</p></div>
      <div className="grid gap-4 md:grid-cols-2">{expeditions.map((expedition, index) => <ExpeditionCard key={expedition.slug} expedition={expedition} delay={(index % 2) * 140} />)}</div>
    </div></section>
    <Cta1 />
  </main>;
}

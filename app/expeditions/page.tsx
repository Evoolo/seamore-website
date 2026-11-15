import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ExpeditionCard } from "@/components/expedition-card";
import { Cta1 } from "@/components/cta1";
import { expeditions, readPage } from "@/lib/content";

export const metadata: Metadata = { title: "Expeditions", description: "Explore Sea More's wildlife-led expedition themes, from whale sharks and orcas to sharks, rays and crocodiles." };

export default function ExpeditionsPage() {
  const content = readPage<{ hero: { eyebrow: string; title: string; description: string; image: string; imageAlt: string }; intro: { heading: string; body: string } }>("expeditions");
  return <main><PageHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} image={content.hero.image} alt={content.hero.imageAlt} />
    <section className="bg-[#f7f9f8] py-24 md:py-32"><div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20"><div className="mb-12 grid gap-8 border-b border-[#b7cbd2] pb-10 lg:grid-cols-2"><h2 className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-[.92] tracking-[-.055em]">{content.intro.heading}</h2><p className="max-w-md self-end text-base leading-[1.7] text-[#526a78]">{content.intro.body}</p></div><div className="grid gap-4 md:grid-cols-2">{expeditions.map((expedition) => <ExpeditionCard key={expedition.slug} expedition={expedition} />)}</div></div></section>
    <Cta1 />
  </main>;
}

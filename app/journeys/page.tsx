import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { JourneyCard } from "@/components/journey-card";
import { Cta1 } from "@/components/cta1";
import { Words } from "@/components/words";
import { journeys, readPage } from "@/lib/content";

export const metadata: Metadata = { title: "Journeys", description: "Custom and private wildlife-led journey ideas from Sea More Expeditions." };

export default function JourneysPage() {
  const content = readPage<{ hero: { eyebrow: string; title: string; description: string; image: string; imageAlt: string }; intro: { heading: string; body: string } }>("journeys");
  return <main id="main">
    <PageHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} image={content.hero.image} alt={content.hero.imageAlt} />
    <section className="section bg-[#f7f9f8]"><div className="shell">
      <div className="mb-12 grid gap-8 md:mb-16 lg:grid-cols-12"><h2 data-reveal="words" className="h-lg lg:col-span-8"><Words text={content.intro.heading} /></h2><p data-reveal="up" className="lede max-w-md self-end text-[#526a78] lg:col-span-4">{content.intro.body}</p></div>
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">{journeys.map((journey, index) => <JourneyCard key={journey.slug} journey={journey} delay={(index % 2) * 140} />)}</div>
    </div></section>
    <Cta1 />
  </main>;
}

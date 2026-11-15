import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/arrow";
import { Words } from "@/components/words";
import { PageHero } from "@/components/page-hero";
import { JourneyCard } from "@/components/journey-card";
import { Cta1 } from "@/components/cta1";
import { journeys } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return journeys.map((journey) => ({ slug: journey.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const journey = journeys.find((item) => item.slug === slug);
  return { title: journey?.title ?? "Journey", description: journey?.intro };
}

export default async function JourneyPage({ params }: Props) {
  const { slug } = await params;
  const journey = journeys.find((item) => item.slug === slug);
  if (!journey) notFound();
  const related = journeys.filter((item) => item.slug !== slug).slice(0, 2);
  return <main id="main">
    <PageHero eyebrow={`${journey.type} / ${journey.place}`} title={journey.title} description={journey.intro} image={journey.image} alt={journey.alt} back={{ href: "/journeys", label: "All journeys" }} />
    <section className="section bg-[#f7f9f8]"><div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
      <div data-reveal="up" className="lg:col-span-4"><p className="eyebrow eyebrow-rule mb-6 text-[#b52337]">{journey.type}</p><p className="h-md">{journey.place}</p></div>
      <div className="lg:col-span-8">
        <h2 data-reveal="words" className="h-lg"><Words text="Shape the experience together." /></h2>
        <p data-reveal="up" className="lede mt-9 max-w-2xl text-[#526a78]">{journey.description}</p>
        <div data-reveal="stagger" className="mt-12 grid gap-8 md:grid-cols-3">{journey.highlights.map((highlight, index) => <div key={highlight} className="border-t border-[#b7cbd2] pt-6"><span className="eyebrow tabular text-[#b52337]">0{index + 1} / Focus</span><p className="font-display mt-4 text-2xl leading-tight">{highlight}</p></div>)}</div>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-[#526a78]">This is a journey concept. Dates, inclusions and availability are confirmed directly; wildlife encounters cannot be guaranteed.</p>
        <ButtonLink href="/contact" className="mt-9">Ask about this journey</ButtonLink>
      </div>
    </div></section>
    {related.length > 0 && <section className="section bg-white"><div className="shell"><p data-reveal="up" className="eyebrow eyebrow-rule mb-6 text-[#b52337]">Keep exploring</p><h2 data-reveal="words" className="h-lg mb-12 md:mb-16"><Words text="Another way to travel." /></h2><div className="grid gap-x-8 gap-y-16 md:grid-cols-2">{related.map((item, index) => <JourneyCard key={item.slug} journey={item} delay={index * 140} />)}</div></div></section>}
    <Cta1 />
  </main>;
}

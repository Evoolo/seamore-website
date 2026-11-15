import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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
  return <main>
    <PageHero eyebrow={`${journey.type} / ${journey.place}`} title={journey.title} description={journey.intro} image={journey.image} alt={journey.alt} />
    <section className="bg-[#f7f9f8] py-24 md:py-32"><div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:px-12 lg:grid-cols-[.55fr_1.45fr] lg:gap-24 lg:px-20"><div><Link href="/journeys" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-[#b52337]"><ArrowLeft className="size-4" /> All journeys</Link><p className="eyebrow mt-12 text-[#0c4d78]">{journey.type}</p><p className="font-display mt-3 text-4xl">{journey.place}</p></div><div><h2 className="font-display text-[clamp(3.6rem,6vw,6.2rem)] leading-[.94] tracking-[-.05em]">Shape the experience together.</h2><p className="mt-9 max-w-2xl text-lg leading-[1.75] text-[#526a78]">{journey.description}</p><div className="mt-12 grid gap-6 border-t border-[#b7cbd2] pt-8 md:grid-cols-3">{journey.highlights.map((highlight, index) => <div key={highlight}><span className="eyebrow text-[#b52337]">0{index + 1} / Focus</span><p className="font-display mt-3 text-2xl leading-tight">{highlight}</p></div>)}</div><p className="mt-10 max-w-2xl text-sm leading-relaxed text-[#526a78]">This is a journey concept. Dates, inclusions and availability are confirmed directly; wildlife encounters cannot be guaranteed.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 border-b-2 border-[#b52337] pb-2 text-xs font-semibold uppercase tracking-[.16em]">Ask about this journey <ArrowUpRight className="size-4" /></Link></div></div></section>
    {related.length > 0 && <section className="bg-white py-24 md:py-32"><div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20"><p className="eyebrow mb-5 text-[#b52337]">Keep exploring</p><h2 className="font-display mb-12 text-[clamp(3.5rem,6vw,6rem)] leading-[.9] tracking-[-.05em]">Another way to travel.</h2><div className="grid gap-6 md:grid-cols-2">{related.map((item) => <JourneyCard key={item.slug} journey={item} />)}</div></div></section>}
    <Cta1 />
  </main>;
}

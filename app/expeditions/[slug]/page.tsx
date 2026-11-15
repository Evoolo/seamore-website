import type { Metadata } from "next";
import Image from "@/components/site-image";
import { notFound } from "next/navigation";
import { ButtonLink, TextLink } from "@/components/arrow";
import { PageHero } from "@/components/page-hero";
import { Words } from "@/components/words";
import { Cta1 } from "@/components/cta1";
import { ExpeditionCard } from "@/components/expedition-card";
import { expeditions } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return expeditions.map((expedition) => ({ slug: expedition.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const expedition = expeditions.find((item) => item.slug === slug);
  return { title: expedition?.title ?? "Expedition", description: expedition?.intro };
}

export default async function ExpeditionPage({ params }: Props) {
  const { slug } = await params;
  const expedition = expeditions.find((item) => item.slug === slug);
  if (!expedition) notFound();
  const related = expeditions.filter((item) => item.slug !== slug).slice(0, 2);

  return <main id="main">
    <PageHero eyebrow={`${expedition.number} / ${expedition.place}`} title={expedition.title} description={expedition.intro} image={expedition.image} alt={expedition.alt} back={{ href: "/expeditions", label: "All expeditions" }} />
    <section className="section bg-[#f7f9f8]"><div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
      <div data-reveal="up" className="lg:col-span-4"><p className="eyebrow eyebrow-rule mb-6 text-[#b52337]">The journey</p><p className="h-md">{expedition.animal}<br /><span className="text-[#116e98]">{expedition.place}</span></p></div>
      <div className="lg:col-span-8">
        <h2 data-reveal="words" className="h-lg max-w-3xl"><Words text="A closer look changes everything." /></h2>
        <p data-reveal="up" className="lede mt-9 max-w-2xl text-[#526a78]">{expedition.description}</p>
        <div data-reveal="stagger" className="mt-12 grid gap-8 sm:grid-cols-3">{expedition.details.map((detail, index) => <div key={detail} className="border-t border-[#b7cbd2] pt-6"><span className="eyebrow tabular text-[#b52337]">0{index + 1} / Focus</span><p className="font-display mt-4 text-2xl leading-tight">{detail}</p></div>)}</div>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-[#526a78]">This expedition theme comes from Sea More&apos;s original site. Dates, inclusions and availability are confirmed directly; wildlife encounters cannot be guaranteed.</p>
        <ButtonLink href="/contact" className="mt-9">Ask about this journey</ButtonLink>
      </div>
    </div></section>
    <section className="bg-[#f7f9f8] pb-4"><div className="shell grid gap-4 lg:grid-cols-[7fr_5fr]">{expedition.gallery.map((image, index) => <div key={image.src + index} data-reveal="clip" style={{ "--d": `${index * 140}ms` } as React.CSSProperties} className="frame group aspect-[4/3] lg:aspect-auto lg:h-[min(72svh,640px)]"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 58vw" className="image-drift object-cover" /></div>)}</div></section>
    <section className="section bg-[#f7f9f8]"><div className="shell">
      <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end"><div><p data-reveal="up" className="eyebrow eyebrow-rule mb-6 text-[#b52337]">Keep exploring</p><h2 data-reveal="words" className="h-lg"><Words text="Another way into the wild." /></h2></div><TextLink href="/expeditions" className="mb-2 self-start md:self-auto">See every expedition</TextLink></div>
      <div className="grid gap-4 md:grid-cols-2">{related.map((item, index) => <ExpeditionCard expedition={item} key={item.slug} delay={index * 140} />)}</div>
    </div></section>
    <Cta1 />
  </main>;
}

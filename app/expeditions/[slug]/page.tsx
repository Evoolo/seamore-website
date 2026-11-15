import type { Metadata } from "next";
import Image from "@/components/site-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

  return <main>
    <section className="relative isolate flex min-h-[740px] items-end overflow-hidden bg-[#071d34] text-white">
      <Image src={expedition.image} alt={expedition.alt} fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071d34] via-[#071d34]/45 to-transparent" />
      <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-12 lg:px-20 lg:pb-20"><Link href="/expeditions" className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.17em] text-white/85 transition hover:text-white"><ArrowLeft className="size-4" /> All expeditions</Link><p className="eyebrow mb-7 text-[#ff5a61]">{expedition.number} / {expedition.place}</p><h1 className="font-display max-w-5xl text-[clamp(5rem,10vw,10rem)] leading-[.84] tracking-[-.06em]">{expedition.title}</h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">{expedition.intro}</p></div>
    </section>
    <section className="bg-[#f7f9f8] py-24 md:py-32"><div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:px-12 lg:grid-cols-[.62fr_1.38fr] lg:gap-28 lg:px-20"><div><p className="eyebrow mb-5 text-[#b52337]">The journey</p><p className="font-display text-4xl leading-tight">{expedition.animal}<br /><span className="text-[#116e98]">{expedition.place}</span></p></div><div><h2 className="font-display max-w-3xl text-[clamp(3.6rem,6vw,6.2rem)] leading-[.94] tracking-[-.05em]">A closer look changes everything.</h2><p className="mt-9 max-w-2xl text-lg leading-[1.75] text-[#526a78]">{expedition.description}</p><div className="mt-10 grid gap-4 border-t border-[#b7cbd2] pt-7 sm:grid-cols-3">{expedition.details.map((detail, index) => <div key={detail}><span className="eyebrow block text-[#b52337]">0{index + 1} / Focus</span><p className="font-display mt-3 text-2xl">{detail}</p></div>)}</div><p className="mt-9 max-w-2xl text-sm leading-relaxed text-[#526a78]">This expedition theme comes from Sea More&apos;s original site. Dates, inclusions and availability are confirmed directly; wildlife encounters cannot be guaranteed.</p><Link href="/contact" className="mt-9 inline-flex items-center gap-2 border-b-2 border-[#b52337] pb-2 text-xs font-semibold uppercase tracking-[.16em]">Ask about this journey <ArrowUpRight className="size-4" /></Link></div></div></section>
    <section className="bg-white py-4"><div className="mx-auto grid max-w-[1600px] gap-4 px-6 md:px-12 lg:grid-cols-2 lg:px-20">{expedition.gallery.map((image, index) => <div key={image.src + index} className="relative aspect-[4/3] overflow-hidden bg-[#d9eef4]"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>)}</div></section>
    <section className="bg-white py-24 md:py-32"><div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20"><div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#b7cbd2] pb-9 md:flex-row md:items-end"><div><p className="eyebrow mb-5 text-[#b52337]">Keep exploring</p><h2 className="font-display text-[clamp(3.5rem,6vw,6.2rem)] leading-[.9] tracking-[-.05em]">Another way into the wild.</h2></div><Link href="/expeditions" className="text-xs font-semibold uppercase tracking-[.16em] underline decoration-[#b52337] underline-offset-8">See every expedition</Link></div><div className="grid gap-4 md:grid-cols-2">{related.map((item) => <ExpeditionCard expedition={item} key={item.slug} />)}</div></div></section>
    <Cta1 />
  </main>;
}

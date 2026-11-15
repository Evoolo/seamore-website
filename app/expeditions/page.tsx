import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ExpeditionCard } from "@/components/expedition-card";
import { Cta1 } from "@/components/cta1";
import { expeditions } from "@/lib/content";

export const metadata: Metadata = { title: "Expeditions", description: "Explore Sea More's wildlife-led expedition themes, from whale sharks and orcas to sharks, rays and crocodiles." };

export default function ExpeditionsPage() {
  return <main><PageHero eyebrow="Explore the extraordinary" title="Follow the wild." description="Journeys planned around the animals, with the ocean always free to surprise us." image="/media/tiger-shark.jpg" alt="Tiger shark moving through blue water" />
    <section className="bg-[#f7f9f8] py-24 md:py-32"><div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20"><div className="mb-12 grid gap-8 border-b border-[#b7cbd2] pb-10 lg:grid-cols-2"><h2 className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-[.92] tracking-[-.055em]">The encounters<br />worth traveling for.</h2><p className="max-w-md self-end text-base leading-[1.7] text-[#526a78]">Each theme draws on Sea More&apos;s original expeditions. It is a starting point for a conversation, not a current schedule or a promise of a sighting.</p></div><div className="grid gap-4 md:grid-cols-2">{expeditions.map((expedition) => <ExpeditionCard key={expedition.slug} expedition={expedition} />)}</div></div></section>
    <Cta1 />
  </main>;
}

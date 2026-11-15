import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { readPage } from "@/lib/content";

type ContactContent = {
  hero: { eyebrow: string; title: string; description: string; image: string; imageAlt: string };
  contact: { eyebrow: string; heading: string; body: string; email: string };
  prompts: { eyebrow: string; items: { title: string; body: string }[]; note: string };
};

export const metadata: Metadata = { title: "Contact", description: "Talk with Sea More Expeditions about a wildlife-led journey, custom itinerary or private expedition." };

export default function ContactPage() {
  const content = readPage<ContactContent>("contact");
  return <main>
    <PageHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} image={content.hero.image} alt={content.hero.imageAlt} compact />
    <section className="bg-[#f7f9f8] py-24 md:py-32"><div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:px-12 lg:grid-cols-[.9fr_1.1fr] lg:px-20"><div><p className="eyebrow mb-6 text-[#b52337]">{content.contact.eyebrow}</p><h2 className="font-display max-w-3xl text-[clamp(4rem,7vw,7.5rem)] leading-[.9] tracking-[-.055em]">{content.contact.heading}</h2><p className="mt-10 max-w-xl text-lg leading-[1.7] text-[#526a78]">{content.contact.body}</p><a href={`mailto:${content.contact.email}?subject=Sea%20More%20journey%20inquiry`} className="mt-10 inline-flex items-center gap-3 border-b-2 border-[#b52337] pb-2 text-lg font-semibold transition hover:text-[#b52337] sm:text-2xl"><Mail className="size-5" /> {content.contact.email} <ArrowUpRight className="size-5" /></a></div><ContactForm recipient={content.contact.email} /></div></section>
    <section className="bg-[#d9eef4] py-20"><div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20"><p className="eyebrow mb-9 text-[#0c4d78]">{content.prompts.eyebrow}</p><ol className="grid gap-8 md:grid-cols-3">{content.prompts.items.map((item, index) => <li key={item.title} className="border-t border-[#8db1c1] pt-5"><span className="eyebrow text-[#0c4d78]">0{index + 1}</span><h3 className="font-display mt-3 text-3xl">{item.title}</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-[#526a78]">{item.body}</p></li>)}</ol><p className="mt-12 text-xs leading-relaxed text-[#526a78]">{content.prompts.note}</p></div></section>
  </main>;
}

import type { Metadata } from "next";
import { Arrow } from "@/components/arrow";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Words } from "@/components/words";
import { readPage } from "@/lib/content";

type ContactContent = {
  hero: { eyebrow: string; title: string; description: string; image: string; imageAlt: string };
  contact: { eyebrow: string; heading: string; body: string; email: string };
  prompts: { eyebrow: string; items: { title: string; body: string }[]; note: string };
};

export const metadata: Metadata = { title: "Contact", description: "Talk with Sea More Expeditions about a wildlife-led journey, custom itinerary or private expedition." };

export default function ContactPage() {
  const content = readPage<ContactContent>("contact");
  return <main id="main">
    <PageHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} image={content.hero.image} alt={content.hero.imageAlt} compact />
    <section className="section bg-[#f7f9f8]"><div className="shell grid gap-16 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        <p data-reveal="up" className="eyebrow eyebrow-rule mb-6 text-[#b52337]">{content.contact.eyebrow}</p>
        <h2 data-reveal="words" className="h-lg max-w-xl"><Words text={content.contact.heading} /></h2>
        <div data-reveal="up" style={{ "--d": "150ms" } as React.CSSProperties}>
          <p className="lede mt-9 max-w-md text-[#526a78]">{content.contact.body}</p>
          <a href={`mailto:${content.contact.email}?subject=Sea%20More%20journey%20inquiry`} className="text-link mt-10 !text-base !normal-case !tracking-normal sm:!text-xl"><span>{content.contact.email}</span><Arrow /></a>
        </div>
      </div>
      <div className="lg:col-span-6 lg:col-start-7"><ContactForm recipient={content.contact.email} /></div>
    </div></section>
    <section className="section bg-[#d9eef4]"><div className="shell">
      <p data-reveal="up" className="eyebrow eyebrow-rule mb-10 text-[#0c4d78]">{content.prompts.eyebrow}</p>
      <ol data-reveal="stagger" className="grid gap-10 md:grid-cols-3 md:gap-8">{content.prompts.items.map((item, index) => <li key={item.title} className="border-t border-[#8db1c1] pt-6"><span className="eyebrow tabular text-[#0c4d78]">0{index + 1}</span><h3 className="h-md mt-5">{item.title}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-[#526a78]">{item.body}</p></li>)}</ol>
      <p className="mt-14 max-w-2xl text-xs leading-relaxed text-[#526a78]">{content.prompts.note}</p>
    </div></section>
  </main>;
}

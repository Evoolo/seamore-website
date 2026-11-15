// Adapted from @shadcnblocks/faq1 for Sea More Expeditions.
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/lib/content";

export function Faq1() {
  return <section className="bg-white py-24 md:py-32">
    <div className="mx-auto grid max-w-[1600px] gap-12 px-6 md:px-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:px-20">
      <div><p className="eyebrow mb-5 text-[#b52337]">Before you go</p><h2 className="font-display text-[clamp(3.8rem,6vw,6.5rem)] leading-[.9] tracking-[-.055em]">Good questions.<br />Clear answers.</h2></div>
      <Accordion type="single" collapsible className="border-t border-[#9fb6c0]">
        {faqItems.map((item) => <AccordionItem key={item.id} value={item.id} className="border-[#9fb6c0] py-2">
          <AccordionTrigger className="font-display py-5 text-left text-2xl leading-tight hover:no-underline md:text-3xl">{item.question}</AccordionTrigger>
          <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-[#526a78]">{item.answer}</AccordionContent>
        </AccordionItem>)}
      </Accordion>
    </div>
  </section>;
}

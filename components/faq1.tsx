import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Words, wordCount } from "@/components/words";
import { faqItems, readPage } from "@/lib/content";

export function Faq1() {
  const content = readPage<{ eyebrow: string; headingLine1: string; headingLine2: string }>("faq");
  return <section className="section bg-white">
    <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        <p data-reveal="up" className="eyebrow eyebrow-rule mb-6 text-[#b52337]">{content.eyebrow}</p>
        <h2 data-reveal="words" className="h-lg lg:sticky lg:top-28"><Words text={content.headingLine1} /><br /><Words text={content.headingLine2} start={wordCount(content.headingLine1)} /></h2>
      </div>
      <Accordion type="single" collapsible data-reveal="stagger" className="border-b border-[#b7cbd2] lg:col-span-7">
        {faqItems.map((item, index) => <AccordionItem key={`${index}-${item.question}`} value={`faq-${index}`} className="border-b-0 border-t border-[#b7cbd2]">
          <AccordionTrigger className="font-display items-center gap-6 rounded-none py-6 text-left text-2xl font-medium leading-tight tracking-[-.01em] hover:no-underline md:py-7 md:text-[1.9rem]"><span className="flex gap-6"><span className="tabular mt-2 hidden font-sans text-[11px] font-semibold tracking-[.16em] text-[#b52337] sm:block">0{index + 1}</span>{item.question}</span></AccordionTrigger>
          <AccordionContent className="max-w-2xl pb-8 text-base leading-[1.7] text-[#526a78] sm:pl-[2.9rem]">{item.answer}</AccordionContent>
        </AccordionItem>)}
      </Accordion>
    </div>
  </section>;
}

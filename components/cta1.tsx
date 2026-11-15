import Image from "@/components/site-image";
import { ButtonLink } from "@/components/arrow";
import { Words, wordCount } from "@/components/words";
import { readPage } from "@/lib/content";

export function Cta1() {
  const content = readPage<{ eyebrow: string; headingLine1: string; headingEmphasis: string; headingLine2: string; body: string; image: string; imageAlt: string }>("cta");
  const first = wordCount(content.headingLine1);
  return <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-[#071d34] py-28 text-white lg:min-h-[86svh]">
    <div className="parallax" data-parallax><Image src={content.image} alt={content.imageAlt} fill sizes="100vw" className="object-cover object-[65%_45%] opacity-55" /></div>
    <div className="absolute inset-0 bg-gradient-to-r from-[#071d34] via-[#071d34]/80 to-[#071d34]/15" />
    <div className="shell relative">
      <p data-reveal="up" className="eyebrow eyebrow-rule mb-8 text-[#ff5a61]">{content.eyebrow}</p>
      <h2 data-reveal="words" className="h-xl max-w-5xl"><Words text={content.headingLine1} /><br /><Words text={content.headingEmphasis} start={first} className="italic font-normal" /><Words text={content.headingLine2} start={first + wordCount(content.headingEmphasis)} /></h2>
      <div data-reveal="up" style={{ "--d": "250ms" } as React.CSSProperties} className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-12">
        <p className="lede max-w-sm text-white/75">{content.body}</p>
        <ButtonLink href="/contact" variant="light">Start a conversation</ButtonLink>
      </div>
    </div>
  </section>;
}

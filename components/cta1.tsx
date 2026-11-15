// Adapted from @shadcnblocks/cta1 for Sea More Expeditions.
import Image from "@/components/site-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { readPage } from "@/lib/content";

export function Cta1() {
  const content = readPage<{ eyebrow: string; headingLine1: string; headingEmphasis: string; headingLine2: string; body: string; image: string; imageAlt: string }>("cta");
  return <section className="relative isolate flex min-h-[670px] items-center overflow-hidden bg-[#071d34] py-24 text-white">
    <Image src={content.image} alt={content.imageAlt} fill sizes="100vw" className="object-cover object-[65%_45%] opacity-50" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#071d34] via-[#071d34]/85 to-[#071d34]/20" />
    <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-20">
      <p className="eyebrow mb-7 text-[#ff5a61]">{content.eyebrow}</p>
      <h2 className="font-display max-w-4xl text-[clamp(4.8rem,9vw,10rem)] leading-[.85] tracking-[-.06em]">{content.headingLine1}<br /><em className="font-normal">{content.headingEmphasis}</em> {content.headingLine2}</h2>
      <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:gap-12">
        <p className="max-w-sm text-base leading-relaxed text-white/75">{content.body}</p>
        <Button asChild size="lg" className="h-12 rounded-none bg-white px-6 text-[#071d34] hover:bg-[#d9eef4]"><Link href="/contact">Start a conversation <ArrowUpRight className="ml-2 size-4" /></Link></Button>
      </div>
    </div>
  </section>;
}

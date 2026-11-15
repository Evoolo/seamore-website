// Adapted from @shadcnblocks/feature1 for Sea More Expeditions.
import Image from "@/components/site-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

type Feature1Props = {
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  alt: string;
  href: string;
  action: string;
  dark?: boolean;
  reverse?: boolean;
};

export function Feature1({ eyebrow, heading, body, image, alt, href, action, dark = false, reverse = false }: Feature1Props) {
  return (
    <section className={dark ? "bg-[#071d34] text-white" : "bg-[#f7f9f8] text-[#071d34]"}>
      <div className={`mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-24 md:px-12 lg:min-h-[780px] lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-28 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4] lg:aspect-[4/5]">
          <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="image-drift object-cover" />
          <div className="absolute bottom-5 left-5 border border-white/60 bg-[#071d34]/65 px-3 py-2 text-[10px] font-semibold uppercase tracking-[.2em] text-white backdrop-blur-sm">In the field / Sea More</div>
        </Reveal>
        <Reveal className="max-w-xl" delay={120}>
          <p className={`mb-7 text-[11px] font-semibold uppercase tracking-[.24em] ${dark ? "text-[#ff5a61]" : "text-[#b52337]"}`}>{eyebrow}</p>
          <h2 className="font-display mb-7 text-[clamp(3.8rem,6vw,7rem)] leading-[.89] tracking-[-.055em]">{heading}</h2>
          <p className={`mb-10 max-w-lg text-lg leading-[1.65] ${dark ? "text-white/70" : "text-[#526a78]"}`}>{body}</p>
          <Button asChild variant="outline" size="lg" className={`h-12 rounded-none border-current bg-transparent px-6 ${dark ? "text-white hover:bg-white hover:text-[#071d34]" : "text-[#071d34] hover:bg-[#071d34] hover:text-white"}`}>
            <Link href={href}>{action} <ArrowUpRight className="ml-2 size-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

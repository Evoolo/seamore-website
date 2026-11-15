// Adapted from @shadcnblocks/cta1 for Sea More Expeditions.
import Image from "@/components/site-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta1() {
  return <section className="relative isolate flex min-h-[670px] items-center overflow-hidden bg-[#071d34] py-24 text-white">
    <Image src="/media/tiger-shark.jpg" alt="Tiger shark swimming near divers" fill sizes="100vw" className="object-cover object-[65%_45%] opacity-50" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#071d34] via-[#071d34]/85 to-[#071d34]/20" />
    <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-20">
      <p className="eyebrow mb-7 text-[#ff5a61]">Your next story begins here</p>
      <h2 className="font-display max-w-4xl text-[clamp(4.8rem,9vw,10rem)] leading-[.85] tracking-[-.06em]">Where would<br /><em className="font-normal">you</em> go?</h2>
      <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:gap-12">
        <p className="max-w-sm text-base leading-relaxed text-white/75">Tell us the animal, the place or the feeling you want to follow. We can start shaping the journey together.</p>
        <Button asChild size="lg" className="h-12 rounded-none bg-white px-6 text-[#071d34] hover:bg-[#d9eef4]"><Link href="/contact">Start a conversation <ArrowUpRight className="ml-2 size-4" /></Link></Button>
      </div>
    </div>
  </section>;
}

// Adapted from @shadcnblocks/hero1 for Sea More Expeditions.
import Image from "@/components/site-image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero1() {
  return (
    <section className="hero-stage relative isolate flex min-h-[calc(100svh-84px)] items-end overflow-hidden bg-[#071d34] text-white">
      <Image
        src="/media/hero-whale-shark.jpg"
        alt="Whale shark moving through clear blue water"
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover object-[52%_38%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,35,.10)_15%,rgba(4,20,35,.10)_40%,rgba(4,20,35,.82)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#071d34]/35 to-transparent" />
      <div className="relative mx-auto grid w-full max-w-[1600px] gap-10 px-6 pb-12 pt-48 md:px-12 md:pb-16 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end lg:px-20 lg:pb-20">
        <div className="hero-copy-enter max-w-5xl">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.26em] text-white/85 md:mb-8">
            <span className="h-px w-10 bg-[#ff5a61]" /> Wildlife-led expeditions
          </p>
          <h1 className="font-display max-w-[950px] text-[clamp(4.7rem,12vw,11.4rem)] leading-[.78] tracking-[-.065em]">
            See more.<br /><span className="italic font-normal">Understand</span> more.
          </h1>
          <div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-end sm:gap-10">
            <p className="max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
              Go where the wildlife is. Travel with people who know the water, and return with a new way of seeing it.
            </p>
            <Button asChild size="lg" className="h-12 shrink-0 rounded-none bg-white px-6 text-[#071d34] hover:bg-[#d9eef4]">
              <Link href="/expeditions">Explore expeditions <ArrowUpRight className="ml-2 size-4" /></Link>
            </Button>
          </div>
        </div>
        <div className="hidden border-l border-white/35 pl-6 text-xs leading-relaxed text-white/75 lg:block">
          <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[.22em] text-white">01 / The encounter</span>
          Wild places cannot be scheduled. A considered journey gives you the best chance to meet them on their own terms.
        </div>
      </div>
      <a href="#discover" aria-label="Scroll to discover" className="absolute bottom-5 right-6 hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[.22em] text-white/80 transition hover:text-white md:flex lg:right-20">
        Scroll to discover <ArrowDown className="size-3 animate-bounce" />
      </a>
    </section>
  );
}

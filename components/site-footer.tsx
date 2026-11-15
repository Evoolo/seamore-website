import Image from "@/components/site-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return <footer className="bg-[#f7f9f8] text-[#071d34]">
    <div className="mx-auto max-w-[1600px] px-6 pb-8 pt-20 md:px-12 lg:px-20">
      <div className="grid gap-14 border-b border-[#b7cbd2] pb-20 md:grid-cols-[1.35fr_.65fr_.65fr]">
        <div><Image src="/media/logo.png" alt="Sea More Expeditions" width={340} height={69} className="h-auto w-[260px] md:w-[320px]" /><p className="mt-8 max-w-sm text-base leading-relaxed text-[#526a78]">Wildlife-led journeys for people who want to see more, understand more, and travel with care.</p></div>
        <div><p className="eyebrow mb-7 text-[#b52337]">Explore</p><div className="grid gap-4 text-sm"><Link className="footer-link" href="/expeditions">Expeditions</Link><Link className="footer-link" href="/about">Our story</Link><Link className="footer-link" href="/blog">Journal</Link></div></div>
        <div><p className="eyebrow mb-7 text-[#b52337]">Start a conversation</p><a href="mailto:info@seamoreexpeditions.com" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-[#b52337] underline-offset-8">info@seamoreexpeditions.com <ArrowUpRight className="size-4" /></a><p className="mt-6 text-sm leading-relaxed text-[#526a78]">Tell us what you hope to encounter. We&apos;ll help shape the journey.</p></div>
      </div>
      <div className="flex flex-col justify-between gap-5 pt-6 text-xs text-[#526a78] md:flex-row"><p>© {new Date().getFullYear()} Sea More Expeditions. Built for curiosity.</p><p>Imagery from the original Sea More site. Photographer credits remain on source images.</p></div>
    </div>
  </footer>;
}

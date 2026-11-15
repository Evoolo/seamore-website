import Image from "@/components/site-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Expedition } from "@/lib/content";

export function ExpeditionCard({ expedition, featured = false }: { expedition: Expedition; featured?: boolean }) {
  return <Link href={`/expeditions/${expedition.slug}`} className={`expedition-card group relative isolate block overflow-hidden bg-[#071d34] text-white ${featured ? "min-h-[590px]" : "min-h-[470px]"}`}>
    <Image src={expedition.image} alt={expedition.alt} fill sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 50vw"} className="image-drift object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#071d34]/95 via-[#071d34]/25 to-transparent" />
    <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-6 md:p-9">
      <div className="flex items-start justify-between text-[11px] font-semibold uppercase tracking-[.22em]"><span>{expedition.number} / Expedition</span><ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
      <div><p className="mb-4 text-[11px] font-semibold uppercase tracking-[.22em] text-[#d9eef4]">{expedition.place}</p><h3 className={`font-display max-w-[570px] leading-[.94] tracking-[-.045em] ${featured ? "text-[clamp(3.8rem,5.3vw,6.5rem)]" : "text-[clamp(3.1rem,4vw,5.3rem)]"}`}>{expedition.title}</h3><p className="mt-5 max-w-md text-sm leading-relaxed text-white/80">{expedition.intro}</p></div>
    </div>
  </Link>;
}

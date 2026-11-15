import type { CSSProperties } from "react";
import Image from "@/components/site-image";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import type { Expedition } from "@/lib/content";

export function ExpeditionCard({ expedition, featured = false, delay = 0 }: { expedition: Expedition; featured?: boolean; delay?: number }) {
  return <Link href={`/expeditions/${expedition.slug}`} data-reveal="clip" style={{ "--d": `${delay}ms` } as CSSProperties} className={`expedition-card arrow-host group relative isolate block overflow-hidden bg-[#071d34] text-white ${featured ? "min-h-[480px] lg:min-h-[620px]" : "min-h-[440px] lg:min-h-[520px]"}`}>
    <Image src={expedition.image} alt={expedition.alt} fill sizes={featured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"} className="image-drift object-cover" />
    <div className="card-shade absolute inset-0 bg-gradient-to-t from-[#071d34] via-[#071d34]/35 to-[#071d34]/20" />
    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#071d34]/80 to-transparent" />
    <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-6 md:p-9">
      <div className="flex items-start justify-between"><span className="eyebrow tabular">{expedition.number} <span className="h-px w-6 bg-white/60" /> Expedition</span><span className="card-corner grid size-11 place-items-center rounded-full border border-white/50"><Arrow /></span></div>
      <div>
        <p className="eyebrow mb-4 text-[#d9eef4]">{expedition.place}</p>
        <h3 className={`font-display balance max-w-[620px] font-medium ${featured ? "text-[clamp(2.6rem,4.6vw,5rem)] leading-[.95] tracking-[-.028em]" : "text-[clamp(2.4rem,3.6vw,4rem)] leading-[.97] tracking-[-.025em]"}`}>{expedition.title}</h3>
        <div className="card-more"><div><p className="max-w-md pt-5 text-sm leading-relaxed text-white/85">{expedition.intro}</p></div></div>
      </div>
    </div>
  </Link>;
}

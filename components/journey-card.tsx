import Image from "@/components/site-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Journey } from "@/lib/content";

export function JourneyCard({ journey }: { journey: Journey }) {
  return <Card className="group gap-0 overflow-hidden rounded-none border-0 bg-white py-0 shadow-none">
    <Link href={`/journeys/${journey.slug}`} className="block">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#d9eef4]"><Image src={journey.image} alt={journey.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="image-drift object-cover" /><span className="absolute bottom-5 left-5 bg-[#071d34] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-white">{journey.type}</span></div>
      <div className="p-7 md:p-9"><div className="flex items-start justify-between gap-6"><p className="eyebrow text-[#b52337]">{journey.place}</p><ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><h2 className="font-display mt-5 text-[clamp(2.8rem,4vw,4.5rem)] leading-[.95] tracking-[-.04em]">{journey.title}</h2><p className="mt-5 max-w-xl text-base leading-[1.7] text-[#526a78]">{journey.intro}</p></div>
    </Link>
  </Card>;
}

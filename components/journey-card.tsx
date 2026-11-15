import type { CSSProperties } from "react";
import Image from "@/components/site-image";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import type { Journey } from "@/lib/content";

export function JourneyCard({ journey, delay = 0 }: { journey: Journey; delay?: number }) {
  return <Link href={`/journeys/${journey.slug}`} className="arrow-host group block">
    <div data-reveal="clip" style={{ "--d": `${delay}ms` } as CSSProperties} className="frame aspect-[4/3]"><Image src={journey.image} alt={journey.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="image-drift object-cover" /><span className="eyebrow absolute left-5 top-5 bg-white px-3 py-2 text-[10px] text-[#071d34]">{journey.type}</span></div>
    <div className="pt-7">
      <div className="flex items-start justify-between gap-6"><p className="eyebrow text-[#b52337]">{journey.place}</p><span className="card-corner grid size-11 shrink-0 place-items-center rounded-full border border-[#9fb6c0] group-hover:!border-[#071d34] group-hover:!bg-[#071d34] group-hover:!text-white"><Arrow /></span></div>
      <h2 className="h-lg mt-2 max-w-xl">{journey.title}</h2>
      <p className="lede mt-5 max-w-xl text-[#526a78]">{journey.intro}</p>
    </div>
  </Link>;
}

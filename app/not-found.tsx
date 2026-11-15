import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <main className="flex min-h-[65svh] items-center bg-[#071d34] px-6 py-20 text-white"><div className="mx-auto w-full max-w-[1440px]"><p className="eyebrow mb-7 text-[#ff5a61]">404 / Off the map</p><h1 className="font-display max-w-3xl text-[clamp(5rem,9vw,10rem)] leading-[.85] tracking-[-.06em]">A different direction.</h1><p className="mt-8 max-w-md text-lg leading-relaxed text-white/70">We couldn&apos;t find that page. There is still plenty to explore.</p><Link href="/" className="mt-10 inline-flex items-center gap-2 border-b border-white pb-2 text-xs font-semibold uppercase tracking-[.16em]"><ArrowLeft className="size-4" /> Back to Sea More</Link></div></main>;
}

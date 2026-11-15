import { ButtonLink } from "@/components/arrow";
import { Words } from "@/components/words";

export default function NotFound() {
  return <main id="main" className="hero-enter flex min-h-[72svh] items-center bg-[#071d34] py-24 text-white"><div className="shell"><p className="eyebrow eyebrow-rule hero-fade mb-8 text-[#ff5a61]" style={{ "--i": -3 } as React.CSSProperties}>404 / Off the map</p><h1 className="h-xl max-w-4xl"><Words text="A different direction." /></h1><p className="lede hero-fade mt-9 max-w-md text-white/70" style={{ "--i": 1 } as React.CSSProperties}>We couldn&apos;t find that page. There is still plenty to explore.</p><div className="hero-fade mt-10" style={{ "--i": 2 } as React.CSSProperties}><ButtonLink href="/" variant="light">Back to Sea More</ButtonLink></div></div></main>;
}

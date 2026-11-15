import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { Words } from "@/components/words";

const links = [
  { href: "/expeditions", label: "Expeditions" },
  { href: "/journeys", label: "Journeys" },
  { href: "/about", label: "Our story" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return <footer className="overflow-hidden border-t border-white/10 bg-[#071d34] text-white">
    <div className="shell pb-8 pt-20 md:pt-28">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p className="font-display max-w-md text-[clamp(1.9rem,2.8vw,2.75rem)] leading-[1.08] tracking-[-.018em]">Wildlife-led journeys for people who want to see more, understand more, and travel with care.</p>
        </div>
        <div className="lg:col-span-2 lg:col-start-8"><p className="eyebrow mb-7 text-[#ff5a61]">Explore</p><div className="grid gap-3.5 text-[15px] text-white/85">{links.map((link) => <Link key={link.href} className="footer-link" href={link.href}>{link.label}</Link>)}</div></div>
        <div className="lg:col-span-3"><p className="eyebrow mb-7 text-[#ff5a61]">Start a conversation</p><a href="mailto:info@seamoreexpeditions.com" className="text-link on-dark !text-[13px] !normal-case !tracking-normal sm:!text-[15px]"><span>info@seamoreexpeditions.com</span><Arrow /></a><p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">Tell us what you hope to encounter. We&apos;ll help shape the journey.</p></div>
      </div>
      <p data-reveal="words" aria-hidden="true" className="font-display footer-mark mt-20 select-none whitespace-nowrap font-medium text-white/[.07] md:mt-28"><Words text="Sea More" /></p>
      <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/55 md:flex-row"><p>© {new Date().getFullYear()} Sea More Expeditions. Built for curiosity.</p><p>Imagery from the original Sea More site. Photographer credits remain on source images.</p></div>
    </div>
  </footer>;
}

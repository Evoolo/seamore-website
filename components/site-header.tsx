"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "@/components/site-image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "@/components/arrow";

const links = [
  { href: "/expeditions", label: "Expeditions" },
  { href: "/journeys", label: "Journeys" },
  { href: "/about", label: "Our story" },
  { href: "/blog", label: "Journal" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const root = document.documentElement;
    if (!open) { root.removeAttribute("data-menu"); return; }
    root.setAttribute("data-menu", "open");
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => { window.removeEventListener("keydown", onKey); desktop.removeEventListener("change", onResize); root.removeAttribute("data-menu"); };
  }, [open]);

  return <>
    <header className="site-header border-b border-[#cbd7dc]/70 bg-[#f7f9f8]/92 backdrop-blur-xl">
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-8">
        <Link href="/" aria-label="Sea More Expeditions home" className="block shrink-0"><Image src="/media/logo.png" alt="Sea More Expeditions" width={244} height={50} priority className="h-auto w-[190px] sm:w-[220px]" /></Link>
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href) ? "page" : undefined} className={`nav-link text-[12px] font-semibold uppercase tracking-[.16em] ${pathname.startsWith(link.href) ? "is-active" : ""}`}>{link.label}</Link>)}
        </nav>
        <Link href="/contact" className="btn btn-sm hidden lg:inline-flex"><span>Plan a journey</span><Arrow /></Link>
        <button type="button" className="flex size-11 items-center justify-center rounded-full border border-[#9fb6c0] transition-colors hover:border-[#071d34] lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className="burger"><i /><i /></span></button>
      </div>
    </header>
    <nav id="mobile-menu" aria-label="Mobile navigation" data-open={open} inert={!open} className="mobile-menu lg:hidden">
      <div className="shell flex flex-1 flex-col justify-between gap-10 pb-10 pt-8">
        <div>
          {links.map((link, index) => <Link key={link.href} href={link.href} style={{ "--i": index } as CSSProperties} className="mm-item arrow-host flex items-center justify-between border-b border-white/15 py-5">
            <span className="font-display text-[clamp(2.6rem,11vw,4rem)] leading-none tracking-[-.025em]"><small className="tabular mr-5 align-middle font-sans text-xs tracking-[.16em] text-[#ff5a61]">0{index + 1}</small>{link.label}</span><Arrow />
          </Link>)}
        </div>
        <div className="mm-item" style={{ "--i": links.length } as CSSProperties}>
          <Link href="/contact" className="btn btn-light w-full"><span>Plan a journey</span><Arrow /></Link>
          <p className="mt-6 text-sm leading-relaxed text-white/60">See more. Understand more.</p>
        </div>
      </div>
    </nav>
  </>;
}

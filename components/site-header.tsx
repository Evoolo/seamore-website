"use client";

import { useEffect, useState } from "react";
import Image from "@/components/site-image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return <header className="sticky top-0 z-50 border-b border-[#cbd7dc]/70 bg-[#f7f9f8]/95 backdrop-blur-xl">
    <div className="mx-auto flex h-[84px] max-w-[1600px] items-center justify-between gap-8 px-6 md:px-12 lg:px-20">
      <Link href="/" aria-label="Sea More Expeditions home" className="relative z-50 block shrink-0"><Image src="/media/logo.png" alt="Sea More Expeditions" width={244} height={50} priority className="h-auto w-[190px] sm:w-[220px] lg:w-[244px]" /></Link>
      <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
        {links.map((link) => <Link key={link.href} href={link.href} className={`nav-link text-[12px] font-semibold uppercase tracking-[.17em] ${pathname.startsWith(link.href) ? "is-active" : ""}`}>{link.label}</Link>)}
      </nav>
      <Link href="/contact" className="hidden h-11 items-center gap-3 border border-[#071d34] px-5 text-xs font-semibold uppercase tracking-[.16em] transition hover:bg-[#071d34] hover:text-white lg:flex">Plan a journey <ArrowUpRight className="size-4" /></Link>
      <button type="button" className="relative z-50 flex size-11 items-center justify-center border border-[#9fb6c0] lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
    </div>
    <nav id="mobile-menu" aria-label="Mobile navigation" className={`${open ? "grid" : "hidden"} border-t border-[#cbd7dc] bg-[#f7f9f8] px-6 pb-8 pt-5 lg:hidden`}>
      {links.map((link, index) => <Link key={link.href} href={link.href} className="flex items-center justify-between border-b border-[#cbd7dc] py-4 font-display text-3xl"><span><small className="mr-4 font-sans text-xs text-[#b52337]">0{index + 1}</small>{link.label}</span><ArrowUpRight className="size-5" /></Link>)}
      <Link href="/contact" className="mt-6 flex items-center justify-between bg-[#071d34] px-5 py-4 text-sm font-semibold uppercase tracking-[.15em] text-white">Plan a journey <ArrowUpRight className="size-5" /></Link>
    </nav>
  </header>;
}

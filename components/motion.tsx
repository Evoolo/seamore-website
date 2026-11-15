"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One observer and one scroll listener for the whole site.
 * - [data-reveal] elements receive data-in once they enter the viewport (styles in globals.css).
 * - [data-scrub] elements receive --p (0 to 1) as they travel through the viewport.
 * - [data-parallax] elements receive --py (-1 to 1) relative to the viewport centre.
 * - <html> receives data-scrolled and data-nav="hidden" for the header.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-in", "");
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -9% 0px" });

    let scrubbed: HTMLElement[] = [];
    let drifting: HTMLElement[] = [];
    const scan = () => {
      document.querySelectorAll("[data-reveal]:not([data-in])").forEach((node) => observer.observe(node));
      scrubbed = reduced ? [] : Array.from(document.querySelectorAll<HTMLElement>("[data-scrub]"));
      drifting = reduced ? [] : Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    };

    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const viewport = window.innerHeight;
      root.toggleAttribute("data-scrolled", y > 8);
      if (y < 240 || y < lastY - 4) root.removeAttribute("data-nav");
      else if (y > lastY + 4) root.setAttribute("data-nav", "hidden");
      lastY = y;

      for (const node of scrubbed) {
        const rect = node.getBoundingClientRect();
        const progress = (viewport * 0.88 - rect.top) / (rect.height + viewport * 0.38);
        node.style.setProperty("--p", Math.min(1, Math.max(0, progress)).toFixed(3));
      }
      for (const node of drifting) {
        const frameRect = (node.parentElement ?? node).getBoundingClientRect();
        if (frameRect.bottom < -200 || frameRect.top > viewport + 200) continue;
        const offset = (frameRect.top + frameRect.height / 2 - viewport / 2) / viewport;
        node.style.setProperty("--py", Math.min(1, Math.max(-1, -offset)).toFixed(3));
      }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

    scan();
    update();
    const mutations = new MutationObserver(() => { scan(); onScroll(); });
    mutations.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      root.removeAttribute("data-nav");
    };
  }, [pathname]);

  return null;
}

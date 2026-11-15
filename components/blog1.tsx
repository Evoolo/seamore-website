"use client";
// Adapted from @shadcnblocks/blog1 for Sea More Expeditions.
import { useState } from "react";
import Image from "@/components/site-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/content";

type Blog1Props = { posts: BlogPost[]; compact?: boolean };

export function Blog1({ posts, compact = false }: Blog1Props) {
  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const [category, setCategory] = useState("All");
  const visible = compact ? posts.slice(0, 3) : posts.filter((post) => category === "All" || post.category === category);

  return (
    <section className="bg-[#f7f9f8] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="mb-12 flex flex-col gap-8 border-b border-[#b7cbd2] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5 text-[#b52337]">The Sea More journal</p>
            <h2 className="font-display text-[clamp(3.7rem,7vw,7.5rem)] leading-[.9] tracking-[-.055em]">Field notes.</h2>
          </div>
          {compact ? <Link href="/blog" className="text-sm font-semibold underline decoration-[#b52337] underline-offset-8 transition hover:text-[#b52337]">Read the journal <ArrowUpRight className="ml-1 inline size-4" /></Link> :
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
              {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`border px-4 py-2 text-xs font-semibold transition ${category === item ? "border-[#071d34] bg-[#071d34] text-white" : "border-[#9fb6c0] text-[#071d34] hover:border-[#071d34]"}`}>{item}</button>)}
            </div>
          }
        </div>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((post, index) => <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
            <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-[#d9eef4]">
              <Image src={post.image} alt={post.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="image-drift object-cover" />
              <span className="absolute bottom-4 left-4 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#071d34]">0{index + 1} / Journal</span>
            </div>
            <div className="flex items-center justify-between gap-4"><Badge variant="outline" className="rounded-none border-[#9fb6c0] px-2 py-1 text-[10px] font-medium uppercase tracking-[.12em] text-[#526a78]">{post.category}</Badge><span className="text-xs text-[#526a78]">{post.readTime}</span></div>
            <h3 className="font-display mt-4 max-w-sm text-[clamp(2.1rem,3vw,3rem)] leading-[1.02] tracking-[-.035em] transition-colors group-hover:text-[#b52337]">{post.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#526a78]">{post.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em]">Read story <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
          </Link>)}
        </div>
        {!visible.length && <p className="py-12 text-[#526a78]">No stories in this category yet.</p>}
      </div>
    </section>
  );
}

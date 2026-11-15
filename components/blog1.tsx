"use client";

import { useState, type CSSProperties } from "react";
import Image from "@/components/site-image";
import Link from "next/link";
import { Arrow, TextLink } from "@/components/arrow";
import { Words } from "@/components/words";
import type { BlogPost } from "@/lib/content";

type Blog1Props = { posts: BlogPost[]; compact?: boolean };

export function Blog1({ posts, compact = false }: Blog1Props) {
  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const [category, setCategory] = useState("All");
  const visible = compact ? posts.slice(0, 3) : posts.filter((post) => category === "All" || post.category === category);

  return (
    <section className="section bg-[#f7f9f8]">
      <div className="shell">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p data-reveal="up" className="eyebrow eyebrow-rule mb-6 text-[#b52337]">The Sea More journal</p>
            <h2 data-reveal="words" className="h-lg"><Words text="Field notes." /></h2>
          </div>
          {compact ? <TextLink href="/blog" className="mb-2 self-start md:self-auto">Read the journal</TextLink> :
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
              {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`min-h-11 rounded-full border px-5 text-xs font-semibold tracking-[.04em] transition-colors duration-300 ${category === item ? "border-[#071d34] bg-[#071d34] text-white" : "border-[#9fb6c0] text-[#071d34] hover:border-[#071d34]"}`}>{item}</button>)}
            </div>
          }
        </div>
        <div data-reveal="up" className="rule grid gap-x-8 gap-y-14 pt-10 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((post, index) => <Link href={`/blog/${post.slug}`} key={post.slug} className="arrow-host group block">
            <div data-reveal="clip" style={{ "--d": `${(index % 3) * 110}ms` } as CSSProperties} className="frame mb-6 aspect-[4/3]">
              <Image src={post.image} alt={post.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="image-drift object-cover" />
            </div>
            <div className="flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[.14em] text-[#526a78]"><span className="text-[#0c4d78]">{post.category}</span><span className="tabular">{post.readTime}</span></div>
            <h3 className="h-md mt-4 max-w-sm transition-colors duration-300 group-hover:text-[#0c4d78]">{post.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#526a78]">{post.excerpt}</p>
            <span className="text-link mt-6"><span>Read story</span><Arrow /></span>
          </Link>)}
        </div>
        {!visible.length && <p className="py-12 text-[#526a78]">No stories in this category yet.</p>}
      </div>
    </section>
  );
}

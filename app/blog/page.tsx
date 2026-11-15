import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Blog1 } from "@/components/blog1";
import { Cta1 } from "@/components/cta1";
import { posts, readPage } from "@/lib/content";

export const metadata: Metadata = { title: "Journal", description: "Field notes, stories and ideas from the world of Sea More Expeditions." };

export default function BlogPage() {
  const { hero } = readPage<{ hero: { eyebrow: string; title: string; description: string; image: string; imageAlt: string } }>("journal");
  return <main><PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} alt={hero.imageAlt} compact /><Blog1 posts={posts} /><Cta1 /></main>;
}

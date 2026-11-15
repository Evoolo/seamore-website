import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Blog1 } from "@/components/blog1";
import { Cta1 } from "@/components/cta1";
import { posts } from "@/lib/content";

export const metadata: Metadata = { title: "Journal", description: "Field notes, stories and ideas from the world of Sea More Expeditions." };

export default function BlogPage() {
  return <main><PageHero eyebrow="The Sea More journal" title="Stories from the wild." description="A place for the questions, places and encounters that stay with us." image="/media/blue-shark.jpg" alt="Shark in sunlit blue water" compact /><Blog1 posts={posts} /><Cta1 /></main>;
}

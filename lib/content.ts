import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Expedition = {
  slug: string;
  number: string;
  title: string;
  animal: string;
  place: string;
  image: string;
  alt: string;
  intro: string;
  description: string;
  details: string[];
  gallery: { src: string; alt: string }[];
};

export type Journey = {
  slug: string;
  title: string;
  type: string;
  place: string;
  image: string;
  alt: string;
  intro: string;
  description: string;
  highlights: string[];
};

export type BlogPost = {
  slug: string;
  order?: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  readTime: string;
  body: string;
};

export type FaqItem = { question: string; answer: string };

const contentPath = (...parts: string[]) => path.join(process.cwd(), "content", ...parts);

function readJson<T>(...parts: string[]): T {
  return JSON.parse(readFileSync(contentPath(...parts), "utf8")) as T;
}

export const expeditions = readdirSync(contentPath("expeditions"))
  .filter((file) => file.endsWith(".json"))
  .map((file) => ({ ...readJson<Omit<Expedition, "slug">>("expeditions", file), slug: file.replace(/\.json$/, "") }))
  .sort((a, b) => a.number.localeCompare(b.number));

export const journeys = readdirSync(contentPath("journeys"))
  .filter((file) => file.endsWith(".json"))
  .map((file) => ({ ...readJson<Omit<Journey, "slug">>("journeys", file), slug: file.replace(/\.json$/, "") }))
  .sort((a, b) => a.title.localeCompare(b.title));

export const posts = readdirSync(contentPath("posts"))
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const { data, content } = matter(readFileSync(contentPath("posts", file), "utf8"));
    return { ...data, slug: file.replace(/\.md$/, ""), body: content.trim() } as BlogPost;
  })
  .sort((a, b) => (a.order ?? 100) - (b.order ?? 100));

export const faqItems = readJson<{ items: FaqItem[] }>("pages", "faq.json").items;

export function readPage<T>(name: string): T {
  return readJson<T>("pages", `${name}.json`);
}

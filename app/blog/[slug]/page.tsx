import type { Metadata } from "next";
import Image from "@/components/site-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Blog1 } from "@/components/blog1";
import { posts } from "@/lib/content";
import ReactMarkdown from "react-markdown";
import { siteMediaUrl } from "@/components/site-image";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return { title: post?.title ?? "Journal", description: post?.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = posts.filter((item) => item.slug !== slug).slice(0, 3);

  return <main>
    <section className="bg-[#071d34] text-white"><div className="mx-auto max-w-[1600px] px-6 pb-16 pt-20 md:px-12 lg:px-20 lg:pb-20"><Link href="/blog" className="mb-16 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-white/75 transition hover:text-white"><ArrowLeft className="size-4" /> Back to the journal</Link><p className="eyebrow mb-6 text-[#ff5a61]">{post.category} / {post.readTime}</p><h1 className="font-display max-w-5xl text-[clamp(4.6rem,9vw,9.5rem)] leading-[.87] tracking-[-.06em]">{post.title}</h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">{post.excerpt}</p></div></section>
    <div className="relative aspect-[16/8] min-h-[380px] bg-[#d9eef4]"><Image src={post.image} alt={post.alt} fill priority sizes="100vw" className="object-cover" /></div>
    <article className="bg-[#f7f9f8] py-24 md:py-32"><div className="mx-auto max-w-[800px] px-6 md:px-10"><p className="eyebrow mb-12 text-[#b52337]">Sea More / Field notes</p><ReactMarkdown components={{ h2: ({ children }) => <h2 className="font-display mb-8 mt-14 text-5xl leading-[.95] tracking-[-.04em] md:text-6xl">{children}</h2>, p: ({ children }) => <p className="mb-6 text-lg leading-[1.85] text-[#344e5e] md:text-xl">{children}</p>, ul: ({ children }) => <ul className="mb-8 list-disc space-y-2 pl-6 text-lg leading-[1.7] text-[#344e5e]">{children}</ul>, a: ({ href, children }) => <a href={href} className="underline decoration-[#b52337] underline-offset-4">{children}</a>, img: ({ src, alt }) => <img src={siteMediaUrl(typeof src === "string" ? src : "")} alt={alt || ""} className="my-10 h-auto w-full" /> }}>{post.body}</ReactMarkdown><div className="mt-20 border-t border-[#b7cbd2] pt-8"><p className="text-sm leading-relaxed text-[#526a78]">For current travel details, speak with the team.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 border-b-2 border-[#b52337] pb-2 text-xs font-semibold uppercase tracking-[.16em]">Start a conversation <ArrowUpRight className="size-4" /></Link></div></div></article>
    <Blog1 posts={related} compact />
  </main>;
}

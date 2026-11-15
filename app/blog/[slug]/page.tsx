import type { Metadata } from "next";
import Image from "@/components/site-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/arrow";
import { Words } from "@/components/words";
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

  return <main id="main">
    <section className="hero-enter bg-[#071d34] text-white"><div className="shell pb-14 pt-16 lg:pb-20 lg:pt-20">
      <Link href="/blog" className="hero-fade group mb-14 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-white/75 transition-colors hover:text-white" style={{ "--i": -4 } as React.CSSProperties}><ArrowLeft className="size-4 transition-transform duration-500 group-hover:-translate-x-1" /> Back to the journal</Link>
      <p className="eyebrow eyebrow-rule hero-fade mb-7 text-[#ff5a61]" style={{ "--i": -3 } as React.CSSProperties}>{post.category} / {post.readTime}</p>
      <h1 className="h-xl max-w-6xl"><Words text={post.title} /></h1>
      <p className="lede hero-fade mt-9 max-w-2xl text-white/75" style={{ "--i": 1 } as React.CSSProperties}>{post.excerpt}</p>
    </div></section>
    <div className="bg-[linear-gradient(#071d34_50%,#f7f9f8_50%)]"><div className="shell"><div data-reveal="clip" className="frame aspect-[4/3] md:aspect-[16/8]"><div className="parallax" data-parallax><Image src={post.image} alt={post.alt} fill priority sizes="100vw" className="image-drift object-cover" /></div></div></div></div>
    <article className="section bg-[#f7f9f8]"><div className="mx-auto max-w-[800px] px-6 md:px-10"><p className="eyebrow eyebrow-rule mb-12 text-[#b52337]">Sea More / Field notes</p><ReactMarkdown components={{ h2: ({ children }) => <h2 className="h-lg mb-8 mt-16 !text-[clamp(2.2rem,4vw,3.5rem)]">{children}</h2>, p: ({ children }) => <p className="mb-6 text-lg leading-[1.8] text-[#344e5e] md:text-[1.2rem]">{children}</p>, ul: ({ children }) => <ul className="mb-8 list-disc space-y-2 pl-6 text-lg leading-[1.7] text-[#344e5e]">{children}</ul>, a: ({ href, children }) => <a href={href} className="underline decoration-[#b52337] underline-offset-4 transition-colors hover:text-[#b52337]">{children}</a>, img: ({ src, alt }) => <img src={siteMediaUrl(typeof src === "string" ? src : "")} alt={alt || ""} className="my-10 h-auto w-full" /> }}>{post.body}</ReactMarkdown><div className="mt-20 border-t border-[#b7cbd2] pt-8"><p className="text-sm leading-relaxed text-[#526a78]">For current travel details, speak with the team.</p><ButtonLink href="/contact" className="mt-8">Start a conversation</ButtonLink></div></div></article>
    <Blog1 posts={related} compact />
  </main>;
}

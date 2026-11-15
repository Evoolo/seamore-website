import Image from "@/components/site-image";

export function PageHero({ eyebrow, title, description, image, alt, compact = false }: { eyebrow: string; title: string; description: string; image: string; alt: string; compact?: boolean }) {
  return <section className={`relative isolate flex items-end overflow-hidden bg-[#071d34] text-white ${compact ? "min-h-[560px]" : "min-h-[700px]"}`}>
    <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover object-center opacity-80" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#071d34] via-[#071d34]/55 to-[#071d34]/10" />
    <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-44 md:px-12 lg:px-20 lg:pb-20"><p className="eyebrow mb-7 text-[#ff5a61]">{eyebrow}</p><h1 className="font-display max-w-5xl text-[clamp(5rem,10vw,10rem)] leading-[.83] tracking-[-.065em]">{title}</h1><p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{description}</p></div>
  </section>;
}

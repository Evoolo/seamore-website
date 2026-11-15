import Image from "@/components/site-image";
import { ButtonLink } from "@/components/arrow";
import { Words } from "@/components/words";

type Feature1Props = { eyebrow: string; heading: string; body: string; image: string; alt: string; href: string; action: string; dark?: boolean; reverse?: boolean };

export function Feature1({ eyebrow, heading, body, image, alt, href, action, dark = false, reverse = false }: Feature1Props) {
  return (
    <section className={`section ${dark ? "bg-[#071d34] text-white" : "bg-[#f7f9f8] text-[#071d34]"}`}>
      <div className={`shell grid items-center gap-12 lg:grid-cols-12 lg:gap-10 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div data-reveal="clip" className={`frame group aspect-[4/5] md:aspect-[5/4] lg:col-span-6 lg:aspect-[5/6] ${reverse ? "lg:col-start-7" : ""}`}>
          <div className="parallax" data-parallax><Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="image-drift object-cover" /></div>
        </div>
        <div className={`lg:col-span-5 ${reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"}`}>
          <p data-reveal="up" className={`eyebrow eyebrow-rule mb-8 ${dark ? "text-[#ff5a61]" : "text-[#b52337]"}`}>{eyebrow}</p>
          <h2 data-reveal="words" className="h-lg mb-8"><Words text={heading} /></h2>
          <div data-reveal="up" style={{ "--d": "200ms" } as React.CSSProperties}>
            <p className={`lede mb-10 max-w-lg ${dark ? "text-white/72" : "text-[#526a78]"}`}>{body}</p>
            <ButtonLink href={href} variant={dark ? "outline-light" : "outline"}>{action}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

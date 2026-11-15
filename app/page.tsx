import Link from "next/link";
import { ArrowUpRight, Compass, Waves, Camera } from "lucide-react";
import { Hero1 } from "@/components/hero1";
import { Feature1 } from "@/components/feature1";
import { Blog1 } from "@/components/blog1";
import { Faq1 } from "@/components/faq1";
import { Cta1 } from "@/components/cta1";
import { ExpeditionCard } from "@/components/expedition-card";
import { Reveal } from "@/components/reveal";
import { expeditions, posts } from "@/lib/content";

export default function Home() {
  return <main>
    <Hero1 />
    <section id="discover" className="bg-[#f7f9f8] py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:px-12 lg:grid-cols-[.55fr_1.45fr] lg:gap-24 lg:px-20">
        <Reveal><p className="eyebrow flex items-center gap-3 text-[#b52337]"><span className="h-px w-9 bg-[#b52337]" /> Our point of view</p></Reveal>
        <Reveal delay={100}><h2 className="font-display max-w-5xl text-[clamp(3.6rem,6.5vw,7.5rem)] leading-[.95] tracking-[-.055em]">The destination is only the beginning. <em className="font-normal text-[#116e98]">The encounter changes everything.</em></h2><div className="mt-10 flex flex-col gap-6 border-t border-[#b7cbd2] pt-8 md:flex-row md:items-end md:justify-between"><p className="max-w-xl text-base leading-[1.7] text-[#526a78] md:text-lg">We choose places for the wildlife you hope to meet, then shape an expedition around curiosity, experienced guidance and the freedom to be surprised.</p><Link href="/about" className="shrink-0 text-xs font-semibold uppercase tracking-[.16em] underline decoration-[#b52337] underline-offset-8">The Sea More story <ArrowUpRight className="ml-1 inline size-4" /></Link></div></Reveal>
      </div>
    </section>
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="mb-11 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow mb-5 text-[#b52337]">Selected expeditions</p><h2 className="font-display text-[clamp(4rem,7vw,7.5rem)] leading-[.9] tracking-[-.055em]">Go where<br />they are.</h2></div><Link href="/expeditions" className="mb-2 text-xs font-semibold uppercase tracking-[.16em] underline decoration-[#b52337] underline-offset-8">All expeditions <ArrowUpRight className="ml-1 inline size-4" /></Link></div>
        <div className="grid gap-4 lg:grid-cols-[1.3fr_.7fr]"><ExpeditionCard expedition={expeditions[0]} featured /><ExpeditionCard expedition={expeditions[1]} /></div>
        <div className="mt-4 grid gap-4 md:grid-cols-2"><ExpeditionCard expedition={expeditions[2]} /><ExpeditionCard expedition={expeditions[4]} /></div>
        <p className="mt-7 text-xs text-[#526a78]">These journeys are based on Sea More&apos;s archived expedition themes. Ask us to confirm current availability.</p>
      </div>
    </section>
    <Feature1 dark eyebrow="The idea behind Sea More" heading="Fear gave way to fascination." body="One small reef shark changed a young diver's perspective. More time in the water brought more questions, more respect and a simple ambition: help others meet wildlife with open eyes." image="/media/great-white.jpg" alt="Shark moving through open water" href="/about" action="Discover our story" />
    <section className="bg-[#d9eef4] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20"><div className="mb-16 grid gap-8 lg:grid-cols-2"><div><p className="eyebrow mb-5 text-[#b52337]">The journey, your way</p><h2 className="font-display text-[clamp(4rem,7vw,7rem)] leading-[.9] tracking-[-.055em]">One wild world.<br />Many ways in.</h2></div><p className="max-w-md self-end text-base leading-[1.7] text-[#526a78]">Come with a group of like-minded travelers, ask us to build your own route, or make the expedition entirely private.</p></div>
        <div className="grid border-t border-[#8db1c1] lg:grid-cols-3">
          {[
            { icon: Waves, number: "01", title: "Group expeditions", text: "Experienced guidance, shared discoveries and space to learn from the people beside you." },
            { icon: Compass, number: "02", title: "Custom journeys", text: "Your interests lead. We shape the places, pace and additions around the trip you imagine." },
            { icon: Camera, number: "03", title: "Exclusive travel", text: "A privately arranged experience with the people and level of support you choose." },
          ].map((item) => <Reveal key={item.number} className="border-b border-[#8db1c1] py-9 lg:border-r lg:px-8 first:lg:pl-0 last:lg:border-r-0"><div className="flex items-center justify-between"><item.icon className="size-7 stroke-[1.4] text-[#0c4d78]" /><span className="eyebrow text-[#0c4d78]">{item.number} / 03</span></div><h3 className="font-display mt-12 text-4xl leading-tight">{item.title}</h3><p className="mt-4 max-w-sm text-sm leading-[1.7] text-[#526a78]">{item.text}</p></Reveal>)}
        </div>
      </div>
    </section>
    <Blog1 posts={posts} compact />
    <Faq1 />
    <Cta1 />
  </main>;
}

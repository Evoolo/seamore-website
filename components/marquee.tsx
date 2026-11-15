/** A slow band of the animals Sea More travels for. Pauses on hover; rests under reduced motion. */
export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return <div className="marquee border-b border-[#cbd7dc] bg-[#f7f9f8] py-6 md:py-8">
    {[0, 1].map((copy) => <div key={copy} className="marquee-track" aria-hidden={copy === 1}>
      {loop.map((item, index) => <span key={`${index}-${item}`} className="font-display flex items-center whitespace-nowrap pl-10 text-[clamp(2rem,4vw,3.6rem)] font-medium leading-none tracking-[-.02em] md:pl-16">
        <span className={index % 2 ? "italic font-normal text-[#116e98]" : ""}>{item}</span><span className="ml-10 size-2 rounded-full bg-[#b52337] md:ml-16" />
      </span>)}
    </div>)}
  </div>;
}

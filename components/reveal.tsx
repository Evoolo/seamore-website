import type { CSSProperties, ReactNode } from "react";

type RevealProps = { children: ReactNode; className?: string; delay?: number; variant?: "up" | "clip" | "words" | "stagger" };

/** Marks a block for the scroll reveal handled by components/motion.tsx. */
export function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  return <div data-reveal={variant} className={className} style={delay ? { "--d": `${delay}ms` } as CSSProperties : undefined}>{children}</div>;
}

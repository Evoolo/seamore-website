import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

/** Two stacked arrows: on hover the first leaves top-right and the second arrives from bottom-left. */
export function Arrow({ className = "" }: { className?: string }) {
  return <span className={`btn-arrow ${className}`} aria-hidden="true"><ArrowUpRight /><ArrowUpRight /></span>;
}

type Variant = "dark" | "light" | "outline" | "outline-light";
const variants: Record<Variant, string> = { dark: "", light: "btn-light", outline: "btn-outline", "outline-light": "btn-outline-light" };

export function ButtonLink({ href, children, variant = "dark", small = false, className = "" }: { href: string; children: ReactNode; variant?: Variant; small?: boolean; className?: string }) {
  return <Link href={href} className={`btn ${variants[variant]} ${small ? "btn-sm" : ""} ${className}`}><span>{children}</span><Arrow /></Link>;
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <Link href={href} className={`text-link ${className}`}><span>{children}</span><Arrow /></Link>;
}

import type { Metadata } from "next";
import { Fira_Sans, Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const fira = Fira_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-fira", display: "swap" });
const firaCondensed = Fira_Sans_Condensed({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-fira-condensed", display: "swap" });

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.seamoreexpeditions.com").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Sea More Expeditions — See more. Understand more.", template: "%s | Sea More Expeditions" },
  description: "Wildlife-led expeditions, custom journeys and private travel shaped around the animals that fascinate you.",
  openGraph: { title: "Sea More Expeditions", description: "See more. Understand more.", images: [`${siteUrl}/media/hero-whale-shark.jpg`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${fira.variable} ${firaCondensed.variable}`}><SiteHeader />{children}<SiteFooter /></body></html>;
}

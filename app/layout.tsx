import type { Metadata } from "next";
import { Fira_Sans, Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Motion } from "@/components/motion";

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
  return <html lang="en" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} /></head>
    <body className={`${fira.variable} ${firaCondensed.variable}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold">Skip to content</a>
      <SiteHeader />{children}<SiteFooter /><Motion />
    </body>
  </html>;
}

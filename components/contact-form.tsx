"use client";

import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildContactMailto } from "@/lib/contact-mailto";

const fieldClass = "mt-2 w-full rounded-none border border-[#9fb6c0] bg-white px-4 py-3 text-base text-[#071d34] outline-none transition placeholder:text-[#78909d] focus:border-[#0c4d78] focus:ring-2 focus:ring-[#0c4d78]/20";
const labelClass = "block text-xs font-semibold uppercase tracking-[.14em] text-[#0c4d78]";

export function ContactForm({ recipient }: { recipient: string }) {
  function openEmailDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) || "").trim();
    window.location.href = buildContactMailto(recipient, {
      name: value("name"),
      email: value("email"),
      interest: value("interest"),
      travelStyle: value("travelStyle"),
      timing: value("timing"),
      message: value("message"),
    });
  }

  return <form onSubmit={openEmailDraft} className="bg-[#d9eef4] p-7 md:p-10 lg:p-12">
    <p className="eyebrow mb-4 text-[#b52337]">Tell us your idea</p>
    <h3 className="font-display mb-8 text-4xl leading-tight tracking-[-.04em] md:text-5xl">Start your journey.</h3>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className={labelClass}>Your name <span aria-hidden="true">*</span><input className={fieldClass} name="name" type="text" autoComplete="name" maxLength={100} required placeholder="Your name" /></label>
      <label className={labelClass}>Your email <span aria-hidden="true">*</span><input className={fieldClass} name="email" type="email" autoComplete="email" maxLength={160} required placeholder="you@example.com" /></label>
    </div>
    <label className={`${labelClass} mt-5`}>Wildlife or destination<input className={fieldClass} name="interest" type="text" maxLength={160} placeholder="Whale sharks, Norway, the Azores…" /></label>
    <div className="mt-5 grid gap-5 sm:grid-cols-2">
      <label className={labelClass}>How would you like to travel?<select className={fieldClass} name="travelStyle" defaultValue=""><option value="">Not sure yet</option><option>Group expedition</option><option>Custom journey</option><option>Private travel</option></select></label>
      <label className={labelClass}>Preferred timing<input className={fieldClass} name="timing" type="text" maxLength={100} placeholder="Month or season, if known" /></label>
    </div>
    <label className={`${labelClass} mt-5`}>Your message <span aria-hidden="true">*</span><textarea className={`${fieldClass} min-h-36 resize-y`} name="message" maxLength={1200} required placeholder="Tell us what you have in mind…" /></label>
    <p id="email-draft-note" className="mt-5 text-sm leading-relaxed text-[#526a78]">The button opens an email draft with everything you entered. Review it and press Send in your email app.</p>
    <Button type="submit" size="lg" aria-describedby="email-draft-note" className="mt-7 h-13 w-full rounded-none bg-[#071d34] px-6 text-xs font-semibold uppercase tracking-[.13em] text-white hover:bg-[#0c4d78] sm:w-auto">Open email draft <ArrowUpRight className="ml-2 size-4" /></Button>
  </form>;
}

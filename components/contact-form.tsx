"use client";

import type { FormEvent } from "react";
import { Arrow } from "@/components/arrow";
import { buildContactMailto } from "@/lib/contact-mailto";

const labelClass = "block text-[11px] font-semibold uppercase tracking-[.14em] text-[#0c4d78]";

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

  return <form onSubmit={openEmailDraft} data-reveal="up" className="bg-[#d9eef4] p-7 md:p-10 lg:p-14">
    <p className="eyebrow eyebrow-rule mb-5 text-[#b52337]">Tell us your idea</p>
    <h3 className="h-md mb-10">Start your journey.</h3>
    <div className="grid gap-7 sm:grid-cols-2">
      <label className={labelClass}>Your name <span aria-hidden="true">*</span><input className="field" name="name" type="text" autoComplete="name" maxLength={100} required placeholder="Your name" /></label>
      <label className={labelClass}>Your email <span aria-hidden="true">*</span><input className="field" name="email" type="email" autoComplete="email" maxLength={160} required placeholder="you@example.com" /></label>
    </div>
    <label className={`${labelClass} mt-7`}>Wildlife or destination<input className="field" name="interest" type="text" maxLength={160} placeholder="Whale sharks, Norway, the Azores…" /></label>
    <div className="mt-7 grid gap-7 sm:grid-cols-2">
      <label className={labelClass}>How would you like to travel?<select className="field" name="travelStyle" defaultValue=""><option value="">Not sure yet</option><option>Group expedition</option><option>Custom journey</option><option>Private travel</option></select></label>
      <label className={labelClass}>Preferred timing<input className="field" name="timing" type="text" maxLength={100} placeholder="Month or season, if known" /></label>
    </div>
    <label className={`${labelClass} mt-7`}>Your message <span aria-hidden="true">*</span><textarea className="field min-h-32 resize-y" name="message" maxLength={1200} required placeholder="Tell us what you have in mind…" /></label>
    <p id="email-draft-note" className="mt-6 text-sm leading-relaxed text-[#526a78]">The button opens an email draft with everything you entered. Review it and press Send in your email app.</p>
    <button type="submit" aria-describedby="email-draft-note" className="btn mt-8 w-full sm:w-auto"><span>Open email draft</span><Arrow /></button>
  </form>;
}

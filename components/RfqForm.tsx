"use client";
import { useState } from "react";
import { capabilities } from "@/lib/site";

/** Preview only. Nothing is sent. */
export default function RfqForm() {
  const [held, setHeld] = useState(false);
  return (
    <form className="rfq" onSubmit={(e) => { e.preventDefault(); setHeld(true); }}>
      <div className="grid gap-5 sm:grid-cols-2">
        {[["name", "Name", "text"], ["org", "Agency or company", "text"], ["phone", "Phone", "tel"], ["email", "Email", "email"]].map(([n, l, t]) => (
          <label key={n} className="field">
            <span>{l}</span>
            <input name={n} type={t} autoComplete="off" />
          </label>
        ))}
        <label className="field">
          <span>Project type</span>
          <select name="type" defaultValue="">
            <option value="" disabled>Choose one</option>
            {capabilities.map((c) => <option key={c.key}>{c.name}</option>)}
            <option>Design-build</option>
            <option>Preconstruction</option>
          </select>
        </label>
        <label className="field">
          <span>Bid date</span>
          <input name="bid" type="date" />
        </label>
        <label className="field sm:col-span-2">
          <span>Project and location</span>
          <textarea name="message" rows={5} />
        </label>
      </div>
      <button type="submit" className="btn mt-6">Send request</button>
      <p className="mt-4 text-[14px] muted" aria-live="polite">
        {held ? "Not sent. This preview form does not deliver. Call or email instead." : "Preview form. It does not send yet."}
      </p>
    </form>
  );
}

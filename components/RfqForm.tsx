"use client";

import { useState } from "react";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "company", label: "Company", type: "text" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" },
] as const;

/** Preview only. Nothing is sent. */
export default function RfqForm() {
  const [held, setHeld] = useState(false);
  const input = "mt-2 block min-h-12 w-full border border-line bg-panel px-3 text-[16px] text-body focus:border-rule";
  return (
    <form onSubmit={(e) => { e.preventDefault(); setHeld(true); }}>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.name} className="block text-[14px] font-semibold text-chalk">
            {f.label}
            <input name={f.name} type={f.type} autoComplete="off" className={input} />
          </label>
        ))}
        <label className="block text-[14px] font-semibold text-chalk sm:col-span-2">
          Project
          <textarea name="message" rows={5} className={`${input} py-2`} />
        </label>
      </div>
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center bg-chalk px-7 text-[16px] font-semibold text-girder hover:bg-white">
        Send
      </button>
      <p className="mt-4 text-[14px] text-steel" aria-live="polite">
        {held ? "Not sent. This preview form does not deliver." : "Preview form. It does not send."}
      </p>
    </form>
  );
}

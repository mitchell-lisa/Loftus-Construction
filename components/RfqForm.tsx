"use client";

import { useState } from "react";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "company", label: "Company", type: "text" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "project", label: "Project", type: "text" },
] as const;

/**
 * Demo only. preventDefault, no action, no fetch.
 * Ryan has not supplied a destination for bids.
 */
export default function RfqForm() {
  const [held, setHeld] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setHeld(true);
      }}
    >
      <p className="text-[18px] text-ink">Demo form. It does not send.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="block text-[15px] text-navy">
            {field.label}
            <input
              name={field.name}
              type={field.type}
              autoComplete="off"
              className="mt-1 block min-h-11 w-full border border-navy/25 bg-white px-3 text-[16px] text-ink"
            />
          </label>
        ))}
        <label className="block text-[15px] text-navy sm:col-span-2">
          Message
          <textarea
            name="message"
            rows={5}
            className="mt-1 block w-full border border-navy/25 bg-white px-3 py-2 text-[16px] text-ink"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-11 items-center bg-navy px-5 text-[16px] font-semibold text-white"
      >
        Submit request
      </button>
      {held ? (
        <p className="mt-4 text-[16px] text-ink">Not sent. This demo does not deliver a request.</p>
      ) : null}
    </form>
  );
}

"use client";

import { useState } from "react";
import { business } from "@/lib/business";

export default function DemoBanner() {
  const [hidden, setHidden] = useState(false);
  if (business.status !== "demo" || hidden) return null;
  return (
    <div data-banner="true" className="on-dark border-b border-white/15 bg-navy text-white">
      <div className="wrap flex items-center gap-4 py-1.5 text-[13px] leading-snug">
        <p className="min-w-0 flex-1 text-mist">
          Preview by {business.builder.name}. Not the official {business.shortName} website.
        </p>
        <button
          type="button"
          onClick={() => setHidden(true)}
          className="min-h-9 shrink-0 px-2 text-[13px] text-white underline underline-offset-4"
        >
          Hide
        </button>
      </div>
    </div>
  );
}

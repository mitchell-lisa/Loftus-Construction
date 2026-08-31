"use client";

import { useState } from "react";
import { business } from "@/lib/business";

export default function DemoBanner() {
  const [hidden, setHidden] = useState(false);
  if (business.status !== "demo" || hidden) return null;

  return (
    <div className="bg-slate-deep text-white">
      <div className="mx-auto flex max-w-6xl items-start gap-4 px-5 py-2.5 text-[13px] leading-snug sm:items-center">
        <p className="flex-1">
          Preview built on spec by {business.builder.name}. Not the official website
          of {business.legalName}
        </p>
        <button
          type="button"
          onClick={() => setHidden(true)}
          className="min-h-9 shrink-0 border border-white/35 px-3 text-[12px] hover:bg-white/10"
        >
          Hide
        </button>
      </div>
    </div>
  );
}

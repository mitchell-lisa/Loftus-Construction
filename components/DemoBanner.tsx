"use client";

import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";

export default function DemoBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const publish = () => {
      const height =
        business.status === "demo" && !hidden && ref.current
          ? Math.round(ref.current.getBoundingClientRect().height)
          : 0;
      document.documentElement.style.setProperty("--banner-h", `${height}px`);
    };
    publish();
    const ro = new ResizeObserver(publish);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener("resize", publish);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", publish);
    };
  }, [hidden]);

  if (business.status !== "demo" || hidden) return null;

  return (
    <div ref={ref} data-banner="true" className="on-dark bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-start gap-4 px-5 py-2.5 text-[13.5px] leading-snug sm:items-center">
        <p className="flex-1">
          Preview built by {business.builder.name}. This is not the official website of{" "}
          {business.legalName}
        </p>
        <button
          type="button"
          onClick={() => setHidden(true)}
          className="min-h-9 shrink-0 border border-white/40 px-3 text-[12px]"
        >
          Hide
        </button>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import { Flank } from "./Rule";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  // scroll-margin comes from the [id] rule in globals.css, which is measured
  // against the pinned bar's live height.
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-6xl px-5 py-14 lg:py-18">{children}</div>
    </section>
  );
}

export function SectionHeading({
  children,
  tone = "light",
  sub,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  sub?: string;
}) {
  return (
    <div className="mb-8">
      <Flank tone={tone} thickness={3} gap={5}>
        <h2
          className={`text-[clamp(1.35rem,3.4vw,1.7rem)] ${
            tone === "dark" ? "text-white" : "text-ink"
          }`}
        >
          {children}
        </h2>
      </Flank>
      {sub ? (
        <p
          className={`mt-4 max-w-[62ch] text-[15.5px] ${
            tone === "dark" ? "text-steel" : "text-[color:var(--ink-muted)]"
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

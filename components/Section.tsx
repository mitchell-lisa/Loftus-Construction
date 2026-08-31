import type { ReactNode } from "react";
import Rule from "./Rule";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-4 ${className}`}>
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
      <h2
        className={`text-[clamp(1.35rem,3.4vw,1.7rem)] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </h2>
      <Rule tone={tone} width={56} thickness={3} gap={5} className="mt-3" />
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

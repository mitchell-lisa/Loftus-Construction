import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  compact = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  compact?: boolean;
}) {
  const pad = compact ? "px-5 py-8 lg:py-12" : "px-5 py-16 lg:py-24";
  return (
    <section id={id} className={className}>
      <div className={`mx-auto max-w-6xl ${pad}`}>{children}</div>
    </section>
  );
}

import type { ReactNode } from "react";

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
    <section id={id} className={className}>
      <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-[18ch] text-[clamp(1.85rem,3.6vw,2.7rem)] leading-[1.05] text-navy">
      {children}
    </h2>
  );
}

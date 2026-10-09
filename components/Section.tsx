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
    <h2 className="max-w-[14ch] text-[clamp(2.4rem,5vw,3.8rem)] leading-[0.95] text-navy">
      {children}
    </h2>
  );
}

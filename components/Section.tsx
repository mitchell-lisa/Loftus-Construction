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
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">{children}</div>
    </section>
  );
}

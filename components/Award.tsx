import { Flank } from "./Rule";
import { business } from "@/lib/business";

export default function Award() {
  if (!business.award) return null;
  const { year, body, title, detail } = business.award;

  return (
    <section className="bg-chalk">
      <div className="mx-auto max-w-6xl px-5 py-12 lg:py-14">
        <Flank tone="light" thickness={3} gap={5} className="mb-1">
          <p className="text-[17px] font-semibold leading-snug text-ink">
            {title}, {year}
          </p>
        </Flank>
        <p className="mt-3 text-[15px] text-[color:var(--ink-muted)]">{body}</p>
        <p className="mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-ink">{detail}</p>
      </div>
    </section>
  );
}

import Divider from "./Divider";
import { business } from "@/lib/business";

export default function Award() {
  if (!business.award) return null;
  const { year, body, title, detail } = business.award;

  return (
    <section className="bg-navy text-white">
      <Divider tone="white" />
      <div className="mx-auto max-w-6xl px-5 py-14 lg:py-16">
        <p className="max-w-[22ch] font-display text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-[1.1]">
          {title}, {year}
        </p>
        <p className="mt-4 text-[16px] text-white/80">{body}</p>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed">{detail}</p>
      </div>
    </section>
  );
}

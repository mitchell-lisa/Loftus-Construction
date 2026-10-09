import Divider from "./Divider";
import { business } from "@/lib/business";

export default function Award() {
  if (!business.award) return null;
  const { year, body, title, detail } = business.award;

  return (
    <section className="on-dark bg-navy text-white">
      <Divider tone="white" />
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <h2 className="max-w-[22ch] text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.1]">
          {title}, {year}
        </h2>
        <p className="mt-4 text-[16px] text-[#d5d8e2]">{body}</p>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed">{detail}</p>
      </div>
    </section>
  );
}

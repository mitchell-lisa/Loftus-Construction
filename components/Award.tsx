import Image from "next/image";
import { Flank } from "./Rule";
import { business } from "@/lib/business";

export default function Award() {
  if (!business.award) return null;
  const { year, body, title, detail } = business.award;

  return (
    <section className="bg-slate text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 lg:grid-cols-[1fr_0.85fr] lg:py-14">
        <div>
          <Flank tone="dark" thickness={3} gap={5} className="mb-1">
            <p className="text-[17px] font-semibold leading-snug">
              {title}, {year}
            </p>
          </Flank>
          <p className="mt-1 text-[15px] text-[#c6d2e2]">{body}</p>
          <p className="mt-4 max-w-[58ch] text-[15.5px] leading-relaxed text-[#dbe3ee]">
            {detail}
          </p>
        </div>
        <div className="relative h-[190px] w-full sm:h-[220px]">
          <Image
            src="/images/structural-rehabilitation.webp"
            alt="Masonry arch bridge under rehabilitation, lit by work lights at night"
            fill
            sizes="(min-width: 1024px) 480px, 92vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

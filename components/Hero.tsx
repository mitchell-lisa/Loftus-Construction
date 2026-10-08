import Image from "next/image";
import Rule from "./Rule";
import { business } from "@/lib/business";

export default function Hero() {
  const { hero } = business;

  return (
    <section id="top" className="bg-chalk">
      <figure>
        <div className="relative aspect-video w-full bg-girder">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <figcaption className="mx-auto max-w-6xl px-5 pt-3 text-[14.5px] text-[color:var(--ink-muted)]">
          Brownsville. Concrete bridge on piers over a river.
        </figcaption>
      </figure>

      <div className="mx-auto max-w-6xl px-5 pb-12 pt-8 lg:pb-16 lg:pt-10">
        <Rule tone="light" width={84} className="mb-5" />
        <h1 className="max-w-[18ch] text-[clamp(1.9rem,5.4vw,3.15rem)] leading-[1.05] text-ink">
          Heavy civil construction since {business.foundedYear}
        </h1>
        <p className="mt-4 max-w-[42ch] text-[clamp(1.02rem,2.4vw,1.15rem)] leading-snug text-ink">
          Bridges, culverts, retaining walls, foundations, structural rehabilitation
          and dams.
        </p>
        <p className="mt-3 max-w-[42ch] text-[15.5px] text-[color:var(--ink-muted)]">
          {business.descriptor}. The office is in {business.city}, {business.state}.
        </p>
        <a
          href={business.phoneHref}
          data-primary="true"
          className="mt-6 inline-flex min-h-11 items-center border-b-2 border-brand pb-1 text-[22px] font-semibold text-brand hover:border-ink hover:text-ink"
        >
          {business.phone}
        </a>
      </div>
    </section>
  );
}

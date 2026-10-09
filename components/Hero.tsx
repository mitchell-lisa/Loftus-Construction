import Image from "next/image";
import { business } from "@/lib/business";

export default function Hero() {
  const { hero } = business;

  return (
    <section id="top">
      <figure>
        <div className="relative h-[62vh] min-h-[320px] max-h-[720px] bg-navy">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
        </div>
        <figcaption className="mx-auto max-w-6xl px-5 pt-4 text-[15px] text-[color:var(--ink-muted)]">
          Brownsville. Concrete bridge on piers over a river.
        </figcaption>
      </figure>

      <div className="mx-auto max-w-6xl px-5 pb-14 pt-6 lg:pb-20 lg:pt-8">
        <h1 className="max-w-[12ch] text-[clamp(2.7rem,6.4vw,5rem)] leading-[0.95] text-navy">
          Heavy civil construction since {business.foundedYear}
        </h1>
        <p className="mt-6 max-w-[34ch] text-[clamp(1.15rem,2vw,1.35rem)] leading-snug text-ink">
          Bridges, culverts, retaining walls, foundations, structural rehabilitation
          and dams.
        </p>
        <p className="mt-3 text-[17px] text-[color:var(--ink-muted)]">
          {business.descriptor}. {business.city}, {business.state}.
        </p>
        <a
          href={business.phoneHref}
          data-primary="true"
          className="mt-8 inline-flex min-h-11 items-center border-b-2 border-brand text-[clamp(1.6rem,3vw,2.1rem)] font-semibold leading-none text-brand"
        >
          {business.phone}
        </a>
      </div>
    </section>
  );
}

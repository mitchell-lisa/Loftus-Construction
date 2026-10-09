import Image from "next/image";
import { business } from "@/lib/business";
import Divider from "./Divider";

export default function Hero() {
  const { hero } = business;

  return (
    <section
      id="top"
      className="grid h-[calc(100svh-var(--header-h)-var(--banner-h))] min-h-[460px] grid-rows-[auto_auto_minmax(0,1fr)] bg-navy text-white lg:grid-cols-2 lg:grid-rows-1"
    >
      <div className="px-5 pb-5 pt-5 lg:flex lg:flex-col lg:justify-center lg:px-12 lg:py-12">
        <h1 className="max-w-[12ch] text-[clamp(2.15rem,4.6vw,4.35rem)] leading-[0.92]">
          Heavy civil construction since {business.foundedYear}
        </h1>
        <p className="mt-4 max-w-[32ch] text-[17px] leading-snug text-white/90 lg:text-[19px]">
          Bridges, culverts, retaining walls, foundations, structural rehabilitation
          and dams.
        </p>
        <p className="mt-2 text-[16px] text-white/75">
          {business.city}, {business.state}.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={business.phoneHref}
            data-primary="true"
            className="inline-flex min-h-11 items-center border-b-2 border-white text-[1.55rem] font-semibold leading-none text-white"
          >
            {business.phone}
          </a>
          <a
            href="/#contact"
            className="inline-flex min-h-11 items-center bg-brand px-4 text-[16px] font-semibold text-white"
          >
            Request a bid
          </a>
        </div>
        <Divider tone="white" className="mt-6 hidden lg:flex" />
      </div>

      <Divider tone="white" className="lg:hidden" />

      <div className="relative min-h-[160px] bg-navy lg:min-h-0">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[center_34%] lg:object-[center_42%]"
        />
      </div>
    </section>
  );
}

import Image from "next/image";
import { business } from "@/lib/business";
import Divider from "./Divider";

export default function Hero() {
  const { hero } = business;

  return (
    <section
      id="top"
      className="grid h-[calc(100svh-var(--header-h)-var(--banner-h))] min-h-[520px] grid-rows-[minmax(160px,1fr)_auto] bg-navy text-white"
    >
      <div className="relative min-h-0 bg-navy">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_36%] lg:object-[center_46%]"
        />
        <Divider className="absolute inset-x-0 bottom-0" />
      </div>

      <div className="bg-navy px-5 pb-20 pt-4 lg:px-8 lg:pb-8 lg:pt-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <h1 className="max-w-[11ch] text-[clamp(2.35rem,5.4vw,4.8rem)] leading-[0.9] lg:max-w-[12ch]">
            Heavy civil construction since {business.foundedYear}
          </h1>
          <div className="max-w-sm shrink-0 lg:pb-1">
            <p className="text-[17px] leading-snug text-white/90 lg:text-[19px]">
              Bridges, culverts, retaining walls, foundations, structural rehabilitation
              and dams. {business.city}, {business.state}.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={business.phoneHref}
                data-primary="true"
                className="inline-flex min-h-11 items-center border-b-2 border-white text-[1.45rem] font-semibold leading-none text-white"
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
          </div>
        </div>
      </div>
    </section>
  );
}

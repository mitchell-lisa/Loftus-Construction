import Image from "next/image";
import { business } from "@/lib/business";
import Divider from "./Divider";

export default function Hero() {
  const { hero } = business;

  return (
    <section
      id="top"
      className="on-dark grid h-[calc(100svh-var(--header-h)-var(--banner-h))] min-h-[520px] grid-rows-[minmax(160px,1fr)_auto] bg-navy text-white"
    >
      <div className="relative min-h-0 overflow-hidden bg-navy">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="(max-width: 1023px) 280vw, 100vw"
          className="origin-[center_58%] scale-[2.8] object-cover lg:origin-center lg:scale-100 lg:object-[center_46%]"
        />
        <Divider tone="white" className="absolute inset-x-0 bottom-0" />
      </div>

      <div className="bg-navy px-5 pb-20 pt-10 lg:px-8 lg:py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <h1 className="max-w-[14ch] text-[clamp(2.6rem,5.5vw,4.6rem)] leading-[0.92]">
            Heavy civil construction{" "}
            <span className="whitespace-nowrap">since {business.foundedYear}</span>
          </h1>
          <div className="max-w-sm shrink-0 lg:pb-1">
            <p className="text-[1.15rem] leading-snug text-white">
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
                href="/contact"
                className="inline-flex min-h-11 items-center bg-white px-4 text-[16px] font-semibold text-navy"
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

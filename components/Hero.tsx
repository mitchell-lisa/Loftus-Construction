import Image from "next/image";
import Rule from "./Rule";
import { business } from "@/lib/business";

/**
 * The headline sits on the photograph itself. The source is only 1140 by 355,
 * so the image is cropped rather than shown whole here, and the type sits in a
 * solid plate anchored to the lower left so contrast never depends on what
 * happens to be behind it. Owner-supplied originals would let this run taller.
 */
export default function Hero() {
  return (
    <section id="top" className="relative bg-girder text-white">
      <div className="relative h-[clamp(340px,52vw,460px)] w-full">
        <Image
          src="/images/strasburg-railroad-bridge.webp"
          alt="Completed main track bridge replacement for the Strasburg Railroad at Gap, Pennsylvania, with a steam locomotive crossing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[48%_center] sm:object-[52%_center] lg:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-girder via-girder/45 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-8 lg:pb-10">
            <Rule tone="dark" side="both" width={84} className="mb-5" />
            <h1 className="max-w-[15ch] text-[clamp(1.9rem,6.2vw,3.2rem)] leading-[1.06] drop-shadow-[0_2px_10px_rgba(15,18,21,0.85)]">
              Bridge, culvert and dam construction
            </h1>
            <a
              href={business.phoneHref}
              data-primary="true"
              className="mt-5 inline-flex min-h-11 items-center border-b-2 border-steel pb-1 text-[19px] font-semibold text-white hover:border-white"
            >
              {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

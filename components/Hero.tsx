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
            <h1 className="max-w-[19ch] text-[clamp(1.75rem,5.6vw,3rem)] leading-[1.06] drop-shadow-[0_2px_10px_rgba(15,18,21,0.85)]">
              Design-build, preconstruction, construction
            </h1>
            {/* The delivery methods lead, but the cover still has to say what
                gets built, which is what the structure line carries. */}
            <p className="mt-3 max-w-[52ch] text-[clamp(0.95rem,2.4vw,1.05rem)] leading-snug [text-wrap:balance] text-concrete drop-shadow-[0_2px_8px_rgba(15,18,21,0.9)]">
              Bridges, culverts, retaining walls, foundations, structural
              rehabilitation and dams
            </p>
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

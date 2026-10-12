import PageLead from "@/components/PageLead";
import Pic from "@/components/Pic";
import SpeedLines from "@/components/SpeedLines";
import { business } from "@/lib/business";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/pageMeta";

const description =
  "Loftus Construction is a heavy civil contractor in Cinnaminson, New Jersey, building for public agencies in Pennsylvania, New Jersey and Delaware since 1994.";

export const metadata = pageMeta("About", description, "/about", photos.bLow);

export default function AboutPage() {
  const [founding, growth, clients] = business.history;
  return (
    <>
      <PageLead
        title="About"
        line="A heavy civil contractor in Cinnaminson, New Jersey, building for public agencies in Pennsylvania, New Jersey and Delaware since 1994."
      />

      <section className="bg-white">
        <div className="wrap py-16 lg:py-28">
          <blockquote className="max-w-[30ch]">
            <p className="font-display text-[clamp(1.8rem,3.6vw,3.1rem)] leading-[1.12] text-navy">
              &ldquo;{business.mission}&rdquo;
            </p>
          </blockquote>
          <SpeedLines reveal className="mt-10 w-full text-brand" />
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap grid gap-12 pb-16 lg:grid-cols-12 lg:gap-12 lg:pb-28">
          <div data-rise className="lg:col-span-7">
            <Pic id="bLow" sizes="(min-width: 1024px) 56vw, 100vw" className="aspect-[4/3]" />
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(2rem,3.4vw,2.9rem)] leading-[1] text-navy">{business.foundedYear}</h2>
            <p className="mt-5 text-[1.08rem] leading-relaxed text-ink">{founding}</p>
            <h2 className="mt-12 text-[clamp(2rem,3.4vw,2.9rem)] leading-[1] text-navy">1997</h2>
            <p className="mt-5 text-[1.08rem] leading-relaxed text-ink">{growth}</p>
          </div>
        </div>
      </section>

      <section className="grid-paper-light border-y border-rule bg-white">
        <div className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(2rem,3.4vw,2.9rem)] leading-[1] text-navy">Since then</h2>
            <p className="mt-5 text-[1.08rem] leading-relaxed text-ink">{clients}</p>
          </div>
          <div data-rise className="lg:col-span-7">
            <Pic id="bLift" sizes="(min-width: 1024px) 56vw, 100vw" className="aspect-[4/3] lg:aspect-[16/11]" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-24">
          <div className="flex justify-center border border-rule bg-white p-8 sm:p-12">
            <img
              src="/images/logos/25th-anniversary.png"
              alt="Loftus Construction 25th anniversary mark, 1994 to 2019"
              width={1200}
              height={332}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full max-w-[460px]"
            />
          </div>
          <div>
            <h2 className="text-[clamp(2rem,3.4vw,2.9rem)] leading-[1] text-navy">Twenty-five years in 2019</h2>
            <p className="mt-5 max-w-[48ch] text-[1.08rem] leading-relaxed text-ink">
              The firm marked its twenty-fifth year in 2019, the same year the SR 13 masonry arch rehabilitation
              was named Project of the Year by the American Society of Highway Engineers, Delaware Valley Section.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

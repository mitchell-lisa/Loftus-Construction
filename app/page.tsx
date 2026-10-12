import Link from "next/link";
import Image from "next/image";
import Pic from "@/components/Pic";
import { business } from "@/lib/business";
import type { PhotoKey } from "@/lib/photos";

const cards: { slug: string; photo: PhotoKey }[] = [
  { slug: "brownsville-road", photo: "bSpan" },
  { slug: "university-avenue", photo: "uUnder" },
  { slug: "st-peters-road", photo: "sAerial" },
];

export default function Home() {
  const hero = business.hero;
  const work = cards.map((c) => ({ ...c, project: business.photoProjects.find((p) => p.slug === c.slug)! }));
  const years = new Date().getFullYear() - (business.foundedYear ?? 1994);
  const data = [
    ["Founded", String(business.foundedYear)],
    ["Years", String(years)],
    ["Region", "PA / NJ / DE"],
    ["Base", "40.00° N, 74.99° W"],
  ];
  return (
    <>
      <section className="grid-blue on-dark text-white">
        <div className="wrap grid gap-10 py-12 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="flex flex-col justify-between gap-10 lg:col-span-5">
            <h1 data-reveal className="t-display max-w-[11ch] text-white">Bridges and heavy civil work.</h1>
            <dl data-reveal className="grid grid-cols-2 border border-white/40 bg-navy/80 text-[13px]">
              {data.map(([k, v], i) => (
                <div key={k} className={`px-4 py-3 ${i % 2 ? "border-l border-white/30" : ""} ${i > 1 ? "border-t border-white/30" : ""}`}>
                  <dt className="mono text-[11px] uppercase text-mist">{k}</dt>
                  <dd className="mono mt-1 text-[15px] text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-7">
            <div className="ticks border border-white/50 p-2" style={{ ["--color-navy" as string]: "#fff" }}>
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[7/6]">
                <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width:1024px) 56vw, 100vw" quality={85} className="hero-img object-cover object-[center_58%]" />
              </div>
            </div>
            <div className="dim mt-3 !text-mist" style={{ ["--color-rule" as string]: "rgba(255,255,255,.45)" }}>Brownsville Road over Neshaminy Creek</div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy">
        <div className="wrap grid sm:grid-cols-3">
          {[
            ["Prequalified", "PennDOT, NJDOT, PA Turnpike"],
            ["Award", "ASHE Project of the Year, 2019"],
            ["Office", "Cinnaminson, New Jersey"],
          ].map(([k, v], i) => (
            <div key={k} data-reveal className={`py-7 sm:px-6 lg:py-10 ${i ? "border-t border-rule sm:border-l sm:border-t-0" : "sm:pl-0"}`}>
              <p className="mono text-[12px] uppercase text-steel">{k}</p>
              <p className="mt-2 text-[clamp(1.15rem,1.6vw,1.4rem)] font-medium leading-tight text-navy">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid-paper">
        <div className="wrap section">
          <div data-reveal className="flex items-end justify-between gap-6 pb-8">
            <h2 className="t-h2">Current work</h2>
            <Link href="/projects" className="group mono shrink-0 text-[14px] text-navy">All projects <span aria-hidden className="arrow">&rarr;</span></Link>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {work.map((c, i) => (
              <Link key={c.slug} href={`/projects/${c.slug}`} data-reveal style={{ ["--d" as string]: `${i * 100}ms` }} className="group block bg-white">
                <div className="ticks titleblock">
                  <div className="p-2"><Pic id={c.photo} sizes="(min-width:768px) 32vw, 100vw" className="aspect-[4/3]" /></div>
                  <div className="px-4 py-4">
                    <h3 className="t-h3">{c.project.short}</h3>
                  </div>
                  <div className="mono flex items-center justify-between gap-4 px-4 py-3 text-[12px] text-steel">
                    <span>{c.project.structure}</span>
                    <span aria-hidden className="arrow text-navy">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy">
        <div className="wrap section grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="lg:col-span-6">
            <div className="ticks border border-navy p-2">
              <Pic id="bLow" sizes="(min-width:1024px) 48vw, 100vw" className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <h2 data-reveal className="t-h2">What we build</h2>
            <ul className="mt-10 border-t border-navy">
              {business.capabilities.map((c, i) => (
                <li key={c.name} data-reveal style={{ ["--d" as string]: `${i * 60}ms` }} className="border-b border-rule">
                  <Link href="/capabilities" className="group flex items-center justify-between py-4 text-[clamp(1.15rem,1.6vw,1.375rem)] font-medium text-navy">
                    {c.name}
                    <span aria-hidden className="arrow mono text-[16px] text-steel group-hover:text-navy">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 data-reveal className="t-h2">Built for</h2>
          </div>
          <ul className="grid grid-cols-1 border-l border-t border-rule sm:grid-cols-2 lg:col-span-8">
            {business.clients.map((c) => (
              <li key={c} data-reveal className="flex min-h-[72px] items-center border-b border-r border-rule px-5 py-4 text-[17px] font-medium leading-snug text-navy sm:min-h-[96px]">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid-blue on-dark text-white">
        <div className="wrap section flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 data-reveal className="t-h2 max-w-[14ch] text-white">Have a job to price?</h2>
          <div data-reveal className="flex flex-wrap items-center gap-x-10 gap-y-5">
            <Link href="/contact" className="group inline-flex min-h-14 items-center gap-3 border border-white bg-white px-8 text-[16px] font-medium text-navy hover:bg-transparent hover:text-white">Request a bid <span aria-hidden className="arrow">&rarr;</span></Link>
            <a href={business.phoneHref} className="mono text-[20px] text-white">{business.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}

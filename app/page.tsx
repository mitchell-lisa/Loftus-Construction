import Link from "next/link";
import Image from "next/image";
import Pic from "@/components/Pic";
import { business } from "@/lib/business";
import type { PhotoKey } from "@/lib/photos";

const cards: { slug: string; photo: PhotoKey; position?: string }[] = [
  { slug: "brownsville-road", photo: "bSpan" },
  { slug: "university-avenue", photo: "uUnder" },
  { slug: "st-peters-road", photo: "sAerial" },
];

export default function Home() {
  const hero = business.hero;
  const [first, ...rest] = cards.map((c) => ({ ...c, project: business.photoProjects.find((p) => p.slug === c.slug)! }));
  const years = new Date().getFullYear() - (business.foundedYear ?? 1994);
  return (
    <>
      <section className="relative h-[calc(100svh-var(--header-h))] min-h-[560px] max-h-[980px] overflow-hidden bg-girder">
        <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" quality={85} className="hero-img object-cover object-[center_58%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013]/90 via-[#0e1013]/35 to-[#0e1013]/10" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-tr from-[#0e1013]/55 to-transparent" />
        <div className="wrap relative flex h-full flex-col justify-end pb-10 lg:pb-16">
          <h1 data-reveal className="t-display max-w-[12ch] text-white">Bridges and heavy civil work.</h1>
          <div data-reveal style={{ ["--d" as string]: "150ms" }} className="mt-8 flex flex-col gap-2 border-t border-white/25 pt-5 text-[15px] text-white/80 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
            <p>Cinnaminson, New Jersey</p>
            <p>Pennsylvania, New Jersey, Delaware</p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="wrap grid lg:grid-cols-12">
          <div data-reveal className="flex items-end gap-5 py-10 lg:col-span-5 lg:py-16">
            <span className="t-numeral">{business.foundedYear}</span>
            <span className="pb-2 text-[15px] leading-snug text-steel">{years} years<br />in heavy civil</span>
          </div>
          <dl className="grid border-t border-line sm:grid-cols-2 lg:col-span-7 lg:border-l lg:border-t-0">
            {[
              ["Prequalified", "PennDOT, NJDOT, PA Turnpike"],
              ["Award", "ASHE Project of the Year, 2019"],
            ].map(([k, v], i) => (
              <div key={k} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }} className={`flex flex-col justify-end py-8 lg:px-10 lg:py-16 ${i ? "border-t border-line sm:border-l sm:border-t-0 sm:pl-8" : "sm:pr-8"}`}>
                <dt className="text-[14px] text-steel">{k}</dt>
                <dd className="mt-2 text-[clamp(1.25rem,1.8vw,1.5rem)] font-semibold leading-tight tracking-[-0.015em] text-chalk">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="wrap section">
        <div data-reveal className="flex items-end justify-between gap-6 border-b border-rule pb-6">
          <h2 className="t-h2">Current work</h2>
          <Link href="/projects" className="group shrink-0 text-[15px] font-semibold text-chalk">All projects <span aria-hidden className="arrow">&rarr;</span></Link>
        </div>
        <Link href={`/projects/${first.slug}`} data-reveal className="group mt-10 block lg:mt-14">
          <Pic id={first.photo} sizes="(min-width:1360px) 1250px, 100vw" className="aspect-[4/3] md:aspect-[16/8]" />
          <div className="mt-5 flex items-baseline justify-between gap-6">
            <div>
              <h3 className="t-h3">{first.project.name}</h3>
              <p className="mt-1 text-[15px] text-steel">{first.project.structure}</p>
            </div>
            <span aria-hidden className="arrow text-[24px] text-chalk">&rarr;</span>
          </div>
        </Link>
        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-8 lg:mt-20">
          {rest.map((c, i) => (
            <Link key={c.slug} href={`/projects/${c.slug}`} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }} className="group block">
              <Pic id={c.photo} sizes="(min-width:768px) 48vw, 100vw" className="aspect-[4/3] md:aspect-[5/4]" />
              <div className="mt-5 flex items-baseline justify-between gap-6">
                <div>
                  <h3 className="t-h3">{c.project.short}</h3>
                  <p className="mt-1 text-[15px] text-steel">{c.project.structure}</p>
                </div>
                <span aria-hidden className="arrow text-[24px] text-chalk">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-panel">
        <div className="wrap section grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="lg:col-span-6">
            <Pic id="bLow" sizes="(min-width:1024px) 48vw, 100vw" className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <h2 data-reveal className="t-h2">What we build</h2>
            <ul className="mt-10 border-t border-rule">
              {business.capabilities.map((c, i) => (
                <li key={c.name} data-reveal style={{ ["--d" as string]: `${i * 60}ms` }} className="border-b border-line">
                  <Link href="/capabilities" className="group flex items-center justify-between py-5 text-[clamp(1.25rem,1.8vw,1.5rem)] font-semibold tracking-[-0.015em] text-chalk">
                    {c.name}
                    <span aria-hidden className="arrow text-[20px] text-steel group-hover:text-chalk">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <h2 data-reveal className="t-h2 lg:col-span-4">Built for</h2>
          <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:col-span-8">
            {business.clients.map((c, i) => (
              <li key={c} data-reveal style={{ ["--d" as string]: `${(i % 2) * 80}ms` }} className="flex min-h-[76px] items-center border-b border-line py-5 text-[18px] font-semibold leading-snug tracking-[-0.01em] text-chalk sm:min-h-[104px] sm:odd:pr-8 sm:even:border-l sm:even:pl-8">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="wrap section flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 data-reveal className="t-h2 max-w-[14ch]">Have a job to price?</h2>
          <div data-reveal className="flex flex-wrap items-center gap-x-10 gap-y-5">
            <Link href="/contact" className="group inline-flex min-h-14 items-center gap-3 bg-chalk px-8 text-[16px] font-semibold text-girder hover:bg-white">Request a bid <span aria-hidden className="arrow">&rarr;</span></Link>
            <a href={business.phoneHref} className="text-[20px] font-semibold text-chalk">{business.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}

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
  return (
    <>
      <section className="on-dark bg-navy text-white">
        <div className="grid lg:grid-cols-12">
          <div className="flex flex-col justify-end px-5 pb-10 pt-12 md:px-10 lg:col-span-6 lg:pb-16 lg:pl-14 lg:pr-10 xl:pl-[max(56px,calc((100vw-1360px)/2+56px))]">
            <h1 data-reveal className="t-display text-white">Bridges. Heavy civil.</h1>
            <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="group cond inline-flex min-h-14 items-center gap-3 bg-white px-7 text-[20px] text-navy hover:bg-steel-200">Request a bid <span aria-hidden className="arrow">&rarr;</span></Link>
              <a href={business.phoneHref} className="cond inline-flex min-h-14 items-center border-2 border-white px-7 text-[20px]">{business.phone}</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] lg:col-span-6 lg:aspect-auto lg:min-h-[calc(100svh-var(--header-h))]">
            <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width:1024px) 50vw, 100vw" quality={85} className="hero-img object-cover object-[center_58%]" />
          </div>
        </div>
      </section>

      <section className="bg-steel-900 text-white">
        <div className="wrap grid sm:grid-cols-3">
          {[
            [String(business.foundedYear), "Founded"],
            [String(years), "Years in heavy civil"],
            ["PA NJ DE", "Working area"],
          ].map(([v, k], i) => (
            <div key={k} data-reveal className={`py-8 sm:px-6 lg:py-12 ${i ? "border-t border-white/15 sm:border-l sm:border-t-0" : "sm:pl-0"}`}>
              <p className="cond text-[clamp(3rem,6vw,5.5rem)] leading-none">{v}</p>
              <p className="mt-2 text-[15px] text-steel-200">{k}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div data-reveal className="flex items-end justify-between gap-6 border-b-4 border-navy pb-5">
          <h2 className="t-h2">Current work</h2>
          <Link href="/projects" className="group cond shrink-0 text-[18px] text-navy">All projects <span aria-hidden className="arrow">&rarr;</span></Link>
        </div>
        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-12">
          {work.map((c, i) => (
            <Link key={c.slug} href={`/projects/${c.slug}`} data-reveal style={{ ["--d" as string]: `${i * 100}ms` }} className={`group block ${i === 0 ? "lg:col-span-12" : "lg:col-span-6"}`}>
              <Pic id={c.photo} sizes={i === 0 ? "(min-width:1360px) 1250px, 100vw" : "(min-width:1024px) 48vw, 100vw"} className={i === 0 ? "aspect-[4/3] md:aspect-[16/7]" : "aspect-[4/3]"} />
              <div className="flex items-center justify-between gap-6 bg-navy px-5 py-4 text-white group-hover:bg-navy-deep lg:px-7 lg:py-5">
                <div>
                  <h3 className="t-h3 text-white">{c.project.short}</h3>
                  <p className="mt-1 text-[14px] text-mist">{c.project.structure}</p>
                </div>
                <span aria-hidden className="arrow text-[26px]">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-steel-100">
        <div className="wrap section grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 data-reveal className="t-h1">What we build</h2>
            <ul className="mt-10 grid sm:grid-cols-2">
              {business.capabilities.map((c, i) => (
                <li key={c.name} data-reveal style={{ ["--d" as string]: `${i * 60}ms` }} className="border-t-2 border-steel-900">
                  <Link href="/capabilities" className="group cond flex items-center justify-between py-4 pr-6 text-[clamp(1.4rem,2vw,1.75rem)] text-steel-900 hover:text-navy">
                    {c.name}
                    <span aria-hidden className="arrow text-[20px]">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="lg:col-span-5">
            <Pic id="bLow" sizes="(min-width:1024px) 40vw, 100vw" className="aspect-[4/3] lg:aspect-[4/5]" />
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="slab pl-6 lg:pl-10">
          <h2 data-reveal className="t-h2">Built for</h2>
        </div>
        <ul className="mt-10 grid border-l-2 border-t-2 border-steel-200 sm:grid-cols-2 lg:grid-cols-4">
          {business.clients.map((c) => (
            <li key={c} data-reveal className="flex min-h-[96px] items-end border-b-2 border-r-2 border-steel-200 bg-white p-5 text-[17px] font-semibold leading-snug text-steel-900">{c}</li>
          ))}
        </ul>
      </section>

      <section className="on-dark bg-navy text-white">
        <div className="wrap section flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 data-reveal className="t-h1 max-w-[10ch] text-white">Have a job to price?</h2>
          <div data-reveal className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="group cond inline-flex min-h-16 items-center gap-3 bg-white px-8 text-[22px] text-navy hover:bg-steel-200">Request a bid <span aria-hidden className="arrow">&rarr;</span></Link>
            <a href={business.phoneHref} className="cond text-[28px] text-white">{business.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}

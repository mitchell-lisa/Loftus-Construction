import Link from "next/link";
import Image from "next/image";
import Pic from "@/components/Pic";
import { business } from "@/lib/business";
import { photos } from "@/lib/photos";

export default function Home() {
  const hero = business.hero;
  const p = (slug: string) => business.photoProjects.find((x) => x.slug === slug)!;
  const b = p("brownsville-road");
  const u = p("university-avenue");
  const s = p("st-peters-road");
  return (
    <>
      <section className="relative h-[72svh] min-h-[440px] max-h-[860px] overflow-hidden bg-navy lg:h-[calc(100svh-var(--header-h)-180px)]">
        <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" quality={85} className="hero-img object-cover object-[center_58%]" />
      </section>
      <section className="wrap grid gap-8 pb-16 pt-10 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-14">
        <h1 data-reveal className="t-display lg:col-span-9">Bridges and <em className="italic">heavy civil</em> work.</h1>
        <p data-reveal className="self-end text-[15px] leading-relaxed text-steel lg:col-span-3 lg:pb-3">
          Cinnaminson, New Jersey.<br />Pennsylvania, New Jersey and Delaware since {business.foundedYear}.
        </p>
      </section>

      <section className="border-t border-line">
        <div className="wrap grid gap-8 py-16 lg:grid-cols-12 lg:py-28">
          <p data-reveal className="serif text-[clamp(4rem,9vw,8rem)] italic leading-none text-navy lg:col-span-3">{business.foundedYear}</p>
          <div className="lg:col-span-7 lg:col-start-5">
            <p data-reveal className="lede">Prequalified with PennDOT, NJDOT and the Pennsylvania Turnpike. ASHE Delaware Valley Project of the Year, 2019.</p>
          </div>
        </div>
      </section>

      <section className="relative">
        <Link href={`/projects/${b.slug}`} className="group block">
          <div className="relative h-[70svh] min-h-[420px] max-h-[900px] overflow-hidden">
            <Image src={photos.bSpan.src} alt={photos.bSpan.alt} fill sizes="100vw" quality={82} className="zoom object-cover" />
          </div>
          <div className="wrap relative -mt-24 lg:-mt-40">
            <div data-reveal className="max-w-[560px] bg-paper p-6 pr-10 lg:ml-[8%] lg:p-10">
              <h2 className="t-h2">{b.short}</h2>
              <p className="mt-3 text-[15px] text-steel">{b.structure}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-navy">Read the project <span aria-hidden className="arrow">&rarr;</span></span>
            </div>
          </div>
        </Link>
      </section>

      <section className="wrap grid gap-16 py-20 md:grid-cols-12 md:gap-8 lg:py-32">
        <Link href={`/projects/${u.slug}`} data-reveal className="group block md:col-span-7">
          <Pic id="uUnder" sizes="(min-width:768px) 58vw, 100vw" className="aspect-[4/5]" />
          <h2 className="t-h3 mt-6 text-[clamp(1.6rem,2.6vw,2.25rem)]">{u.short}</h2>
          <p className="mt-1 text-[15px] text-steel">{u.structure}</p>
        </Link>
        <Link href={`/projects/${s.slug}`} data-reveal style={{ ["--d" as string]: "140ms" }} className="group block md:col-span-4 md:col-start-9 md:mt-48">
          <Pic id="sAerial" sizes="(min-width:768px) 33vw, 100vw" className="aspect-[3/4]" />
          <h2 className="t-h3 mt-6 text-[clamp(1.6rem,2.6vw,2.25rem)]">{s.short}</h2>
          <p className="mt-1 text-[15px] text-steel">{s.structure}</p>
          <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-navy">All projects <span aria-hidden className="arrow">&rarr;</span></span>
        </Link>
      </section>

      <section className="bg-sand">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:order-2 lg:min-h-[760px]">
            <Image src={photos.bLow.src} alt={photos.bLow.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="px-5 py-16 md:px-10 lg:self-center lg:px-14 xl:pl-[max(56px,calc((100vw-1360px)/2+56px))]">
            <h2 data-reveal className="t-h2">What we build</h2>
            <ul className="mt-10">
              {business.capabilities.map((c, i) => (
                <li key={c.name} data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
                  <Link href="/capabilities" className="group serif block py-2 text-[clamp(1.6rem,2.6vw,2.25rem)] leading-tight text-navy hover:italic">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-10 py-20 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <h2 data-reveal className="t-h2 italic lg:col-span-4">Built for</h2>
        <ul className="columns-1 gap-8 sm:columns-2 lg:col-span-7 lg:col-start-6">
          {business.clients.map((c) => (
            <li key={c} data-reveal className="break-inside-avoid border-t border-line py-4 text-[17px] text-ink">{c}</li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="wrap py-20 text-center lg:py-32">
          <h2 data-reveal className="t-h1 mx-auto max-w-[16ch]">Have a job <em className="italic">to price?</em></h2>
          <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            <Link href="/contact" className="group inline-flex min-h-14 items-center gap-3 bg-navy px-8 text-[16px] font-semibold text-white hover:bg-navy-deep">Request a bid <span aria-hidden className="arrow">&rarr;</span></Link>
            <a href={business.phoneHref} className="serif text-[24px] text-navy">{business.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}

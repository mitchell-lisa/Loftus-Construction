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
  return (
    <>
      <section className="relative h-[calc(100svh-var(--header-h))] min-h-[520px] max-h-[920px] bg-navy">
        <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" quality={85} className="object-cover object-[center_55%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        <div className="wrap relative flex h-full flex-col justify-end pb-12 lg:pb-20">
          <h1 className="max-w-[14ch] text-[clamp(2.6rem,7vw,6rem)] leading-[0.98] text-white">
            Bridges and heavy civil work.
          </h1>
          <p className="mt-5 text-[17px] text-white/85">Cinnaminson, New Jersey. Since 1994.</p>
        </div>
      </section>

      <section className="border-b border-line">
        <dl className="wrap grid grid-cols-1 sm:grid-cols-3">
          {[
            ["Founded", "1994"],
            ["Prequalified", "PennDOT, NJDOT, PA Turnpike"],
            ["Award", "ASHE Project of the Year, 2019"],
          ].map(([k, v], i) => (
            <div key={k} className={`py-6 sm:py-9 ${i ? "border-t border-line sm:border-l sm:border-t-0 sm:pl-8" : ""}`}>
              <dt className="label">{k}</dt>
              <dd className="mt-1 text-[18px] font-semibold text-navy">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap py-20 lg:py-32">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)]">Current work</h2>
          <Link href="/projects" className="link shrink-0 text-[15px] font-semibold text-navy">All projects</Link>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-12 lg:mt-14 lg:grid-cols-12">
          <Link href={`/projects/${first.slug}`} className="group lg:col-span-8">
            <Pic id={first.photo} sizes="(min-width:1024px) 62vw, 100vw" className="aspect-[4/3] lg:aspect-[16/11]" />
            <h3 className="mt-5 text-[22px] group-hover:underline">{first.project.name}</h3>
            <p className="mt-1 text-[15px] text-steel">{first.project.structure}</p>
          </Link>
          <div className="grid gap-12 lg:col-span-4 lg:content-between">
            {rest.map((c) => (
              <Link key={c.slug} href={`/projects/${c.slug}`} className="group">
                <Pic id={c.photo} sizes="(min-width:1024px) 30vw, 100vw" className="aspect-[4/3]" />
                <h3 className="mt-5 text-[22px] group-hover:underline">{c.project.short}</h3>
                <p className="mt-1 text-[15px] text-steel">{c.project.structure}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-32">
          <div className="lg:col-span-6">
            <Pic id="bLow" sizes="(min-width:1024px) 48vw, 100vw" className="aspect-[4/3]" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
            <h2 className="text-[clamp(2rem,4vw,3.25rem)]">What we build</h2>
            <ul className="mt-8 border-t border-line">
              {business.capabilities.map((c) => (
                <li key={c.name} className="border-b border-line py-4 text-[19px] font-semibold text-navy">{c.name}</li>
              ))}
            </ul>
            <Link href="/capabilities" className="link mt-8 inline-block text-[15px] font-semibold text-navy">Capabilities</Link>
          </div>
        </div>
      </section>

      <section className="wrap py-20 lg:py-28">
        <h2 className="text-[clamp(1.6rem,2.6vw,2.25rem)]">Built for</h2>
        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 text-[19px] font-semibold text-navy sm:grid-cols-2 lg:grid-cols-4">
          {business.clients.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="wrap flex flex-col gap-8 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-28">
          <h2 className="max-w-[16ch] text-[clamp(2rem,4.4vw,3.75rem)]">Have a job to price?</h2>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/contact" className="inline-flex min-h-12 items-center bg-navy px-7 text-[16px] font-semibold text-white hover:bg-navy-deep">Request a bid</Link>
            <a href={business.phoneHref} className="text-[18px] font-semibold text-navy">{business.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}

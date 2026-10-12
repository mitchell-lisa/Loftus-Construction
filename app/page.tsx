import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Dim from "@/components/Dim";
import Pic from "@/components/Pic";
import SpeedLines from "@/components/SpeedLines";
import ValueBar from "@/components/ValueBar";
import { business } from "@/lib/business";
import { photos } from "@/lib/photos";

const description =
  "Heavy civil contractor in Cinnaminson, New Jersey. Bridges, culverts, retaining walls, foundations, structural rehabilitation and dams for PennDOT, the Pennsylvania Turnpike Commission, NJDOT, NJ Transit and the City of Philadelphia since 1994.";

const title = `${business.legalName} | Bridges, walls and heavy civil work since 1994`;

export const metadata: Metadata = {
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    images: [
      {
        url: business.hero.src,
        width: business.hero.width,
        height: business.hero.height,
        alt: business.hero.alt,
      },
    ],
  },
};

const [brownsville, university, stPeters] = business.photoProjects;

function Hero() {
  const hero = photos.heroDeck;
  return (
    <section className="on-dark relative bg-navy text-white lg:grid lg:h-[calc(100svh-var(--header-h)-var(--banner-h))] lg:max-h-[980px] lg:min-h-[660px] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <div className="relative h-[50svh] min-h-[320px] overflow-hidden lg:order-2 lg:h-auto lg:min-h-0">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          quality={82}
          sizes="(min-width: 1024px) 60vw, 240vw"
          className="settle object-cover object-[57%_60%] lg:object-[52%_62%]"
        />
      </div>

      <div className="grid-paper relative flex flex-col lg:order-1 lg:min-h-0">
        <div className="flex flex-1 flex-col justify-end px-[var(--gutter)] pb-10 pt-9 lg:pb-12 lg:pl-[max(var(--gutter),calc((100vw-82rem)/2+var(--gutter)))] lg:pr-12 lg:pt-12">
          <h1 data-rise className="max-w-[12ch] text-[clamp(2.6rem,4.7vw,5.6rem)] leading-[0.93]">
            Difficult heavy construction, done safely and on time.
          </h1>
          <p className="mt-6 max-w-[44ch] text-[1.08rem] leading-snug text-mist lg:mt-8 lg:text-[1.15rem]">
            Bridges, culverts, retaining walls, foundations, rehabilitation and dams for PennDOT, the
            Pennsylvania Turnpike, NJDOT and the City of Philadelphia. Built out of Cinnaminson, New Jersey,
            since {business.foundedYear}.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={business.phoneHref}
              data-primary="true"
              className="inline-flex min-h-12 items-center bg-white px-5 text-[17px] font-semibold text-navy transition-colors hover:bg-mist"
            >
              {business.phone}
            </a>
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center border-b-2 border-white text-[17px] font-semibold"
            >
              See the work
            </Link>
          </div>
        </div>
        <SpeedLines reveal weight="bold" className="w-full text-white lg:-mr-24 lg:w-[calc(100%+6rem)] lg:relative lg:z-10" />
        <Dim start className="px-[var(--gutter)] py-5 text-mist lg:pl-[max(var(--gutter),calc((100vw-82rem)/2+var(--gutter)))]">
          {hero.caption}
        </Dim>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="grid-paper-light bg-white">
      <div className="wrap grid gap-12 py-20 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:py-32">
        <blockquote data-rise className="relative">
          <p className="font-display text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.12] text-navy">
            &ldquo;{business.mission}&rdquo;
          </p>
          <footer className="mt-6 flex items-center gap-4 text-[15px] text-muted">
            <SpeedLines reveal weight="fine" className="w-14 text-brand" />
            <span>From the company&rsquo;s mission statement</span>
          </footer>
        </blockquote>
        <div className="lg:pt-3">
          <p className="text-[1.1rem] leading-relaxed text-ink">{business.history[0]}</p>
          <p className="mt-5 text-[1.1rem] leading-relaxed text-ink">
            Since then the firm has built for PennDOT, the Pennsylvania Turnpike Commission, NJDOT, SEPTA, NJ
            Transit, the Burlington County Bridge Commission and the City of Philadelphia.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex min-h-11 items-center border-b-2 border-brand font-semibold text-brand"
          >
            About the company
          </Link>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="bg-white">
      <div className="wrap pb-20 lg:pb-32">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-t border-navy pt-8">
          <h2 className="text-[clamp(2.3rem,5vw,4.4rem)] leading-[0.95] text-navy">Recent work</h2>
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center border-b-2 border-brand font-semibold text-brand"
          >
            All projects
          </Link>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-14 lg:mt-14 lg:grid-cols-12 lg:gap-y-20">
          <article data-rise className="lg:col-span-8">
            <Link href={`/projects/${brownsville.slug}`} className="group block">
              <Pic
                id="bMixer"
                sizes="(min-width: 1024px) 64vw, 100vw"
                className="aspect-[4/3] lg:aspect-[16/11]"
                position="object-[center_55%]"
                caption={false}
              />
              <h3 className="mt-5 text-[clamp(1.7rem,2.6vw,2.4rem)] leading-tight text-navy group-hover:text-brand">
                {brownsville.name}
              </h3>
            </Link>
            <p className="mt-2 max-w-[56ch] text-muted">
              A new concrete bridge, from the old span in 2024 to the deck pour in April 2026.
            </p>
          </article>

          <article data-rise className="lg:col-span-4 lg:pt-24">
            <Link href={`/projects/${university.slug}`} className="group block">
              <Pic
                id="uUnder"
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="aspect-[4/3] lg:aspect-[4/5]"
                position="object-[30%_center]"
                caption={false}
              />
              <h3 className="mt-5 text-[clamp(1.7rem,2.6vw,2.4rem)] leading-tight text-navy group-hover:text-brand">
                {university.name}
              </h3>
            </Link>
            <p className="mt-2 text-muted">Riveted steel, stone piers and a new grated deck in Philadelphia.</p>
          </article>

          <article data-rise className="lg:col-span-12">
            <Link href={`/projects/${stPeters.slug}`} className="group grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
              <div className="lg:col-span-9">
                <Pic
                  id="sAerial"
                  sizes="(min-width: 1024px) 72vw, 100vw"
                  className="aspect-[4/3] lg:aspect-[21/10]"
                  position="object-center"
                  caption={false}
                />
              </div>
              <div className="lg:col-span-3 lg:pb-2">
                <h3 className="text-[clamp(1.7rem,2.6vw,2.4rem)] leading-tight text-navy group-hover:text-brand">
                  {stPeters.name}
                </h3>
                <p className="mt-2 text-muted">
                  A failing road edge on a wooded slope, rebuilt with a new wall, rail and paving.
                </p>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="grid-paper-light border-y border-rule bg-white">
      <div className="wrap py-20 lg:py-28">
        <h2 className="max-w-[18ch] text-[clamp(2.1rem,4.4vw,3.8rem)] leading-[0.98] text-navy">
          Brownsville Road, before and after
        </h2>
        <p className="mt-5 max-w-[56ch] text-[1.08rem] text-ink">
          The same crossing of Neshaminy Creek, eighteen months apart. The old bridge in October 2024, and the
          new deck on its piers in April 2026.
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-6 lg:gap-8">
          <div data-rise>
            <Pic id="bOld" sizes="(min-width: 768px) 48vw, 100vw" className="aspect-[4/3]" captionClass="text-navy" />
          </div>
          <div data-rise>
            <Pic id="bSpan" sizes="(min-width: 768px) 48vw, 100vw" className="aspect-[4/3]" captionClass="text-navy" />
          </div>
        </div>
        <Dim className="mt-6 text-navy">Eighteen months</Dim>
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section className="on-dark grid-paper bg-navy text-white">
      <div className="wrap py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <h2 className="text-[clamp(2.3rem,5vw,4.4rem)] leading-[0.95]">What we build</h2>
          <Link href="/capabilities" className="inline-flex min-h-11 items-center border-b-2 border-white font-semibold">
            Capabilities
          </Link>
        </div>
        <ul className="mt-12 border-t border-white/25">
          {business.capabilities.map((group) => (
            <li key={group.name} className="border-b border-white/25">
              <Link
                href={`/capabilities#${group.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group grid gap-2 py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:gap-10 lg:py-6"
              >
                <span className="flex items-center gap-5">
                  <span className="font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-none">{group.name}</span>
                  <span
                    aria-hidden="true"
                    className="speed hidden w-0 flex-1 text-white opacity-0 transition-all duration-500 group-hover:w-24 group-hover:opacity-100 md:flex"
                    style={{ "--speed-1": "2px", "--speed-gap": "4px" } as React.CSSProperties}
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </span>
                <span className="text-[15px] leading-snug text-mist">{group.items.slice(0, 3).join(", ")}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[60ch] text-[1.08rem] text-mist">
          Also design-build, from budget pricing and value engineering through permits and agency approvals, and
          preconstruction services before ground is broken.
        </p>
      </div>
    </section>
  );
}

function RecordTeaser() {
  const top = [...business.projects]
    .filter((p) => p.value !== null)
    .sort((a, b) => (b.value ?? 0) - (a.value ?? 0))
    .slice(0, 5);
  const max = top[0]?.value ?? 1;
  const award = business.award;
  return (
    <section className="bg-white">
      <div className="wrap py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <h2 className="text-[clamp(2.3rem,5vw,4.4rem)] leading-[0.95] text-navy">The record</h2>
            <p className="mt-5 max-w-[40ch] text-[1.08rem] text-ink">
              The five largest contracts the firm has published, with the owner and the contract amount.
            </p>
            {award ? (
              <div className="mt-10 border-l-[3px] border-brand pl-5">
                <p className="font-display text-[1.45rem] leading-snug text-navy">
                  {award.title}, {award.year}
                </p>
                <p className="mt-2 text-[15px] text-muted">{award.body}</p>
              </div>
            ) : null}
            <Link
              href="/record"
              className="mt-9 inline-flex min-h-11 items-center border-b-2 border-brand font-semibold text-brand"
            >
              Full record
            </Link>
          </div>
          <ol className="border-t border-navy">
            {top.map((project) => (
              <li key={project.name} className="border-b border-rule py-5">
                <p className="font-display text-[1.3rem] leading-snug text-navy">{project.name}</p>
                <p className="mt-1 text-[15px] text-muted">
                  {[project.owner, project.location].filter(Boolean).join(", ")}
                </p>
                <ValueBar value={project.value ?? 0} max={max} className="mt-3" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section className="bg-white">
      <div className="wrap pb-20 lg:pb-28">
        <div className="border-t border-navy pt-10 lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:pt-14">
          <h2 className="max-w-[16ch] text-[clamp(2.3rem,5vw,4.4rem)] leading-[0.95] text-navy">
            Have a structure that needs building?
          </h2>
          <div className="mt-8 lg:mt-2">
            <a
              href={business.phoneHref}
              data-primary="true"
              className="inline-flex min-h-11 items-center font-display text-[clamp(2rem,3.6vw,2.8rem)] leading-none text-brand"
            >
              {business.phone}
            </a>
            <p className="mt-3">
              <a href={`mailto:${business.email}`} className="inline-flex min-h-11 items-center break-all text-ink underline decoration-rule underline-offset-4">
                {business.email}
              </a>
            </p>
            <p className="mt-1 text-muted">
              {business.street}, {business.city}, {business.state} {business.zip}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center bg-navy px-5 text-[16px] font-semibold text-white transition-colors hover:bg-brand"
            >
              Request a bid
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Hero />
      <Statement />
      <Work />
      <BeforeAfter />
      <WhatWeBuild />
      <RecordTeaser />
      <ContactBand />
    </>
  );
}

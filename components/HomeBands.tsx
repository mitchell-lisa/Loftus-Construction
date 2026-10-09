import Link from "next/link";
import { business } from "@/lib/business";
import Divider from "./Divider";
import ProjectStrip from "./ProjectStrip";

export default function HomeBands() {
  const names = [
    ...business.capabilities.map((group) => group.name),
    ...business.services.map((service) => service.name),
  ];
  const current = business.projects.find((project) => project.current);
  const award = business.award;

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-x-6 gap-y-2 px-5 pb-2 pt-14 lg:pt-20">
          <h2 className="text-[clamp(2.1rem,4vw,3.2rem)] leading-[0.95] text-navy">Projects</h2>
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center border-b-2 border-brand font-semibold text-brand"
          >
            All projects
          </Link>
        </div>
        <ProjectStrip order={[1, 0]} />
      </section>

      <section className="bg-chalk">
        <Divider />
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <h2 className="max-w-[12ch] text-[clamp(2.1rem,4vw,3.2rem)] leading-[0.95] text-navy">
              What we build
            </h2>
            <Link
              href="/capabilities"
              className="inline-flex min-h-11 items-center border-b-2 border-brand font-semibold text-brand"
            >
              Capabilities
            </Link>
          </div>
          <ul className="mt-10 grid border-t border-rule sm:grid-cols-2 sm:gap-x-16">
            {names.map((name) => (
              <li key={name} className="border-b border-rule py-3 text-[1.2rem] text-navy">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <h2 className="text-[clamp(2.1rem,4vw,3.2rem)] leading-[0.95] text-navy">Record</h2>
            <Link
              href="/record"
              className="inline-flex min-h-11 items-center border-b-2 border-brand font-semibold text-brand"
            >
              Full record
            </Link>
          </div>
          <div className="mt-10 grid gap-12 border-t border-navy pt-8 lg:grid-cols-2">
            {current ? (
              <div>
                <p className="font-display text-[clamp(1.7rem,2.6vw,2.35rem)] leading-tight text-navy">
                  {current.name}
                </p>
                {current.owner ? <p className="mt-3 text-[17px] text-ink">{current.owner}</p> : null}
                <p className="mt-1 text-[15px] text-[color:var(--ink-muted)]">Under contract now</p>
              </div>
            ) : null}
            {award ? (
              <div>
                <p className="font-display text-[clamp(1.7rem,2.6vw,2.35rem)] leading-tight text-navy">
                  {award.title}, {award.year}
                </p>
                <p className="mt-3 text-[17px] text-[color:var(--ink-muted)]">{award.body}</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="on-dark bg-navy text-white">
        <Divider tone="white" />
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-14 lg:py-20">
          <h2 className="text-[clamp(2.1rem,4vw,3.2rem)] leading-[0.95]">Contact</h2>
          <p className="mt-6">
            <a
              href={business.phoneHref}
              data-primary="true"
              className="inline-flex min-h-11 items-center border-b-2 border-white text-[clamp(1.6rem,3vw,2.15rem)] font-semibold leading-none"
            >
              {business.phone}
            </a>
          </p>
          <p className="mt-4">
            <a
              href={`mailto:${business.email}`}
              className="inline-flex min-h-11 items-center border-b border-white text-[17px]"
            >
              {business.email}
            </a>
          </p>
          <p className="mt-4 text-[17px] text-[#d5d8e2]">
            {business.street}, {business.city}, {business.state} {business.zip}
          </p>
          <p className="mt-8">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center bg-brand px-4 text-[16px] font-semibold text-white hover:bg-[#0012c4]"
            >
              Request a bid
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import PageLead from "@/components/PageLead";
import Pic from "@/components/Pic";
import { business } from "@/lib/business";
import type { PhotoKey } from "@/lib/photos";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/pageMeta";

const description =
  "Three current Loftus jobs in photographs: a new bridge on Brownsville Road over Neshaminy Creek, the University Avenue Bridge over the Schuylkill River, and the St. Peters Road retaining wall.";

export const metadata = pageMeta("Projects", description, "/projects", photos.bWide);

const cover: Record<string, PhotoKey> = {
  "brownsville-road": "bWide",
  "university-avenue": "uDeep",
  "st-peters-road": "sWall",
};

export default function ProjectsPage() {
  return (
    <>
      <PageLead
        title="Projects"
        line="Three jobs from the last two years, in photographs from the job sites. Older contracts, with owners and amounts, are on the record page."
      />
      <div className="bg-white">
        {business.photoProjects.map((project, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={project.slug} className="wrap border-b border-rule py-14 last:border-b-0 lg:py-24">
              <Link
                href={`/projects/${project.slug}`}
                className={`group grid gap-7 lg:grid-cols-12 lg:items-center lg:gap-12 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div data-rise className="lg:col-span-7">
                  <Pic
                    id={cover[project.slug]}
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="aspect-[4/3] lg:aspect-[7/5]"
                    caption={false}
                  />
                </div>
                <div className="lg:col-span-5">
                  <h2 className="text-[clamp(2.1rem,4vw,3.4rem)] leading-[0.98] text-navy transition-colors group-hover:text-brand">
                    {project.name}
                  </h2>
                  <p className="mt-5 text-[1.05rem] leading-relaxed text-ink">{project.summary}</p>
                  <dl className="mt-7 border-t border-navy">
                    {project.sheet.map((row) => (
                      <div key={row.label} className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-rule py-2.5 text-[15px]">
                        <dt className="caps text-navy">{row.label}</dt>
                        <dd className="text-ink">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-7 inline-flex min-h-11 items-center border-b-2 border-brand font-semibold text-brand">
                    See the job
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
      <section className="on-dark grid-paper bg-navy text-white">
        <div className="wrap py-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-[30ch] font-display text-[clamp(1.7rem,3vw,2.5rem)] leading-tight">
              Fourteen published contracts, from the Strasburg Railroad to the Pennsylvania Turnpike.
            </p>
            <Link href="/record" className="inline-flex min-h-11 items-center border-b-2 border-white font-semibold">
              See the record
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

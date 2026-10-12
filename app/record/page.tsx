import PageLead from "@/components/PageLead";
import Pic from "@/components/Pic";
import SpeedLines from "@/components/SpeedLines";
import ValueBar from "@/components/ValueBar";
import { business, formatUSD } from "@/lib/business";
import { pageMeta } from "@/lib/pageMeta";

const description =
  "Selected contracts published by Loftus Construction, with the owner and contract value, prequalification, clients, memberships, and the 2019 Project of the Year from the American Society of Highway Engineers, Delaware Valley Section.";

export const metadata = pageMeta("Record", description, "/record");

export default function RecordPage() {
  const projects = business.projects;
  const max = Math.max(...projects.map((p) => p.value ?? 0));
  const pictured = projects.filter((p) => p.photo);
  const award = business.award;

  return (
    <>
      <PageLead
        title="Record"
        line="Contracts the firm has published, who they were for and what they were worth, along with prequalification, clients and memberships."
      />

      <section className="bg-white">
        <div className="wrap py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <h2 className="text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[0.98] text-navy">Selected contracts</h2>
            <p className="max-w-[40ch] text-[15px] text-muted">
              Owner and amount as published by the firm. The rule beside each amount is drawn to scale against the
              largest job.
            </p>
          </div>

          <div role="table" aria-label="Selected contracts with owner and contract amount" className="mt-10">
            <div
              role="row"
              className="hidden grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1.3fr)] gap-8 border-b border-navy pb-3 lg:grid"
            >
              <span role="columnheader" className="caps text-navy">
                Project
              </span>
              <span role="columnheader" className="caps text-navy">
                Owner
              </span>
              <span role="columnheader" className="caps text-right text-navy">
                Contract
              </span>
            </div>
            <div role="rowgroup" className="border-t border-navy lg:border-t-0">
              {projects.map((project) => (
                <div
                  role="row"
                  key={project.name}
                  className="grid gap-1 border-b border-rule py-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1.3fr)] lg:items-center lg:gap-8"
                >
                  <div role="cell" className="min-w-0">
                    <p className="font-display text-[1.3rem] leading-snug text-navy lg:text-[1.35rem]">{project.name}</p>
                    {project.location ? <p className="text-[15px] text-muted">{project.location}</p> : null}
                  </div>
                  <div role="cell" className="min-w-0 text-[15px] text-muted lg:text-[16px] lg:text-ink">
                    {project.owner ?? <span className="sr-only">Owner not published</span>}
                  </div>
                  <div role="cell" className="mt-2 min-w-0 lg:mt-0">
                    {project.value !== null ? <ValueBar value={project.value} max={max} /> : null}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="grid-paper-light border-y border-rule bg-white">
        <div className="wrap py-16 lg:py-24">
          <h2 className="max-w-[20ch] text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[0.98] text-navy">
            Five of them, in photographs
          </h2>
          <p className="mt-5 max-w-[56ch] text-[1.05rem] text-ink">
            From the company&rsquo;s own files.
          </p>
          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {pictured.map((project) => (
              <figure key={project.name} data-rise className="min-w-0">
                <div className="max-w-[570px]">
                  <Pic id={project.photo!} sizes="(min-width: 768px) 570px, 100vw" className="aspect-[1140/355]" caption={false} />
                </div>
                <figcaption className="mt-4 max-w-[570px]">
                  <p className="font-display text-[1.25rem] leading-snug text-navy">{project.name}</p>
                  <p className="mt-1 text-[15px] text-muted">
                    {[project.owner, project.location].filter(Boolean).join(", ")}
                    {project.value !== null ? (
                      <>
                        , <span className="tnum">{formatUSD(project.value)}</span>
                      </>
                    ) : null}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-16 lg:py-24">
          {[
            { label: "Clients", items: business.clients, big: true },
            { label: "Prequalified with", items: business.prequalifications, big: false },
            { label: "Member of", items: business.associations, big: false },
          ].map((group) => (
            <div
              key={group.label}
              className="grid gap-6 border-t border-navy py-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16 lg:py-14"
            >
              <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] leading-[1] text-navy">{group.label}</h2>
              <ul className={group.big ? "grid gap-x-12 sm:grid-cols-2" : "grid gap-x-12 md:grid-cols-2"}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`border-b border-rule py-2.5 ${
                      group.big ? "font-display text-[1.35rem] leading-snug text-navy" : "text-[16px] text-ink"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {award ? (
        <section className="on-dark grid-paper bg-navy text-white">
          <div className="wrap py-16 lg:py-24">
            <p className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85]">{award.year}</p>
            <SpeedLines reveal weight="bold" className="mt-6 w-full text-white" />
            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16">
              <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.05]">{award.title}</h2>
              <div>
                <p className="text-[15px] text-mist">{award.body}</p>
                <p className="mt-4 max-w-[56ch] text-[1.08rem] leading-relaxed">{award.detail}</p>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

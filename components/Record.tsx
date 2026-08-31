import { Section, SectionHeading } from "./Section";
import { business, formatUSD } from "@/lib/business";

export default function Record() {
  const current = business.projects.find((p) => p.current);

  return (
    <Section id="record" className="bg-white">
      <SectionHeading sub="Owner agency and contract value as published by the company.">
        Selected record
      </SectionHeading>

      {current ? (
        <div className="mb-8 border-l-2 border-[#b8891f] bg-[#f6ecd6] px-5 py-4">
          <p className="text-[14.5px] font-semibold text-[#7a5308]">
            Under contract now
          </p>
          <p className="mt-1 text-[16.5px] text-ink">{current.name}</p>
          <p className="mt-0.5 text-[15px] text-[color:var(--ink-muted)]">
            {current.owner}
          </p>
        </div>
      ) : null}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-[15px]">
          <caption className="sr-only">
            Selected projects completed or under contract by Loftus Construction,
            with owner agency and contract value.
          </caption>
          <thead>
            <tr className="border-b-2 border-ink text-left text-[11.5px] uppercase tracking-[0.09em] text-[color:var(--ink-muted)]">
              <th scope="col" className="py-2 pr-4 font-semibold">
                Project
              </th>
              <th scope="col" className="py-2 pr-4 font-semibold">
                Owner
              </th>
              <th scope="col" className="py-2 text-right font-semibold">
                Contract
              </th>
            </tr>
          </thead>
          <tbody>
            {business.projects.map((project) => (
              <tr
                key={project.name}
                className="border-b border-[color:var(--hairline)] align-top"
              >
                <td className="py-3 pr-4">
                  {project.name}
                  {project.location ? (
                    <span className="block text-[13.5px] text-[color:var(--ink-muted)]">
                      {project.location}
                    </span>
                  ) : null}
                </td>
                <td className="py-3 pr-4 text-[color:var(--ink-muted)]">
                  {project.owner ?? ""}
                </td>
                <td className="tnum py-3 text-right whitespace-nowrap">
                  {project.value !== null ? formatUSD(project.value) : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

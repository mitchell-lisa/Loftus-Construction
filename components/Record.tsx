import { Section, SectionHeading } from "./Section";
import { business, formatUSD } from "@/lib/business";

export default function Record() {
  const current = business.projects.find((project) => project.current);

  return (
    <Section id="record" className="bg-white">
      <SectionHeading>Selected record</SectionHeading>
      <p className="mt-4 max-w-[54ch] text-[17px] text-[color:var(--ink-muted)]">
        Owner and contract value as published by the firm.
      </p>

      {current ? (
        <div className="mt-8 border-l-2 border-brand pl-4">
          <p className="text-[15px] font-semibold text-navy">Under contract now</p>
          <p className="mt-1 text-[18px] text-ink">{current.name}</p>
          {current.owner ? (
            <p className="text-[16px] text-[color:var(--ink-muted)]">{current.owner}</p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-[16px]">
          <caption className="sr-only">
            Selected projects with the owner and contract value published by Loftus
            Construction.
          </caption>
          <thead>
            <tr className="border-b-2 border-navy text-left text-[13px] text-navy">
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
              <tr key={project.name} className="border-b border-[color:var(--hairline)] align-top">
                <td className="py-3 pr-4">
                  {project.name}
                  {project.location ? (
                    <span className="block text-[14px] text-[color:var(--ink-muted)]">
                      {project.location}
                    </span>
                  ) : null}
                </td>
                <td className="py-3 pr-4 text-[color:var(--ink-muted)]">{project.owner ?? ""}</td>
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

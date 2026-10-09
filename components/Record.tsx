import Divider from "./Divider";
import { Section, SectionHeading } from "./Section";
import { business, formatUSD } from "@/lib/business";

export default function Record() {
  const current = business.projects.find((project) => project.current);

  return (
    <>
      <Divider />
      <Section id="record" className="bg-white">
        <SectionHeading>Selected record</SectionHeading>
        <p className="mt-4 max-w-[42ch] text-[17px] text-[color:var(--ink-muted)]">
          Owner and contract value as published by the firm.
        </p>

        {current ? (
          <div className="mt-10 border-t border-navy pt-6">
            <p className="font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-tight text-navy">
              {current.name}
            </p>
            {current.owner ? (
              <p className="mt-2 text-[17px] text-ink">{current.owner}</p>
            ) : null}
            <p className="mt-1 text-[15px] text-[color:var(--ink-muted)]">Under contract now</p>
          </div>
        ) : null}

        <div className="mt-10 overflow-x-auto">
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
                <tr key={project.name} className="border-b border-rule align-top">
                  <td className="py-3 pr-4">
                    <span className="font-display text-[1.05rem] text-navy">{project.name}</span>
                    {project.location ? (
                      <span className="block text-[14px] text-[color:var(--ink-muted)]">
                        {project.location}
                      </span>
                    ) : null}
                  </td>
                  <td className="py-3 pr-4 text-[color:var(--ink-muted)]">{project.owner ?? ""}</td>
                  <td className="tnum py-3 text-right whitespace-nowrap text-ink">
                    {project.value !== null ? formatUSD(project.value) : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}

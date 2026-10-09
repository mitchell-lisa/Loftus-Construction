import { Section } from "./Section";
import { business, formatUSD } from "@/lib/business";

export default function Record() {
  const current = business.projects.find((project) => project.current);

  return (
    <Section compact className="bg-white">
      <h2 className="max-w-[16ch] text-[clamp(2rem,4vw,3rem)] leading-[0.95] text-navy">
        Selected contracts
      </h2>
      <p className="mt-4 max-w-[42ch] text-[17px] text-[color:var(--ink-muted)]">
        Owner and contract value as published by the firm.
      </p>

      {current ? (
        <div className="mt-10 border-t border-navy pt-6">
          <p className="text-balance font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-tight text-navy">
            {current.name}
          </p>
          {current.owner ? <p className="mt-2 text-[17px] text-ink">{current.owner}</p> : null}
          <p className="mt-1 text-[15px] text-[color:var(--ink-muted)]">Under contract now</p>
        </div>
      ) : null}

      <ul className="mt-8 border-t border-navy lg:hidden">
        {business.projects.map((project) => (
          <li key={project.name} className="border-b border-rule py-4">
            <p className="text-balance font-display text-[1.2rem] leading-snug text-navy">{project.name}</p>
            {project.location ? (
              <p className="mt-1 text-[14px] text-[color:var(--ink-muted)]">{project.location}</p>
            ) : null}
            {project.owner ? (
              <p className="mt-1 text-[15px] text-[color:var(--ink-muted)]">{project.owner}</p>
            ) : null}
            {project.value !== null ? (
              <p className="tnum mt-1 text-[16px] text-ink">{formatUSD(project.value)}</p>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="mt-10 hidden max-w-full overflow-x-auto lg:block">
        <table className="w-full min-w-[640px] border-collapse text-[16px]">
          <caption className="sr-only">
            Selected projects with the owner and contract value published by Loftus Construction.
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
              <tr key={project.name} className="border-b border-rule align-top hover:bg-chalk">
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
  );
}

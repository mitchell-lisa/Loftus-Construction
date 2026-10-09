import { Section, SectionHeading } from "./Section";
import { business } from "@/lib/business";

export default function Capabilities() {
  return (
    <Section id="capabilities" className="bg-chalk">
      <SectionHeading>What we build</SectionHeading>
      <p className="mt-4 max-w-[46ch] text-[18px] text-ink">
        Bridges, culverts, retaining walls, foundations, structural rehabilitation
        and dams.
      </p>

      <div className="mt-10">
        {business.capabilities.map((group) => (
          <div
            key={group.name}
            className="grid gap-3 border-t border-[color:var(--hairline)] py-6 lg:grid-cols-[16rem_1fr] lg:gap-10"
          >
            <h3 className="text-[1.45rem] text-navy">{group.name}</h3>
            <ul className="grid gap-x-10 gap-y-1 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item} className="text-[16.5px] text-[color:var(--ink-muted)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-12 border-t border-[color:var(--hairline)] pt-10 lg:grid-cols-2">
        {business.services.map((service) => (
          <div key={service.name}>
            <h3 className="text-[1.45rem] text-navy">{service.name}</h3>
            <p className="mt-3 max-w-[46ch] text-[16.5px] text-[color:var(--ink-muted)]">
              {service.blurb}
            </p>
            <ul className="mt-4 space-y-1">
              {service.items.map((item) => (
                <li key={item} className="text-[16.5px] text-[color:var(--ink-muted)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

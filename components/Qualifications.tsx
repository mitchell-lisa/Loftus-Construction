import { Section } from "./Section";
import { business } from "@/lib/business";

export default function Qualifications() {
  return (
    <Section className="bg-white">
      <div className="grid gap-12 lg:grid-cols-3">
        <div>
          <h2 className="text-[1.7rem] leading-tight text-navy">Prequalified with</h2>
          <ul className="mt-4 space-y-1.5">
            {business.prequalifications.map((item) => (
              <li key={item} className="text-[15.5px] text-[color:var(--ink-muted)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[1.7rem] leading-tight text-navy">Clients</h2>
          <ul className="mt-4 space-y-1.5">
            {business.clients.map((item) => (
              <li key={item} className="text-[15.5px] text-[color:var(--ink-muted)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[1.7rem] leading-tight text-navy">Member of</h2>
          <ul className="mt-4 space-y-1.5">
            {business.associations.map((item) => (
              <li key={item} className="text-[15.5px] text-[color:var(--ink-muted)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

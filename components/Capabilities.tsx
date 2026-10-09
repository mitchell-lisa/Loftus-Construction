import { Section } from "./Section";
import { business } from "@/lib/business";

export default function Capabilities() {
  return (
    <Section className="bg-chalk">
      <div className="border-t border-rule">
        {business.capabilities.map((group) => (
          <div
            key={group.name}
            className="grid gap-4 border-b border-rule py-7 lg:grid-cols-[18rem_1fr] lg:gap-16 lg:py-8"
          >
            <h2 className="text-[clamp(1.8rem,2.4vw,2.3rem)] leading-none text-navy">{group.name}</h2>
            <ul>
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-rule py-2 text-[16.5px] text-ink last:border-b-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {business.services.map((service) => (
          <div
            key={service.name}
            className="grid gap-4 border-b border-rule py-7 lg:grid-cols-[18rem_1fr] lg:gap-16 lg:py-8"
          >
            <h2 className="text-[clamp(1.8rem,2.4vw,2.3rem)] leading-none text-navy">{service.name}</h2>
            <div>
              <p className="max-w-[52ch] text-[17px] leading-relaxed text-ink">{service.blurb}</p>
              <ul className="mt-4">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-rule py-2 text-[16.5px] text-[color:var(--ink-muted)] last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

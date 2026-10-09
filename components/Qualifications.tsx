import { Section } from "./Section";
import { business } from "@/lib/business";

const groups = [
  { label: "Prequalified with", items: business.prequalifications },
  { label: "Clients", items: business.clients },
  { label: "Member of", items: business.associations },
];

export default function Qualifications() {
  return (
    <Section className="bg-chalk">
      <div className="border-t border-rule">
        {groups.map((group) => (
          <div
            key={group.label}
            className="grid gap-4 border-b border-rule py-8 lg:grid-cols-[18rem_1fr] lg:gap-16 lg:py-10"
          >
            <h2 className="text-[clamp(1.8rem,2.6vw,2.4rem)] leading-none text-navy">
              {group.label}
            </h2>
            <ul className="lg:columns-2 lg:gap-x-16">
              {group.items.map((item) => (
                <li key={item} className="break-inside-avoid border-b border-rule py-2 text-[16.5px] text-ink">
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

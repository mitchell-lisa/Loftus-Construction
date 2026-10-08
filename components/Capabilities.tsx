import Image from "next/image";
import { Section, SectionHeading } from "./Section";
import { business } from "@/lib/business";

export default function Capabilities() {
  return (
    <Section id="capabilities" className="bg-chalk">
      <SectionHeading>What we build</SectionHeading>

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {business.capabilities.map((group) => (
          <div key={group.name}>
            {group.image ? (
              <div className="relative mb-4 aspect-[350/260] w-full overflow-hidden bg-concrete">
                <Image
                  src={group.image}
                  alt={group.alt ?? ""}
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            ) : null}
            <h3 className="text-[19px] text-ink">{group.name}</h3>
            <ul className="mt-2 space-y-1 text-[15px] text-[color:var(--ink-muted)]">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 border-t border-[color:var(--hairline)] pt-10 sm:grid-cols-2">
        {business.services.map((service) => (
          <div key={service.name}>
            <h3 className="text-[19px] text-ink">{service.name}</h3>
            <p className="mt-2 max-w-[46ch] text-[15px] text-[color:var(--ink-muted)]">
              {service.blurb}
            </p>
            <ul className="mt-3 space-y-1 text-[15px] text-[color:var(--ink-muted)]">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

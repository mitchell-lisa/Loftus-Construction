import Link from "next/link";
import PageLead from "@/components/PageLead";
import Pic from "@/components/Pic";
import SpeedLines from "@/components/SpeedLines";
import { business } from "@/lib/business";
import { photos, type PhotoKey } from "@/lib/photos";
import { pageMeta } from "@/lib/pageMeta";

const description =
  "Bridges, culverts, retaining walls, foundations, structural rehabilitation and dams, plus design-build and preconstruction, from Loftus Construction in Cinnaminson, New Jersey.";

export const metadata = pageMeta("Capabilities", description, "/capabilities", photos.bLength);

const thumbs: Record<string, PhotoKey> = {
  Bridges: "bOblique",
  Culverts: "cCulverts",
  "Retaining walls": "sRoad",
  Foundations: "cFoundations",
  "Structural rehabilitation": "cRehab",
  Dams: "cDams",
};

const anchor = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export default function CapabilitiesPage() {
  return (
    <>
      <PageLead
        title="Capabilities"
        line="The structures the firm builds and repairs, the way the company lists them, plus design-build and preconstruction."
      />

      <div className="relative bg-navy">
        <Pic
          id="bLength"
          sizes="100vw"
          className="h-[40svh] min-h-[240px] lg:h-[56svh]"
          position="object-[center_45%]"
          caption={false}
          zoom={false}
        />
      </div>

      <section className="bg-white">
        <div className="wrap py-16 lg:py-24">
          <nav aria-label="Capabilities on this page" className="flex flex-wrap gap-x-6 gap-y-1 border-b border-rule pb-6">
            {[...business.capabilities.map((g) => g.name), ...business.services.map((s) => s.name)].map((name) => (
              <a
                key={name}
                href={`#${anchor(name)}`}
                className="inline-flex min-h-11 items-center text-[15px] text-navy underline decoration-rule underline-offset-4 hover:decoration-brand"
              >
                {name}
              </a>
            ))}
          </nav>

          <div>
            {business.capabilities.map((group) => (
              <article
                key={group.name}
                id={anchor(group.name)}
                className="grid gap-6 border-b border-rule py-10 md:grid-cols-[176px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[176px_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:py-14"
              >
                <div className="w-[150px] md:w-[176px]">
                  <Pic
                    id={thumbs[group.name]}
                    sizes="176px"
                    className="aspect-[4/3]"
                    caption={false}
                  />
                </div>
                <div>
                  <h2 className="text-[clamp(2rem,3.4vw,2.9rem)] leading-[1] text-navy">{group.name}</h2>
                  <SpeedLines reveal weight="fine" className="mt-5 w-20 text-brand" />
                </div>
                <ul className="md:col-start-2 lg:col-start-auto">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-rule py-2.5 text-[16.5px] text-ink first:border-t lg:first:border-t-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark grid-paper bg-navy text-white">
        <div className="wrap grid gap-14 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
          {business.services.map((service) => (
            <article key={service.name} id={anchor(service.name)}>
              <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] leading-[1]">{service.name}</h2>
              <SpeedLines reveal className="mt-6 w-full text-white" />
              <p className="mt-6 max-w-[48ch] text-[1.08rem] leading-relaxed text-white">{service.blurb}</p>
              <ul className="mt-6 border-t border-white/25">
                {service.items.map((item) => (
                  <li key={item} className="border-b border-white/25 py-2.5 text-[16px] text-mist">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap flex flex-wrap items-end justify-between gap-6 py-16 lg:py-20">
          <p className="max-w-[28ch] font-display text-[clamp(1.7rem,3vw,2.5rem)] leading-tight text-navy">
            Pricing a bridge, a wall or a culvert? Call the office in Cinnaminson.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={business.phoneHref}
              data-primary="true"
              className="inline-flex min-h-12 items-center bg-navy px-5 font-semibold text-white hover:bg-brand"
            >
              {business.phone}
            </a>
            <Link href="/contact" className="inline-flex min-h-12 items-center border-b-2 border-brand font-semibold text-brand">
              Request a bid
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

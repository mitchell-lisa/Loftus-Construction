import PageHead from "@/components/PageHead";
import Pic from "@/components/Pic";
import { business } from "@/lib/business";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("Capabilities", "Bridges, culverts, retaining walls, foundations, rehabilitation and dams. Design-build and preconstruction.", "/capabilities", photos.bOblique);

export default function CapabilitiesPage() {
  return (
    <>
      <PageHead title="Capabilities" />
      <div className="wrap">
        <Pic id="bOblique" sizes="100vw" priority className="aspect-[4/3] md:aspect-[21/9]" />
      </div>
      <section className="wrap grid gap-x-8 gap-y-14 py-20 sm:grid-cols-2 lg:grid-cols-3 lg:py-28">
        {business.capabilities.map((c) => (
          <div key={c.name} data-reveal className="border-t border-rule pt-6">
            <h2 className="t-h3">{c.name}</h2>
            <ul className="mt-4 space-y-2 text-[15px] text-steel">
              {c.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="bg-panel">
        <div className="wrap grid gap-x-8 gap-y-14 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Pic id="bLength" sizes="(min-width:1024px) 40vw, 100vw" className="aspect-[4/5] lg:aspect-[4/5]" />
          </div>
          <div className="grid gap-14 lg:col-span-6 lg:col-start-7 lg:self-center">
            {business.services.map((s) => (
              <div key={s.name} data-reveal className="border-t border-rule pt-6">
                <h2 data-reveal className="t-h2 text-[clamp(1.75rem,3vw,2.5rem)]">{s.name}</h2>
                <ul className="mt-4 space-y-2 text-[15px] text-steel">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

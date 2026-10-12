import Link from "next/link";
import PageHead from "@/components/PageHead";
import Pic from "@/components/Pic";
import { capabilities, services, record, dbClients } from "@/lib/site";
import { role } from "@/lib/alloc";
import { meta } from "@/lib/meta";

export const metadata = meta("Capabilities", "Design-build, preconstruction and heavy civil construction: bridges, rehabilitation, retaining walls, foundations, culverts and dams.", "/capabilities");

const capPhoto: Record<string, string | null> = { bridges: role.capBridges, rehab: role.capRehab, walls: role.capWalls, foundations: role.capFoundations };

export default function Capabilities() {
  return (
    <>
      <PageHead title="Capabilities" lede="Design-build, preconstruction and heavy civil construction, for public owners across Pennsylvania, New Jersey and Delaware." photo={role.capHero} />

      <section className="section">
        <div className="wrap">
          <div className="grid gap-px services-grid lg:grid-cols-2">
            {services.map((s) => (
              <div key={s.slug} id={s.slug} className="service" data-reveal>
                <h2 className="h2">{s.name}</h2>
                <p className="mt-4 max-w-[44ch]">{s.text}</p>
                <ul className="tick mt-8">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                {s.slug === "design-build" ? <p className="mt-8 muted text-[15px]">Design-build clients include {dbClients.join(", ")}.</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <h2 className="h1 max-w-[16ch]" data-reveal>Construction</h2>
          <p className="lede mt-6 max-w-[48ch]" data-reveal>Six groups of structures, from new bridges to dam reconstruction.</p>
          <div className="caps mt-14 lg:mt-20">
            {capabilities.map((c) => {
              const jobs = record.filter((r) => r.caps.includes(c.key));
              const img = capPhoto[c.key];
              return (
                <section key={c.key} id={c.key} className={`cap ${img ? "cap-img" : "cap-type"}`} data-reveal>
                  <div className="cap-body">
                    <h3 className="h2">{c.name}</h3>
                    <p className="mt-3 muted">{c.text}</p>
                    <ul className="tick mt-6">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  </div>
                  <div className="cap-side">
                    {img ? <Pic k={img} className="aspect-[4/3]" sizes="(min-width:1024px) 40vw, 100vw" /> : null}
                    {jobs.length ? (
                      <div className="cap-jobs">
                        <p className="cap-jobs-h">On the record</p>
                        <ul>{jobs.slice(0, 5).map((j) => <li key={j.slug}><Link href={`/projects/${j.slug}`} className="link">{j.name}</Link></li>)}</ul>
                      </div>
                    ) : null}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <h2 className="h2 lg:col-span-5" data-reveal>Have a structure out for bid, or one that needs a design-build answer?</h2>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            <p className="lede">Send the bid date, the location and the documents you have.</p>
            <Link href="/contact" className="btn mt-8">Request a bid</Link>
          </div>
        </div>
      </section>
    </>
  );
}

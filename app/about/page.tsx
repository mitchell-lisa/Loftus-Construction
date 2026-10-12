import PageHead from "@/components/PageHead";
import Pic from "@/components/Pic";
import { business } from "@/lib/business";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("About", "Loftus Construction was founded in 1994 by Kevin J. Loftus in Cinnaminson, New Jersey.", "/about", photos.bContext);

const years = [
  ["1994", "Founded by Kevin J. Loftus."],
  ["1997", "Prequalified by PennDOT and NJDOT."],
  ["2019", "ASHE Delaware Valley Project of the Year for the SR 13 masonry arch."],
];

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-[clamp(1.6rem,2.6vw,2.25rem)]">{title}</h2>
      <ul className="mt-6 border-t border-line">
        {items.map((i) => <li key={i} className="border-b border-line py-3 text-[16px]">{i}</li>)}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHead title="About" line="Difficult heavy construction, built safely and on time." />
      <div className="wrap">
        <Pic id="bContext" sizes="100vw" priority className="aspect-[4/3] md:aspect-[21/9]" />
      </div>
      <section className="wrap py-20 lg:py-28">
        <dl className="border-t border-navy">
          {years.map(([y, t]) => (
            <div key={y} className="grid gap-1 border-b border-line py-6 md:grid-cols-12 md:gap-8">
              <dt className="text-[clamp(1.6rem,2.6vw,2.25rem)] font-semibold tracking-tight text-navy md:col-span-3">{y}</dt>
              <dd className="self-center text-[18px] md:col-span-8">{t}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="bg-stone">
        <div className="wrap grid gap-16 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <List title="Prequalified with" items={business.prequalifications} />
          <List title="Member of" items={business.associations} />
        </div>
      </section>
    </>
  );
}

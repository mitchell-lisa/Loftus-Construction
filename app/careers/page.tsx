import PageHead from "@/components/PageHead";
import Pic from "@/components/Pic";
import { business } from "@/lib/business";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("Careers", "The Bench Strength Program: one year of training for recent engineering graduates.", "/careers", photos.bCrew);

export default function CareersPage() {
  const c = business.careers!;
  return (
    <>
      <PageHead title="Careers" line="We grow engineers from within." />
      <div className="wrap">
        <Pic id="bCrew" sizes="100vw" priority className="aspect-[4/3] md:aspect-[21/9]" position="object-[center_45%]" />
      </div>
      <section className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <div className="lg:col-span-7">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)]">{c.program}</h2>
          <p className="mt-6 max-w-[54ch] text-[18px] text-steel">
            One year of training for recent graduates, preferably in civil engineering. Estimating, project engineering, equipment, contracts and safety.
          </p>
        </div>
        <div className="border-t border-rule pt-6 text-[16px] lg:col-span-4 lg:col-start-9">
          <p className="font-semibold text-chalk">Resumes to {business.careersContact}</p>
          <a href={`mailto:${business.careersEmail}`} className="link mt-2 inline-block break-all text-chalk">{business.careersEmail}</a>
          <p className="mt-6 text-[14px] text-steel">An equal opportunity employer.</p>
        </div>
      </section>
    </>
  );
}

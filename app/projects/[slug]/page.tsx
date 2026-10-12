import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { record, studies } from "@/lib/site";
import { meta } from "@/lib/meta";
import CaseStudy from "@/components/CaseStudy";
import RecordPage from "@/components/RecordPage";

export function generateStaticParams() {
  return record.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = record.find((x) => x.slug === slug);
  if (!r) return {};
  return meta(r.name, r.note ?? `${r.type}${r.owner ? ` for ${r.owner}` : ""}.`, `/projects/${slug}`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = studies.find((x) => x.slug === slug);
  if (s) return <CaseStudy s={s} />;
  const r = record.find((x) => x.slug === slug);
  if (!r) notFound();
  return <RecordPage r={r} />;
}

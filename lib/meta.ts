import type { Metadata } from "next";
import { firm } from "./site";
export function meta(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: { canonical: path }, openGraph: { title: `${title} | ${firm.legalName}`, description, url: path } };
}

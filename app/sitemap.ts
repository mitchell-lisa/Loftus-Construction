import type { MetadataRoute } from "next";
import { record } from "@/lib/site";
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/capabilities", "/about", "/careers", "/contact", ...record.map((r) => `/projects/${r.slug}`)].map((p) => ({ url: base + p }));
}

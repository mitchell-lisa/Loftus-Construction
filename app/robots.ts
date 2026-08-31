import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { SITE_URL } from "./layout";

export default function robots(): MetadataRoute.Robots {
  // While the site is a speculative preview, nothing is crawlable.
  if (business.status === "demo") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

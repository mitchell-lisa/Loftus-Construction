import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeBands from "@/components/HomeBands";
import { business } from "@/lib/business";

const description =
  "Heavy civil contractor in Cinnaminson, New Jersey. Bridges, culverts, retaining walls, foundations, structural rehabilitation and dams for PennDOT, the Pennsylvania Turnpike Commission, NJDOT, NJ Transit and the City of Philadelphia since 1994.";

const title = `${business.legalName} | Heavy civil bridge construction, ${business.city} NJ`;

export const metadata: Metadata = {
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    images: [
      {
        url: business.hero.src,
        width: business.hero.width,
        height: business.hero.height,
        alt: business.hero.alt,
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <HomeBands />
    </>
  );
}

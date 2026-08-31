import { business, addressLine } from "./business";

/**
 * LocalBusiness JSON-LD. Only fields we can source are emitted.
 * No hours, no rating and no social profiles, because none are verified.
 */
export function localBusinessSchema(siteUrl: string) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: business.legalName,
    description: `Heavy civil construction in Cinnaminson, New Jersey. Bridges, culverts, retaining walls, foundations, structural rehabilitation and dams for public agencies across Pennsylvania, New Jersey and Delaware.`,
    url: siteUrl,
    telephone: business.phoneHref.replace("tel:", ""),
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Pennsylvania" },
      { "@type": "State", name: "New Jersey" },
      { "@type": "State", name: "Delaware" },
    ],
    knowsAbout: business.capabilities.map((c) => c.name),
  };

  if (business.foundedYear) schema.foundingDate = String(business.foundedYear);
  if (business.founder) schema.founder = { "@type": "Person", name: business.founder };
  if (business.fax) schema.faxNumber = business.fax;
  if (business.award) {
    schema.award = `${business.award.body}, ${business.award.year}`;
  }

  return schema;
}

export const postalAddressText = addressLine;

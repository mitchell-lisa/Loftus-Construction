import { firm, capabilities, award } from "./site";
export function schema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: firm.legalName,
    url,
    telephone: "+18567866607",
    faxNumber: firm.fax,
    email: firm.email,
    foundingDate: String(firm.founded),
    founder: { "@type": "Person", name: firm.founder },
    address: { "@type": "PostalAddress", streetAddress: firm.street, addressLocality: firm.city, addressRegion: firm.state, postalCode: firm.zip, addressCountry: "US" },
    knowsAbout: capabilities.map((c) => c.name),
    award: `${award.body}, ${award.year}`,
  };
}

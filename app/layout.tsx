import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { business, addressLine } from "@/lib/business";
import { localBusinessSchema } from "@/lib/schema";

const sourceSerif = localFont({
  src: [
    { path: "../public/fonts/SourceSerif4-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/SourceSerif4-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-source-serif",
  display: "swap",
});

const archivo = localFont({
  src: "../public/fonts/Archivo-latin.woff2",
  variable: "--font-archivo",
  weight: "400 700",
  display: "swap",
});

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://loftus-construction.vercel.app";

const title = `${business.legalName} | Heavy civil bridge construction, ${business.city} NJ`;
const description =
  "Heavy civil contractor in Cinnaminson, New Jersey. Bridges, culverts, retaining walls, foundations, structural rehabilitation and dams for PennDOT, the Pennsylvania Turnpike Commission, NJDOT, NJ Transit and the City of Philadelphia since 1994.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  // Demo status keeps every route out of the index.
  robots:
    business.status === "demo"
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: business.legalName,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/images/strasburg-railroad-bridge.webp",
        width: 1140,
        height: 355,
        alt: "Completed main track bridge replacement for the Strasburg Railroad at Gap, Pennsylvania",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description },
  other: { "geo.placename": addressLine },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${archivo.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema(SITE_URL)),
          }}
        />
      </body>
    </html>
  );
}

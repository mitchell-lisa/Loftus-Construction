import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { business, addressLine } from "@/lib/business";
import { localBusinessSchema } from "@/lib/schema";
import DemoBanner from "@/components/DemoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";

const newsreader = localFont({
  src: [
    { path: "../public/fonts/Newsreader-latin-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Newsreader-latin-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-newsreader",
  display: "swap",
});

const publicSans = localFont({
  src: [
    { path: "../public/fonts/PublicSans-latin-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/PublicSans-latin-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-public-sans",
  display: "swap",
});

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://loftus-construction.vercel.app";

const title = `${business.legalName} | Heavy civil bridge construction, ${business.city} NJ`;
const description =
  "Heavy civil contractor in Cinnaminson, New Jersey. Bridges, culverts, retaining walls, foundations, structural rehabilitation and dams for PennDOT, the Pennsylvania Turnpike Commission, NJDOT, NJ Transit and the City of Philadelphia since 1994.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${business.legalName}`,
  },
  description,
  robots:
    business.status === "demo"
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: business.legalName,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: business.hero.src,
        width: business.hero.width,
        height: business.hero.height,
        alt: business.hero.alt,
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
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable}`}>
      <body>
        <DemoBanner />
        <Header />
        {children}
        <Footer />
        <StickyCall />
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

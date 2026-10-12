import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { business, addressLine } from "@/lib/business";
import { localBusinessSchema } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const title = `${business.legalName} | Bridges and heavy civil construction`;
const description =
  "Heavy civil contractor in Cinnaminson, New Jersey, since 1994. Bridges, culverts, retaining walls, foundations, rehabilitation and dams.";

export const viewport: Viewport = { themeColor: "#222e61" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${business.legalName}` },
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
    images: [{ url: business.hero.src, width: business.hero.width, height: business.hero.height, alt: business.hero.alt }],
  },
  twitter: { card: "summary_large_image", title, description },
  other: { "geo.placename": addressLine },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body>
        <a href="#content" className="skip">Skip to content</a>
        <Header />
        <main id="content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(SITE_URL)) }}
        />
      </body>
    </html>
  );
}

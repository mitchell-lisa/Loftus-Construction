import type { Metadata, Viewport } from "next";
import { Newsreader } from "next/font/google";
import localFont from "next/font/local";
const display = Newsreader({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--f-display", display: "swap" });
const body = localFont({ src: [{ path: "../public/fonts/PublicSans-latin-400.woff2", weight: "400" }, { path: "../public/fonts/PublicSans-latin-600.woff2", weight: "600" }], variable: "--f-body", display: "swap" });
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { schema } from "@/lib/schema";
import { firm } from "@/lib/site";
import { theme } from "@/lib/theme";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${theme.host}`;

export const viewport: Viewport = { themeColor: "#222e61" };

export const metadata: Metadata = {
  metadataBase: new URL(`https://${theme.host}`),
  title: { default: `${firm.legalName} | Bridges and heavy civil construction since 1994`, template: `%s | ${firm.legalName}` },
  description: "Heavy civil engineers and contractors in Cinnaminson, New Jersey, since 1994. Bridges, rehabilitation, retaining walls, foundations, culverts and dams.",
  robots: { index: false, follow: false, nocache: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} dir-${theme.key}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a href="#content" className="skip">Skip to content</a>
        <Header />
        <main id="content" tabIndex={-1} className="outline-none">{children}</main>
        <Footer />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(SITE_URL)) }} />
      </body>
    </html>
  );
}

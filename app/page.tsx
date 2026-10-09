import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { business } from "@/lib/business";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Record from "@/components/Record";
import Award from "@/components/Award";
import Qualifications from "@/components/Qualifications";
import About from "@/components/About";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
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
    <main>
      <Hero />
      <Projects />
      <Capabilities />
      <Record />
      <Award />
      <Qualifications />
      <About />
      <Careers />
      <Contact />
    </main>
  );
}

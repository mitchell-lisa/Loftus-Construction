import DemoBanner from "@/components/DemoBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Record from "@/components/Record";
import Award from "@/components/Award";
import About from "@/components/About";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";

export default function Page() {
  return (
    <>
      <DemoBanner />
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Record />
        <Award />
        <About />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <StickyCall />
    </>
  );
}

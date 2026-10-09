import About from "@/components/About";
import PageLead from "@/components/PageLead";
import { pageMeta } from "@/lib/pageMeta";

const description =
  "Loftus Construction is a heavy civil contractor in Cinnaminson, New Jersey, building for public agencies in Pennsylvania, New Jersey and Delaware since 1994.";

export const metadata = pageMeta("About", description, "/about");

export default function AboutPage() {
  return (
    <>
      <PageLead title="About" line={description} />
      <About />
    </>
  );
}

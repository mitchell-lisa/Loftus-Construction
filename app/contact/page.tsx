import Contact from "@/components/Contact";
import PageLead from "@/components/PageLead";
import { pageMeta } from "@/lib/pageMeta";

const description =
  "Phone, email and fax for Loftus Construction in Cinnaminson, New Jersey. The bid request form on this preview is a demo and does not send.";

export const metadata = pageMeta("Contact", description, "/contact");

export default function ContactPage() {
  return (
    <>
      <PageLead
        title="Contact"
        line="Phone, email and fax for Loftus Construction in Cinnaminson, New Jersey."
      />
      <Contact />
    </>
  );
}

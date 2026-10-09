import Careers from "@/components/Careers";
import PageLead from "@/components/PageLead";
import { business } from "@/lib/business";
import { pageMeta } from "@/lib/pageMeta";

const description = `The Bench Strength Program is a one-year training program for recent graduates. Resumes go to ${business.careersContact} at Loftus Construction in Cinnaminson, New Jersey.`;

export const metadata = pageMeta("Careers", description, "/careers");

export default function CareersPage() {
  return (
    <>
      <PageLead
        title="Careers"
        line="Resumes for the Bench Strength Program go to Karin DiVece."
      />
      <Careers />
    </>
  );
}

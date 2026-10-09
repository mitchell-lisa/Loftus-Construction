import Award from "@/components/Award";
import PageLead from "@/components/PageLead";
import Qualifications from "@/components/Qualifications";
import Record from "@/components/Record";
import { pageMeta } from "@/lib/pageMeta";

const description =
  "Selected contracts published by Loftus Construction, with the owner and contract value, prequalification, clients, memberships, and the 2019 Project of the Year from the American Society of Highway Engineers, Delaware Valley Section.";

const line =
  "Selected contracts, prequalification, clients, memberships and the 2019 award.";

export const metadata = pageMeta("Record", description, "/record");

export default function RecordPage() {
  return (
    <>
      <PageLead title="Record" line={line} />
      <Record />
      <Qualifications />
      <Award />
    </>
  );
}

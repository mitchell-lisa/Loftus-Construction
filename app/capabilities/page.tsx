import Capabilities from "@/components/Capabilities";
import PageLead from "@/components/PageLead";
import { business } from "@/lib/business";
import { pageMeta } from "@/lib/pageMeta";

const description =
  "Bridges, culverts, retaining walls, foundations, structural rehabilitation and dams, plus design-build and preconstruction, from Loftus Construction in Cinnaminson, New Jersey.";

const line =
  "Bridges, culverts, retaining walls, foundations, structural rehabilitation and dams.";

export const metadata = pageMeta(
  "Capabilities",
  description,
  "/capabilities",
  business.photoProjects[0].photos[1],
);

export default function CapabilitiesPage() {
  return (
    <>
      <PageLead
        title="Capabilities"
        line={line}
        photo={business.photoProjects[0].photos[1]}
        position="object-[center_58%]"
      />
      <Capabilities />
    </>
  );
}

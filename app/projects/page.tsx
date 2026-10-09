import PageLead from "@/components/PageLead";
import ProjectStrip from "@/components/ProjectStrip";
import { business } from "@/lib/business";
import { pageMeta } from "@/lib/pageMeta";

const description =
  "Photographs from two Loftus jobs: a concrete bridge deck pour at Brownsville, and a steel bridge with a grated deck at University Avenue.";

export const metadata = pageMeta(
  "Projects",
  description,
  "/projects",
  business.photoProjects[1].photos[1],
);

export default function ProjectsPage() {
  const lead = business.photoProjects[1].photos[1];
  return (
    <>
      <PageLead title="Projects" line={description} photo={lead} position="object-[center_62%]" />
      <ProjectStrip tall />
    </>
  );
}

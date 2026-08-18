import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "GTELS project portfolio — documented WASH, construction, and engineering projects delivered for international organizations, NGOs, and development partners.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}

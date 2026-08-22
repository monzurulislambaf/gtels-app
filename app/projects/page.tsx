import { generatePageMetadata } from "@/src/lib/seo";
import ProjectsContent from "./ProjectsContent";

export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "GTELS project portfolio — documented WASH, construction, and engineering projects delivered for international organizations, NGOs, and development partners.",
  path: "/projects",
  keywords: ["projects", "WASH projects", "engineering projects", "IOM", "World Vision", "infrastructure"],
});

export default function ProjectsPage() {
  return <ProjectsContent />;
}

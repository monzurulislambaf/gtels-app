import { generatePageMetadata } from "@/src/lib/seo";
import ResourcesContent from "./ResourcesContent";

export const metadata = generatePageMetadata({
  title: "Resources",
  description:
    "GTELS downloadable resources — company profile, capability statement, project portfolio, equipment register, and more.",
  path: "/resources",
  keywords: ["resources", "downloads", "company profile", "capability statement"],
});

export default function ResourcesPage() {
  return <ResourcesContent />;
}

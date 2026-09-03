import { generatePageMetadata } from "@/src/lib/seo";
import TeamContent from "./TeamContent";

export const metadata = generatePageMetadata({
  title: "Team",
  description:
    "GTELS team — approximately 100 skilled personnel including engineers, technicians, supervisors, and field workers.",
  path: "/team",
  keywords: ["team", "personnel", "engineers", "technicians", "workforce"],
});

export default function TeamPage() {
  return <TeamContent />;
}

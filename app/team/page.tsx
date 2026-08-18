import type { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Team",
  description:
    "GTELS team — approximately 241 skilled personnel including engineers, technicians, supervisors, and field workers.",
};

export default function TeamPage() {
  return <TeamContent />;
}

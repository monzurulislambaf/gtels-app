import type { Metadata } from "next";
import ResourcesContent from "./ResourcesContent";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "GTELS downloadable resources — company profile, capability statement, project portfolio, equipment register, and more.",
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}

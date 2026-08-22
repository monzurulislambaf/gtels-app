import { generatePageMetadata } from "@/src/lib/seo";
import ServicesContent from "./ServicesContent";

export const metadata = generatePageMetadata({
  title: "Services",
  description:
    "GTELS services — construction, WASH infrastructure, engineering, procurement, logistics, and sustainable energy solutions across Bangladesh.",
  path: "/services",
  keywords: ["engineering services", "WASH services", "construction", "procurement", "logistics"],
});

export default function ServicesPage() {
  return <ServicesContent />;
}

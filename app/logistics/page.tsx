import { generatePageMetadata } from "@/src/lib/seo";
import LogisticsContent from "./LogisticsContent";

export const metadata = generatePageMetadata({
  title: "Logistics & Fleet",
  description:
    "GTELS logistics capability — fleet management, warehousing, procurement, transportation, and last-mile delivery across Bangladesh.",
  path: "/logistics",
  keywords: ["logistics", "fleet", "warehousing", "procurement", "transportation", "delivery"],
});

export default function LogisticsPage() {
  return <LogisticsContent />;
}

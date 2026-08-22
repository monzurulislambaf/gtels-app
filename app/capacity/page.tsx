import { generatePageMetadata } from "@/src/lib/seo";
import CapacityContent from "./CapacityContent";

export const metadata = generatePageMetadata({
  title: "Capacity",
  description:
    "GTELS national coverage — 8 zonal offices, 18 sub-offices, 55,000+ sq. ft. warehouse capacity across Bangladesh.",
  path: "/capacity",
  keywords: ["capacity", "warehouse", "zonal offices", "national coverage", "Bangladesh"],
});

export default function CapacityPage() {
  return <CapacityContent />;
}

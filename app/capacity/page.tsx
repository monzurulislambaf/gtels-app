import type { Metadata } from "next";
import CapacityContent from "./CapacityContent";

export const metadata: Metadata = {
  title: "Capacity",
  description:
    "GTELS national coverage — 8 zonal offices, 18 sub-offices, 55,000+ sq. ft. warehouse capacity across Bangladesh.",
};

export default function CapacityPage() {
  return <CapacityContent />;
}

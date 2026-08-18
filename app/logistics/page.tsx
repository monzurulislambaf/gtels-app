import type { Metadata } from "next";
import LogisticsContent from "./LogisticsContent";

export const metadata: Metadata = {
  title: "Logistics & Fleet",
  description:
    "GTELS logistics capability — fleet management, warehousing, procurement, transportation, and last-mile delivery across Bangladesh.",
};

export default function LogisticsPage() {
  return <LogisticsContent />;
}

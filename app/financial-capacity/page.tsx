import type { Metadata } from "next";
import FinancialContent from "./FinancialContent";

export const metadata: Metadata = {
  title: "Financial Capacity",
  description:
    "GTELS financial capacity — audited statements, banking capacity, insurance coverage, and bid/performance guarantee capacity.",
};

export default function FinancialCapacityPage() {
  return <FinancialContent />;
}

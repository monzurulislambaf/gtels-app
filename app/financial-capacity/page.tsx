import { generatePageMetadata } from "@/src/lib/seo";
import FinancialContent from "./FinancialContent";

export const metadata = generatePageMetadata({
  title: "Financial Capacity",
  description:
    "GTELS financial capacity — audited statements, banking capacity, insurance coverage, and bid/performance guarantee capacity.",
  path: "/financial-capacity",
  keywords: ["financial capacity", "audited statements", "banking", "insurance", "tender"],
});

export default function FinancialCapacityPage() {
  return <FinancialContent />;
}

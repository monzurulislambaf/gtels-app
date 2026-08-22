import { generatePageMetadata } from "@/src/lib/seo";
import QualityHSEContent from "./QualityHSEContent";

export const metadata = generatePageMetadata({
  title: "Quality & HSE",
  description:
    "GTELS quality management, environmental management, and occupational health & safety policies.",
  path: "/quality-hse",
  keywords: ["quality", "HSE", "ISO 9001", "ISO 14001", "safety", "environmental management"],
});

export default function QualityHSEPage() {
  return <QualityHSEContent />;
}

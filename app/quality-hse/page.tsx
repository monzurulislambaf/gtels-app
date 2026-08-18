import type { Metadata } from "next";
import QualityHSEContent from "./QualityHSEContent";

export const metadata: Metadata = {
  title: "Quality & HSE",
  description:
    "GTELS quality management, environmental management, and occupational health & safety policies.",
};

export default function QualityHSEPage() {
  return <QualityHSEContent />;
}

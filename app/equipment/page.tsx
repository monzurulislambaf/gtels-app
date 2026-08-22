import { generatePageMetadata } from "@/src/lib/seo";
import EquipmentContent from "./EquipmentContent";

export const metadata = generatePageMetadata({
  title: "Equipment",
  description:
    "GTELS equipment inventory — drilling rigs, pumps, compressors, generators, construction equipment, and survey tools.",
  path: "/equipment",
  keywords: ["equipment", "drilling rigs", "pumps", "compressors", "generators", "construction equipment"],
});

export default function EquipmentPage() {
  return <EquipmentContent />;
}

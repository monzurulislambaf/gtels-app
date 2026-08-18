import type { Metadata } from "next";
import EquipmentContent from "./EquipmentContent";

export const metadata: Metadata = {
  title: "Equipment",
  description:
    "GTELS equipment inventory — drilling rigs, pumps, compressors, generators, construction equipment, and survey tools.",
};

export default function EquipmentPage() {
  return <EquipmentContent />;
}

import type { Metadata } from "next";
import LocationsContent from "./LocationsContent";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "GTELS office locations — 8 zonal offices and 18 sub-offices across Bangladesh.",
};

export default function LocationsPage() {
  return <LocationsContent />;
}

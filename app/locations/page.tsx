import { generatePageMetadata } from "@/src/lib/seo";
import LocationsContent from "./LocationsContent";

export const metadata = generatePageMetadata({
  title: "Locations",
  description:
    "GTELS office locations — 8 zonal offices and 18 sub-offices across Bangladesh.",
  path: "/locations",
  keywords: ["office locations", "zonal offices", "sub-offices", "Bangladesh"],
});

export default function LocationsPage() {
  return <LocationsContent />;
}

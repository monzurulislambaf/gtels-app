import { generatePageMetadata } from "@/src/lib/seo";
import GalleryContent from "./GalleryContent";

export const metadata = generatePageMetadata({
  title: "Gallery",
  description:
    "GTELS photo gallery — visual evidence from WASH projects, equipment, fleet, construction, and field operations.",
  path: "/gallery",
  keywords: ["gallery", "photos", "WASH projects", "equipment", "fleet", "construction"],
});

export default function GalleryPage() {
  return <GalleryContent />;
}

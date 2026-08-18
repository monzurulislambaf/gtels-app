import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "GTELS photo gallery — visual evidence from WASH projects, equipment, fleet, construction, and field operations.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}

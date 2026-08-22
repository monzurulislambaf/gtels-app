import { generatePageMetadata } from "@/src/lib/seo";
import WashContent from "./WashContent";

export const metadata = generatePageMetadata({
  title: "WASH & Water Infrastructure",
  description:
    "GTELS WASH capabilities — deep tubewells, hand tubewells, solar water systems, water treatment, DEWATS, and community WASH programs across Bangladesh.",
  path: "/wash",
  keywords: ["WASH", "deep tubewell", "hand tubewell", "solar water", "water treatment", "DEWATS"],
});

export default function WashPage() {
  return <WashContent />;
}

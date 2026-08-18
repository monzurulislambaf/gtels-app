import type { Metadata } from "next";
import WashContent from "./WashContent";

export const metadata: Metadata = {
  title: "WASH & Water Infrastructure",
  description:
    "GTELS WASH capabilities — deep tubewells, hand tubewells, solar water systems, water treatment, DEWATS, and community WASH programs across Bangladesh.",
};

export default function WashPage() {
  return <WashContent />;
}

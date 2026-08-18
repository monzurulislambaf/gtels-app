import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GTELS services — construction, WASH infrastructure, engineering, procurement, logistics, and sustainable energy solutions across Bangladesh.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}

import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import ValuesSection from "./ValuesSection";

export const metadata: Metadata = {
  title: "About GTELS",
  description:
    "Learn about GlobalTech Engineering & Logistic Solutions — our vision, mission, values, organizational structure, and nationwide capability.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <ValuesSection />
    </>
  );
}

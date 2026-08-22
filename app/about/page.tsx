import { generatePageMetadata } from "@/src/lib/seo";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import ValuesSection from "./ValuesSection";

export const metadata = generatePageMetadata({
  title: "About GTELS",
  description:
    "Learn about GlobalTech Engineering & Logistic Solutions — our vision, mission, values, organizational structure, and nationwide capability.",
  path: "/about",
  keywords: ["about GTELS", "company profile", "engineering Bangladesh", "WASH infrastructure"],
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <ValuesSection />
    </>
  );
}

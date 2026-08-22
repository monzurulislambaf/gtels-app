import { generatePageMetadata } from "@/src/lib/seo";
import CompanyProfileContent from "./CompanyProfileContent";

export const metadata = generatePageMetadata({
  title: "Company Profile",
  description:
    "GTELS company profile — engineering, WASH, logistics, procurement, and infrastructure capability statement.",
  path: "/company-profile",
  keywords: ["company profile", "capability statement", "engineering", "WASH", "logistics"],
});

export default function CompanyProfilePage() {
  return <CompanyProfileContent />;
}

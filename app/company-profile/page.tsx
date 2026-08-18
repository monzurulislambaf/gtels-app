import type { Metadata } from "next";
import CompanyProfileContent from "./CompanyProfileContent";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "GTELS company profile — engineering, WASH, logistics, procurement, and infrastructure capability statement.",
};

export default function CompanyProfilePage() {
  return <CompanyProfileContent />;
}

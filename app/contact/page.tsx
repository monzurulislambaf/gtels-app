import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GTELS — GlobalTech Engineering & Logistic Solutions. Reach us at 623, West Nakhalpara, Tejgaon, Dhaka-1215.",
};

export default function ContactPage() {
  return <ContactContent />;
}

import { generatePageMetadata } from "@/src/lib/seo";
import ContactContent from "./ContactContent";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Contact GTELS — GlobalTech Engineering & Logistic Solutions. Reach us at 623, West Nakhalpara, Tejgaon, Dhaka-1215.",
  path: "/contact",
  keywords: ["contact", "GTELS", "phone", "email", "address", "Dhaka"],
});

export default function ContactPage() {
  return <ContactContent />;
}

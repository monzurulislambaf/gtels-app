import { generatePageMetadata } from "@/src/lib/seo";
import ClientsContent from "./ClientsContent";

export const metadata = generatePageMetadata({
  title: "Clients",
  description:
    "GTELS institutional clients and project partners — international organizations, NGOs, and development partners.",
  path: "/clients",
  keywords: ["clients", "partners", "IOM", "World Vision", "NGO", "international organizations"],
});

export default function ClientsPage() {
  return <ClientsContent />;
}

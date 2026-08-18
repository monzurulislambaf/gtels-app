import type { Metadata } from "next";
import ClientsContent from "./ClientsContent";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "GTELS institutional clients and project partners — international organizations, NGOs, and development partners.",
};

export default function ClientsPage() {
  return <ClientsContent />;
}

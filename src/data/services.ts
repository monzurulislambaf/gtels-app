import type { LucideIcon } from "lucide-react";
import {
  Hammer,
  Droplets,
  HardHat,
  Truck,
  Package,
  Sun,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
}

export const services: Service[] = [
  {
    id: "construction",
    title: "Construction & Civil Engineering",
    slug: "construction",
    shortDescription: "Building, water-supply/sanitation infrastructure, material procurement, supervision, QA and HSE.",
    description:
      "GTELS provides comprehensive construction and civil engineering services including building construction, water-supply and sanitation infrastructure, material procurement, site supervision, quality assurance, and health, safety & environment management.",
    icon: Hammer,
    capabilities: [
      "Building construction and renovation",
      "Water-supply infrastructure",
      "Sanitation infrastructure",
      "Material procurement and supply",
      "Site supervision and management",
      "Quality assurance and control",
      "Health, Safety & Environment (HSE)",
      "Road and infrastructure works",
    ],
  },
  {
    id: "wash",
    title: "WASH & Water Infrastructure",
    slug: "wash",
    shortDescription: "Deep tubewells, hand tubewells, solar deep tubewells, drinking-water systems, water treatment, sanitation, DEWATS, community WASH.",
    description:
      "GTELS has extensive experience in WASH (Water, Sanitation & Hygiene) infrastructure delivery, including deep tubewell drilling, hand tubewell installation, solar-powered water systems, water-quality testing, treatment facilities, DEWATS, and community WASH programs.",
    icon: Droplets,
    capabilities: [
      "Deep tubewell drilling",
      "Hand tubewell installation",
      "Solar deep tubewells",
      "Drinking-water systems",
      "Water-quality testing",
      "Water treatment facilities",
      "DEWATS (Decentralized Wastewater Treatment)",
      "Community WASH programs",
      "Sanitation facilities",
      "Bathing facilities",
      "Pump installation",
      "Civil and platform works",
      "Commissioning and handover",
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Project Management",
    slug: "engineering",
    shortDescription: "Planning, engineering, supervision, QA/QC, HSE, monitoring, reporting.",
    description:
      "GTELS delivers professional engineering and project management services including project planning, technical engineering, site supervision, quality assurance and quality control, health & safety management, monitoring, and comprehensive reporting.",
    icon: HardHat,
    capabilities: [
      "Project planning and design",
      "Engineering consultation",
      "Site supervision",
      "QA/QC management",
      "HSE management",
      "Progress monitoring",
      "Donor-oriented reporting",
      "Technical documentation",
    ],
  },
  {
    id: "procurement",
    title: "Procurement & Supply Chain",
    slug: "procurement",
    shortDescription: "Sourcing, procurement, warehousing, inventory, transportation, last-mile delivery.",
    description:
      "GTELS manages end-to-end procurement and supply chain operations including sourcing, institutional procurement, warehousing, inventory management, transportation, and last-mile delivery across Bangladesh.",
    icon: Package,
    capabilities: [
      "Sourcing and vendor management",
      "Institutional procurement",
      "Warehousing management",
      "Inventory control",
      "Transportation coordination",
      "Last-mile delivery",
      "Donor procurement compliance",
      "Documentation and audit trails",
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    slug: "logistics",
    shortDescription: "Fleet management, multi-site deployment, emergency delivery, warehousing, material transportation.",
    description:
      "GTELS provides comprehensive logistics services including fleet management, multi-site deployment, emergency delivery, warehousing, and material transportation with nationwide coverage.",
    icon: Truck,
    capabilities: [
      "Fleet management and deployment",
      "Multi-site logistics coordination",
      "Emergency and time-critical delivery",
      "Warehousing operations",
      "Material transportation",
      "Route optimization",
      "Real-time tracking",
      "Nationwide coverage",
    ],
  },
  {
    id: "energy",
    title: "Sustainable Energy & Infrastructure",
    slug: "energy",
    shortDescription: "Solar-powered water systems, pumps, energy-efficient infrastructure, O&M support.",
    description:
      "GTELS delivers sustainable energy solutions including solar-powered water systems, pump installation, energy-efficient infrastructure development, and ongoing operations & maintenance support.",
    icon: Sun,
    capabilities: [
      "Solar-powered water systems",
      "Pump installation and maintenance",
      "Energy-efficient infrastructure",
      "Solar deep tubewell systems",
      "Operations & maintenance support",
      "System commissioning",
      "Technical training",
      "Performance monitoring",
    ],
  },
];

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: number;
  contractValue?: string;
  reference?: string;
  projectType: string;
  location?: string;
  description: string;
  scope?: string[];
  status: "completed" | "ongoing" | "upcoming";
  category: "wash" | "construction" | "solar" | "sanitation" | "water-treatment";
}

export const projects: Project[] = [
  {
    id: "p1",
    slug: "120-deep-tubewells-iom-2023",
    title: "120 Deep Tubewells",
    client: "IOM (International Organization for Migration)",
    year: 2023,
    contractValue: "BDT 48.5M",
    projectType: "WASH Infrastructure",
    location: "Cox's Bazar, Bangladesh",
    description:
      "Drilling, installation, and commissioning of 120 deep tubewells to provide safe drinking water for displaced communities in Cox's Bazar.",
    scope: [
      "Site assessment and hydrogeological survey",
      "Drilling and boring operations",
      "Casing, filter, and GI-PVC installation",
      "Platform and civil works",
      "Pump installation and testing",
      "Water-quality testing and commissioning",
    ],
    status: "completed",
    category: "wash",
  },
  {
    id: "p2",
    slug: "30-hand-tube-wells-world-vision-2023",
    title: "30 Hand Tube Wells",
    client: "World Vision Bangladesh",
    year: 2023,
    projectType: "WASH Infrastructure",
    location: "Rangpur, Bangladesh",
    description:
      "Installation of 30 hand tubewells to improve drinking water access in rural communities.",
    scope: [
      "Site selection and community engagement",
      "Hand tubewell installation",
      "Platform construction",
      "Water-quality testing",
      "Community training and handover",
    ],
    status: "completed",
    category: "wash",
  },
  {
    id: "p3",
    slug: "3-dewats-iom-2024",
    title: "3 DEWATS Facilities",
    client: "IOM (International Organization for Migration)",
    year: 2024,
    projectType: "WASH Infrastructure",
    location: "Cox's Bazar, Bangladesh",
    description:
      "Design, construction, and commissioning of 3 Decentralized Wastewater Treatment Systems (DEWATS) facilities.",
    scope: [
      "DEWATS design and engineering",
      "Civil construction works",
      "Treatment system installation",
      "Commissioning and testing",
      "O&M training",
    ],
    status: "completed",
    category: "sanitation",
  },
  {
    id: "p4",
    slug: "integrated-wash-package-iom-2025",
    title: "Integrated WASH Package",
    client: "IOM (International Organization for Migration)",
    year: 2025,
    projectType: "WASH Infrastructure",
    location: "Cox's Bazar, Bangladesh",
    description:
      "Comprehensive WASH infrastructure implementation including deep tubewells, water treatment, sanitation facilities, and community development support.",
    scope: [
      "Deep tubewell drilling and installation",
      "Water treatment facility construction",
      "Sanitation infrastructure",
      "Community WASH programming",
      "M&E and reporting",
    ],
    status: "ongoing",
    category: "wash",
  },
  {
    id: "p5",
    slug: "20-solar-deep-tube-wells-dam-2026",
    title: "20 Solar Deep Tube Wells",
    client: "Dhaka Ahsania Mission",
    year: 2026,
    projectType: "Solar WASH",
    location: "Various, Bangladesh",
    description:
      "Installation of 20 solar-powered deep tubewell systems for sustainable drinking water supply.",
    scope: [
      "Solar panel system design",
      "Deep tubewell drilling",
      "Solar pump installation",
      "System commissioning",
      "O&M manual and training",
    ],
    status: "upcoming",
    category: "solar",
  },
  {
    id: "p6",
    slug: "quality-wash-services-ngoforum-2025",
    title: "Quality WASH Services",
    client: "NGO Forum for Public Health",
    year: 2025,
    projectType: "WASH Infrastructure",
    location: "Various, Bangladesh",
    description:
      "Implementation of quality WASH services including water infrastructure, sanitation, and hygiene promotion.",
    scope: [
      "Water system construction",
      "Sanitation facility installation",
      "Hygiene promotion activities",
      "Water-quality monitoring",
      "Community engagement",
    ],
    status: "ongoing",
    category: "wash",
  },
  {
    id: "p7",
    slug: "solar-powered-water-supply-ngoforum-2025",
    title: "Solar-Powered Water Supply Improvement",
    client: "NGO Forum for Public Health",
    year: 2025,
    projectType: "Solar WASH",
    location: "Various, Bangladesh",
    description:
      "Improvement of drinking water supply through solar-powered systems and infrastructure upgrades.",
    scope: [
      "Solar water system design",
      "Infrastructure upgrades",
      "Solar pump installation",
      "System commissioning",
      "Training and handover",
    ],
    status: "ongoing",
    category: "solar",
  },
  {
    id: "p8",
    slug: "communal-drinking-water-solidarites-2022",
    title: "Communal Drinking-Water Treatment Facilities",
    client: "Solidarites International",
    year: 2022,
    projectType: "Water Treatment",
    location: "Cox's Bazar, Bangladesh",
    description:
      "Construction and commissioning of communal drinking-water treatment facilities for displaced populations.",
    scope: [
      "Water treatment facility design",
      "Civil construction works",
      "Treatment system installation",
      "Water-quality testing",
      "Commissioning and handover",
    ],
    status: "completed",
    category: "water-treatment",
  },
];

export const projectStats = {
  totalValue: "BDT 112.18M",
  totalProjects: 8,
  deepTubewells: 150,
  handTubewells: 30,
  dewatsFacilities: 3,
  solarProjects: 2,
  waterTreatment: 1,
  years: [2022, 2023, 2024, 2025, 2026],
  clientCategories: ["International Organizations", "NGOs", "Development Partners"],
};

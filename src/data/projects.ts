export interface Project {
  id: string;
  slug: string;
  title: string;
  image: string;
  client: string;
  year?: number;
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
    title: "Deep Tubewells",
    image: "/images/projects/p1.jpg",
    client: "IOM (International Organization for Migration)",
    year: 2023,
    contractValue: "BDT 48.5M",
    projectType: "WASH Infrastructure",
    location: "Cox's Bazar, Bangladesh",
    description:
      "Drilling, installation, and commissioning of Deep Tubewells to provide safe drinking water for displaced communities in Cox's Bazar.",
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
    title: "Hand Tube Wells",
    image: "/images/projects/p2.jpg",
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
    title: "DEWATS Facilities",
    image: "/images/projects/p3.jpg",
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
    image: "/images/projects/p4.jpg",
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
    title: "Solar Deep Tube Wells",
    image: "/images/projects/p5.jpg",
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
    image: "/images/projects/p6.jpg",
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
    image: "/images/projects/p7.jpg",
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
    title: "Drinking-Water Treatment Facilities",
    image: "/images/projects/p8.jpg",
    client: "Solidarites International",
    year: 2022,
    projectType: "Water Treatment",
    location: "Cox's Bazar, Bangladesh",
    description:
      "Construction and commissioning of Drinking-Water Treatment Facilities for displaced populations.",
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
  {
    id: "p9",
    slug: "ro-water-treatment-plant",
    title: "RO Water Treatment Plant",
    image: "/images/projects/p9.jpg",
    client: "Information to be updated",
    projectType: "Water Treatment",
    description:
      "Supply, installation, and commissioning of reverse-osmosis (RO) water treatment plants producing safe drinking water, including water-quality testing and handover.",
    scope: [
      "Plant siting and civil/platform works",
      "RO unit and filtration system installation",
      "Pump and electrical connections",
      "Water-quality testing",
      "Commissioning, operator training, and handover",
    ],
    status: "completed",
    category: "water-treatment",
  },
  {
    id: "p10",
    slug: "solar-powered-ro-water-treatment-plant",
    title: "Solar Powered RO Water Treatment Plant",
    image: "/images/projects/p10.jpg",
    client: "Information to be updated",
    projectType: "Solar WASH",
    description:
      "Solar-powered reverse-osmosis water treatment plant combining RO treatment with a photovoltaic power supply for sustainable, off-grid safe drinking-water production.",
    scope: [
      "Solar array design and installation",
      "RO treatment unit installation",
      "Solar pump and electrical integration",
      "Water-quality testing",
      "Commissioning, O&M training, and handover",
    ],
    status: "completed",
    category: "solar",
  },
];

export const projectStats = {
  totalValue: "BDT 180+",
  totalProjects: 10,
  deepTubewells: 150,
  handTubewells: 30,
  dewatsFacilities: 3,
  solarProjects: 2,
  waterTreatment: 2,
  years: [2022, 2023, 2024, 2025, 2026],
  clientCategories: ["International Organizations", "NGOs", "Development Partners"],
};

export interface TeamMember {
  id: string;
  role: string;
  department: "central" | "zonal" | "field";
  count: number;
}

export const teamStructure = {
  proprietor: "Proprietor & Managing Director",
  departments: [
    {
      name: "Engineering & Projects",
      roles: ["Civil Engineer", "Drilling Engineer/Technician", "QA/QC Engineer"],
    },
    {
      name: "Quality, HSE & Compliance",
      roles: ["HSE Officer", "Environmental Officer"],
    },
    {
      name: "Procurement & Logistics",
      roles: ["Procurement & Logistics Officer"],
    },
    {
      name: "Finance & Administration",
      roles: ["Finance & Accounts Officer", "Administrative Officer"],
    },
    {
      name: "Monitoring & Reporting",
      roles: ["M&E Officer", "Documentation & Reporting Officer"],
    },
  ],
  centralTeam: [
    "Project Manager",
    "HR Manager",
    "HR Officer",
    "Administrative Officer",
    "Civil Engineer",
    "Drilling Engineer/Technician",
    "M&E Officer",
    "WASH Specialist",
    "HSE Officer",
    "QA/QC Engineer",
    "Procurement & Logistics Officer",
    "Finance & Accounts Officer",
    "Documentation & Reporting Officer",
    "Environmental Officer",
    "Community Mobilization Officer",
  ],
  workforce: [
    { category: "Corporate Personnel", count: 15 },
    { category: "Zonal Coordinators", count: 8 },
    { category: "Civil/Site Engineers", count: 8 },
    { category: "Site Supervisors", count: 16 },
    { category: "Drilling Technicians", count: 16 },
    { category: "Pump/Test Technicians", count: 9 },
    { category: "Electrical/Mechanical Technicians", count: 8 },
    { category: "Plumbers/Pipe Fitters", count: 17 },
    { category: "Masons/Civil Artisans", count: 26 },
    { category: "Store/Warehouse Keepers", count: 8 },
    { category: "Drivers/Transport Operators", count: 17 },
    { category: "Skilled/General Labour", count: 93 },
  ],
  totalDeployment: 100,
  washImplementation: [
    "Project Manager",
    "WASH Specialist",
    "Civil Engineer + Drilling Team",
    "QA/QC + HSE + Environmental",
    "M&E",
    "Zonal Coordinators",
    "Site Engineers/Supervisors",
    "Technical & Skilled Field Teams",
  ],
};

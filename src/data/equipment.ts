export interface Equipment {
  id: string;
  name: string;
  category: string;
  quantity: number;
  ownership: "owned" | "leased";
  condition: "excellent" | "good" | "fair";
  model?: string;
}

export const equipmentCategories = [
  "Drilling",
  "Pumps & Compressors",
  "Construction",
  "Generators & Power",
  "Measurement & Testing",
  "Transport",
  "Safety",
];

export const equipment: Equipment[] = [
  { id: "e1", name: "Drilling Rigs", category: "Drilling", quantity: 4, ownership: "owned", condition: "good" },
  { id: "e2", name: "Borehole Drilling Tools", category: "Drilling", quantity: 8, ownership: "owned", condition: "good" },
  { id: "e3", name: "Mud Pumps", category: "Pumps & Compressors", quantity: 3, ownership: "owned", condition: "good" },
  { id: "e4", name: "Air Compressors", category: "Pumps & Compressors", quantity: 4, ownership: "owned", condition: "good" },
  { id: "e5", name: "Test Pumps", category: "Pumps & Compressors", quantity: 6, ownership: "owned", condition: "excellent" },
  { id: "e6", name: "Tubewell Installation Tools", category: "Drilling", quantity: 6, ownership: "owned", condition: "good" },
  { id: "e7", name: "Water-Level Measurement Tools", category: "Measurement & Testing", quantity: 10, ownership: "owned", condition: "excellent" },
  { id: "e8", name: "Pipe Cutting/Threading Tools", category: "Drilling", quantity: 4, ownership: "owned", condition: "good" },
  { id: "e9", name: "Concrete Mixers", category: "Construction", quantity: 4, ownership: "owned", condition: "good" },
  { id: "e10", name: "Concrete Vibrators", category: "Construction", quantity: 3, ownership: "owned", condition: "good" },
  { id: "e11", name: "Generators", category: "Generators & Power", quantity: 5, ownership: "owned", condition: "good" },
  { id: "e12", name: "Welding Equipment", category: "Generators & Power", quantity: 4, ownership: "owned", condition: "good" },
  { id: "e13", name: "Excavators", category: "Construction", quantity: 2, ownership: "owned", condition: "good" },
  { id: "e14", name: "Wheel Loaders", category: "Construction", quantity: 1, ownership: "owned", condition: "fair" },
  { id: "e15", name: "Road Rollers", category: "Construction", quantity: 1, ownership: "leased", condition: "good" },
  { id: "e16", name: "Plate Compactors", category: "Construction", quantity: 3, ownership: "owned", condition: "good" },
  { id: "e17", name: "Power Trowels", category: "Construction", quantity: 2, ownership: "owned", condition: "good" },
  { id: "e18", name: "Bar Cutting Machines", category: "Construction", quantity: 2, ownership: "owned", condition: "good" },
  { id: "e19", name: "Bar Bending Machines", category: "Construction", quantity: 2, ownership: "owned", condition: "good" },
  { id: "e20", name: "Scaffolding Sets", category: "Construction", quantity: 10, ownership: "owned", condition: "good" },
  { id: "e21", name: "Water Pumps", category: "Pumps & Compressors", quantity: 8, ownership: "owned", condition: "good" },
  { id: "e22", name: "Earth Rammers", category: "Construction", quantity: 3, ownership: "owned", condition: "good" },
  { id: "e23", name: "Concrete Cutters", category: "Construction", quantity: 2, ownership: "owned", condition: "good" },
  { id: "e24", name: "Laser/Survey Equipment", category: "Measurement & Testing", quantity: 3, ownership: "owned", condition: "excellent" },
];

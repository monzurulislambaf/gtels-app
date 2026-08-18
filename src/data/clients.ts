export interface Client {
  id: string;
  name: string;
  type: "international" | "ngo" | "government" | "development";
}

export const clients: Client[] = [
  { id: "c1", name: "IOM (International Organization for Migration)", type: "international" },
  { id: "c2", name: "World Vision Bangladesh", type: "ngo" },
  { id: "c3", name: "Dhaka Ahsania Mission", type: "ngo" },
  { id: "c4", name: "NGO Forum for Public Health", type: "ngo" },
  { id: "c5", name: "Solidarites International", type: "international" },
  { id: "c6", name: "BRAC", type: "ngo" },
  { id: "c7", name: "DPHE (Department of Public Health Engineering)", type: "government" },
  { id: "c8", name: "Social Aid", type: "ngo" },
  { id: "c9", name: "Needy Foundation", type: "ngo" },
  { id: "c10", name: "Samar Foundation", type: "ngo" },
  { id: "c11", name: "Basmah Foundation", type: "ngo" },
  { id: "c12", name: "Our Ummah Trust", type: "ngo" },
  { id: "c13", name: "Muslim Welfare Organization", type: "ngo" },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "wash" | "equipment" | "fleet" | "projects" | "safety" | "logistics" | "construction" | "solar";
}

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "wash", label: "WASH" },
  { id: "equipment", label: "Equipment" },
  { id: "fleet", label: "Fleet" },
  { id: "projects", label: "Projects" },
  { id: "safety", label: "Safety" },
  { id: "logistics", label: "Logistics" },
  { id: "construction", label: "Construction" },
  { id: "solar", label: "Solar" },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://picsum.photos/seed/gtels-dtw1/800/600", alt: "Deep tubewell drilling operation", category: "wash" },
  { id: "g2", src: "https://picsum.photos/seed/gtels-dtw2/800/600", alt: "Deep tubewell casing installation", category: "wash" },
  { id: "g3", src: "https://picsum.photos/seed/gtels-htw1/800/600", alt: "Hand tubewell installation in rural area", category: "wash" },
  { id: "g4", src: "https://picsum.photos/seed/gtels-sol1/800/600", alt: "Solar-powered water system", category: "solar" },
  { id: "g5", src: "https://picsum.photos/seed/gtels-sol2/800/600", alt: "Solar deep tubewell installation", category: "solar" },
  { id: "g6", src: "https://picsum.photos/seed/gtels-wat1/800/600", alt: "Water treatment facility", category: "wash" },
  { id: "g7", src: "https://picsum.photos/seed/gtels-dew1/800/600", alt: "DEWATS facility construction", category: "wash" },
  { id: "g8", src: "https://picsum.photos/seed/gtels-eq1/800/600", alt: "Drilling rig at project site", category: "equipment" },
  { id: "g9", src: "https://picsum.photos/seed/gtels-eq2/800/600", alt: "Air compressor and pump equipment", category: "equipment" },
  { id: "g10", src: "https://picsum.photos/seed/gtels-eq3/800/600", alt: "Concrete mixer at construction site", category: "equipment" },
  { id: "g11", src: "https://picsum.photos/seed/gtels-fl1/800/600", alt: "GTELS fleet of pickup trucks", category: "fleet" },
  { id: "g12", src: "https://picsum.photos/seed/gtels-fl2/800/600", alt: "Water tanker for field operations", category: "fleet" },
  { id: "g13", src: "https://picsum.photos/seed/gtels-fl3/800/600", alt: "Material transport truck", category: "fleet" },
  { id: "g14", src: "https://picsum.photos/seed/gtels-pr1/800/600", alt: "IOM deep tubewell project in Cox's Bazar", category: "projects" },
  { id: "g15", src: "https://picsum.photos/seed/gtels-pr2/800/600", alt: "WASH infrastructure project implementation", category: "projects" },
  { id: "g16", src: "https://picsum.photos/seed/gtels-pr3/800/600", alt: "World Vision hand tubewell project", category: "projects" },
  { id: "g17", src: "https://picsum.photos/seed/gtels-sf1/800/600", alt: "Workers using personal protective equipment", category: "safety" },
  { id: "g18", src: "https://picsum.photos/seed/gtels-sf2/800/600", alt: "Site safety briefing", category: "safety" },
  { id: "g19", src: "https://picsum.photos/seed/gtels-lg1/800/600", alt: "Warehouse storage and inventory", category: "logistics" },
  { id: "g20", src: "https://picsum.photos/seed/gtels-lg2/800/600", alt: "Last-mile delivery operation", category: "logistics" },
  { id: "g21", src: "https://picsum.photos/seed/gtels-cn1/800/600", alt: "Civil construction works", category: "construction" },
  { id: "g22", src: "https://picsum.photos/seed/gtels-cn2/800/600", alt: "Building construction progress", category: "construction" },
  { id: "g23", src: "https://picsum.photos/seed/gtels-dtw3/800/600", alt: "Completed deep tubewell commissioning", category: "wash" },
  { id: "g24", src: "https://picsum.photos/seed/gtels-eq4/800/600", alt: "Laser survey equipment in use", category: "equipment" },
];

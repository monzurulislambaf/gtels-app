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
  // WASH
  { id: "g1", src: "/images/gallery/g01.jpg", alt: "Deep tubewell drilling operation at project site", category: "wash" },
  { id: "g2", src: "/images/gallery/g02.jpg", alt: "Casing pipes and installation materials for deep tubewell works", category: "wash" },
  { id: "g3", src: "/images/gallery/g03.jpg", alt: "Community members collecting water from a tubewell", category: "wash" },
  { id: "g4", src: "/images/gallery/g04.jpg", alt: "Community water infrastructure under integrated WASH project", category: "wash" },
  { id: "g5", src: "/images/gallery/g05.jpg", alt: "Drinking-water treatment plant with filtration tanks", category: "wash" },
  // Solar
  { id: "g6", src: "/images/gallery/g06.jpg", alt: "Solar-powered community water supply system", category: "solar" },
  { id: "g7", src: "/images/gallery/g07.jpg", alt: "Solar-powered reverse-osmosis water treatment plant", category: "solar" },
  { id: "g8", src: "/images/gallery/g08.jpg", alt: "Installation of a solar water supply system", category: "solar" },
  // Equipment
  { id: "g9", src: "/images/gallery/g09.jpg", alt: "Drilling rig unit used for deep tubewell boring", category: "equipment" },
  { id: "g10", src: "/images/gallery/g10.jpg", alt: "Air compressor and drilling support equipment", category: "equipment" },
  { id: "g11", src: "/images/gallery/g11.jpg", alt: "Borehole drilling tools and bits", category: "equipment" },
  { id: "g12", src: "/images/gallery/g12.jpg", alt: "Survey crew using laser/survey instruments on site", category: "equipment" },
  // Fleet
  { id: "g13", src: "/images/gallery/g13.jpg", alt: "Water tanker truck for field operations", category: "fleet" },
  { id: "g14", src: "/images/gallery/g14.jpg", alt: "Cargo trucks at GTELS logistics yard", category: "fleet" },
  { id: "g15", src: "/images/gallery/g15.jpg", alt: "Field transport vehicle for project deployment", category: "fleet" },
  // Projects
  { id: "g16", src: "/images/gallery/g16.jpg", alt: "Completed deep tubewell platform ready for handover", category: "projects" },
  { id: "g17", src: "/images/gallery/g17.jpg", alt: "Site inspection during WASH project implementation", category: "projects" },
  { id: "g18", src: "/images/gallery/g18.jpg", alt: "Project construction site with heavy machinery", category: "projects" },
  // Safety
  { id: "g19", src: "/images/gallery/g19.jpg", alt: "Personal protective equipment used on project sites", category: "safety" },
  { id: "g20", src: "/images/gallery/g20.jpg", alt: "Road safety barriers and cones at work site", category: "safety" },
  // Logistics
  { id: "g21", src: "/images/gallery/g21.jpg", alt: "Warehouse and workshop facility with overhead crane", category: "logistics" },
  { id: "g22", src: "/images/gallery/g22.jpg", alt: "Flatbed truck transporting excavator to project site", category: "logistics" },
  // Construction
  { id: "g23", src: "/images/gallery/g23.jpg", alt: "Building construction with scaffolding", category: "construction" },
  { id: "g24", src: "/images/gallery/g24.jpg", alt: "Concrete mixing at construction site", category: "construction" },
];

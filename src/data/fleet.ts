export interface FleetItem {
  id: string;
  vehicleType: string;
  model: string;
  count: number;
  ownership: "owned" | "leased";
  condition: "excellent" | "good" | "fair";
  purpose: string;
}

export const fleet: FleetItem[] = [
  { id: "f1", vehicleType: "Pickup Trucks", model: "Toyota Hilux", count: 4, ownership: "owned", condition: "good", purpose: "Site supervision and personnel transport" },
  { id: "f2", vehicleType: "Pickup Trucks", model: "Mitsubishi L200", count: 2, ownership: "owned", condition: "good", purpose: "Site supervision" },
  { id: "f3", vehicleType: "Trucks", model: "Hino 6-Ton", count: 3, ownership: "owned", condition: "good", purpose: "Material transportation" },
  { id: "f4", vehicleType: "Trucks", model: "Hino 10-Ton", count: 2, ownership: "owned", condition: "fair", purpose: "Heavy material transport" },
  { id: "f5", vehicleType: "Water Tankers", model: "Hyundai 5000L", count: 3, ownership: "owned", condition: "good", purpose: "Water supply and testing" },
  { id: "f6", vehicleType: "Trailers", model: "Low-bed Trailer", count: 2, ownership: "owned", condition: "good", purpose: "Equipment transport" },
  { id: "f7", vehicleType: "Forklifts", model: "Toyota 3-Ton", count: 2, ownership: "owned", condition: "good", purpose: "Warehouse operations" },
  { id: "f8", vehicleType: "Motorcycles", model: "Honda CB Shine", count: 8, ownership: "owned", condition: "good", purpose: "Field coordination" },
  { id: "f9", vehicleType: "Vans", model: "Toyota HiAce", count: 2, ownership: "owned", condition: "good", purpose: "Personnel and light cargo transport" },
];

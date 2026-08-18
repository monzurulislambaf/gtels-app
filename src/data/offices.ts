export interface Office {
  id: string;
  zone: string;
  type: "head-office" | "zonal" | "sub";
  address: string;
  district?: string;
}

export const offices: Office[] = [
  {
    id: "hq",
    zone: "Dhaka",
    type: "head-office",
    address: "623, West Nakhalpara, Tejgaon, Dhaka-1215",
    district: "Dhaka",
  },
  {
    id: "dh-sub1",
    zone: "Dhaka",
    type: "sub",
    address: "Narayanganj",
    district: "Narayanganj",
  },
  {
    id: "dh-sub2",
    zone: "Dhaka",
    type: "sub",
    address: "Tangail",
    district: "Tangail",
  },
  {
    id: "ct-zonal",
    zone: "Chattogram",
    type: "zonal",
    address: "Chattogram Sadar",
    district: "Chattogram",
  },
  {
    id: "ct-sub1",
    zone: "Chattogram",
    type: "sub",
    address: "Cox's Bazar",
    district: "Cox's Bazar",
  },
  {
    id: "raj-zonal",
    zone: "Rajshahi",
    type: "zonal",
    address: "Rajshahi Sadar",
    district: "Rajshahi",
  },
  {
    id: "raj-sub1",
    zone: "Rajshahi",
    type: "sub",
    address: "Bogura",
    district: "Bogura",
  },
  {
    id: "rp-zonal",
    zone: "Rangpur",
    type: "zonal",
    address: "Rangpur Sadar",
    district: "Rangpur",
  },
  {
    id: "rp-sub1",
    zone: "Rangpur",
    type: "sub",
    address: "Nilphamari",
    district: "Nilphamari",
  },
  {
    id: "rp-sub2",
    zone: "Rangpur",
    type: "sub",
    address: "Dinajpur",
    district: "Dinajpur",
  },
  {
    id: "kh-zonal",
    zone: "Khulna",
    type: "zonal",
    address: "Khulna Sadar",
    district: "Khulna",
  },
  {
    id: "kh-sub1",
    zone: "Khulna",
    type: "sub",
    address: "Jashore",
    district: "Jashore",
  },
  {
    id: "kh-sub2",
    zone: "Khulna",
    type: "sub",
    address: "Satkhira",
    district: "Satkhira",
  },
  {
    id: "kh-sub3",
    zone: "Khulna",
    type: "sub",
    address: "Bagerhat",
    district: "Bagerhat",
  },
  {
    id: "kh-sub4",
    zone: "Khulna",
    type: "sub",
    address: "Gopalganj",
    district: "Gopalganj",
  },
  {
    id: "bar-zonal",
    zone: "Barishal",
    type: "zonal",
    address: "Barishal Sadar",
    district: "Barishal",
  },
  {
    id: "syl-zonal",
    zone: "Sylhet",
    type: "zonal",
    address: "Sylhet Sadar",
    district: "Sylhet",
  },
  {
    id: "mym-zonal",
    zone: "Mymensingh",
    type: "zonal",
    address: "Mymensingh Sadar",
    district: "Mymensingh",
  },
  {
    id: "mym-sub1",
    zone: "Mymensingh",
    type: "sub",
    address: "Netrokona",
    district: "Netrokona",
  },
];

export const zones = [
  { name: "Dhaka", offices: 3, warehouse: "15,000 sq. ft.", coverage: "Central Bangladesh" },
  { name: "Chattogram", offices: 2, warehouse: "8,000 sq. ft.", coverage: "Southeast Bangladesh" },
  { name: "Rajshahi", offices: 2, warehouse: "6,000 sq. ft.", coverage: "Northwest Bangladesh" },
  { name: "Rangpur", offices: 3, warehouse: "7,000 sq. ft.", coverage: "North Bangladesh" },
  { name: "Khulna", offices: 5, warehouse: "8,000 sq. ft.", coverage: "Southwest Bangladesh" },
  { name: "Barishal", offices: 1, warehouse: "4,000 sq. ft.", coverage: "South Bangladesh" },
  { name: "Sylhet", offices: 1, warehouse: "3,500 sq. ft.", coverage: "Northeast Bangladesh" },
  { name: "Mymensingh", offices: 2, warehouse: "3,500 sq. ft.", coverage: "North-Central Bangladesh" },
];

export const companies = [
  {
    name: "McDonald's",
    image: "/images/companies/mcdonalds.webp",
    items: [
      "Acquired first McDonald's Franchise in 1985",
      "Restaurant designated as an official McDonald's franchisee training site",
      "Conducted multi-day operational evaluations for prospective franchisees",
      "Served on the McDonald's Operators' Association Board of Directors"
    ]
  },
  {
    name: "Denny's",
    image: "/images/companies/dennys.webp",
    items: [
      "Expanded operations into Denny's in 1995",
      "Received multiple awards for operational excellence and unit performance",
      "Served as Vice Chair of the Denny's Franchisee Association Board",
      "Chaired the national Marketing Committee for the franchise system"
    ]
  },
  {
    name: "Bojangles",
    image: "/images/companies/bojangles.webp",
    items: [
      "Began building Bojangles restaurants in 2014",
      "Operated the first nationally recognized Bojangles franchisee training store",
      "Received multiple awards for operational excellence and leadership development",
      "Served on the Bojangles Franchisee Association Board of Directors"
    ]
  },
  {
    name: "Shell",
    image: "/images/companies/shell.webp",
    items: [
      "Acquired multi-unit Shell-branded convenience store and car wash locations in the early 2000s",
      "Received multiple awards for operational excellence, sales growth, and profit margin optimization",
      "Recognized for innovative performance within the dealer network"
    ]
  }
];

export type Company = (typeof companies)[0];

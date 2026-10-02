export interface Watch {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  images: string[];
  specs: {
    movement: string;
    crystal: string;
    waterResistance: string;
    caseSize: string;
    caseMaterial: string;
    strapMaterial: string;
  };
  style: "Dress" | "Diver" | "Chronograph" | "Aviation" | "Minimalist";
  featured: boolean;
}

export const WATCH_DATA: Watch[] = [
  {
    id: "obsidian-monarch",
    name: "The Monarch",
    brand: "Obsidian",
    price: 3250,
    description: "The Monarch is the epitome of luxurious precision. A dress watch designed for the modern executive, featuring an ultra-slim profile and a mesmerising sunburst dial. Its minimalist elegance is matched only by its robust automatic movement.",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop"
    ],
    specs: {
      movement: "Swiss Automatic, 42h Power Reserve",
      crystal: "Domed Sapphire with Anti-Reflective Coating",
      waterResistance: "50m (5 ATM)",
      caseSize: "40mm",
      caseMaterial: "316L Stainless Steel with Rose Gold PVD",
      strapMaterial: "Full-Grain Italian Leather",
    },
    style: "Dress",
    featured: true,
  },
  {
    id: "obsidian-abyss",
    name: "Abyss Diver",
    brand: "Obsidian",
    price: 2800,
    description: "Built for the depths, styled for the surface. The Abyss Diver features a unidirectional ceramic bezel and striking luminescent indices. It combines professional diving capabilities with everyday wearability.",
    image: "https://images.unsplash.com/photo-1548169874-531866cb2876?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548169874-531866cb2876?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587836374828-bc3ba0c68128?q=80&w=1000&auto=format&fit=crop"
    ],
    specs: {
      movement: "Caliber O-300 Automatic",
      crystal: "Flat Sapphire",
      waterResistance: "300m (30 ATM)",
      caseSize: "42mm",
      caseMaterial: "Brushed 316L Stainless Steel",
      strapMaterial: "Stainless Steel Bracelet with Divers Extension",
    },
    style: "Diver",
    featured: true,
  },
  {
    id: "obsidian-velocity",
    name: "Velocity Chronograph",
    brand: "Obsidian",
    price: 4100,
    description: "For those who measure life in split seconds. The Velocity Chronograph offers unparalleled accuracy with its column-wheel movement. The intricate sub-dials provide a dashboard of timekeeping functionality.",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639537616616-df2b535d259e?q=80&w=1000&auto=format&fit=crop"
    ],
    specs: {
      movement: "Swiss Chronograph Automatic",
      crystal: "Sapphire with AR Coating",
      waterResistance: "100m (10 ATM)",
      caseSize: "41mm",
      caseMaterial: "Grade 5 Titanium",
      strapMaterial: "Perforated Racing Leather",
    },
    style: "Chronograph",
    featured: false,
  },
  {
    id: "obsidian-aero",
    name: "Aero Flightmaster",
    brand: "Obsidian",
    price: 2450,
    description: "Inspired by the golden age of aviation. The Aero Flightmaster features a highly legible matte black dial with oversized Arabic numerals and a distinctive onion crown for easy adjustment even with gloves.",
    image: "https://images.unsplash.com/photo-1594536762319-74d39f60f6aa?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594536762319-74d39f60f6aa?q=80&w=1000&auto=format&fit=crop"
    ],
    specs: {
      movement: "Automatic GMT",
      crystal: "Domed Sapphire",
      waterResistance: "50m (5 ATM)",
      caseSize: "43mm",
      caseMaterial: "Bead-Blasted Stainless Steel",
      strapMaterial: "Heavy-Duty Canvas/Leather Hybrid",
    },
    style: "Aviation",
    featured: false,
  },
  {
    id: "obsidian-eclipse",
    name: "The Eclipse",
    brand: "Obsidian",
    price: 1850,
    description: "True sophistication lies in simplicity. The Eclipse is a minimalist masterpiece, stripped of all unnecessary complications. Its stealthy all-black design is punctuated only by subtle gold hands.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
    ],
    specs: {
      movement: "Ultra-Thin Quartz",
      crystal: "Sapphire",
      waterResistance: "30m (3 ATM)",
      caseSize: "38mm",
      caseMaterial: "Matte Black Ceramic",
      strapMaterial: "Milanese Mesh Black PVD",
    },
    style: "Minimalist",
    featured: true,
  },
  {
    id: "obsidian-heritage",
    name: "Heritage Tourbillon",
    brand: "Obsidian",
    price: 12500,
    description: "The pinnacle of horological achievement. The Heritage Tourbillon showcases an exposed tourbillon cage at 6 o'clock, counteracting the effects of gravity on the escapement. A true collector's piece.",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop"
    ],
    specs: {
      movement: "Manual-Wind Flying Tourbillon",
      crystal: "Front and Caseback Sapphire",
      waterResistance: "30m (3 ATM)",
      caseSize: "40mm",
      caseMaterial: "18k Solid Rose Gold",
      strapMaterial: "Genuine Alligator",
    },
    style: "Dress",
    featured: false,
  }
];

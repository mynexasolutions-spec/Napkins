export type Product = {
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
};

export type Category = {
  name: string;
  description: string;
  image: string;
  ctaLabel?: string;
  enquiryMessage?: string;
};

export const business = {
  name: "JF World Trading",
  gstin: "09CJHPA1786K1ZX",
  owner: "Junaid Ansari",
  phone: "8077914646",
  phoneIntl: "918077914646",
  address:
    "Jamiya Chok, Lakhipura, Gali No. 18 R, Fatehullapur Road, Meerut, Uttar Pradesh 250002"
};

const productsPath = "/Products/";

export const categories: Category[] = [
  {
    name: "Towels",
    description: "Soft and absorbent towels for daily use.",
    image: "/hero-textile-range.png"
  },
  {
    name: "Gamchas",
    description: "Traditional checked cotton gamchas and napkins.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.02 AM.jpeg`
  },
  {
    name: "Aprons",
    description: "Kitchen aprons in practical checked patterns.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.063 AM.jpeg`
  },
  {
    name: "Cleaning Cloths",
    description: "Durable cloth dusters and cleaning napkins.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.041 AM.jpeg`
  },
  {
    name: "Floor Cloths",
    description: "Heavy-duty floor cloths for regular cleaning.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.064 AM.jpeg`
  },
  {
    name: "Multi-purpose Cloths",
    description: "Versatile cloths for every need.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.064 AM.jpeg`
  }
];

export const products: Product[] = [
  {
    name: "Premium Gamchas",
    slug: "premium-gamchas",
    category: "Gamchas",
    description: "Checked cotton gamchas for wholesale and retail supply.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.02 AM.jpeg`,
    featured: true
  },
  {
    name: "Checked Rumal",
    slug: "checked-rumal",
    category: "Rumal",
    description: "Soft checked rumal in red, black, purple and grey options.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.031 AM.jpeg`,
    featured: true
  },
  {
    name: "Cleaning Cloth Duster",
    slug: "cleaning-cloth-duster",
    category: "Cleaning Cloths",
    description: "Reusable cotton cleaning cloths for homes and businesses.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.041 AM.jpeg`,
    featured: true
  },
  {
    name: "Cotton Napkin Cloth",
    slug: "cotton-napkin-cloth",
    category: "Napkins",
    description: "Everyday napkin cloth with sturdy woven borders.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.04 AM.jpeg`,
    featured: true
  },
  {
    name: "Hand Towels",
    slug: "hand-towels",
    category: "Towels",
    description: "Absorbent hand towels suitable for bulk orders.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.05 AM.jpeg`,
    featured: true
  },
  {
    name: "Floor Cloths",
    slug: "floor-cloths",
    category: "Floor Cloths",
    description: "Thick floor cloths made for long cleaning life.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.064 AM.jpeg`,
    featured: true
  },
  {
    name: "Kitchen Aprons",
    slug: "kitchen-aprons",
    category: "Aprons",
    description: "Checked apron styles for kitchens, vendors and home use.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.063 AM.jpeg`,
    featured: true
  },
  {
    name: "Multi Purpose Cloths",
    slug: "multi-purpose-cloths",
    category: "Cleaning Cloths",
    description: "Multipurpose cotton cloths for cleaning and wiping.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.064 AM.jpeg`,
    featured: true
  },
  {
    name: "Car Cleaning Cloth",
    slug: "car-cleaning-cloth",
    category: "Cleaning Cloths",
    description: "Soft duster cloth for car and surface cleaning.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.06 AM.jpeg`,
    featured: false
  },
  {
    name: "White Border Napkins",
    slug: "white-border-napkins",
    category: "Napkins",
    description: "White napkins with woven side borders.",
    image: `${productsPath}WhatsApp Image 2026-09-04 at 11.14.07 AM.jpeg`,
    featured: false
  }
];

export const galleryImages = [
  {
    src: "/imageposter1.jpeg",
    alt: "JF World Trading Poster Showcase 1",
    isPoster: true
  },
  {
    src: "/imageposter2.jpeg",
    alt: "JF World Trading Poster Showcase 2",
    isPoster: true
  },
  {
    src: `${productsPath}WhatsApp Image 2026-09-04 at 12.35.52 PM.jpeg`,
    alt: "Textile machine inside JF World Trading factory"
  },
  {
    src: `${productsPath}WhatsApp Image 2026-09-04 at 12.35.53 PM.jpeg`,
    alt: "JF World Trading factory entrance"
  },
  {
    src: `${productsPath}WhatsApp Image 2026-09-04 at 12.35.551 PM.jpeg`,
    alt: "Fabric roll production machine"
  },
  {
    src: `${productsPath}WhatsApp Image 2026-09-04 at 12.35.562 PM.jpeg`,
    alt: "Yarn and fabric rolls in production area"
  },
  {
    src: `${productsPath}WhatsApp Image 2026-09-04 at 12.35.573 PM.jpeg`,
    alt: "Working loom with textile production"
  },
  {
    src: `${productsPath}WhatsApp Image 2026-09-04 at 12.35.585 PM.jpeg`,
    alt: "JF World Trading building front"
  },
  {
    src: `${productsPath}WhatsApp Image 2026-09-04 at 12.36.014 PM.jpeg`,
    alt: "Factory storage with cloth rolls"
  },
  {
    src: `${productsPath}WhatsApp Image 2026-09-04 at 12.36.044 PM.jpeg`,
    alt: "Fabric on textile production machine"
  }
];

export function whatsappUrl(message: string): string {
  return `https://wa.me/${business.phoneIntl}?text=${encodeURIComponent(message)}`;
}

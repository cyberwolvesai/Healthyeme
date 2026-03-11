/**
 * Product data - Healthyeme (small, curated set)
 */
const TCK_PRODUCTS = [
  { id: 1, name: "Almond Milk", weight: "500 ml", tagline: "Pure. Fresh. Plant-Based.", price: 159, price2: "1 Litre ₹279", rating: 4.9, ship: "Ships Pan India", category: "drinks", diet: ["vegan"], img: "https://picsum.photos/seed/almond1/600/600" },
  { id: 2, name: "Almond Milk", weight: "1 Litre", tagline: "Pure. Fresh. Plant-Based.", price: 279, rating: 4.9, ship: "Ships Pan India", category: "drinks", diet: ["vegan"], img: "https://picsum.photos/seed/almond1/600/600" },
  { id: 3, name: "Just Almond Butter", weight: "200 g", tagline: "Smooth & Almondy", price: 495, rating: 5.0, ship: "Ships Pan India", category: "spreads", diet: ["vegan"], img: "https://picsum.photos/seed/tck26/600/600" },
  { id: 4, name: "Cacao Almond Butter", weight: "200 g", tagline: "Chocolatey & Almondy", price: 520, rating: 4.8, ship: "Ships Pan India", category: "spreads", diet: ["vegan"], img: "https://picsum.photos/seed/tck27/600/600" },
  { id: 5, name: "Almond Flour & Cacao Cookies", weight: "5 Cookies (175 g)", tagline: "Buttery & Flaky", price: 550, rating: 4.8, ship: "Ships Pan India", category: "bakes", diet: ["vegan"], img: "https://picsum.photos/seed/tck2/600/600" },
  { id: 6, name: "Berry Cacao Oat Cookies", weight: "5 Cookies (175 g)", tagline: "Crispy & Chewy", price: 350, rating: 4.7, ship: "Ships Pan India", category: "bakes", diet: ["vegan"], img: "https://picsum.photos/seed/tck3/600/600" },
  { id: 7, name: "Berry & Banana Millet Granola", weight: "150 g", tagline: "Millet-Nola", price: 450, rating: 4.6, ship: "Ships Pan India", category: "bakes", diet: ["vegan"], img: "https://picsum.photos/seed/tck14/600/600" },
  { id: 8, name: "Trial Pack", weight: "6 treats", tagline: "A lil bit of everything", price: 395, rating: 4.4, ship: "Ships Pan India", category: "bakes", diet: [], img: "https://picsum.photos/seed/tck8/600/600" },
];

const TCK_CATEGORIES = [
  { slug: "drinks", name: "Drinks", img: "https://picsum.photos/seed/almond1/688/688" },
  { slug: "spreads", name: "Nut Butters & Spreads", img: "https://picsum.photos/seed/cat3/688/688" },
  { slug: "bakes", name: "Bakes & Breakfast", img: "https://picsum.photos/seed/cat2/688/688" },
];

const TCK_DIVE_IN = [
  { name: "Drinks", desc: "Pure plant-based almond milk. No preservatives, no added sugar.", url: "shop-all.html?type=drinks", img: "https://picsum.photos/seed/almond1/688/688" },
  { name: "Spreads", desc: "Smooth, rich nut butters. Perfect for toast, smoothies & more.", url: "shop-all.html?type=spreads", img: "https://picsum.photos/seed/dive4/688/688" },
  { name: "Bakes", desc: "Cookies, granola & treats. Fresh, clean ingredients.", url: "shop-all.html?type=bakes", img: "https://picsum.photos/seed/dive2/688/688" },
];

const TCK_TESTIMONIALS = [
  { name: "Simran K.", role: "Nutritionist", text: "The almond milk is so clean and the cookies feel indulgent but are secretly good for you.", product: "Almond Milk", img: "https://picsum.photos/seed/sk/120/120" },
  { name: "Namita D.", role: "Parent", text: "My kids love the granola. We order the trial pack every month.", product: "Trial Pack", img: "https://picsum.photos/seed/nd/120/120" },
];

const TCK_STORY_SECTIONS = [
  { id: "where-it-began", title: "Where It Began", subtitle: "Started with a personal struggle", text: "Our founder was diagnosed with PCOS as a young teenager. She turned to nutrition and real ingredients, and began sharing her bakes online. Honest posts grew into a community that today enjoys clean, plant-based food.", img: "https://picsum.photos/seed/story1/600/600" },
  { id: "born-to-bake", title: "Born to Bake Differently", subtitle: "Better for You ingredients", text: "No preservatives, no heavy processing. Real ingredients, kept close to nature. Every swap we make is about food that feels honest and tastes unforgettable.", img: "https://picsum.photos/seed/story2/600/600" },
];

// Category slug to product category mapping (simplified)
const CATEGORY_MAP = {
  "drinks": ["drinks"],
  "spreads": ["spreads"],
  "bakes": ["bakes"],
  "fresh-cakes-bakes": ["bakes"],
  "cookies-baked-goods": ["bakes"],
  "nut-butters-spreads": ["spreads"],
  "snacks-bites": ["bakes"],
  "granola-breakfast": ["bakes"],
  "pantry-staples": ["bakes"],
  "all": [],
};

const DIET_MAP = {
  "vegan": "vegan",
  "keto-friendly": "keto",
  "loved-by-children": "loved-by-children",
  "lactose-dairy-free": "lactose-free",
};

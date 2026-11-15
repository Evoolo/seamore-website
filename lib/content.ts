export type Expedition = {
  slug: string;
  number: string;
  title: string;
  animal: string;
  place: string;
  image: string;
  alt: string;
  intro: string;
  description: string;
  details: string[];
  gallery: { src: string; alt: string }[];
};

export const expeditions: Expedition[] = [
  {
    slug: "whale-sharks-mexico",
    number: "01",
    title: "Whale sharks in blue water",
    animal: "Whale sharks",
    place: "Yucatán, Mexico",
    image: "/media/whale-shark.jpg",
    alt: "Whale shark swimming above a diver in clear blue water",
    intro: "Meet the largest fish in the ocean in the clear waters off Mexico.",
    description:
      "A journey shaped around whale shark encounters, with room to discover the wider marine world of the Yucatán. The original Sea More itinerary paired snorkeling with diving around Cozumel and the cenotes.",
    details: ["Wildlife-led snorkeling", "Cozumel and cenotes", "Group or tailored travel"],
    gallery: [
      { src: "/media/whale-shark-detail.jpg", alt: "Whale shark close to the surface" },
      { src: "/media/whale-shark.jpg", alt: "Whale shark and diver underwater" },
    ],
  },
  {
    slug: "orcas-northern-lights",
    number: "02",
    title: "Orcas under winter skies",
    animal: "Orcas & fin whales",
    place: "Andenes, Norway",
    image: "/media/orcas.jpg",
    alt: "Orcas surfacing against a northern mountain landscape",
    intro: "Follow the rhythm of the northern sea, from orca encounters to the aurora.",
    description:
      "Sea More's Norwegian expedition concept brings together snorkeling focused on orcas and fin whales with the possibility of northern lights. Winter conditions shape each day, making the experience as much about the place as the animals.",
    details: ["Northern marine life", "Winter landscape", "Aurora experiences"],
    gallery: [
      { src: "/media/orcas.jpg", alt: "Orcas swimming at the surface" },
      { src: "/media/northern-lights.jpg", alt: "Northern lights over Norway" },
    ],
  },
  {
    slug: "sharks-south-africa",
    number: "03",
    title: "The shark coast",
    animal: "Tiger sharks & more",
    place: "South Africa",
    image: "/media/tiger-shark.jpg",
    alt: "Tiger shark swimming near divers in blue water",
    intro: "Enter the water where encounters with several shark species are possible.",
    description:
      "The archived expedition explored Protea Banks and Aliwal Shoal with a focus on tiger, bull, and blacktip sharks. This is diving with experienced local professionals, with the ocean setting the terms of every encounter.",
    details: ["Protea Banks", "Aliwal Shoal", "Experienced dive partners"],
    gallery: [
      { src: "/media/tiger-shark.jpg", alt: "Tiger shark with divers" },
      { src: "/media/great-white.jpg", alt: "Shark photographed underwater" },
    ],
  },
  {
    slug: "crocodiles-cuba",
    number: "04",
    title: "At the water's edge",
    animal: "American crocodiles",
    place: "Jardines de la Reina, Cuba",
    image: "/media/crocodile.jpg",
    alt: "Travelers in shallow water observing crocodiles",
    intro: "A rare perspective on crocodiles in their own environment.",
    description:
      "Sea More's archived Cuba expedition combined snorkeling near American crocodiles with diving in the surrounding marine reserve. It reflects the brand's belief that informed, carefully guided experience can turn fear into respect.",
    details: ["Wildlife observation", "Marine reserve setting", "Guided field experience"],
    gallery: [
      { src: "/media/crocodile.jpg", alt: "Guests observing crocodiles in shallow water" },
      { src: "/media/blue-shark.jpg", alt: "Shark photographed underwater" },
    ],
  },
  {
    slug: "azores-blue-water",
    number: "05",
    title: "Blue water, wild encounters",
    animal: "Sharks, rays & dolphins",
    place: "Pico, Azores",
    image: "/media/manta-rays.jpg",
    alt: "Mobula rays and a diver in the blue water of the Azores",
    intro: "An open-ocean journey shaped by the life moving through the Azores.",
    description:
      "The archived Azores itinerary centered on mako and blue sharks, mobula rays, and dolphins around Pico. The experience asks for a willingness to follow the day's conditions and remain curious about what appears.",
    details: ["Blue-water diving", "Pico island", "Multiple marine species"],
    gallery: [
      { src: "/media/manta-rays.jpg", alt: "Mobula rays swimming near a diver" },
      { src: "/media/blue-shark.jpg", alt: "Blue shark below the surface" },
    ],
  },
];

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  readTime: string;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "follow-the-wildlife",
    category: "Our approach",
    title: "Follow the wildlife, not the map",
    excerpt: "Why an encounter begins long before you enter the water.",
    image: "/media/whale-shark-detail.jpg",
    alt: "Whale shark photographed below the water's surface",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Most journeys begin with a place. Sea More begins with a question: what do you hope to understand better? A whale shark, an orca, a crocodile, a landscape that seems almost unreal? The answer guides the choice of destination.",
          "That change in perspective is at the heart of the original Sea More story. Instead of treating wildlife as an optional extra to a holiday, the journey is built around the places known for the encounters that matter to the traveler.",
        ],
      },
      {
        heading: "A better chance, never a promise",
        paragraphs: [
          "Choosing a place with care improves the opportunity to observe wildlife. It cannot make a wild animal appear on demand. Weather, water and the animals themselves shape every day. Honest expectations are part of a good expedition.",
          "The reward is broader than a single sighting: learning to read a place, sharing the search with others, and coming home with a more vivid understanding of the natural world.",
        ],
      },
    ],
  },
  {
    slug: "the-space-between-encounters",
    category: "Field notes",
    title: "The space between encounters",
    excerpt: "An orca expedition is also a story about winter light, patience and place.",
    image: "/media/orcas.jpg",
    alt: "Orcas in a northern seascape",
    readTime: "3 min read",
    sections: [
      {
        paragraphs: [
          "The northern sea is never a studio. Light changes quickly, the horizon can disappear, and the most memorable moment may come after a long stretch of looking. An encounter with an orca belongs to that whole setting.",
          "Sea More's archived Andenes journey joined marine wildlife with the northern lights. It was a reminder that the animal and the landscape are inseparable parts of the experience.",
        ],
      },
      {
        heading: "Let the place lead",
        paragraphs: [
          "A well-planned itinerary creates opportunities, while leaving space to adapt. It makes the travel practical, but never tries to turn the wild into a timetable.",
          "That is the spirit of expedition travel: arrive prepared, pay attention, and be ready for the moment the sea gives you.",
        ],
      },
    ],
  },
  {
    slug: "fear-to-fascination",
    category: "Our story",
    title: "From fear to fascination",
    excerpt: "The small reef shark that changed the way Sea More sees the ocean.",
    image: "/media/great-white.jpg",
    alt: "Shark gliding through open water",
    readTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Sea More's founding story starts with a familiar fear of sharks. During a first dive course, a small reef shark appeared near a coral reef. Curiosity won out. As the young diver approached, the shark moved away.",
          "The experience unsettled a simple story about dangerous animals and made room for better questions. How do these creatures behave? What can we learn by seeing them in their own environment?",
        ],
      },
      {
        heading: "Experience changes the story",
        paragraphs: [
          "More journeys brought more respect and fascination. Sea More grew from the wish to offer others that chance to observe, understand and reconsider.",
          "We can admire wildlife without pretending it is tame. The most meaningful encounter leaves the animal wild, and the traveler more attentive than before.",
        ],
      },
    ],
  },
  {
    slug: "travel-your-way",
    category: "Travel styles",
    title: "One purpose. Different ways to travel.",
    excerpt: "Finding the right format for a wildlife-led journey.",
    image: "/media/manta-rays.jpg",
    alt: "Diver swimming near rays in open blue water",
    readTime: "3 min read",
    sections: [
      {
        paragraphs: [
          "Some people want to share an expedition with travelers who love the same animals. Others want to extend a trip, choose a different destination, or keep the journey private. The wildlife can remain the focus in every format.",
          "Sea More's group expeditions bring guidance, shared learning and the energy of a small community. Custom journeys make room for individual routes and interests. Exclusive travel creates a privately arranged experience with a wider range of tailored services.",
        ],
      },
      {
        heading: "Choose the experience, then the shape",
        paragraphs: [
          "Start with the animal or place you hope to experience. Then decide how you want to travel and how much support you would like along the way. The right itinerary grows from both answers.",
        ],
      },
    ],
  },
];

export const faqItems = [
  {
    id: "sightings",
    question: "Are wildlife sightings guaranteed?",
    answer:
      "No. We select places around the wildlife you hope to see, but animals and conditions remain unpredictable. We'll explain the focus of a journey and what may vary before you travel.",
  },
  {
    id: "format",
    question: "Can I travel outside a group departure?",
    answer:
      "Yes. Sea More's archived offer includes custom journeys and exclusive travel alongside guided group expeditions. Tell us what you have in mind and we can discuss the right format.",
  },
  {
    id: "experience",
    question: "Do I need diving experience?",
    answer:
      "Requirements depend on the animals, location and activities. Some journeys focus on snorkeling; others require diving qualifications. Ask us about a specific itinerary before making plans.",
  },
  {
    id: "availability",
    question: "Where can I find dates and prices?",
    answer:
      "Dates and prices from the previous website are historical. Contact Sea More to confirm current availability and a tailored quotation.",
  },
];

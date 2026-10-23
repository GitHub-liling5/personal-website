export const site = {
  name: "Nora Vale",
  tagline: "Portraits, places, and quiet light.",
  email: "123321@example.com",
  intro: {
    title: "About",
    body: [
      "I photograph people and the spaces they inhabit — soft daylight, unforced moments, and the small details that make a frame feel lived-in.",
      "Based in China. Available for portraits, editorial sittings, and travel assignments.",
    ],
  },
  work: [
    {
      id: "w1",
      title: "Morning window",
      category: "Portrait",
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e4a34?w=1200&q=80",
      alt: "Portrait by a bright window — replace with your own work",
      replaceWith: "A favorite natural-light portrait",
    },
    {
      id: "w2",
      title: "Coast line",
      category: "Landscape",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      alt: "Coastal landscape — replace with your own work",
      replaceWith: "A landscape or travel frame you return to",
    },
    {
      id: "w3",
      title: "Studio calm",
      category: "Portrait",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
      alt: "Studio portrait — replace with your own work",
      replaceWith: "A clean studio or controlled-light portrait",
    },
    {
      id: "w4",
      title: "City hush",
      category: "Street",
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
      alt: "City street at dusk — replace with your own work",
      replaceWith: "A street or documentary moment",
    },
    {
      id: "w5",
      title: "Soft room",
      category: "Interior",
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      alt: "Quiet interior — replace with your own work",
      replaceWith: "An interior or still-life study",
    },
    {
      id: "w6",
      title: "Open field",
      category: "Landscape",
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
      alt: "Open landscape under soft sky — replace with your own work",
      replaceWith: "A wide outdoor frame with atmosphere",
    },
  ],
  hero: {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=2000&q=80",
    alt: "Photographer at work — replace with a signature image",
    replaceWith: "Your strongest full-bleed hero photograph",
  },
  pricing: [
    {
      name: "Portrait sitting",
      price: "¥1,800",
      detail: "Up to 90 minutes · 25 edited images · online gallery",
    },
    {
      name: "Half-day session",
      price: "¥3,600",
      detail: "Up to 4 hours · 50 edited images · location or studio",
    },
    {
      name: "Full-day / travel",
      price: "from ¥6,800",
      detail: "Custom brief · travel day rates on request",
    },
  ],
} as const

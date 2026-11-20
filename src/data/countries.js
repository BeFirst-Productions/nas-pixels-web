export const COUNTRIES_DATA = [
  {
    id: "saudi-arabia",
    slug: "saudi-arabia",
    aliases: ["soudi", "saudi", "saudi-arabia"],
    name: "Saudi Arabia",
    title: "Saudi arabia",
    badge: "Saudi arabia",
    image: "/assets/images/countries/soudi-img.jpg",
    description:
      "NAS Pixels delivers advanced LED display, video wall, and digital signage solutions for commercial and corporate spaces across Saudi Arabia.",
    alt: "Saudi Arabia digital display and LED solutions",
    hero: {
      badge: "Saudi arabia",
      heading: "Professional LED Display Solutions in Saudi Arabia",
      image: "/assets/images/countries/banner/soudi-arabia.png",
      alt: "Saudi Arabia NAS Pixels Flagship LED Display Project",
    },
    about: {
      badge: "About Us",
      heading: "Advanced Visual Solutions for Saudi Arabia",
      paragraph1:
        "NAS Pixels delivers professional LED display and digital signage solutions for commercial, corporate, retail, and event environments across Saudi Arabia.",
      paragraph2:
        "From high-brightness outdoor screens to fine-pitch video walls and integrated AV systems, we provide tailored display solutions with expert installation and responsive technical support.",
      image: "/assets/images/countries/saudi-about.jpg",
      alt: "NAS Pixels Saudi Arabia Experience Center and LED Display Showroom",
    },
  },
  {
    id: "thailand",
    slug: "thailand",
    aliases: ["thailand", "thai"],
    name: "Thailand",
    title: "Thailand",
    badge: "Thailand",
    image: "/assets/images/countries/thailand-img.jpg",
    description:
      "Discover professional LED screens, interactive displays, and audio-visual solutions designed to enhance business communication and customer experiences in Thailand.",
    alt: "Thailand digital display and LED solutions",
    hero: {
      badge: "Thailand",
      heading: "Innovative LED Display Solutions for Thailand",
      image: "/assets/images/countries/banner/thailand.png",
      alt: "Thailand NAS Pixels Digital Signage and LED Solutions",
    },
    about: {
      badge: "About Us",
      heading: "Visual Technology Solutions Across Thailand",
      paragraph1:
        "NAS Pixels provides modern LED display and digital signage solutions for commercial spaces, shopping destinations, events, and corporate environments in Thailand.",
      paragraph2:
        "Our solutions include LED screens, video walls, interactive displays, and audio-visual integration, supported by project-focused planning, installation, and ongoing technical assistance.",
      image: "/assets/images/countries/saudi-about.jpg",
      alt: "NAS Pixels Thailand Experience Center and LED Solutions",
    },
  },
  {
    id: "malaysia",
    slug: "malaysia",
    aliases: ["malaysia"],
    name: "Malaysia",
    title: "Malaysia",
    badge: "Malaysia",
    image: "/assets/images/countries/malaysia-img.jpg",
    description:
      "Explore innovative LED display systems, digital signage, and video walls that bring modern visual communication to businesses across Malaysia.",
    alt: "Malaysia digital display and LED solutions",
    hero: {
      badge: "Malaysia",
      heading: "Advanced LED Display Solutions for Malaysia",
      image: "/assets/images/countries/banner/malaysia.png",
      alt: "Malaysia NAS Pixels Digital Signage and LED Solutions",
    },
    about: {
      badge: "About Us",
      heading: "Reliable Digital Display Solutions in Malaysia",
      paragraph1:
        "NAS Pixels delivers advanced LED display and digital signage solutions for businesses, retail spaces, events, and commercial environments across Malaysia.",
      paragraph2:
        "From indoor and outdoor LED screens to video walls and AV integration, we help brands communicate clearly with tailored technology, professional installation, and dependable support.",
      image: "/assets/images/countries/saudi-about.jpg",
      alt: "NAS Pixels Malaysia Experience Center and LED Solutions",
    },
  },
  {
    id: "singapore",
    slug: "singapore",
    aliases: ["singapore"],
    name: "Singapore",
    title: "Singapore",
    badge: "Singapore",
    image: "/assets/images/countries/singapore-img.jpg",
    description:
      "Experience advanced LED screens, digital signage, and integrated AV solutions for engaging visual experiences in Singapore's commercial environments.",
    alt: "Singapore digital display and LED solutions",
    hero: {
      badge: "Singapore",
      heading: "Smart LED Display Solutions for Singapore",
      image: "/assets/images/countries/banner/singapore.png",
      alt: "Singapore NAS Pixels Digital Signage and LED Solutions",
    },
    about: {
      badge: "About Us",
      heading: "Next-Generation Display Solutions in Singapore",
      paragraph1:
        "NAS Pixels offers advanced LED display and digital signage solutions for businesses, retail environments, events, and modern commercial spaces in Singapore.",
      paragraph2:
        "We combine LED screen technology, video walls, interactive kiosks, and AV integration to create clear, engaging visual experiences, backed by careful project planning and technical support.",
      image: "/assets/images/countries/saudi-about.jpg",
      alt: "NAS Pixels Singapore Experience Center and LED Solutions",
    },
  },
];

/**
 * Helper to retrieve a country by slug or alias.
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getCountryBySlug(slug) {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return COUNTRIES_DATA.find(
    (c) =>
      c.slug.toLowerCase() === normalized ||
      (c.aliases && c.aliases.includes(normalized))
  );
}

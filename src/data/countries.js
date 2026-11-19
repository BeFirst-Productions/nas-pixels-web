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
      "Morem ipsum dolor sit amet, consectetur dolor adipiscing elit. Etiam eu turpi molestie, dictumest a, mattis tellus.",
    alt: "Saudi Arabia digital display and LED solutions",
    hero: {
      badge: "Saudi arabia",
      heading: "Dorem ipsum dolor sit amet, consectetur adipiscing elit. aliquet mattis.",
      image: "/assets/images/countries/banner/soudi-arabia.png",
      alt: "Saudi Arabia NAS Pixels Flagship LED Display Project",
    },
    about: {
      badge: "About Us",
      heading: "Morem ipsum dolor sit amet, consectetur adipiscing",
      paragraph1:
        "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
      paragraph2:
        "Maecenas eget condimentum velit, sit amet feugiat lectus. dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum",
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
      "Morem ipsum dolor sit amet, consectetur dolor adipiscing elit. Etiam eu turpi molestie, dictumest a, mattis tellus.",
    alt: "Thailand digital display and LED solutions",
    hero: {
      badge: "Thailand",
      heading: "Dorem ipsum dolor sit amet, consectetur adipiscing elit. aliquet mattis.",
      image: "/assets/images/countries/banner/thailand.png",
      alt: "Thailand NAS Pixels Digital Signage and LED Solutions",
    },
    about: {
      badge: "About Us",
      heading: "Morem ipsum dolor sit amet, consectetur adipiscing",
      paragraph1:
        "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
      paragraph2:
        "Maecenas eget condimentum velit, sit amet feugiat lectus. dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum",
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
      "Morem ipsum dolor sit amet, consectetur dolor adipiscing elit. Etiam eu turpi molestie, dictumest a, mattis tellus.",
    alt: "Malaysia digital display and LED solutions",
    hero: {
      badge: "Malaysia",
      heading: "Dorem ipsum dolor sit amet, consectetur adipiscing elit. aliquet mattis.",
      image: "/assets/images/countries/banner/malaysia.png",
      alt: "Malaysia NAS Pixels Digital Signage and LED Solutions",
    },
    about: {
      badge: "About Us",
      heading: "Morem ipsum dolor sit amet, consectetur adipiscing",
      paragraph1:
        "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
      paragraph2:
        "Maecenas eget condimentum velit, sit amet feugiat lectus. dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum",
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
      "Morem ipsum dolor sit amet, consectetur dolor adipiscing elit. Etiam eu turpi molestie, dictumest a, mattis tellus.",
    alt: "Singapore digital display and LED solutions",
    hero: {
      badge: "Singapore",
      heading: "Dorem ipsum dolor sit amet, consectetur adipiscing elit. aliquet mattis.",
      image: "/assets/images/countries/banner/singapore.png",
      alt: "Singapore NAS Pixels Digital Signage and LED Solutions",
    },
    about: {
      badge: "About Us",
      heading: "Morem ipsum dolor sit amet, consectetur adipiscing",
      paragraph1:
        "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
      paragraph2:
        "Maecenas eget condimentum velit, sit amet feugiat lectus. dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum",
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

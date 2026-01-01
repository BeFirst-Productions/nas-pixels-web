// /** @type {import('next').NextConfig} */
// const nextConfig = {
//    output: "export",
//   images: {
//     unoptimized: true
//   },
//   // Disable Turbopack for now (temporary fix)
//   experimental: {
//     turbo: {
//       // Resolve alias mappings if needed
//       resolveAlias: {
//         // Add any alias mappings here
//       },
//     },
//   },
//     images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "picsum.photos",
//       },
//     ],
//   },
//   // Or disable Turbopack completely
//   // (remove --turbo flag from dev script instead)
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },

  experimental: {
    turbo: {
      resolveAlias: {},
    },
  },
};

module.exports = nextConfig;

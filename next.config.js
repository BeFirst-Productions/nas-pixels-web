/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Turbopack for now (temporary fix)
  experimental: {
    turbo: {
      // Resolve alias mappings if needed
      resolveAlias: {
        // Add any alias mappings here
      },
    },
  },
  
  // Or disable Turbopack completely
  // (remove --turbo flag from dev script instead)
};

module.exports = nextConfig;
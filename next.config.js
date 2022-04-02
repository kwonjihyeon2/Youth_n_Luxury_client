/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  generateBuildId: () => 'market',
  exportPathMap: () => ({
    '/': { page: '/' },
    '/market/list': { page: '/market/list' },
    '/404': { page: '/404' },
  }),
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This ensures the app works with static exports
  trailingSlash: true,
  // Disable server-side rendering for components that use window
  reactStrictMode: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    domains: ['via.placeholder.com'],
  },
}

module.exports = nextConfig

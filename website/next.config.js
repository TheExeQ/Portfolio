/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

const withVideos = require('next-videos')
module.exports = withVideos()

module.exports = nextConfig

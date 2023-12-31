/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',

  reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos'
          },
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com'
          }
        ],
      }
}

module.exports = nextConfig

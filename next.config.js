/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  basePath: '/singh-sant.github.io', // Replace with your repo name
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 
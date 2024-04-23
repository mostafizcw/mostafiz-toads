const withVideos = require("next-videos");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com"],
  },
  server: {
    host: "0.0.0.0",
  },
};

module.exports = withVideos(nextConfig);

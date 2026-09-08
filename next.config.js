/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    PROJECTID: process.env.PROJECTID,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;

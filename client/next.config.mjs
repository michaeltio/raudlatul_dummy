/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["raudlatulirfancalligraphy.com"], // Replace with your actual domain
    formats: ["image/webp", "image/avif"], // Enable WebP and AVIF formats
  },
};

export default nextConfig;

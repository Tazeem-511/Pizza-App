/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "static01.nyt.com",
      "www.dominos.co.in", // Existing domain
      "wallpaperaccess.com", // Add this line
    ],
  },
};

export default nextConfig;

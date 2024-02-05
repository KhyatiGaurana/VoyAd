/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "gaurav-food-ordering-app.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;

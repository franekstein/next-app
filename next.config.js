/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com', 'naszsklep-api.vercel.app'],
  },
  theme: {
    extend: {
      aspectRatio: {
        '2/3': '2 / 3',
      },
    },
  },
};

module.exports = nextConfig;

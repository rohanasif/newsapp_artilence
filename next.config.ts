/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEWSAPI_KEY: process.env.NEWSAPI_KEY,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const dotenvExpand = require("dotenv-expand");

dotenvExpand.expand({ parsed: { ...process.env } });

const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;

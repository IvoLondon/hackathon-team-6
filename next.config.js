/** @type {import('next').NextConfig} */
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(
              process.cwd(),
              "node_modules/@vfuk/source-tobi-icons/dist/assets"
            ),
            to: "../public/icons/SourceTobiIcons",
          },
          {
            from: path.resolve(
              process.cwd(),
              "node_modules/@vfuk/source-system-icons/dist/assets"
            ),
            to: "../public/icons/SourceSystemIcons",
          },
        ],
      })
    );
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;

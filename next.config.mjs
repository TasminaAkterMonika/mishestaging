/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;



// const nextConfig = {
//   webpack: (config, { isServer }) => {
//       if (!isServer) {
//           config.module.rules.push({
//               test: /\.html$/,
//               use: ['html-loader'],
//           });
//       }
//       return config;
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // El español se sirve en "/" (internamente es /es) y el inglés en "/en"
  async redirects() {
    return [{ source: "/es", destination: "/", permanent: true }];
  },
  async rewrites() {
    return [{ source: "/", destination: "/es" }];
  },
};
export default nextConfig;

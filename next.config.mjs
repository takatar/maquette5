/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export statique : le dossier `out/` peut être hébergé sur n'importe quel hébergeur statique.
  output: "export",
  // Les photos sont pré-optimisées par scripts/optimize-images.mjs (WebP + srcset).
  images: { unoptimized: true },
};

export default nextConfig;

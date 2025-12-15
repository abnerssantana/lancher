/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Desabilitar Turbopack para garantir compatibilidade com Vercel
  experimental: {
    turbo: undefined,
  },
}

export default nextConfig

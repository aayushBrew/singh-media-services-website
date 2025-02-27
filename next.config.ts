import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'dummyimage.com', // Added dummy image domain
    ],
  },
};

export default nextConfig;

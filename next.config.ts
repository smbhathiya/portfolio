import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // These icon packages ship large barrel files; this lets Next.js
    // tree-shake them down to only the icons actually imported.
    optimizePackageImports: ["@tabler/icons-react", "lucide-react"],
  },
};

export default nextConfig;

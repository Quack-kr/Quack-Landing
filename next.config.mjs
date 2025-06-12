/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: process.env.NODE_ENV === "production" ? "export" : "standalone",
  distDir: (() => {
    if (process.env.NODE_ENV === "production") {
      if (process.env.QUACK_NEXT_ENV === "prod") {
        return "out/prod";
      }
      return "out/stage";
    }
    return ".next/dev";
  })(),
  webpack: (config, { buildId, dev, isServer }) => {
    // 기존 설정 유지
    if (isServer) {
      // 서버 전용 Webpack 설정
    }

    if (!dev && config.output.filename.startsWith("static")) {
      config.output.filename = config.output.filename.replace(
        "[name]",
        `[name]-${buildId}`
      );
      config.output.chunkFilename = config.output.chunkFilename.replace(
        "[name]",
        `[name]-${buildId}`
      );
    }

    return config;
  },
  generateBuildId: async () => {
    const timestamp = Math.floor(Date.now() / 1000);
    return `build-${timestamp}`;
  },
};

export default nextConfig;

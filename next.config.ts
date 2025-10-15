import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
  },
};

type TurboMigratableConfig = NextConfig & {
  experimental?: {
    turbo?: Record<string, unknown>;
  };
  turbopack?: Record<string, unknown>;
};

const config = withNextIntl(nextConfig) as TurboMigratableConfig;

if (config.experimental?.turbo) {
  config.turbopack = {
    ...config.experimental.turbo,
    ...config.turbopack,
  };
  delete config.experimental.turbo;

  if (Object.keys(config.experimental).length === 0) {
    delete config.experimental;
  }
}

export default config;

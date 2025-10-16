import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const reactSpinnersAliasTurbo = "./src/shims/react-spinners.tsx";
const reactSpinnersAliasWebpack = path.resolve(
  __dirname,
  "src/shims/react-spinners.tsx",
);
const lottieReactAliasTurbo = "./src/shims/lottie-react.tsx";
const lottieReactAliasWebpack = path.resolve(
  __dirname,
  "src/shims/lottie-react.tsx",
);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "react-spinners": reactSpinnersAliasTurbo,
        "lottie-react": lottieReactAliasTurbo,
      },
    },
  },
  webpack(config) {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = config.resolve.alias ?? {};
    config.resolve.alias["react-spinners"] = reactSpinnersAliasWebpack;
    config.resolve.alias["lottie-react"] = lottieReactAliasWebpack;
    return config;
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

import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";

const config: Config = {
  plugins: [],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-logo)"],
      },
    },
  },
  darkMode: "class",
};

const fullConfig = resolveConfig(config);

const { colors } = fullConfig.theme;

config.plugins = [
  nextui({
    themes: {
      dark: {
        colors: {
          background: colors.gray["900"],
          foreground: colors.gray["100"],
          content1: colors.gray["800"],
          content2: colors.gray["700"],
          content3: colors.gray["600"],
          content4: colors.gray["500"],
          default: {
            DEFAULT: colors.gray["800"],
            50: colors.gray["800"],
            100: colors.gray["700"],
            200: colors.gray["600"],
            300: colors.gray["500"],
            400: colors.gray["400"],
            500: colors.gray["300"],
            600: colors.gray["200"],
            700: colors.gray["100"],
            800: colors.gray["50"],
            foreground: colors.gray["100"],
          },
        },
      },
    },
  }),
];

export default config;

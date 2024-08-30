import {
  Noto_Sans as FontSans,
  Paytone_One as FontLogo,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontLogo = FontLogo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-logo",
});

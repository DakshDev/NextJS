import { Geist, Geist_Mono } from "next/font/google";

const priFont = Geist({
  variable: "--font-pri",
  subsets: ["latin"],
});

const secFont = Geist_Mono({
  variable: "--font-sec",
  subsets: ["latin"],
});

export { priFont, secFont };

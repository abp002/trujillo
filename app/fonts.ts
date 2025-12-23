import { Bebas_Neue, Anton, Oswald } from "next/font/google";

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-oswald",
});


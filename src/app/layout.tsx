import type { Metadata } from "next";
import localfont from "next/font/local";

import { Inter, Young_Serif, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const young_serif = localfont({
  src: [
    {
      path: "../../public/fonts/young-serif/YoungSerif-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-young_serif",
});

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});
export const metadata: Metadata = {
  title: "Recipe Website",
  description: "Simple Omelette Recipe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${young_serif.variable} ${outfit.variable} bg-white`}
      >
        {children}
      </body>
    </html>
  );
}

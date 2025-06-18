import { Jost, Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Image from "next/image";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kavinesh - Personal Portfolio",
  description:
    "A personal portfolio website showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body className="relative scrollbar-hide bg-background-primary min-h-screen overflow-hidden">
        <CustomCursor />
        {children}

        <Image
          src="/images/bgoverlay.avif"
          alt="overlay bg"
          width={1920}
          height={1080}
          priority
          className="block w-full absolute z-99 opacity-5 top-0 left-0 h-full object-cover object-center"
        />
      </body>
    </html>
  );
}

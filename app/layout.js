import { Jost, Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

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
      </body>
    </html>
  );
}

import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
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
    <html lang="en" className={jost.className}>
      <body>{children}</body>
    </html>
  );
}

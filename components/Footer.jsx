"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = function () {
  const pathname = usePathname();

  return (
    <footer className="w-full border-t border-gray-200 common-padding flex flex-col md:flex-row justify-between items-start md:items-center gap-10 text-md">
      <div className="flex flex-col gap-4">
        <nav className="flex gap-8 text-gray-600">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-black-primary/50 ${
                pathname === href ? "text-black-primary/100" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="text-gray-500 mt-2">
          <p>©2025</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

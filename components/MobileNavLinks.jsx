import { navLinks } from "@/constants";
import Link from "next/link";

const MobileNavLinks = function ({ isMenuOpen, pathname }) {
  return (
    <div
      id="nav-link"
      className={`flex justify-between h-full md:justify-start md:border-none common-padding text-[1.1rem]
    absolute w-full z-30 transform top-0 left-0 text-background-primary bg-black gap-2
    transition-transform duration-300 ease-in-out -translate-y-[120%]
    md:hidden ${isMenuOpen && "translate-y-0"}`}
    >
      <div className="flex gap-8 md:gap-12">
        {navLinks.slice(0, 2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`opacity-60 ${
              pathname === link.href ? "opacity-100" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-8 md:gap-12">
        {navLinks.slice(2, 4).map((link) => (
          <Link key={link.href} href={link.href} className="opacity-50">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavLinks;

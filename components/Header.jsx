"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navLinks } from "@/constants";
import { formatTime } from "@/lib/utils";
import SelectBox from "./SelectBox";
import Image from "next/image";
import MobileNavLinks from "./MobileNavLinks";

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const twelveHour = hours % 12 || 12;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className=" h-[60px] border-b fixed inset-0 border-b-light text-sm">
      <div className="w-full h-full p-5 relative flex-between">
        <span className="text-base text-background-primary font-medium flex gap-1 items-center">
          KAVINESH
        </span>

        <nav className="absolute z-10 text-background-primary  items-center justify-between hidden w-full max-w-3xl grid-cols-2 gap-40 -translate-x-1/2 left-1/2 md:grid">
          <div id="nav-link" className="flex text-[1.1rem] justify-between">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`opacity-60 ${
                  pathname === link.href ? "opacity-100" : ""
                } px-3 py-1 hover:bg-background-primary/30 rounded-full transition-all duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <SelectBox />
        </nav>

        <span className="text-base text-background-primary md:font-xl w-20">
          {formatTime(twelveHour)}:{formatTime(minutes)}:{formatTime(seconds)}
        </span>

        <MobileNavLinks isMenuOpen={isMenuOpen} pathname={pathname} />

        <button
          className="absolute z-40 transform -translate-x-1/2 left-1/2 top-3 md:-top-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="size-8 text-white"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="11.9149"
              height="11.9149"
              transform="matrix(0 -1 1 0 0.5 30.3298)"
              fill="currentColor"
            />
            <rect
              width="11.9149"
              height="11.9149"
              transform="matrix(0 -1 1 0 12.4149 18.4149)"
              fill="currentColor"
            />
            <rect
              width="11.9149"
              height="11.9149"
              transform="matrix(0 -1 1 0 6.4574 24.3723)"
              fill="currentColor"
            />
            <rect
              width="11.9149"
              height="11.9149"
              transform="matrix(0 -1 1 0 12.4149 41.5)"
              fill="currentColor"
            />
            <rect
              width="11.9149"
              height="11.9149"
              transform="matrix(0 -1 1 0 6.4574 36.2872)"
              fill="currentColor"
            />
            <rect
              width="11.9149"
              height="11.9149"
              transform="matrix(0 1 -1 0 47.5 17.6702)"
              fill="currentColor"
            />
            <rect
              width="11.9149"
              height="11.9149"
              transform="matrix(0 1 -1 0 35.5851 29.5851)"
              fill="currentColor"
            />
            <rect
              width="11.9149"
              height="11.9149"
              transform="matrix(0 1 -1 0 41.5426 23.6277)"
              fill="currentColor"
            />
            <rect
              width="11.9149"
              height="11.9149"
              transform="matrix(0 1 -1 0 35.5851 6.5)"
              fill="currentColor"
            />
            <rect
              width="11.9149"
              height="11.9149"
              transform="matrix(0 1 -1 0 41.5426 11.7128)"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

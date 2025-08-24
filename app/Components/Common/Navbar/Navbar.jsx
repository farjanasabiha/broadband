"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Speed Challenge", href: "/speedChallange" },
    { name: "About Us", href: "/about" },
    { name: "Packages", href: "/packages" },
    { name: "Coverage", href: "/coverage" },
    { name: "Services", href: "/services" },
    { name: "Referral Offer", href: "/refferal" },
    { name: "Pay Bills", href: "/paybills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/40 shadow-md z-[999]" : "bg-black"
      }`}
    >
      <div className="navbar container max-w-6xl mx-auto px-5 text-white flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <Image src="/sycncitlogo-01.png" alt="Logo" height={80} width={80} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-sm items-center">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className={`transition-colors font-bold duration-200 hover:text-primaryColor ${
                  pathname === link.href
                    ? "text-primaryColor font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="lg:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <HiX className="h-7 w-7" />
            ) : (
              <HiMenu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay (behind sidebar) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-30 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <HiX className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 mt-6 px-6">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className={`block py-2 transition-colors font-bold duration-200 hover:text-primaryColor ${
                  pathname === link.href
                    ? "text-primaryColor font-semibold"
                    : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

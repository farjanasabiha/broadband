"use client";
import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", active: true },
    { name: "Speed Challenge" },
    { name: "About Us" },
    { name: "Packages" },
    { name: "Coverage" },
    { name: "Services" },
    { name: "Referral Offer" },
    { name: "Pay Bills" },
    { name: "Contact" },
  ];

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/40 shadow-md" : "bg-black"
      }`}
    >
      <div className="navbar container max-w-6xl mx-auto px-5 text-white flex items-center justify-between py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://asiannetworkbd.net/wp-content/uploads/2024/09/for-white-bg-logo-1024x801.png"
            alt="Logo"
            className="h-24 py-2 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm items-center">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href="#"
                className={`hover:text-secondary ${
                  link.active ? "text-lime-400 font-semibold" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`md:hidden bg-black/90 text-center backdrop-blur-md text-white transform transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          menuOpen ? "scale-y-100 max-h-screen py-4" : "scale-y-0 max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-3 text-sm px-4">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href="#"
                className={`block hover:text-lime-400 ${
                  link.active ? "text-lime-400 font-semibold" : ""
                }`}
                onClick={() => setMenuOpen(false)} // Close on click
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

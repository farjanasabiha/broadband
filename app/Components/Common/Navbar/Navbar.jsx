"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("common"); // ✅ translation hook
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Set initial scroll state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  const navLinks = [
    { key: "nav_home", href: "/" },
    { key: "nav_speed_challenge", href: "/speedChallange" },
    { key: "nav_about_us", href: "/about" },
    { key: "nav_packages", href: "/packages" },
    { key: "nav_coverage", href: "/coverage" },
    { key: "nav_services", href: "/services" },
    { key: "nav_referral_offer", href: "/refferal" },
    { key: "nav_pay_bills", href: "/paybills" },
    { key: "nav_offers", href: "/offers" },
    { key: "nav_contact", href: "/contact" }
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
                  pathname === link.href ? "text-primaryColor font-semibold" : ""
                }`}
              >
                {t(link.key)} {/* ✅ use translation key */}
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
            {menuOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="fixed z-40" onClick={() => setMenuOpen(false)}></div>}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "#000", height: "100vh", overflowY: "auto" }}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700 bg-black sticky top-0">
          <Image src="/sycncitlogo-01.png" alt="Logo" height={80} width={80} />
          <button onClick={() => setMenuOpen(false)}>
            <HiX className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 mt-6 px-6 pb-6 bg-black">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className={`block py-2 transition-colors font-bold duration-200 hover:text-primaryColor ${
                  pathname === link.href ? "text-primaryColor font-semibold" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {t(link.key)} {/* ✅ translation key */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

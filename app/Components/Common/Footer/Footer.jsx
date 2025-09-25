import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import {
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Left - Logo & Description */}
          <div className="flex flex-col justify-between col-span-12 lg:col-span-4">
            <div className="lg:pr-8">
              <div className="flex items-center space-x-3 mb-4">
                <div>
                  <h1 className="text-primaryColor font-bold text-lg sm:text-xl leading-tight">
                    SYNCIT BANGLADESH
                  </h1>
                  <p className="text-xs sm:text-sm italic text-white">
                    Smart Life’s Internet Partner
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-[15px] text-[#b2b2b2] leading-relaxed mb-4">
                SyncIT is Sylhet’s most trusted fiber broadband provider —
                serving homes, businesses, and gamers with ultra-fast BDIX
                speed, 99.99% uptime, and 24/7 support. Over 5000+ happy
                customers already enjoy our bufferless, high-speed internet
                experience.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://www.facebook.com/syncitbd"
                  className="hover:text-white transition-colors"
                >
                  <FaFacebookF className="text-primaryColor text-lg hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.facebook.com/syncitbd"
                  className="hover:text-white transition-colors"
                >
                  <FaYoutube className="text-primaryColor text-lg hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Company */}
              <div>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                  Company
                </h2>
                <ul className="text-sm text-[#b2b2b2] space-y-1 sm:space-y-2">
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-primaryColor transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-primaryColor transition-colors"
                    >
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="hover:text-primaryColor transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-and-conditions"
                      className="hover:text-primaryColor transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-primaryColor transition-colors"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                  Services
                </h2>
                <ul className="text-sm text-[#b2b2b2] space-y-1 sm:space-y-2">
                  <li>
                    <Link
                      href="/packages"
                      className="hover:text-primaryColor transition-colors"
                    >
                      Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/coverage"
                      className="hover:text-primaryColor transition-colors"
                    >
                      Coverage Area
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/offers"
                      className="hover:text-primaryColor transition-colors"
                    >
                      Offers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/marketing"
                      className="hover:text-primaryColor transition-colors"
                    >
                      Social Media Marketing Strategy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-primaryColor transition-colors"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Address */}
              <div>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                  Address
                </h2>
                <ul className="text-sm text-[#b2b2b2] space-y-2">
                  <li className="flex items-start">
                    <FaPhoneAlt className="text-primaryColor mt-1 mr-2 flex-shrink-0" />
                    <Link
                      href="tel:01965300500"
                      className="hover:text-primaryColor transition-colors"
                    >
                      01965300500 / 09638559900
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <FaEnvelope className="text-primaryColor mt-1 mr-2 flex-shrink-0" />
                    <Link
                      href="mailto:support@syncit.com.bd"
                      className="hover:text-primaryColor transition-colors"
                    >
                      support@syncit.com.bd
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <BsWhatsapp className="text-primaryColor mt-1 mr-2 flex-shrink-0" />
                    <Link
                      href="https://wa.me/8801978169689?text=Hello%20I%20am%20interested%20in%20your%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primaryColor transition-colors"
                    >
                      wa.me/8801978169689
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primaryColor mt-1 mr-2 flex-shrink-0" />
                    <span className="hover:text-primaryColor transition-colors">
                      Sylhet, Bangladesh
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#b2b2b2b8] my-6"></div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left - App download */}
              <div>
                <p className="text-sm sm:text-base text-[#b2b2b2] mb-1">
                  For smooth experience
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">
                  Download Our Mobile App
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <Link
                    href="https://www.facebook.com/syncitbd"
                    className="hover:opacity-90 transition-opacity"
                  >
                    <Image
                      src="/googlePlay.png"
                      alt="Google Play"
                      height={150}
                      width={150}
                      className="h-8 sm:h-10 object-contain"
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/syncitbd"
                    className="hover:opacity-90 transition-opacity"
                  >
                    <Image
                      src="/appStore.png"
                      height={150}
                      width={150}
                      alt="App Store"
                      className="h-8 sm:h-10 object-contain"
                    />
                  </Link>
                </div>
              </div>

              {/* Right - Copyright */}
              <div className="flex flex-col md:items-end text-xs sm:text-sm text-gray-400 text-center md:text-right mt-4 md:mt-0">
                <p className="mb-1 md:mb-2">All rights — SyncIT</p>
                <p>
                  Developed By:
                  <Link
                    href="#"
                    className="text-primaryColor font-medium hover:underline"
                  >
                    SyncIT Team
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

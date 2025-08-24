import Image from "next/image";
import Link from "next/link";
import React from "react";
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
                    ASIAN NETWORK
                  </h1>
                  <p className="text-xs sm:text-sm text-white">
                    CONNECT TO HAPPINESS
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-[15px] text-[#b2b2b2] leading-relaxed mb-4">
                Asian Network is the largest ISP service provider in Gazipur,
                Dhaka, Bangladesh. Home Internet, Corporate Internet, Gaming &
                Streaming Internet is the most popular package of this ISP.
                Super speed, highly secured, easily scalable, priority fast
                support makes people champ. Already over 5000 active users are
                enjoying buffer-less internet galaxy.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="hover:text-white transition-colors">
                  <FaFacebookF className="text-primaryColor text-lg hover:text-white transition-colors" />
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
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
                    <span className="hover:text-primaryColor transition-colors">
                      09638233233
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaEnvelope className="text-primaryColor mt-1 mr-2 flex-shrink-0" />
                    <Link
                      href="mailto:support@asiannetworkbd.net"
                      className="hover:text-primaryColor transition-colors"
                    >
                      support@asiannetworkbd.net
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primaryColor mt-1 mr-2 flex-shrink-0" />
                    <span className="hover:text-primaryColor transition-colors">
                      08, Eidgha Road, Pagar, <br /> Tongi, Gazipur-1710
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
                    href="#"
                    className="hover:opacity-90 transition-opacity"
                  >
                    <Image
                      src="https://asiannetworkbd.net/wp-content/uploads/2024/06/google-play.svg"
                      alt="Google Play"
                      height={150}
                      width={150}
                      className="h-8 sm:h-10 object-contain"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="hover:opacity-90 transition-opacity"
                  >
                    <Image
                      src="https://asiannetworkbd.net/wp-content/uploads/2024/06/app-store.svg"
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
                <p className="mb-1 md:mb-2">
                  © All Rights Reserved – Asian Network
                </p>
                <p>
                  Developed by{" "}
                  <Link
                    href="#"
                    className="text-primaryColor font-medium hover:underline"
                  >
                    Boyshero
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

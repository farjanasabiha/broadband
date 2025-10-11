"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsWhatsapp } from "react-icons/bs";
import {
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Left - Logo & Description */}
          <div className="flex flex-col justify-between col-span-12 lg:col-span-4">
            <div className="lg:pr-8">
              <div className="flex items-center space-x-3 mb-4">
                <div>
                  <h1 className="text-primaryColor font-bold text-lg sm:text-xl leading-tight">
                    {t("footer_company_name")}
                  </h1>
                  <p className="text-xs sm:text-sm italic text-white">
                    {t("footer_tagline")}
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-[15px] text-[#b2b2b2] leading-relaxed mb-4">
                {t("footer_description")}
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://www.facebook.com/syncitbd"
                  className="hover:text-white transition-colors"
                >
                  <FaFacebookF className="text-primaryColor text-lg hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.youtube.com/@syncitbd"
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
                  {t("footer_company_title")}
                </h2>
                <ul className="text-sm text-[#b2b2b2] space-y-1 sm:space-y-2">
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_blog")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_faq")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_privacy_policy")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-and-conditions"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_terms_conditions")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_career")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                  {t("footer_services_title")}
                </h2>
                <ul className="text-sm text-[#b2b2b2] space-y-1 sm:space-y-2">
                  <li>
                    <Link
                      href="/packages"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_packages")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/coverage"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_coverage")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/offers"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_offers")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_support")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Address */}
              <div>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                  {t("footer_address_title")}
                </h2>
                <ul className="text-sm text-[#b2b2b2] space-y-2">
                  <li className="flex items-start">
                    <FaPhoneAlt className="text-primaryColor mt-1 mr-2 flex-shrink-0" />
                    <Link
                      href="tel:01965300500"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_phone")}
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <FaEnvelope className="text-primaryColor mt-1 mr-2 flex-shrink-0" />
                    <Link
                      href="mailto:support@syncit.com.bd"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_email")}
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <BsWhatsapp className="text-primaryColor mt-1 mr-2 flex-shrink-0" />
                    <Link
                      href="https://wa.me/8801978169689"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primaryColor transition-colors"
                    >
                      {t("footer_whatsapp")}
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primaryColor mt-1 mr-2 flex-shrink-0" />
                    <span className="hover:text-primaryColor transition-colors">
                      {t("footer_location")}
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
                  {t("footer_app_smooth")}
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">
                  {t("footer_app_download")}
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
                      alt="App Store"
                      height={150}
                      width={150}
                      className="h-8 sm:h-10 object-contain"
                    />
                  </Link>
                </div>
              </div>

              {/* Right - Copyright */}
              <div className="flex flex-col md:items-end text-xs sm:text-sm text-gray-400 text-center md:text-right mt-4 md:mt-0">
                <p className="mb-1 md:mb-2">{t("footer_rights")}</p>
                <p>
                  {t("footer_developed_by")}
                  <Link
                    href="#"
                    className="text-primaryColor font-medium hover:underline"
                  >
                    {t("footer_team")}
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

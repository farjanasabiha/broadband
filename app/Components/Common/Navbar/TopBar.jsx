"use client";

import React, { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18n from "@/app/lib/i18n";

const TopBar = () => {
  const { t } = useTranslation("common");
  const [language, setLanguage] = useState("en"); // default English

  // Sync language state with i18next on external changes (e.g. page refresh)
  useEffect(() => {
    const handleLanguageChanged = (lng) => setLanguage(lng);
    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div className="bg-primaryColor text-black text-sm py-2 px-4 mb-0">
      <div className="container max-w-6xl mx-auto flex justify-end md:justify-between items-center">
        {/* Left Side */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-6">
            {/* Phone */}
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-lg" />
              <span className="font-semibold">{t("topbar_phone")}</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-1">
              <MdEmail className="text-lg" />
              <span className="font-semibold">{t("topbar_email")}</span>
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center bg-black text-primaryColor px-3 py-1 rounded cursor-pointer"
          >
            <Image
              src={language === "en" ? "/en.png" : "/bn.png"}
              alt="Flag"
              width={20}
              height={20}
              className="mr-2"
            />
            {language === "en"
              ? t("topbar_language_en")
              : t("topbar_language_bn")}
            <svg
              className="ml-2 w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 7l3-3 3 3H7z" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-black rounded-box w-36 text-white"
          >
            <li>
              <button
                className="flex items-center gap-2 hover:text-primaryColor"
                onClick={() => handleLanguageChange("en")}
              >
                <Image src="/en.png" alt="English" width={20} height={20} />
                {t("topbar_language_en")}
              </button>
            </li>
            <li>
              <button
                className="flex items-center gap-2 hover:text-primaryColor"
                onClick={() => handleLanguageChange("bn")}
              >
                <Image src="/bn.png" alt="Bangla" width={20} height={20} />
                {t("topbar_language_bn")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

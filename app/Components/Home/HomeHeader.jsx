"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const HomeHeader = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container mx-auto px-5 lg:pb-10 2xl:pb-0">
      <div className="text-center space-y-5 lg:space-y-10 pt-10 md:pt-14 lg:pt-20">
        <h1 className="font-medium text-4xl lg:w-5xl mx-auto md:text-5xl lg:text-[80px] text-white leading-16 lg:leading-24">
          {t("home_header_title")}
        </h1>
        <p className="text-lg font-normal lg:w-4xl mx-auto text-[#b2b5af]">
          {t("home_header_subtitle")}
        </p>
        <div className="text-center mx-auto">
          <button>
            <Link
              className="flex items-center justify-between gap-2 py-3 px-8 rounded-3xl font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
              target="_blank"
              href="/new-connection"
            >
              <span>{t("home_header_button")}</span>
              <FaArrowRightLong />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;

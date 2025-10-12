"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const CommonHeader = ({ translationKey }) => {
  const { t } = useTranslation("common");

  return (
    <div className="container max-w-6xl mx-auto px-5 text-center space-y-3 md:space-y-5 py-5 md:py-10">
      <h4 className="text-[18px]">{t(`${translationKey}.title`)}</h4>
      <h1 className="text-3xl pt-4 md:text-[35px] lg:text-[40px] 2xl:text-[70px] font-semibold bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
        {t(`${translationKey}.header`)}
      </h1>
      <p className="text-[#b2b5af] text-[18px] w-full lg:w-3xl mx-auto text-center">
        {t(`${translationKey}.desc`)}
      </p>
    </div>
  );
};

export default CommonHeader;

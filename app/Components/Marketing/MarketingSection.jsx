"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const MarketingSection = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container max-w-6xl mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div>
          <Image 
            src="/marketing.webp" 
            alt="Social Media Marketing Strategy" 
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center h-full text-left">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
              {t("socialMediaMarketing.title")}
            </h2>
            <p className="text-[18px] mt-5">
              {t("socialMediaMarketing.subtitle")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MarketingSection;
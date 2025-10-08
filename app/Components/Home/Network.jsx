"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const Network = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container max-w-6xl mx-auto px-5">
      <h1 className="text-[40px] font-semibold text-center bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent pb-8">
        {t("network_title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-between">
        <div className="space-y-10">
          <h1 className="text-[30px] bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent font-normal">
            {t("network_subtitle")}
          </h1>

          <p className="text-[18px] font-normal text-[#b2b5af] whitespace-pre-line">
            {t("network_description")}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/Asian-Network-Internet-Services.svg"
            height={300}
            width={300}
            quality={100}
            unoptimized
            alt="Network"
          />
        </div>
      </div>
    </div>
  );
};

export default Network;

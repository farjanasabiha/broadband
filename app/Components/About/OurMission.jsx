"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const OurMission = ({ titleKey, descKey, img }) => {
  const { t } = useTranslation("common");

  return (
    <div className="container max-w-6xl mx-auto px-5 my-20">
      <h2 className="text-4xl font-semibold mb-6">{t(titleKey)}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4">
        <p className="py-4 md:py-0 text-[18px] text-[#b2b5af]">{t(descKey)}</p>
        {img && (
          <Image
            src={img}
            alt={t(titleKey)}
            width={600}
            height={500}
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default OurMission;

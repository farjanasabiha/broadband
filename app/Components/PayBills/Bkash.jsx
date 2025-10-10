"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const Bkash = () => {
  const { t } = useTranslation("common");

  const steps = [
    {
      id: 1,
      img: "/বিকাশ-১-qv3utumfrt32zvba3rnmueu2uiw1x7uah8apqvo38w.webp",
    },
    {
      id: 2,
      img: "/Bkash-find-internet-bill-for-website-1-1024x1024.webp",
    },
    {
      id: 3,
      img: "/বিকাশ-২-qv3uvb9eej35216tkeeqq1jw43olw9n9cgtwmdi1kg.webp",
    },
    {
      id: 4,
      img: "/বিকাশ-৩-qv3uxwbf74mizffnh0mt2w2ix8xy2awop9ez4ro2gg.webp",
    },
    {
      id: 5,
      img: "/বিকাশ-২-qv3uvb9eej35216tkeeqq1jw43olw9n9cgtwmdi1kg.webp",
    },
  ];

  return (
    <div className="space-y-24">
      <div>
        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {steps.slice(0, 4).map((step) => (
            <div
              key={step.id}
              className="flex items-center justify-center flex-col space-y-5"
            >
              <h2 className="text-2xl font-semibold text-primaryColor">
                {t("bkash_step")} {step.id}
              </h2>
              <Image
                src={step.img}
                height={600}
                width={500}
                alt={`bkash step ${step.id}`}
                className="rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Step 5 (separate row) */}
        <div className="grid grid-cols-1 mt-10">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor mb-5">
              {t("bkash_step")} 5
            </h2>
            <Image
              src={steps[4].img}
              height={600}
              width={500}
              alt="bkash step 5"
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bkash;

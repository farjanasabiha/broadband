"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const Nagad = () => {
  const { t } = useTranslation("common");

  const steps = [
    {
      id: 1,
      img: "/নগদ-১-qv3ugtkz1h902g8l6mwss772f93w8948cqrf9szjhs.webp",
    },
    {
      id: 2,
      img: "/নগদ-২-qv3ulnh45tv1qb7zz82s3hbcbjass9akong91ztpio.webp",
    },
    {
      id: 3,
      img: "/নগদ-৩-qv3umxj7gpm3j7d3i9zhznoxfezs9fdf6zf1kjxf1s.webp",
    },
    {
      id: 4,
      img: "/নগদ-৪-qv3uo10ffr452trr3r1twdqadll78pq5cetfq6avsg.webp",
    },
    {
      id: 5,
      img: "/নগদ-৫-qv3up5fhlmngy251jqisdlj3x61zfp6ltyvbd2mycw.webp",
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
                {t("nagad_step")} {step.id}
              </h2>
              <Image
                src={step.img}
                height={600}
                width={500}
                alt={`nagad step ${step.id}`}
                className="rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Step 5 (separate) */}
        <div className="grid grid-cols-1 mt-10">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor mb-5">
              {t("nagad_step")} 5
            </h2>
            <Image
              src={steps[4].img}
              height={600}
              width={500}
              alt="nagad step 5"
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nagad;

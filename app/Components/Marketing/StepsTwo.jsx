"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const StepsTwo = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container max-w-4xl mx-auto px-5">
      <div>
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            {t("socialMediaMarketing.step2.title")}
          </h2>
          <p className="text-[18px] mt-5">
            {t("socialMediaMarketing.step2.description")}
          </p>
          <p className="text-[18px] mt-5">
            {t("socialMediaMarketing.step2.subtitle")}
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-4xl font-medium">{t("socialMediaMarketing.step2.personasTitle")}</h2>
          <p className="text-[18px] mt-5">
            {t("socialMediaMarketing.step2.personasDesc1")}
          </p>
          <p className="text-[18px] mt-5">
            {t("socialMediaMarketing.step2.personasDesc2")}
          </p>
          <p className="text-[18px] mt-5">
            {t("socialMediaMarketing.step2.personasDesc3")}
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-4xl font-medium">{t("socialMediaMarketing.step2.dataTitle")}</h2>
          <p className="mt-5">
            {t("socialMediaMarketing.step2.dataDesc1")}
          </p>
          <p className="mt-5">
            {t("socialMediaMarketing.step2.dataDesc2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsTwo;

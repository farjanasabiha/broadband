"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Steps = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container max-w-4xl mx-auto px-5" id="steps">
      <div>
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            {t("socialMediaMarketing.step1.title")}
          </h2>
          <p className="text-[18px] mt-5">
            {t("socialMediaMarketing.step1.description")}
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">{t("socialMediaMarketing.step1.smartGoalsTitle")}</h2>
          <p className="text-[18px] mt-5">
            {t("socialMediaMarketing.step1.smartGoalsDesc")}
          </p>
          <ul className="list-disc p-5 text-[18px] space-y-4">
            <li>{t("socialMediaMarketing.step1.specific")}</li>
            <li>{t("socialMediaMarketing.step1.measurable")}</li>
            <li>{t("socialMediaMarketing.step1.attainable")}</li>
            <li>{t("socialMediaMarketing.step1.relevant")}</li>
            <li>{t("socialMediaMarketing.step1.timeBound")}</li>
          </ul>
          <p className="text-[18px]">
            {t("socialMediaMarketing.step1.smartGoalsExample")}
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">{t("socialMediaMarketing.step1.trackMetricsTitle")}</h2>
          <p className="mt-5">
            {t("socialMediaMarketing.step1.trackMetricsDesc")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;

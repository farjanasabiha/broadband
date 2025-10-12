"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="container max-w-6xl mx-auto px-5 space-y-16">
      {/* Section 1 */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white pb-5">
          {t("privacy.title1")}
        </h3>
        <p className="text-lg font-normal text-[#b2b5af]">
          {t("privacy.desc1")}
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white pb-5">
          {t("privacy.title2")}
        </h3>
        <p className="text-lg font-normal text-[#b2b5af]">
          {t("privacy.desc2")}
        </p>
      </div>

      {/* Section 3 */}
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          {t("privacy.title3")}
        </h3>
        <p className="text-lg font-normal text-[#b2b5af]">
          {t("privacy.desc3")}
        </p>

        {/* Subsection: Browsing */}
        <div>
          <h4 className="text-xl font-bold text-[#b2b5af] pb-2">
            {t("privacy.browsingTitle")}
          </h4>
          <p className="text-lg font-normal text-[#b2b5af]">
            {t("privacy.browsingDesc")}
          </p>
        </div>

        {/* Subsection: Cookies */}
        <div>
          <h4 className="text-xl font-bold text-[#b2b5af] pb-2">
            {t("privacy.cookiesTitle")}
          </h4>
          <p className="text-lg font-normal text-[#b2b5af]">
            {t("privacy.cookiesDesc")}
          </p>
        </div>

        {/* Subsection: Email */}
        <div>
          <h4 className="text-xl font-bold text-[#b2b5af] pb-2">
            {t("privacy.emailTitle")}
          </h4>
          <p className="text-lg font-normal text-[#b2b5af]">
            {t("privacy.emailDesc")}
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white pb-5">
          {t("privacy.title4")}
        </h3>
        <p className="text-lg font-normal text-[#b2b5af] pb-3">
          {t("privacy.desc4a")}
        </p>
        <p className="text-lg font-normal text-[#b2b5af]">
          {t("privacy.desc4b")}
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white pb-5">
          {t("privacy.title5")}
        </h3>
        <p className="text-lg font-normal text-[#b2b5af] pb-3">
          {t("privacy.desc5a")}
        </p>
        <p className="text-lg font-normal text-[#b2b5af] pb-6">
          {t("privacy.desc5b")}
        </p>
        <p className="text-lg font-normal text-[#b2b5af]">
          {t("privacy.desc5c")}
        </p>
      </div>
    </div>
  );
};

export default Privacy;

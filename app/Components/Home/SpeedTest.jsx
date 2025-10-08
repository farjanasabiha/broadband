"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const SpeedTest = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container max-w-6xl mx-auto px-5">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-medium text-left leading-snug mb-12">
        {t("speed_test_title")}
      </h2>

      <div style={{ minHeight: "360px" }}>
        <div
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "50%",
            position: "relative",
          }}
        >
          <iframe
            src="https://www.metercustom.net/plugin/"
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              minHeight: "360px",
              overflow: "hidden",
            }}
            title="Meter.net Speed Test"
            allowFullScreen
          />
        </div>
      </div>

      <div className="text-center pt-6">
        <p className="text-[18px] mb-5">{t("speed_test_description")}</p>
        <p className="text-[26px] mb-5">{t("speed_test_cta")}</p>

        <button>
          <Link
            className="flex items-center justify-between gap-2 py-3 px-8 rounded-3xl font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
            target="_blank"
            href="/new-connection"
          >
            <span>{t("speed_test_button")}</span>
            <FaArrowRightLong />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SpeedTest;

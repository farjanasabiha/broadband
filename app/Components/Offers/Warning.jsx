"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Warning = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container max-w-6xl mx-auto px-5">
      <div className="grid grid-cols-12 gap-5 card card-side bg-base-100 shadow-sm">
        <div className="col-span-12 md:col-span-3">
          <figure className="h-full w-full md:h-[170px] hidden md:w-[200px] bg-[#fecf00] px-5">
            <img
              className="h-full w-[200px]"
              src="/UniqueSizzlingFinwhale-max-1mb.gif"
              alt="Offer Warning"
            />
          </figure>
        </div>
        <div className="col-span-12 md:col-span-9 card-body">
          <h2 className="card-title mb-4">{t("warning.text1")}</h2>
          <h2 className="card-title">{t("warning.text2")}</h2>
          <h2 className="card-title">
            {t("warning.text3")}{" "}
            <Link href="mailto:support@syncit.com.bd">
              support@syncit.com.bd
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Warning;
"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const BankBills = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1 className="text-3xl text-center mx-auto mb-5">
        {t("bankBills.title")}
      </h1>

      {/* bank methods */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:px-10 gap-10">
        {/* UCB Bank */}
        <div className="text-[#b2b5af] text-lg mt-4 bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-5 md:py-20 md:px-28 w-full">
          <div className="mb-6">
            <h2 className="font-semibold">{t("bankBills.ucb.name")}</h2>
            <p>{t("bankBills.ucb.desc")}</p>
          </div>
          <div>
            <p>{t("bankBills.ucb.accountName")}</p>
            <p>{t("bankBills.ucb.accountNo")}</p>
            <p>{t("bankBills.ucb.routingNo")}</p>
            <p>{t("bankBills.ucb.branch")}</p>
          </div>
        </div>

        {/* BRAC Bank */}
        <div className="text-[#b2b5af] text-lg mt-4 bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-5 md:py-20 md:px-28 w-full">
          <div className="mb-6">
            <h2 className="font-semibold">{t("bankBills.brac.name")}</h2>
            <p>{t("bankBills.brac.desc")}</p>
          </div>
          <div>
            <p>{t("bankBills.brac.accountName")}</p>
            <p>{t("bankBills.brac.accountNo")}</p>
            <p>{t("bankBills.brac.routingNo")}</p>
            <p>{t("bankBills.brac.branch")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankBills;

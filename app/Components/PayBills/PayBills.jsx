"use client";
import React, { useState } from "react";
import Bkash from "./Bkash";
import Nagad from "./Nagad";
import Rocket from "./Rocket";
import BankBills from "./BankBills";
import QrCode from "./QrCode";
import { useTranslation } from "react-i18next";

const PayBills = () => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("Bkash");

  // All Bill Components
  const AllBills = {
    Bkash: <Bkash />,
    Nagad: <Nagad />,
    Rocket: <Rocket />,
    BankTransfer: <BankBills />,
    QrCode: <QrCode />,
  };

  // Tabs with translated labels
  const tabs = [
    { label: t("paybill_bkash"), value: "Bkash" },
    { label: t("paybill_nagad"), value: "Nagad" },
    { label: t("paybill_rocket"), value: "Rocket" },
    { label: t("paybill_banktransfer"), value: "BankTransfer" },
    { label: t("paybill_qrcode"), value: "QrCode" },
  ];

  return (
    <div>
      <div className="bg-black container max-w-6xl mx-auto px-5 pt-10 pb-10 rounded-lg">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="lg:flex space-x-4 space-y-4 lg:space-y-0 lg:space-x-2 backdrop-blur-sm rounded-full p-2">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-10 py-3 w-full md:w-auto text-lg cursor-pointer font-medium rounded-full transition-all duration-300 ${
                  activeTab === tab.value
                    ? "bg-gradient-to-b from-[#ff0033] to-[#bd556a63] text-white shadow-lg border border-black"
                    : "text-gray-400 hover:text-white border border-gray-100/40 hover:bg-gray-700/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bill Component */}
        <div>{AllBills[activeTab]}</div>
      </div>
    </div>
  );
};

export default PayBills;

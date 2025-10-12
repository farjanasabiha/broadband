"use client";

import React, { useState } from "react";
import HomeInternet from "./HomeInternet";
import SMEInternet from "./SMEInternet";
import { useTranslation } from "react-i18next";
import CorporateInternet from "./CorporateInternet";

const AllPackages = () => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("HomeInternet");

  const InternetDeals = {
    HomeInternet: <HomeInternet />,
    Corporate: <CorporateInternet />,
    SME: <SMEInternet />,
  };

  const tabs = [
    { label: t("all_packages_tab_home"), value: "HomeInternet" },
    { label: t("all_packages_tab_corporate"), value: "Corporate" },
    { label: t("all_packages_tab_sme"), value: "SME" },
  ];

  return (
    <div className="bg-black container max-w-6xl mx-auto px-5 pt-10">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-4">
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

      {/* Internet Grid */}
      <div>{InternetDeals[activeTab]}</div>
    </div>
  );
};

export default AllPackages;
"use client";

import React, { useState } from "react";
import HomeInternet from "./HomeInternet";
import CorporateInternet from "./CorporateInternet";
import SMEInternet from "./SMEInternet";

const AllPackages = () => {
  const [activeTab, setActiveTab] = useState("HomeInternet");

  const InternetDeals = {
    HomeInternet: <HomeInternet />,
    Corporate: <CorporateInternet />,
    SME: <SMEInternet />,
  };

  const tabs = [
    { label: "Home Internet", value: "HomeInternet" },
    { label: "Corporate", value: "Corporate" },
    { label: "SME", value: "SME" },
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

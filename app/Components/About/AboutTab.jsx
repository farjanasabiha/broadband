"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const AboutTab = () => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("IIG/Upstreme");

  const clientLogos = {
    "IIG/Upstreme": [
      { id: 1, logo: "/summitLogo.png", type: "corporate" },
      { id: 2, logo: "/BTCLLogo.png", type: "government" },
    ],
    Peering: [
      { id: 1, logo: "/GoogleLogo.png", type: "corporate" },
      { id: 2, logo: "/facebookLogo.jpg", type: "corporate" },
      { id: 3, logo: "/akmaiLogo.png", type: "corporate" },
      { id: 4, logo: "/cloudflareLogo.jpeg", type: "corporate" },
      { id: 5, logo: "/awsLogo.jpg", type: "corporate" },
    ],
    Techonology: [
      { id: 1, logo: "/ciscoLogo.png", type: "corporate" },
      { id: 2, logo: "/juniperLogo.png", type: "corporate" },
    ],
    NTTN: [
      { id: 1, logo: "/summitLogo.png", type: "corporate" },
      { id: 2, logo: "/fiber@homeLogo.png", type: "corporate" },
      { id: 3, logo: "/bahonLogo.png", type: "corporate" },
    ],
  };

  const tabs = [
    { label: t("aboutTab.iig", { defaultValue: "IIG/Upstreme" }), value: "IIG/Upstreme" },
    { label: t("aboutTab.peering", { defaultValue: "Peering" }), value: "Peering" },
    { label: t("aboutTab.tech", { defaultValue: "Techonology" }), value: "Techonology" },
    { label: t("aboutTab.nttn", { defaultValue: "NTTN" }), value: "NTTN" },
  ];

  return (
    <div className="bg-black container max-w-6xl mx-auto px-5">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl leading-snug font-medium mb-6">
            {t("aboutTab.title1", { defaultValue: "Partner Behind" })}
            <br />
            <span className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
              {t("aboutTab.title2", { defaultValue: "Our Success" })}
            </span>
          </h1>
          <p className="text-[#b2b5af] w-full lg:w-2/4 text-sm lg:text-lg mb-2 leading-relaxed">
            {t("aboutTab.desc1", {
              defaultValue:
                "We work with Tier-1 upstreams, IX peering and leading technology providers to deliver BDIX-powered, fiber-fast internet across Sylhet",
            })}
          </p>
          <p className="text-[#b2b5af] w-full lg:w-2/4 text-sm lg:text-lg mb-4 leading-relaxed">
            {t("aboutTab.desc2", {
              defaultValue:
                "Our network combines international upstreams, local IX peering (BDIX), and carrier-grade NTTN/backbone with IPv6, CDN and enterprise hardware to keep Sylhet customers online, fast and secure.",
            })}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
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

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {clientLogos[activeTab].map((client) => (
            <div key={client.id} className="group cursor-pointer">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
                <Image
                  src={client.logo}
                  alt={`Client ${client.id}`}
                  height={200}
                  width={200}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTab;

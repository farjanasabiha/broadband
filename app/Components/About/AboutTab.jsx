"use client";
import React, { useState } from "react";
import Image from "next/image";

const AboutTab = () => {
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

  return (
    <div className="bg-black container max-w-6xl mx-auto px-5">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl leading-snug font-medium mb-6">
            Partner Behind
            <br />
            <span className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
              Our Success
            </span>
          </h1>
          <p className="text-[#b2b5af] w-full lg:w-2/4 text-sm lg:text-lg mb-2 leading-relaxed">
            We work with Tier-1 upstreams, IX peering and leading technology
            providers to deliver BDIX-powered, fiber-fast internet across Sylhet
          </p>
          <p className="text-[#b2b5af] w-full lg:w-2/4 text-sm lg:text-lg mb-4 leading-relaxed">
            Our network combines international upstreams, local IX peering
            (BDIX), and carrier-grade NTTN/backbone with IPv6, CDN and
            enterprise hardware to keep Sylhet customers online, fast and
            secure.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="lg:flex space-x-4 space-y-4 lg:space-y-0 lg:space-x-2 backdrop-blur-sm rounded-full p-2">
            <button
              onClick={() => setActiveTab("IIG/Upstreme")}
              className={`px-10 py-3  w-full md:w-auto text-lg cursor-pointer font-medium rounded-full  transition-all duration-300 ${
                activeTab === "IIG/Upstreme"
                  ? "bg-gradient-to-b from-[#ff0033] to-[#bd556a63] text-white shadow-lg border border-black"
                  : "text-gray-400 hover:text-white border border-gray-100/40 hover:bg-gray-700/50"
              }`}
            >
              IIG/Upstreme
            </button>
            <button
              onClick={() => setActiveTab("Peering")}
              className={`px-10 py-3  w-full md:w-auto text-lg cursor-pointer font-medium rounded-full  transition-all duration-300 ${
                activeTab === "Peering"
                  ? "bg-gradient-to-b from-[#ff0033] to-[#bd556a63] text-white shadow-lg border border-black"
                  : "text-gray-400 hover:text-white border border-gray-100/40 hover:bg-gray-700/50"
              }`}
            >
              Peering
            </button>
            <button
              onClick={() => setActiveTab("Techonology")}
              className={`px-10 py-3  w-full md:w-auto text-lg cursor-pointer font-medium rounded-full  transition-all duration-300 ${
                activeTab === "Techonology"
                  ? "bg-gradient-to-b from-[#ff0033] to-[#bd556a63] text-white shadow-lg border border-black"
                  : "text-gray-400 hover:text-white border border-gray-100/40 hover:bg-gray-700/50"
              }`}
            >
              Techonology
            </button>
            <button
              onClick={() => setActiveTab("NTTN")}
              className={`px-10 py-3  w-full md:w-auto text-lg cursor-pointer font-medium rounded-full  transition-all duration-300 ${
                activeTab === "NTTN"
                  ? "bg-gradient-to-b from-[#ff0033] to-[#bd556a63] text-white shadow-lg border border-black"
                  : "text-gray-400 hover:text-white border border-gray-100/40 hover:bg-gray-700/50"
              }`}
            >
              NTTN
            </button>
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

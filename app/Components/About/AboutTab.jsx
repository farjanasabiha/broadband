'use client'
import React, { useState } from "react";
import Image from "next/image";

const AboutTab = () => {
  const [activeTab, setActiveTab] = useState("IIG/Upstreme");

  const clientLogos = {
    'IIG/Upstreme': [
      { id: 1, logo: "/unnamed-1.webp", type: "government" },
      { id: 2, logo: "/unnamed-1.webp", type: "corporate" },
      { id: 3, logo: "/unnamed-1.webp", type: "corporate" },
      { id: 4, logo: "/unnamed-1.webp", type: "corporate" },
    ],
    'Peering': [
      { id: 1, logo: "/unnamed-1.webp", type: "corporate" },
      { id: 2, logo: "/unnamed-1.webp", type: "corporate" },
    ],
    'Techonology': [
      { id: 1, logo: "/unnamed-1.webp", type: "corporate" },
    ],
    'NTTN': [
            { id: 1, logo: "/unnamed-1.webp", type: "government" },
    ]
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
          <p className="text-[#b2b5af] w-full lg:w-2/4 text-sm lg:text-lg mb-8 leading-relaxed">
            Through our partners’ best in technology, we solve your unique, global business needs whether you’re a small to medium or enterprise business.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-4">
          <div className="flex space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
            <button
              onClick={() => setActiveTab("IIG/Upstreme")}
              className={`px-7 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === "IIG/Upstreme"
                  ? "bg-gradient-to-b from-[#ff0033] to-[#bd556a63] text-white shadow-lg border border-black"
                  : "text-gray-400 hover:text-white border border-gray-100/40 hover:bg-gray-700/50"
              }`}
            >
              IIG/Upstreme
            </button>
            <button
              onClick={() => setActiveTab("Peering")}
              className={`px-7 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === "Peering"
                  ? "bg-gradient-to-b from-[#ff0033] to-[#bd556a63] text-white shadow-lg border border-black"
                  : "text-gray-400 hover:text-white border border-gray-100/40 hover:bg-gray-700/50"
              }`}
            >
              Peering
            </button>
                        <button
              onClick={() => setActiveTab("Techonology")}
              className={`px-7 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === "Techonology"
                  ? "bg-gradient-to-b from-[#ff0033] to-[#bd556a63] text-white shadow-lg border border-black"
                  : "text-gray-400 hover:text-white border border-gray-100/40 hover:bg-gray-700/50"
              }`}
            >
              Techonology
            </button>
                                    <button
              onClick={() => setActiveTab("NTTN")}
              className={`px-7 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === "NTTN"
                  ? "bg-gradient-to-b from-[#ff0033] to-[#bd556a63] text-white shadow-lg border border-black"
                  : "text-gray-400 hover:text-white border border-gray-100/40 hover:bg-gray-700/50"
              }`}
            >NTTN
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

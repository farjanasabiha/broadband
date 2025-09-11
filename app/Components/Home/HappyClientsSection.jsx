import React, { useState } from "react";
import Image from "next/image";

const HappyClientsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const clientLogos = {
    all: [
      { id: 1, logo: "/unnamed-1.webp", type: "government" },
      { id: 2, logo: "/unnamed-1.webp", type: "corporate" },
      { id: 3, logo: "/unnamed-1.webp", type: "corporate" },
      { id: 4, logo: "/unnamed-1.webp", type: "corporate" },
    ],
    corporate: [
      { id: 2, logo: "/unnamed-1.webp", type: "corporate" },
      { id: 3, logo: "/unnamed-1.webp", type: "corporate" },
      { id: 4, logo: "/unnamed-1.webp", type: "corporate" },
    ],
  };

  return (
    <div className="bg-black container max-w-6xl mx-auto px-5">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl leading-snug font-medium mb-6">
            Some of our
            <br />
            <span className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
              Happy Clients
            </span>
          </h1>
          <p className="text-[#b2b5af] w-full lg:w-2/4 text-sm lg:text-lg mb-8 leading-relaxed">
            Trusted by 3000+ Users & Leading Businesses in Sylhet.
            <br /> <br />
            From thousands of families to leading businesses in Sylhet, SyncIT
            is trusted by 3000+ happy clients. Here are some of our valued
            clients and corporate partners.
            <br /> <br />
            Corporate Tab Subtext For our corporate clients, we provide
            dedicated fiber, low-latency connections, and 24/7 business support.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-4">
          <div className="lg:flex space-x-4 space-y-4 lg:space-y-0 lg:space-x-2 backdrop-blur-sm rounded-full p-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-10 py-3  w-full md:w-auto text-lg cursor-pointer font-medium rounded-full  transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-gradient-to-b from-[#ff0033] to-[#bd556a63] text-white shadow-lg border border-black"
                  : "text-gray-400 hover:text-white border border-gray-100/40 hover:bg-gray-700/50"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("corporate")}
              className={`px-7 py-2 rounded-full font-medium text-lg cursor-pointer transition-all duration-300 ${
                activeTab === "corporate"
                  ? "bg-gradient-to-b from-[#ff0033] to-[#bd556a63] text-white shadow-lg border border-black"
                  : "text-gray-400 hover:text-white border border-gray-100/40 hover:bg-gray-700/50"
              }`}
            >
              Corporate
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

export default HappyClientsSection;

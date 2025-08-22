"use client";
import React, { useState } from "react";

const SpeedTab = () => {
  const [activeTab, setActiveTab] = useState("OoklaSpeedTest");

  const YoutubeVideo = {
    OoklaSpeedTest: [
      {
        id: 1,
        url: "https://www.youtube.com/embed/Ij5dXvNQgh4",
        type: "OoklaSpeedTest",
      },
    ],
    FastSpeedTest: [
      {
        id: 2,
        url: "https://www.youtube.com/embed/CYF_lcgLGvk",
        type: "FastSpeedTest",
      },
    ],
    SpeedtestTest: [
      {
        id: 3,
        url: "https://www.youtube.com/embed/032SPjv6isg",
        type: "SpeedtestTest",
      },
    ],
    SpeedTestSingapore: [
      {
        id: 4,
        url: "https://www.youtube.com/embed/SU_4plvb378",
        type: "SpeedTestSingapore",
      },
    ],
  };

  const tabs = [
    { label: "Ookla Speed Test", value: "OoklaSpeedTest" },
    { label: "Fast Speed Test", value: "FastSpeedTest" },
    { label: "Speedtest Test", value: "SpeedtestTest" },
    { label: "Speed Test Singapore", value: "SpeedTestSingapore" },
  ];

  return (
    <div className="bg-black container max-w-6xl mx-auto px-5 pt-10">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-4">
          <div className="lg:flex space-x-4 space-y-4 lg:space-y-0 lg:space-x-2 backdrop-blur-sm rounded-full p-2">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-10 py-3  w-full md:w-auto text-lg cursor-pointer font-medium rounded-full  transition-all duration-300 ${
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 max-w-2xl mx-auto">
          {YoutubeVideo[activeTab]?.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="rounded-2xl p-6 ">
                <div className="w-full h-full aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    key={activeTab}
                    className="w-full h-full"
                    src={video.url}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeedTab;

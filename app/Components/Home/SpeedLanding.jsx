"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Shield,
  Zap,
  Headphones,
  Gamepad2,
  Globe,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const SpeedLanding = () => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("buffer-less");

  const tabContent = {
    "buffer-less": {
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      videoId: "dQw4w9WgXcQ",
      key: "tab_bufferless",
    },
    gaming: {
      icon: <Gamepad2 className="w-5 h-5 text-green-400" />,
      videoId: "jNQXAC9IVRw",
      key: "tab_gaming",
    },
    security: {
      icon: <Shield className="w-5 h-5 text-primaryColor" />,
      videoId: "L_jWHffIx5E",
      key: "tab_security",
    },
    scalable: {
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      videoId: "kJQP7kiw5Fk",
      key: "tab_scalable",
    },
    uptime: {
      icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
      videoId: "fJ9rUzIMcZQ",
      key: "tab_uptime",
    },
    support: {
      icon: <Headphones className="w-5 h-5 text-yellow-400" />,
      videoId: "9bZkp7q19f0",
      key: "tab_support",
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="min-h-screen bg-black container max-w-6xl mx-auto px-5 overflow-hidden">
      {/* Header */}
      <div className="text-left">
        <h1 className="text-3xl md:text-4xl leading-snug font-medium mb-6 lg:mb-8">
          {t("speed_header_title")}
        </h1>
        <p className="text-[#b2b5af] w-full lg:w-2/4 text-sm lg:text-lg mb-8 leading-relaxed">
          {t("speed_header_subtitle")}
        </p>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-start mb-10">
        {/* Left - Tabs */}
        <div className="space-y-4">
          {Object.entries(tabContent).map(([key, content]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full lg:w-2/4 flex items-center space-x-3 rounded-full text-sm px-6 py-2 border transition-all duration-300 text-left ${
                activeTab === key
                  ? "bg-gray-700/70 backdrop-blur-sm border-gray-500/70 shadow-lg"
                  : "bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-700/50"
              }`}
            >
              {content.icon}
              <span className="text-gray-200">{t(content.key)}</span>
            </button>
          ))}
        </div>

        {/* Right - Video */}
        <div className="transform hover:scale-105 transition-transform duration-500">
          <div className="w-full h-full aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              key={activeTab}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentContent.videoId}?autoplay=0&controls=1&rel=0&modestbranding=1`}
              title={t(currentContent.key)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        <p className="text-[#b2b5af] leading-relaxed text-base">
          {t("desc_1")}
        </p>
        <p className="text-[#b2b5af] leading-relaxed text-base">
          {t("desc_2")}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-10 lg:pt-20">
        <Stat icon="/team.webp" value="100's" label={t("stat_users")} />
        <Stat icon="/routes.webp" value="5" label={t("stat_locations")} />
        <Stat
          icon="/customer-service.webp"
          value="24/7"
          label={t("stat_support")}
        />
      </div>

      {/* Background Blurs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

// Stat Component
const Stat = ({ icon, value, label }) => (
  <div className="text-center group">
    <div className="flex items-center justify-center mb-5">
      <Image
        src={icon}
        alt={label}
        width={100}
        height={100}
        className="w-8 h-8 lg:w-16 lg:h-16 text-white"
      />
    </div>
    <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
      {value}
    </div>
    <div className="text-gray-400 text-sm lg:text-base">{label}</div>
  </div>
);

export default SpeedLanding;

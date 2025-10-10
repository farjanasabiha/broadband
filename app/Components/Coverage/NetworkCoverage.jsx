"use client";

import React from "react";
import CountUp from "react-countup";
import { FiBox } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { SiHubspot } from "react-icons/si";
import { TbMapPinDown } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const NetworkCoverage = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container max-w-6xl mx-auto px-5">
      <h1 className="text-3xl md:text-4xl leading-snug font-medium mb-6 text-center bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
        {t("network_coverage_title")}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto">
        {/* Google Map */}
        <div className="w-full h-[500px] lg:h-full">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1zkz5CREGywlw-kfm6xih3zR0PLYmHWEr&ehbc=2E312F"
            className="border-none w-full h-full rounded-lg"
            loading="lazy"
            allowFullScreen
            aria-label="Network coverage map"
          />
        </div>

        {/* Stats Section */}
        <div className="lg:space-y-26">
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-20 md:space-y-14 lg:gap-10">
            {/* POP UP */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-start">
              <FiBox className="text-6xl text-primaryColor" />
              <div>
                <CountUp
                  end={30}
                  suffix="+"
                  className="text-5xl text-primaryColor"
                />
                <p className="text-[19px] text-[#b2b5af] pt-3">
                  {t("network_pop_up")}
                </p>
              </div>
            </div>

            {/* Total Customer */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-start">
              <IoIosPeople className="text-6xl text-primaryColor" />
              <div>
                <CountUp
                  end={5000}
                  suffix="+"
                  className="text-5xl text-primaryColor"
                />
                <p className="text-[19px] text-[#b2b5af] pt-3">
                  {t("network_total_customer")}
                </p>
              </div>
            </div>

            {/* Regional Hubs */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-start">
              <SiHubspot className="text-6xl text-primaryColor" />
              <div className="text-center md:text-left">
                <CountUp end={5} className="text-5xl text-primaryColor" />
                <p className="text-[19px] text-[#b2b5af] pt-3">
                  {t("network_regional_hubs")}
                </p>
              </div>
            </div>

            {/* Districts */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-start">
              <TbMapPinDown className="text-6xl text-primaryColor" />
              <div className="text-center md:text-left">
                <CountUp end={1} className="text-5xl text-primaryColor" />
                <p className="text-[19px] text-[#b2b5af] pt-3">
                  {t("network_districts")}
                </p>
              </div>
            </div>

            {/* Number of Upazilas */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-start">
              <TbMapPinDown className="text-6xl text-primaryColor" />
              <div className="text-center md:text-left">
                <CountUp end={5} className="text-5xl text-primaryColor" />
                <p className="text-[19px] text-[#b2b5af] pt-3">
                  {t("network_upazilas")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkCoverage;
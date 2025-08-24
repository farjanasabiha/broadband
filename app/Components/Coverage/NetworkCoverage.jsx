"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { FiBox } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { SiHubspot } from "react-icons/si";
import { TbMapPinDown } from "react-icons/tb";

const NetworkCoverage = () => {
  return (
    <div className="container max-w-6xl  mx-auto  px-5">
      <h1 className="text-3xl md:text-4xl leading-snug font-medium mb-6">
        Network Coverage
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <div className="mb-10 lg:mb-0 flex justify-center lg:justify-start">
          <Image
            src="/bangladesh-mapGazipur-01-1.svg"
            width={450}
            height={450}
            alt="map"
          />
        </div>
        <div className="lg:space-y-26">
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-20 md:space-y-14 lg:gap-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-start">
              <FiBox className="text-6xl text-primaryColor" />
              <div className="">
                <CountUp
                  end={30}
                  suffix="+"
                  className="text-5xl text-primaryColor"
                />
                <p className="text-[19px] text-[#b2b5af] pt-3">POP UP</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-start">
              <IoIosPeople className="text-6xl text-primaryColor" />
              <div className="">
                <CountUp
                  end={5000}
                  suffix="+"
                  className="text-5xl text-primaryColor"
                />
                <p className="text-[19px] text-[#b2b5af] pt-3">
                  Total Customer
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-start">
              <SiHubspot className="text-6xl text-primaryColor" />
              <div className="text-center md:text-left">
                <CountUp
                  end={5}
                  className="text-5xl text-center md:text-left text-primaryColor"
                />
                <p className="text-[19px] text-[#b2b5af] pt-3">Regional Hubs</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-start">
              <TbMapPinDown className="text-6xl text-primaryColor" />
              <div className="text-center md:text-left">
                <CountUp end={1} className="text-5xl text-primaryColor" />
                <p className="text-[19px] text-[#b2b5af] pt-3">Districts</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-start">
              <TbMapPinDown className="text-6xl text-primaryColor" />
              <div className="text-center md:text-left">
                <CountUp end={5} className="text-5xl text-primaryColor" />
                <p className="text-[19px] text-[#b2b5af] pt-3">
                  Number of Upazilas
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

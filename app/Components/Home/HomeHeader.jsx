import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const HomeHeader = () => {
  return (
    <div className="container mx-auto px-5  pb-28">
      <div className="text-center space-y-10">
        <h1 className="font-medium text-8xl text-white">
          Upgrade Your <br /> Internet Experience
        </h1>
        <p className="text-lg font-normal text-[#b2b5af]">
          You have never experienced internet speed like this before.
        </p>
        <div className="text-center mx-auto">
          <button className="py-3 px-6 rounded-3xl font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]">
            <div className="flex items-center text-medium justify-between gap-2">
              <span>Check Experience</span> <FaArrowRightLong />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;

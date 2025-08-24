import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsBoxArrowInRight } from "react-icons/bs";
import Link from "next/link";

const CTA = () => {
  return (
    <div>
      <div className="bg-black container max-w-6xl mx-auto px-5 ">
        <div className="pb-16">
          <div className="text-left mb-8">
            <h1 className="text-3xl lg:text-[35px] font-medium leading-relaxed mb-3 text-white">
              To get this
              <br />
              High-Speed Internet
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="flex items-center justify-start gap-5">
              <h3 className="text-[#b2b2b2] text-2xl">
                Select packages as you need
              </h3>
              <FaLongArrowAltRight className="text-2xl" />
            </div>
            <div className="">
              <button>
                <Link
                  href='/packages'
                  className="flex items-center justify-between gap-2 py-4 px-10 rounded-full font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
                >
                  <p className="text-2xl">Choose Package</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="text-left mb-6">
          <h1 className="text-3xl lg:text-[35px] font-medium leading-relaxed mb-3 text-white">
            Best Broadband WIFI
            <br />
            Internet Packages For You
          </h1>
          <div className=" text-primaryColor text-lg font-medium flex items-center justify-start gap-3">
            {" "}
            <BsBoxArrowInRight />
            <p>High Speed Home Internet Package in Gazipur Dhaka Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;

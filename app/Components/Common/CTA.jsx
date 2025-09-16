import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";
import Link from "next/link";

const CTA = () => {
  return (
    <div>
      <div className="bg-black container max-w-6xl mx-auto px-5 pb-16">
        <div className="space-y-10">
          <div className="text-left">
            <h1 className="text-3xl lg:text-[35px] font-medium leading-relaxed mb-3 text-white">
              Choose Your SyncIT High-Speed Fiber Internet Package in Sylhet
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="flex items-center justify-start gap-5">
              <h3 className="text-[#b2b2b2] text-2xl">
                Choose the broadband package that fits your needs
              </h3>
              <FaLongArrowAltRight className="text-2xl" />
            </div>
            <div className="">
              <button>
                <Link
                  href="/packages"
                  className="flex items-center justify-between gap-2 py-4 px-10 rounded-full font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
                >
                  <p className="text-2xl">Get My Package</p>
                </Link>
              </button>
            </div>
          </div>
                  <div className="text-left">
          <h1 className="text-3xl lg:text-[35px] font-medium leading-relaxed mb-3 text-white">
            Best Fiber Broadband Internet Packages in Sylhet – SyncIT
          </h1>
          <div className=" text-primaryColor text-lg font-medium flex items-center justify-start gap-3">
            <BsBoxArrowInRight />
            <p>
              SyncIT High-Speed Fiber Internet Packages in Sylhet – Fast &
              Reliable
            </p>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default CTA;
import Image from "next/image";
import React from "react";

const Network = () => {
  return (
    <div className="container max-w-6xl mx-auto px-5">
      <h1 className="text-[40px] font-semibold text-center  bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent pb-8">
        Asian Networ
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-between">
        <div className="space-y-10">
          <h1 className="text-[30px] bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent font-normal">
            #1 Broadband Internet Provider
          </h1>
          <p className="text-[18px] font-nomral text-[#b2b5af]">
            Asian Network is the best broadband internet service in Gazipur,
            Dhaka. It was established in 2013 to provide affordable internet
            access among mass people. Now It has satisfied 25000+ active users
            and resellers. Today we have Home Internet, Gaming Internet,
            Corporate Internet, and SME Internet services to serve the best
            experience.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/Asian-Network-Internet-Services.svg"
            height={300}
            width={300}
            quality={100}
            unoptimized
            alt="Network"
          />
        </div>
      </div>
    </div>
  );
};

export default Network;

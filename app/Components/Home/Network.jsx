import Image from "next/image";
import React from "react";

const Network = () => {
  return (
    <div className="container max-w-6xl mx-auto px-5">
      <h1 className="text-[40px] font-semibold text-center  bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent pb-8">
        SyncIT 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-between">
        <div className="space-y-10">
          <h1 className="text-[30px] bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent font-normal">
            #1 Broadband Internet Provider
          </h1>
          <p className="text-[18px] font-nomral text-[#b2b5af]">
            SyncIT is Sylhet’s #1 fiber broadband internet provider. Trusted by
            1000’s of users and businesses, we deliver 99.99% uptime, ultra-fast
            BDIX speed (up to 200 Mbps on YouTube & Facebook), and premium 24/7
            support. <br /> <br /> Our services include home internet, gaming
            connections, corporate networks, and SME solutions — built for heavy
            day-to-day use. SyncIT is your smart internet partner for a faster
            Sylhet.”
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

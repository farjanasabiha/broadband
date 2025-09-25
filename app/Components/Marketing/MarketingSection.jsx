import React from "react";

const MarketingSection = () => {
  return (
    <div className="container max-w-6xl mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div>
          <img src="/marketing.webp" alt="" />
        </div>
        <div className="flex justify-center items-center h-full text-center md:text-left">
          <div>
            <h2 className="text-5xl font-bold">
              Social Media Marketing Strategy
            </h2>
            <p className="text-[18px] mt-5">
              Eight easy steps to develop your social media presence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;

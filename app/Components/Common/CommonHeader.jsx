import React from "react";

const CommonHeader = ({ title, header, desc }) => {
  return (
    <div className="container max-w-6xl mx-auto px-5 text-center">
      <h4 className="py-4 text-[18px]">{title}</h4>
      <h1 className=" text-2xl md:text-3xl lg:text-5xl  font-semibold   bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent leading-14">
        {header}
      </h1>
      <p className="py-6 text-[#b2b5af] text-[18px] w-full lg:w-2xl mx-auto text-center">
        {desc}
      </p>
    </div>
  );
};

export default CommonHeader;

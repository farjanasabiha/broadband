import React from "react";
import Image from "next/image";
const OurMission = ({ title, desc, img }) => {
  return (
    <div className="container max-w-6xl mx-auto px-5 my-20">
      <h2 className="text-4xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4">
        <p className="py-4 md:py-0 text-[18px]  text-[#b2b5af]">{desc}</p>
        <Image
          src={img}
          alt=""
          width={600}
          height={500}
          className=" rounded-lg"
        />
      </div>
    </div>
  );
};

export default OurMission;

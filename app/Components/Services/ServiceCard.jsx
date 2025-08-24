import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, icon }) => {
  return (
    <div>
      <div className="text-center py-10 flex gap-6 justify-center items-center flex-col bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-8 w-full">
        <p className="text-[25px] bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
          {title}
        </p>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default ServiceCard;

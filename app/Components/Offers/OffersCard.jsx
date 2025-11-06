import React from "react";
import Image from "next/image";

const OffersCard = ({ img, title, desc }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm  min-h-[350px]">
        <figure className="h-[140px] overflow-hidden">
          <Image
            src={img}
            alt={title}
            width={400}
            height={140}
            className="object-cover object-center w-full h-full"
          />
        </figure>
        <div className="card-body overflow-hidden p-4">
          <h2 className="card-title leading-6 text-lg font-semibold">
            {title}
          </h2>
          <p className="text-sm line-clamp-3">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default OffersCard;

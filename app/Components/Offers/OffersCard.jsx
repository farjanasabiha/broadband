import React from "react";

const OffersCard = ({ img, title, desc }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm  min-h-[350px]">
        <figure className="h-[140px] overflow-hidden">
          <img
            src={img}
            alt={title}
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

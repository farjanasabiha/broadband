"use client";

import React from "react";
import OffersCard from "./OffersCard";
import { useTranslation } from "react-i18next";

const OffersArea = () => {
  const { t } = useTranslation("common");

  const offers = [
    {
      img: "/Refer-A-Friend-Bangla-01-1536x804.jpg.webp",
      title: t("offers.offer1.title"),
      desc: t("offers.offer1.desc"),
    },
    {
      img: "/2-Month-Bill-01-01-01-01-1536x804.jpg.webp",
      title: t("offers.offer2.title"),
      desc: t("offers.offer2.desc"),
    },
    {
      img: "/4-Month-Bill-1-01-01-1536x804.jpg.webp",
      title: t("offers.offer3.title"),
      desc: t("offers.offer3.desc"),
    },
    {
      img: "/3-Month-Bill-01-01-01-1536x804.jpg.webp",
      title: t("offers.offer4.title"),
      desc: t("offers.offer4.desc"),
    },
  ];

  return (
    <div className="container max-w-6xl mx-auto px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {offers.map((offer, index) => (
          <OffersCard
            key={index}
            img={offer.img}
            title={offer.title}
            desc={offer.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersArea;

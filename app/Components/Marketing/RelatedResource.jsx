"use client";

import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { useTranslation } from "react-i18next";

const RelatedResource = () => {
  const { t } = useTranslation("common");

  const resources = [
    {
      title: t("socialMediaMarketing.relatedResources.resource1Title"),
      description: t("socialMediaMarketing.relatedResources.resource1Desc"),
      image: "/social-media-metrics.webp",
    },
    {
      title: t("socialMediaMarketing.relatedResources.resource2Title"),
      description: t("socialMediaMarketing.relatedResources.resource2Desc"),
      image: "/social-media-metrics.webp",
    },
  ];

  return (
    <div className=" mx-auto px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8">
        {resources.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2  items-center justify-between gap-3"
          >
            <div>
              <p className="text-[18px] uppercase">{item.description}</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl  font-medium  my-5">{item.title}</h2>
              <Link href='/' className='bg-white font-medium text-black px-5 py-2 rounded-lg'>{t("socialMediaMarketing.readNow")}</Link>
            </div>
            <div className="w-full max-w-[500px]">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RelatedResource;
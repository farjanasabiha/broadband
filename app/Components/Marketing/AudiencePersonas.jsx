"use client";

import React from "react";
import Image from "next/image";
import Link from 'next/link'
import { ArrowBigUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const AudiencePersonas = () => {
  const { t } = useTranslation("common");

  const resources = [
    {
      title: t("socialMediaMarketing.relatedResources.resource3Title"),
      description: t("socialMediaMarketing.relatedResources.resource3Desc"),
      image: "/audience-personas.webp",
    },
    {
      title: t("socialMediaMarketing.relatedResources.resource4Title"),
      description: t("socialMediaMarketing.relatedResources.resource4Desc"),
      image: "/audience-personas.webp",
    },
    {
      title: t("socialMediaMarketing.relatedResources.resource4Title"),
      description: t("socialMediaMarketing.relatedResources.resource4Desc"),
      image: "/audience-personas.webp",
    },
  ];

  return (
    <div className="mx-auto px-10 relative z-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8">
        {resources.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 xl:grid-cols-2  items-center justify-between gap-8 lg:gap-3"
          >
            <div>
              <p className="text-[18px] uppercase">{item.description}</p>
              <h2 className="text-2xl md:text-3xl  font-medium  my-5">{item.title}</h2>
              <Link
                href="/"
                className="bg-white font-medium text-black px-5 py-2 rounded-lg"
              >
                {t("socialMediaMarketing.readNow")}
              </Link>
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

      <div className='absolute -bottom-10 right-0'>
      <Link href="#steps" scroll={true}>
        <div className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full hover:bg-amber-600 transition shadow-lg cursor-pointer">
          <ArrowBigUp className="text-white w-6 h-6" />
        </div>
      </Link>
      </div>

    </div>
  );
};
export default AudiencePersonas;
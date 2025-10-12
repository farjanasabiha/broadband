"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrSchedulePlay } from "react-icons/gr";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const CorporateInternet = () => {
  const { t } = useTranslation("common");

  const packagesPlans = [
    {
      id: 1,
      name: t("packages_basic_corporate"),
      speed: "60 Mbps",
      price: t("packages_basic_corporate_price"),
      features: [
        { text: t("packages_basic_corporate_feature1") },
        { text: t("packages_basic_corporate_feature2") },
        { text: t("packages_basic_corporate_feature3") },
        { text: t("packages_basic_corporate_feature4") },
        { text: t("packages_basic_corporate_feature5") },
        { text: t("packages_basic_corporate_feature6") },
      ],
    },
    {
      id: 2,
      name: t("packages_premium_corporate"),
      speed: "110 Mbps",
      price: t("packages_premium_corporate_price"),
      features: [
        { text: t("packages_premium_corporate_feature1") },
        { text: t("packages_premium_corporate_feature2") },
        { text: t("packages_premium_corporate_feature3") },
        { text: t("packages_premium_corporate_feature4") },
        { text: t("packages_premium_corporate_feature5") },
        { text: t("packages_premium_corporate_feature6") },
        { text: t("packages_premium_corporate_feature7") },
        { text: t("packages_premium_corporate_feature8") },
      ],
    },
    {
      id: 3,
      name: t("packages_business_corporate"),
      speed: "160 Mbps",
      price: t("packages_business_corporate_price"),
      features: [
        { text: t("packages_business_corporate_feature1") },
        { text: t("packages_business_corporate_feature2") },
        { text: t("packages_business_corporate_feature3") },
        { text: t("packages_business_corporate_feature4") },
        { text: t("packages_business_corporate_feature5") },
        { text: t("packages_business_corporate_feature6") },
        { text: t("packages_business_corporate_feature7") },
        { text: t("packages_business_corporate_feature8") },
      ],
    },
  ];

  return (
    <div className="bg-black container max-w-6xl mx-auto px-5">
      <div className="container mx-auto">
        {/* packages Cards Grid */}
        <div className="gap-10 md:gap-16 lg:gap-20 space-y-10 md:space-y-16 lg:space-y-20">
          {packagesPlans.map((plan) => (
            <div key={plan.id} className="relative group">
              <div className="relative bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-xl md:rounded-2xl lg:rounded-4xl p-4 sm:p-6 lg:px-12 lg:py-20 shadow-xl md:shadow-2xl h-full flex flex-col">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-16 text-left md:text-center items-center md:mx-auto">
                  {/* Plan Badge */}
                  <div className="space-y-3 sm:space-y-4 md:space-y-5 col-span-12 lg:col-span-3 text-left lg:text-center lg:mx-auto">
                    <div>
                      <div className="inline-block px-2 sm:px-3 text-gray-200/70 py-1 rounded-full text-xs font-medium border-gray-100/50 border self-start">
                        {plan.name}
                      </div>
                    </div>
                    <div>
                      <div className="inline-block px-3 sm:px-4 py-2 sm:py-3 text-white rounded-full bg-primaryColor font-extrabold text-lg sm:text-xl md:text-2xl lg:text-[28px]">
                        {plan.speed}
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                      {plan.price}
                    </div>
                    <div>
                      <GrSchedulePlay className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-17 lg:w-17 lg:mx-auto text-primaryColor" />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow col-span-12 lg:col-span-6 text-left lg:text-center lg:mx-auto">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-2 sm:space-x-3 text-gray-300 md:justify-start"
                      >
                        <CheckCircle className="w-3 h-3 text-white flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="text-left lg:text-center lg:mx-auto col-span-12 lg:col-span-3">
                    <Link
                      href="/new-connection"
                      className="flex items-center justify-center md:justify-between gap-1 sm:gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-2xl sm:rounded-3xl font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
                    >
                      <p className="text-sm sm:text-base md:text-lg font-semibold">
                        {t("packages_button")}
                      </p>
                      <FaArrowRightLong className="text-sm sm:text-base" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateInternet;
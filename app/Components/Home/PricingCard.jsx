import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrSchedulePlay } from "react-icons/gr";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

const PricingCard = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      speed: "36 Mbps",
      price: "800 Tk",
      popular: false,
      features: [
        {
          text: "Up to 36Mbps  (1:8 Ratio)",
        },
        { text: "IPv4 Public IP" },
        {
          text: "Basic BDIX FTP Servers",
        },
        { text: "HD Video Calling" },
        {
          text: "Standard Youtube & Facebook",
        },
        { text: "HD Video Calling" },
        {
          text: "Standard Youtube & Facebook",
        },
        {
          text: "5% Vat Applicable",
        },
      ],
    },
    {
      id: 2,
      name: "Premium",
      speed: "70 Mbps",
      price: "1,000 Tk",
      popular: true,
      features: [
        {
          text: "Up to 70 Mbps Internet (1:8 Ratio)",
        },
        {
          text: "IP Addresses: Both IPv4 & IPv6 Public IP",
        },
        { text: "Extra Speed on VAS" },
        {
          text: "Enrich BDIX FTP Servers",
        },
        {
          text: "Uncapped Speed in IX and Gaming servers",
        },
        {
          text: "Smooth 4k Video Calling",
        },
        {
          text: "Bufferless Youtube & Facebook",
        },
        {
          text: "5% Vat Applicable",
        },
      ],
    },
    {
      id: 3,
      name: "Business",
      speed: "80 Mbps",
      price: "1,200 Tk",
      popular: false,
      features: [
        {
          text: "Up to 80 Mbps Internet (1:6 Ratio)",
        },
        {
          text: "Multiple IPv4 & IPv6 Public IP",
        },
        { text: "Priority Speed on VAS" },
        {
          text: "Premium BDIX FTP Servers",
        },
        {
          text: "Advanced Security Features",
        },
        { text: "Ultra HD Video Calling" },
        { text: "Business Grade Support" },
        {
          text: "5% Vat Applicable",
        },
      ],
    },
    {
      id: 4,
      name: "Enterprise",
      speed: "90 Mbps",
      price: "1,500 Tk",
      popular: false,
      features: [
        {
          text: "Up to 90 Mbps Internet (1:4 Ratio)",
        },
        {
          text: "Dedicated IPv4 & IPv6 Block",
        },
        {
          text: "Maximum Speed on All Services",
        },
        {
          text: "Dedicated BDIX FTP Servers",
        },
        {
          text: "Enterprise Security Suite",
        },
        { text: "24/7 Dedicated Support" },
        { text: "SLA Guaranteed Uptime" },
        {
          text: "5% Vat Applicable",
        },
      ],
    },
  ];

  return (
    <div className="bg-black container max-w-6xl mx-auto px-5">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-9">
          <h2 className="text-3xl md:text-4xl leading-snug font-medium mb-8">
            Sylhet’s Most Popular Broadband Package – SyncIT
          </h2>

          <div className="flex items-center justify-center">
            <div className="flex items-center w-40">
              <div className="flex-1 border-t border-[#bd2335]"></div>
              {/* Star Icon */}
              <div className="mx-2 text-[#bd2335]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2l2.39 6.9h7.27l-5.88 4.27 2.39 6.9L12 15.8l-5.88 4.27 2.39-6.9L2.63 8.9h7.27L12 2z" />
                </svg>
              </div>
              {/* Right Line */}
              <div className="flex-1 border-t border-[#bd2335]"></div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="gap-10 md:gap-16 lg:gap-20 space-y-10 md:space-y-16 lg:space-y-20">
          {pricingPlans.map((plan, index) => (
            <div key={plan.id} className="relative group">
              {/* Card */}
              <div className="relative bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-xl md:rounded-2xl lg:rounded-4xl p-4 sm:p-6 lg:px-12 lg:py-20 shadow-xl md:shadow-2xl h-full flex flex-col">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-16 text-left md:text-center items-center md:mx-auto">
                  {/* Plan Badge */}
                  <div className="space-y-3 sm:space-y-4 md:space-y-5 col-span-12 lg:col-span-3  text-left lg:text-center lg:mx-auto">
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
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
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
                  <div className="text-left  text-left lg:text-center lg:mx-auto col-span-12 lg:col-span-3">
                    <button>
                      <Link
                        href="/new-connection"
                        className="flex items-center justify-center md:justify-between gap-1 sm:gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-2xl sm:rounded-3xl font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
                      >
                        <p className="text-sm sm:text-base md:text-lg font-semibold">
                          Get Today
                        </p>
                        <FaArrowRightLong className="text-sm sm:text-base" />
                      </Link>
                    </button>
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

export default PricingCard;

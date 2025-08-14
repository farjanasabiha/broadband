import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrSchedulePlay } from "react-icons/gr";

import {
  CheckCircle,
  Globe,
  MapPin,
  Zap,
  Server,
  Video,
  Youtube,
  Facebook,
  Wifi,
  Shield,
  Clock,
} from "lucide-react";

const PricingCard = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      speed: "20 Mbps",
      price: "850 Tk",
      popular: false,
      features: [
        {
          text: "Up to 20 Mbps Internet (1:10 Ratio)",
        },
        {  text: "IPv4 Public IP" },
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
      ],
    },
    {
      id: 2,
      name: "Premium",
      speed: "50 Mbps",
      price: "1,260 Tk",
      popular: true,
      features: [
        {
          icon: <Globe className="w-4 h-4" />,
          text: "Up to 50 Mbps Internet (1:8 Ratio)",
        },
        {
          icon: <MapPin className="w-4 h-4" />,
          text: "IP Addresses: Both IPv4 & IPv6 Public IP",
        },
        { icon: <Zap className="w-4 h-4" />, text: "Extra Speed on VAS" },
        {
          icon: <Server className="w-4 h-4" />,
          text: "Enrich BDIX FTP Servers",
        },
        {
          icon: <Zap className="w-4 h-4" />,
          text: "Uncapped Speed in IX and Gaming servers",
        },
        {
          icon: <Video className="w-4 h-4" />,
          text: "Smooth 4k Video Calling",
        },
        {
          icon: <Youtube className="w-4 h-4" />,
          text: "Bufferless Youtube & Facebook",
        },
      ],
    },
    {
      id: 3,
      name: "Business",
      speed: "100 Mbps",
      price: "2,100 Tk",
      popular: false,
      features: [
        {
          icon: <Globe className="w-4 h-4" />,
          text: "Up to 100 Mbps Internet (1:6 Ratio)",
        },
        {
          icon: <MapPin className="w-4 h-4" />,
          text: "Multiple IPv4 & IPv6 Public IP",
        },
        { icon: <Zap className="w-4 h-4" />, text: "Priority Speed on VAS" },
        {
          icon: <Server className="w-4 h-4" />,
          text: "Premium BDIX FTP Servers",
        },
        {
          icon: <Shield className="w-4 h-4" />,
          text: "Advanced Security Features",
        },
        { icon: <Video className="w-4 h-4" />, text: "Ultra HD Video Calling" },
        { icon: <Wifi className="w-4 h-4" />, text: "Business Grade Support" },
      ],
    },
    {
      id: 4,
      name: "Enterprise",
      speed: "200 Mbps",
      price: "3,800 Tk",
      popular: false,
      features: [
        {
          icon: <Globe className="w-4 h-4" />,
          text: "Up to 200 Mbps Internet (1:4 Ratio)",
        },
        {
          icon: <MapPin className="w-4 h-4" />,
          text: "Dedicated IPv4 & IPv6 Block",
        },
        {
          icon: <Zap className="w-4 h-4" />,
          text: "Maximum Speed on All Services",
        },
        {
          icon: <Server className="w-4 h-4" />,
          text: "Dedicated BDIX FTP Servers",
        },
        {
          icon: <Shield className="w-4 h-4" />,
          text: "Enterprise Security Suite",
        },
        { icon: <Clock className="w-4 h-4" />, text: "24/7 Dedicated Support" },
        { icon: <Wifi className="w-4 h-4" />, text: "SLA Guaranteed Uptime" },
      ],
    },
  ];

  return (
    <div className="bg-black   container max-w-6xl  mx-auto  px-5 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-9">
          <h2 className="text-4xl lg:text-6xl xl:text-[35px] font-semibold mb-8">
            Most Popular Package
          </h2>

              <div className="flex items-center justify-center">
      <div className="flex items-center w-40"> {/* limit total width */}
        {/* Left Line */}
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
        <div className="lg:px-20  gap-20 space-y-20">
          {pricingPlans.map((plan, index) => (
            <div key={plan.id} className="relative group">
              {/* Card */}
              <div className="relative bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl lg:rounded-3xl p-6 lg:p-12 shadow-2xl transform group-hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="grid grid-cols-12 gap-10 justify-center  items-center text-center mx-auto">
                  {/* Plan Badge */}
                  <div className=" space-y-5 col-span-3">
                    <div className="inline-block px-3 text-gray-200/70 py-1 rounded-full text-xs font-medium border-gray-100/50 border self-start">
                      {plan.name}
                    </div>
                    <div>
                      <div className="inline-block  px-3 py-1 text-white rounded-full  bg-gradient-to-b from-[#ff0033] to-[#bd556a63] font-bold text-base lg:text-xl">
                        {plan.speed}
                      </div>
                    </div>

                      <div className="text-2xl lg:text-3xl xl:text-4xl font-medium">
                        {plan.price}
                      </div>
                      <div className=''>
                        <GrSchedulePlay className='h-17 w-17 mx-auto text-center text-[#bd2335]' />
                      </div>
                  </div>
                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-grow col-span-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm lg:text-sm leading-relaxed">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* CTA Button */}
                  <div className="text-center mx-auto col-span-3">
                    <button className="py-2 px-6 rounded-3xl font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]">
                      <div className="flex items-center justify-between gap-2">
                        <span>Get Started</span> <FaArrowRightLong />
                      </div>
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

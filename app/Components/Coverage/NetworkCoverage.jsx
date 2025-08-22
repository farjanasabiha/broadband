import Image from "next/image";
import React from "react";

const NetworkCoverage = () => {
  return (
    <div className="container max-w-6xl  mx-auto  px-5">
      <h1 className="text-3xl md:text-4xl leading-snug font-medium mb-6">
        Network Coverage
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <div className="mb-10 lg:mb-0 flex justify-center lg:justify-start">
          <Image
            src="/bangladesh-mapGazipur-01-1.svg"
            width={450}
            height={450}
            alt="map"
          />
        </div>
        <div className="lg:space-y-26">
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 lg:gap-30">
            <div className="flex items-center justify-center lg:justify-start">
              <Image src={"/cube.webp"} alt="cube" height={50} width={50} />
              <div className="ml-5 text-center">
                <h4 className="text-5xl text-lime-300 mb-2">30+</h4>
                <span className="text-[19px] text-[#b2b5af]">POP UP</span>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <Image src={"/network.webp"} alt="cube" height={50} width={50} />
              <div className="ml-5 text-center">
                <h4 className="text-5xl text-lime-300 mb-2">5000+</h4>
                <span className="text-[19px] text-[#b2b5af]">
                  Total Customer
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:mt-0 space-y-10 md:space-y-0 lg:gap-30">
            <div className="flex items-center justify-center lg:justify-start">
              <Image src={"/usb.webp"} alt="cube" height={50} width={50} />
              <div className="ml-5 text-center">
                <h4 className="text-5xl text-lime-300 mb-2">5</h4>
                <span className="text-[19px] text-[#b2b5af]">
                  Regional Hubs
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <Image src={"/location.webp"} alt="cube" height={50} width={50} />
              <div className="ml-5 text-center">
                <h4 className="text-5xl text-lime-300 mb-2">1</h4>
                <span className="text-[19px] text-[#b2b5af]">Districts</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-10 lg:mt-0 lg:gap-30">
            <div className="flex items-center justify-center lg:justify-start lg:justify-start">
              <Image src={"/location.webp"} alt="cube" height={50} width={50} />
              <div className="ml-5 text-center">
                <h4 className="text-5xl text-lime-300 mb-2">5</h4>
                <span className="text-[19px] text-[#b2b5af]">
                  Number of Upazilas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkCoverage;

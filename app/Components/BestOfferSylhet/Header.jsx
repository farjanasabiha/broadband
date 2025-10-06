"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative w-full h-full lg:h-screen">
      <Image
        src="/best-offer.jpg"
        alt="best-offer"
        quality={100}
        unoptimized
        height={500}
        width={500}
        className="w-full object-cover object-center"
      />
    </div>
  );
};

export default Header;

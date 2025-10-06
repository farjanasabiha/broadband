"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
      <Image
        src="/best-offer.jpg"
        alt="best-offer"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  );
};

export default Header;

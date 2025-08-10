import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <div className="container mx-auto px-5  py-28">
      <div className="text-center space-y-10">
        <h1 className="font-medium text-8xl text-white">
          Upgrade Your <br /> Internet Experience
        </h1>
        <p className="text-lg font-normal text-[#b2b5af]">
          You have never experienced internet speed like this before.
        </p>
        <div>
          <Link
            className="rounded-4xl  text-[16px] bg-secondary py-3 px-8 font-semibold "
            href="#"
          >
            Check Experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;

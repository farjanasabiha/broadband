import Image from "next/image";
import React from "react";

const Nagad = () => {
  return (
    <div className="space-y-24">
      {/* Nagad Method */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor">Step 1</h2>
            <Image
              src={"/নগদ-১-qv3ugtkz1h902g8l6mwss772f93w8948cqrf9szjhs.webp"}
              height={600}
              width={500}
              alt="nagad"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor mb-5">
              Step 2
            </h2>
            <Image
              src={"/নগদ-২-qv3ulnh45tv1qb7zz82s3hbcbjass9akong91ztpio.webp"}
              height={600}
              width={500}
              alt="nagad"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor">Step 3</h2>
            <Image
              src={"/নগদ-৩-qv3umxj7gpm3j7d3i9zhznoxfezs9fdf6zf1kjxf1s.webp"}
              height={600}
              width={500}
              alt="nagad"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor mb-5">
              Step 4
            </h2>
            <Image
              src={"/নগদ-৪-qv3uo10ffr452trr3r1twdqadll78pq5cetfq6avsg.webp"}
              height={600}
              width={500}
              alt="nagad"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor">Step 5</h2>
            <Image
              src={"/নগদ-৫-qv3up5fhlmngy251jqisdlj3x61zfp6ltyvbd2mycw.webp"}
              height={600}
              width={500}
              alt="nagad"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nagad;

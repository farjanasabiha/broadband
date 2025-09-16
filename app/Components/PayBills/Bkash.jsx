import Image from "next/image";
import React from "react";

const Bkash = () => {
  return (
    <div className="space-y-24">
      {/* Bkash Method */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor">Step 1</h2>
            <Image
              src={"/বিকাশ-১-qv3utumfrt32zvba3rnmueu2uiw1x7uah8apqvo38w.webp"}
              height={600}
              width={500}
              alt="bkash"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor mb-5">
              Step 2
            </h2>
            <Image
              src={"/Bkash-find-internet-bill-for-website-1-1024x1024.webp"}
              height={600}
              width={500}
              alt="bkash"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor">Step 3</h2>
            <Image
              src={"/বিকাশ-২-qv3uvb9eej35216tkeeqq1jw43olw9n9cgtwmdi1kg.webp"}
              height={600}
              width={500}
              alt="bkash"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor mb-5">
              Step 4
            </h2>
            <Image
              src={"/বিকাশ-৩-qv3uxwbf74mizffnh0mt2w2ix8xy2awop9ez4ro2gg.webp"}
              height={600}
              width={500}
              alt="bkash"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-primaryColor">Step 5</h2>
            <Image
              src={"/বিকাশ-২-qv3uvb9eej35216tkeeqq1jw43olw9n9cgtwmdi1kg.webp"}
              height={600}
              width={500}
              alt="bkash"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bkash;

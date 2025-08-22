import Image from "next/image";
import React from "react";

const QrCode = () => {
  return (
    <div>
      {/* Qr Code Method */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center flex-col">
            <Image
              className="rounded-3xl"
              src={
                "/bkash-QR-code-qtb6al5g8r8ebaz9o4ajcyo21woyhuehgwmy8rin0g.webp"
              }
              height={350}
              width={350}
              alt="bkash"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <Image
              className="rounded-3xl"
              src={"/nagad-qr-code.webp"}
              height={350}
              width={350}
              alt="nagad"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCode;

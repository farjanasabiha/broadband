import Image from "next/image";
import React from "react";

const Rocket = () => {
  return (
    <div className="space-y-24">
        <div className="text-center mx-auto">
            <Image
              src={"/nexus-768x853.webp"}
              className='text-center mx-auto'
              height={853}
              width={768}
              alt="Rocket"
            />
          </div>
    </div>
  );
};

export default Rocket;

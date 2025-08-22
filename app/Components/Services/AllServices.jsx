import React from "react";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
  return (
    <div className="container max-w-6xl mx-auto px-5 mt-10 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ServiceCard
          title={"Internet Packages"}
          image={"/worldwide-150x150.webp"}
        />
        <ServiceCard
          title={"CCTV System Solutions"}
          image={"/cctv-camera-150x150.webp"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ServiceCard
          title={"Complete Network Solutions"}
          image={"/neural-net-150x150.webp"}
        />
        <ServiceCard
          title={"Network Security"}
          image={"/cyber-security-150x150.webp"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ServiceCard
          title={"IP Telephone Service"}
          image={"/telephone-150x150.webp"}
        />
        <ServiceCard
          title={"Data Connectivity"}
          image={"/diagram-1-150x150.webp"}
        />
      </div>
    </div>
  );
};

export default AllServices;

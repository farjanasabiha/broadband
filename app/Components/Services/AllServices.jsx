import React from "react";
import ServiceCard from "./ServiceCard";
import { TbWorldPin } from "react-icons/tb";
import { FaVideo, FaNetworkWired, FaShieldAlt, FaPhoneAlt, FaDatabase } from "react-icons/fa";

const AllServices = () => {
  // All services in an array
  const services = [
    { title: "Internet Packages", icon: <TbWorldPin size={100} color="#ff0033" /> },
    { title: "CCTV System Solutions", icon: <FaVideo size={100} color="#f39f5a" /> },
    { title: "Complete Network Solutions", icon: <FaNetworkWired size={100} color="#ff6600" /> },
    { title: "Network Security", icon: <FaShieldAlt size={100} color="#0066ff" /> },
    { title: "IP Telephone Service", icon: <FaPhoneAlt size={100} color="#33cc33" /> },
    { title: "Data Connectivity", icon: <FaDatabase size={100} color="#9933ff" /> },
  ];

  return (
    <div className="container max-w-6xl mx-auto px-5 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} icon={service.icon} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;

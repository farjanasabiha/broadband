import React from "react";
import ServiceCard from "./ServiceCard";
import { TbWorldPin } from "react-icons/tb";
import { FaVideo, FaNetworkWired, FaShieldAlt, FaPhoneAlt, FaDatabase } from "react-icons/fa";

const AllServices = () => {
  // All services in an array
  const services = [
    { title: "IoT Solutions", icon: <TbWorldPin size={100} color="#ff0033" />, des:"Smart life, connected future" },
    { title: "CCTV System Solutions", icon: <FaVideo size={100} color="#f39f5a" /> ,des:"24/7 security, total safety"},
    { title: "Complete Network Solutions", icon: <FaNetworkWired size={100} color="#ff6600" />, des:"Strong networks, seamless work" },
    { title: "Network Security", icon: <FaShieldAlt size={100} color="#0066ff" />, des:"Stay safe, stay online"},
    { title: "IP Telephone Service", icon: <FaPhoneAlt size={100} color="#33cc33" />, des: "Clear calls, smarter business"},
    { title: "Cloud Services", icon: <FaDatabase size={100} color="#9933ff" />, des : "Secure data, endless growth"},
  ];

  return (
    <div className="container max-w-6xl mx-auto px-5 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} icon={service.icon} des={service.des}/>
        ))}
      </div>
    </div>
  );
};

export default AllServices;

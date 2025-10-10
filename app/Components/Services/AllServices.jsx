"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import { TbWorldPin } from "react-icons/tb";
import {
  FaVideo,
  FaNetworkWired,
  FaShieldAlt,
  FaPhoneAlt,
  FaDatabase,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AllServices = () => {
  const { t } = useTranslation("common");

  // Services with translation keys
  const services = [
    {
      icon: <TbWorldPin size={100} color="#ff0033" />,
      title: t("service_iot_title"),
      des: t("service_iot_desc"),
    },
    {
      icon: <FaVideo size={100} color="#f39f5a" />,
      title: t("service_cctv_title"),
      des: t("service_cctv_desc"),
    },
    {
      icon: <FaNetworkWired size={100} color="#ff6600" />,
      title: t("service_network_title"),
      des: t("service_network_desc"),
    },
    {
      icon: <FaShieldAlt size={100} color="#0066ff" />,
      title: t("service_security_title"),
      des: t("service_security_desc"),
    },
    {
      icon: <FaPhoneAlt size={100} color="#33cc33" />,
      title: t("service_ip_title"),
      des: t("service_ip_desc"),
    },
    {
      icon: <FaDatabase size={100} color="#9933ff" />,
      title: t("service_cloud_title"),
      des: t("service_cloud_desc"),
    },
  ];

  return (
    <div className="container max-w-6xl mx-auto px-5 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            des={service.des}
          />
        ))}
      </div>
    </div>
  );
};

export default AllServices;

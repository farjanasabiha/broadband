import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Footer from "../Components/Common/Footer/Footer";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQSection from "../Components/Common/FAQ";
import AllServices from "../Components/Services/AllServices";

export const metadata = {
  title: "SyncIT Services – Internet, WiFi, CCTV & Cloud Solutions in Sylhet",
  description:
    "Explore SyncIT’s services: internet & WiFi, CCTV solutions, cloud storage, network security, and IoT for homes & businesses in Sylhet.",
  keywords: [
    "internet services Sylhet",
    "WiFi service provider Sylhet",
    "CCTV Sylhet",
    "cloud solutions Sylhet",
    "ISP Sylhet",
  ],
};


const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"High Speed Internet Services"}
        header={"Services"}
        desc={"You can find here all in one solution for your company."}
      />
      <div className="space-y-24">
        <AllServices />
        <Testimonial />
        <CTA />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;

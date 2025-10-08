import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Footer from "../Components/Common/Footer/Footer";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQSection from "../Components/Common/FAQ";
import PayBills from "../Components/PayBills/PayBills";

export const metadata = {
  title: "Pay Internet Bill Online – SyncIT Sylhet",
  description:
    "Pay your SyncIT internet bill via bKash, Nagad, Rocket, or bank transfer. Fast, easy & secure online payments for Sylhet broadband users.",
  keywords: [
    "pay bill Sylhet",
    "internet bill online Sylhet",
    "WiFi bill payment Sylhet",
    "SyncIT bill pay",
  ],
};


const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader translationKey="commonHeader.payBill" />
      <div className="space-y-24">
        <PayBills />
        <Testimonial />
        <CTA />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;

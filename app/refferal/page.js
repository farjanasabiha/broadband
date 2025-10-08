import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Footer from "../Components/Common/Footer/Footer";
import FAQSection from "../Components/Common/FAQ";
import CTA from "../Components/Common/CTA";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import RefferalDetails from "../Components/Refferal/RefferalDetails";

export const metadata = {
  title: "Refer & Earn Internet Discount – SyncIT Sylhet",
  description:
    "Refer SyncIT to friends and earn 500 Taka monthly bill discount. Join Sylhet’s best internet referral program today.",
  keywords: [
    "refer WiFi Sylhet",
    "internet referral Sylhet",
    "SyncIT referral offer",
    "broadband discount Sylhet",
  ],
};

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
<CommonHeader translationKey="commonHeader.referDiscount" />
      <div className="space-y-24">
        <RefferalDetails />
        <Testimonial />
        <CTA />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;

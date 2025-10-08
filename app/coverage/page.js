import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Footer from "../Components/Common/Footer/Footer";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQSection from "../Components/Common/FAQ";
import NetworkCoverage from "../Components/Coverage/NetworkCoverage";
import AllCoverage from "../Components/Coverage/AllCoverage";

export const metadata = {
  title: "Internet Coverage in Sylhet – SyncIT Fiber Broadband Zones",
  description:
    "Check if SyncIT is available in your area. We cover Ambarkhana, Subhanighat, Naiorpul, Shibganj, Uposhohor, Zindabazar & more Sylhet zones.",
  keywords: [
    "internet coverage Sylhet",
    "WiFi Sylhet areas",
    "broadband availability Sylhet",
    "SyncIT coverage Sylhet",
    "internet connection Sylhet",
  ],
};

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
<CommonHeader translationKey="commonHeader.coverage" />

      <div className="space-y-24">
        <AllCoverage />
        <NetworkCoverage />
        <Testimonial />
        <CTA />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;

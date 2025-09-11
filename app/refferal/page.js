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
  title:
    "Referral Offer SyncIT - Best Broadband Internet & WiFi Service in Sylhet",
  description:
    "Discover why SyncIT offers the best internet service in Sylhet. Trusted since 2014. High speed, 24/7 support, and reliable fiber internet for all.",
};

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        header={"রেফার করুন, ডিস্কাউন্ট পান"}
        desc={
          "এখন SyncIT এর সংযোগ রেফার করলেই মাসিক বিল এ পাবেন ৫০০ টাকা ডিসকাউন্ট।"
        }
      />
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

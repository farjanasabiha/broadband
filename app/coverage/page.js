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
  title: "Coverage SyncIT - Best Broadband Internet & WiFi Service in Sylhet",
  description:
    "Discover why SyncIT offers the best internet service in Sylhet. Trusted since 2014. High speed, 24/7 support, and reliable fiber internet for all.",
};

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"Check Our Internet Availability on Your Location"}
        header={"Coverage"}
        desc={
          "You can see our high speed internet connectivity network coverage zone."
        }
      />
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

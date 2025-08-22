import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Footer from "../Components/Common/Footer/Footer";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQSection from "../Components/Common/FAQ";
import NetworkCoverage from "../Components/Coverage/NetworkCoverage";

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"Check Our Internet Availability on Your Location"}
        header={"Coverage"}
        desc={
          "You can see our high speed internet connectivity network coverage zone. Don’t find! Contact Us."
        }
      />
      <div className="space-y-24">
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

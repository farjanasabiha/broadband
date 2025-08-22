import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Footer from "../Components/Common/Footer/Footer";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQSection from "../Components/Common/FAQ";
import PayBills from "../Components/PayBills/PayBills";

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"Pay Your Internet Bill"}
        header={"Pay Bills"}
        desc={
          "You can pay your internet bill through Bkash, Nagad, Rocket MFS, or Bank Transfer. Also, you can pay via the Asian Network App or QR code scan."
        }
      />
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

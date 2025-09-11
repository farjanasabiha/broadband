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
  title: "Paybills SyncIT - Best Broadband Internet & WiFi Service in Sylhet",
  description:
    "Discover why SyncIT offers the best internet service in Sylhet. Trusted since 2014. High speed, 24/7 support, and reliable fiber internet for all.",
};

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"Pay Your Internet Bill"}
        header={"Pay Your SyncIT Internet Bill – Fast, Easy & Secure"}
        desc={
          "Pay online anytime through bKash, Nagad, Rocket, Bank Transfer, or QR Code. Hassle-free billing for all SyncIT customers in Sylhet."
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

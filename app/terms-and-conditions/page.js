import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQ from "../Components/Common/FAQ";
import Footer from "../Components/Common/Footer/Footer";
import TermsAndConditions from "../Components/TermsAndConditions/TermsAndConditions";

export const metadata = {
  title: "Terms & Conditions SyncIT - Best Broadband Internet & WiFi Service in Sylhet",
  description: "Discover why SyncIT offers the best internet service in Sylhet. Trusted since 2014. High speed, 24/7 support, and reliable fiber internet for all.",
};

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"Asian Network"}
        header={"Terms & Conditions"}
        desc={
          "Please read our terms and conditions. If you have queries? Contact Us."
        }
      />
      <div className="space-y-24">
        <TermsAndConditions />
        <Testimonial />
        <CTA />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default page;

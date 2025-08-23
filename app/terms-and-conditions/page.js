import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQ from "../Components/Common/FAQ";
import Footer from "../Components/Common/Footer/Footer";
import TermsAndConditions from "../Components/TermsAndConditions/TermsAndConditions";

const page = () => {
  return (
    <div className="space-y-24">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"Asian Network"}
        header={"Privacy Policy"}
        desc={
          "Please read our terms and conditions. If you have queries? Contact Us."
        }
      />
      <TermsAndConditions />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default page;
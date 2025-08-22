import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQ from "../Components/Common/FAQ";
import Footer from "../Components/Common/Footer/Footer";
import TermsAndConditions from "../Components/TermsAndConditions/TermsAndConditions";

const page = () => {
  return (
    <div className='space-y-24'>
      <TopBar />
      <Navbar />
      <TermsAndConditions />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default page;
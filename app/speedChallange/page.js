import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import SpeedTab from "../Components/SpeedChallange/SpeedTab";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQ from "../Components/Common/FAQ";
import Footer from "../Components/Common/Footer/Footer";
import CommonHeader from "../Components/Common/CommonHeader";

const page = () => {
  return (
    <div className=" bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"Test Your Desire Internet Speed"}
        header={"Speed Challenge"}
        desc={
          "Here is the Asian Network internet speed challenge for you to compare. You can’t beat us 🙂"
        }
      />
      <div className="space-y-24">
        <SpeedTab />
        <Testimonial />
        <CTA />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default page;

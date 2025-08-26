import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Footer from "../Components/Common/Footer/Footer";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import Form from "../Components/New-connection/Form";
import FAQSection from "../Components/Common/FAQ";

export const metadata = {
  title: "New Connection SyncIT - Best Broadband Internet & WiFi Service in Sylhet",
  description: "Discover why SyncIT offers the best internet service in Sylhet. Trusted since 2014. High speed, 24/7 support, and reliable fiber internet for all.",
};

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"Choose your required internet package "}
        header={"Get New Connection"}
        desc={
          "Choose and share your details. We will contact you soon. "
        }
      />
      <div className="space-y-24">
        <Form/>
        <Testimonial />
        <CTA />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;

import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Footer from "../Components/Common/Footer/Footer";
import FAQSection from "../Components/Common/FAQ";
import CTA from "../Components/Common/CTA";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import RefferalDetails from "../Components/Refferal/RefferalDetails";

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        header={"রেফার করুন, পুরষ্কার জিতুন"}
        desc={"রেফার করেই জিতে নিন ক্যাশব্যাক সহ আকর্ষনীয় সব পুরষ্কার"}
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

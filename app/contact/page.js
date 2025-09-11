import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Footer from "../Components/Common/Footer/Footer";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQSection from "../Components/Common/FAQ";
import ContactForm from "../Components/Contact/ContactForm";

export const metadata = {
  title: "Contact SyncIT - Best Broadband Internet & WiFi Service in Sylhet",
  description:
    "Call, WhatsApp, or email SyncIT – Sylhet’s most reliable internet provider, available 24/7.”",
};

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"Hey! Share Your Opinion"}
        header={"Contact Us"}
        desc={
          "If you have any concerns or questions, please feel free to reach us."
        }
      />
      <div className="space-y-24">
        <ContactForm />
        <Testimonial />
        <CTA />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;

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
  title: "Contact SyncIT – Best Internet Service Provider in Sylhet",
  description:
    "Need support? Call SyncIT Sylhet at 01965300500 / 09638559900 or WhatsApp wa.me/8801978169689. Your trusted Sylhet internet provider, 24/7 support.",
  keywords: [
    "contact SyncIT Sylhet",
    "ISP support Sylhet",
    "WiFi help Sylhet",
    "broadband customer care Sylhet",
  ],
};

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader translationKey="commonHeader.contact" />

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

import React from 'react';
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Faq from '../Components/Faq/Faq';
// import FaqContacts from "../Components/Faq/FaqContacts";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQ from "../Components/Common/FAQ";
import Footer from "../Components/Common/Footer/Footer";
import ContactForm from '../Components/Contact/ContactForm';
const page = () => {
    return (
      <div className="bg-black">
        <TopBar />
        <Navbar />
        <CommonHeader translationKey="commonHeader.faq" />
        <div className="space-y-24">
          <Faq />
          {/* <FaqContacts /> */}
          <ContactForm/>
          <Testimonial />
          <CTA />
          <FAQ />
          <Footer />
        </div>
      </div>
    );
};

export default page;
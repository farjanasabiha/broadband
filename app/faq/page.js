import React from 'react';
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import CommonHeader from "../Components/Common/CommonHeader";
import Faq from '../Components/Faq/Faq';
import FaqContacts from "../Components/Faq/FaqContacts";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQ from "../Components/Common/FAQ";
import Footer from "../Components/Common/Footer/Footer";
const page = () => {
    return (
      <div className="bg-black">
        <TopBar />
        <Navbar />
        <CommonHeader
          title={"Find Answers"}
          header={"FAQ"}
          desc={
            "Have questions in mind? Explore our frequently asked questions to get quick and clear answers."
          }
        />
        <div className="space-y-24">
          <Faq />
          <FaqContacts />
          <Testimonial />
          <CTA />
          <FAQ />
          <Footer />
        </div>
      </div>
    );
};

export default page;
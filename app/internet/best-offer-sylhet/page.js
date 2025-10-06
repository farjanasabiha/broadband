import React from "react";
import TopBar from "@/app/Components/Common/Navbar/TopBar";
import Navbar from "@/app/Components/Common/Navbar/Navbar";
import Testimonial from "@/app/Components/Common/Testimonial/Testimonial";
import CTA from "@/app/Components/Common/CTA";
import FAQ from "@/app/Components/Common/FAQ";
import Footer from "@/app/Components/Common/Footer/Footer";
import Header from "@/app/Components/BestOfferSylhet/Header";
import OfferContent from "@/app/Components/BestOfferSylhet/OfferContent";
import OfferForm from "@/app/Components/BestOfferSylhet/OfferForm";

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <div className="space-y-24">
        <Header />
        <OfferContent />
        <OfferForm/>
        <Testimonial />
        <CTA />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default page;

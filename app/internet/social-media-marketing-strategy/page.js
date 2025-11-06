import React from "react";
import TopBar from "../../Components/Common/Navbar/TopBar";
import Navbar from "../../Components/Common/Navbar/Navbar";
import CommonHeader from "../../Components/Common/CommonHeader";
import Testimonial from "../../Components/Common/Testimonial/Testimonial";
import CTA from "../../Components/Common/CTA";
import FAQSection from "../../Components/Common/FAQ";
import Footer from "../../Components/Common/Footer/Footer";
import MarketingSection from "../../Components/Marketing/MarketingSection";
import RelatedResource from "../../Components/Marketing/RelatedResource";
import AudiencePersonas from "../../Components/Marketing/AudiencePersonas";
import Steps from "../../Components/Marketing/Steps";
import StepsTwo from "../../Components/Marketing/StepsTwo";

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        translationKey="commonHeader.socialMediaMarketing"
      />
      <div className="space-y-24">
        <MarketingSection />
        <Steps />
        <RelatedResource/>
        <StepsTwo />
        <AudiencePersonas/>
        <Testimonial />
        <CTA />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;

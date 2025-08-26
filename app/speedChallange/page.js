import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import SpeedTab from "../Components/SpeedChallange/SpeedTab";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQ from "../Components/Common/FAQ";
import Footer from "../Components/Common/Footer/Footer";
import CommonHeader from "../Components/Common/CommonHeader";

export const metadata = {
  title: "Speed Challenge SyncIT - Best Broadband Internet & WiFi Service in Sylhet",
  description: "Discover why SyncIT offers the best internet service in Sylhet. Trusted since 2014. High speed, 24/7 support, and reliable fiber internet for all.",
};

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

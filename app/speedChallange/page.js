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
  title: "Speed Test Sylhet – SyncIT Internet Speed Challenge",
  description:
    "Test your internet speed online with SyncIT. Compare Sylhet’s fastest BDIX fiber broadband and see why we are the #1 ISP.",
  keywords: [
    "internet speed test Sylhet",
    "speed challenge Sylhet",
    "BDIX speed test Sylhet",
    "fastest WiFi Sylhet",
  ],
};

const page = () => {
  return (
    <div className=" bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"SyncIT Speed Challenge "}
        header={"Test Your Internet Speed in Sylhet"}
        desc={
          "Join Sylhet’s best fiber internet speed challenge with SyncIT. Test your speed using Ookla, Fast.com, or other tools and see why SyncIT always leads."
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

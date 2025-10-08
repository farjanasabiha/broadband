import React from "react";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import OurMission from "../Components/About/OurMission";
import Timeline from "../Components/About/Timeline";
import AboutTab from "../Components/About/AboutTab";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import FAQ from "../Components/Common/FAQ";
import Footer from "../Components/Common/Footer/Footer";
import CommonHeader from "../Components/Common/CommonHeader";

export const metadata = {
  title: "About SyncIT – Sylhet’s Trusted ISP & Fiber Broadband Provider",
  description:
    "SyncIT is Sylhet’s top internet provider with fiber broadband, BDIX, and reliable WiFi. Serving 5000+ homes, businesses & gamers with 99.99% uptime.",
  keywords: [
    "about SyncIT",
    "best ISP Sylhet",
    "WiFi company Sylhet",
    "broadband Sylhet",
    "SyncIT Bangladesh",
  ],
};

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <div className="space-y-24">
        <CommonHeader translationKey="commonHeader.syncitAbout" />
        <OurMission
          titleKey="ourMission.missionTitle"
          descKey="ourMission.missionDesc"
          img="/asian-network-mission-1024x638.webp"
        />
        <OurMission
          titleKey="ourMission.visionTitle"
          descKey="ourMission.visionDesc"
          img="/asian-network-mission-1024x638.webp"
        />
        <OurMission
          titleKey="ourMission.goalTitle"
          descKey="ourMission.goalDesc"
          img="/asian-network-mission-1024x638.webp"
        />
        <Timeline />
        <AboutTab />
        <Testimonial />
        <CTA />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default page;

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
  title: "About SyncIT – Best Broadband Internet & WiFi Service in Sylhet",
  description:
    "Discover why SyncIT offers the best internet service in Sylhet. Trusted since 2014. High speed, 24/7 support, and reliable fiber internet for all.",
};

const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <div className="space-y-24">
        <CommonHeader
          title={"SyncIT Bangladesh"}
          header={
            "About SyncIT – Sylhet’s Trusted & Reliable Internet Provider"
          }
          desc={
            "SyncIT Bangladesh is Sylhet’s most trusted fiber broadband provider, serving many  happy customers with lightning-fast fiber internet, BDIX-boosted speeds, and 24/7 technical support. From homes and gamers to freelancers and businesses, we are redefining what reliable internet means in Sylhet."
          }
          img={"/asian-network-mission-1024x638.webp"}
        />
        <OurMission
          title={"Our Mission"}
          desc={
            "Our mission is to transform Sylhet’s digital future by delivering the fastest fiber broadband, BDIX-boosted speeds, and 99.99% reliable internet for every home, gamer, freelancer, and business. SyncIT is committed to providing affordable packages, free installation, and 24/7 customer support — ensuring a smarter and more connected lifestyle across Sylhet."
          }
        />
        <OurMission
          title={"Our Vision"}
          desc={`SyncIT’s vision is to make Sylhet the most digitally connected city in Bangladesh by delivering ultra-fast fiber broadband, BDIX-powered performance, and 24/7 reliable support. We aim to bridge the digital divide in Sylhet, empowering families, gamers, freelancers, and businesses with secure, affordable, and world-class internet services that transform how people live, work, and connect.`}
          img={"/asian-network-mission-1024x638.webp"}
        />
        <OurMission
          title={"Our Goal"}
          desc={`Our goal is to make high-speed fiber internet in Sylhet affordable, reliable, and accessible to everyone — from families and students to gamers and businesses. SyncIT is committed to supporting Sylhet’s growth by providing BDIX-powered speeds, 99.99% uptime, and customer-first service, making internet access a necessity, not a luxury.`}
          img={"/asian-network-mission-1024x638.webp"}
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

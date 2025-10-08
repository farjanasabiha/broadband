import React from "react";
import CommonHeader from "../Components/Common/CommonHeader";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import Footer from "../Components/Common/Footer/Footer";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import HomeInternet from "../Components/Packages/HomeInternet";
import AllPackages from "../Components/Packages/AllPackages";

export const metadata = {
  title: "Internet Packages in Sylhet – SyncIT Fiber & WiFi Plans",
  description:
    "Affordable WiFi & broadband packages in Sylhet. SyncIT offers 15 Mbps to 500 Mbps fiber internet with BDIX, free installation & best customer support.",
  keywords: [
    "internet packages Sylhet",
    "WiFi plans Sylhet",
    "broadband price Sylhet",
    "best WiFi Sylhet",
    "SyncIT packages",
    "home internet Sylhet",
  ],
};


const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
<CommonHeader translationKey="commonHeader.packages" />
      <div className="space-y-24">
        <AllPackages />
        <Testimonial />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default page;

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
  title: "Packages SyncIT - Best Broadband Internet & WiFi Service in Sylhet",
  description: "Discover why SyncIT offers the best internet service in Sylhet. Trusted since 2014. High speed, 24/7 support, and reliable fiber internet for all.",
};


const page = () => {
  return (
    <div className="bg-black">
      <TopBar />
      <Navbar />
      <CommonHeader
        title={"High Speed Internet Packages"}
        header={
          <>
            Choose the Perfect Plan <br /> for Your Needs
          </>
        }
        desc={
          "Confusion! Contact Us – Super Fast Optical Fiber Internet Connectivity is Now on Your Hands. At least try once, you have never experienced it before."
        }
      />
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

import React from "react";
import CommonHeader from "../Components/Common/CommonHeader";
import TopBar from "../Components/Common/Navbar/TopBar";
import Navbar from "../Components/Common/Navbar/Navbar";
import Footer from "../Components/Common/Footer/Footer";
import Testimonial from "../Components/Common/Testimonial/Testimonial";
import CTA from "../Components/Common/CTA";
import HomeInternet from "../Components/Packages/HomeInternet";
import AllPackages from "../Components/Packages/AllPackages";

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

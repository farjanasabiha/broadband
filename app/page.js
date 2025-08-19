"use client";
import { ReactLenis } from "lenis/react";
import HomeHeader from "./Components/Home/HomeHeader";
import HomeSlider from "./Components/Home/Slider/HomeSlider";
import { Network } from "lucide-react";
import Services from "./Components/Home/Services";
import VideoAndServicesOne from "./Components/Home/VideoAndServicesOne";
import VideoAndServicesTwo from "./Components/Home/VideoAndServicesTwo";
import SpeedLanding from "./Components/Home/SpeedLanding";
import HappyClientsSection from "./Components/Home/HappyClientsSection";
import PricingCard from "./Components/Home/PricingCard";
// import TopBar from "./Components/Common/Navbar/TopBar";
// import Navbar from "./Components/Common/Navbar/Navbar";
import Footer from "./Components/Common/Footer/Footer";

import CTA from "./Components/Common/CTA";
import FAQ from "./Components/Common/FAQ";
import SpeedTest from "./Components/Home/SpeedTest";
import Testimonial from "./Components/Home/Testimonial/Testimonial";
export default function Home() {
  return (
    <ReactLenis root data-theme="none">
      <main className="space-y-24 font-sf">
        {/* <TopBar />
        <Navbar /> */}
        <HomeHeader />
        <HomeSlider />
        <SpeedTest />
        <Network />
        <Services />
        <VideoAndServicesOne />
        <VideoAndServicesTwo />
        <SpeedLanding />
        <PricingCard />
        <HappyClientsSection />
        <Testimonial />
        <CTA />
        <FAQ />
        <Footer />
      </main>
    </ReactLenis>
  );
}

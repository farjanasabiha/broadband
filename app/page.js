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
import Footer from "./Components/Common/Footer";
export default function Home() {
  return (
    <ReactLenis root>
      <main className='space-y-20'>
        <HomeHeader />
        <HomeSlider />
        <Network />
        <Services />
        <VideoAndServicesOne/>
        <VideoAndServicesTwo/>
        <SpeedLanding/>
        <HappyClientsSection/>
        <PricingCard/>
        <Footer/>
      </main>
    </ReactLenis>
  );
}
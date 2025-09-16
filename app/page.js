"use client";
import HomeHeader from "./Components/Home/HomeHeader";
import HomeSlider from "./Components/Home/Slider/HomeSlider";
import Network from "./Components/Home/Network";
import Services from "./Components/Home/Services";
import VideoAndServicesOne from "./Components/Home/VideoAndServicesOne";
// import VideoAndServicesTwo from "./Components/Home/VideoAndServicesTwo";
import SpeedLanding from "./Components/Home/SpeedLanding";
import HappyClientsSection from "./Components/Home/HappyClientsSection";
import PricingCard from "./Components/Home/PricingCard";
import TopBar from "./Components/Common/Navbar/TopBar";
import Navbar from "./Components/Common/Navbar/Navbar";
import Footer from "./Components/Common/Footer/Footer";
import CTA from "./Components/Common/CTA";
import FAQ from "./Components/Common/FAQ";
import SpeedTest from "./Components/Home/SpeedTest";
import Testimonial from "./Components/Common/Testimonial/Testimonial";
export default function Home() {
  return (
      <main className="font-sf bg-black">
        <TopBar />
        <Navbar />
        <div className="space-y-24">
          <HomeHeader />
          <HomeSlider />
          <SpeedTest />
          <Network />
          <Services />
          <VideoAndServicesOne />
          {/* <VideoAndServicesTwo /> */}
          <SpeedLanding />
          <PricingCard />
          <HappyClientsSection />
          <Testimonial />
          <CTA />
          <FAQ />
          <Footer />
        </div>
      </main>
  );
}
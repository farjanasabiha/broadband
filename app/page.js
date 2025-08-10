"use client";
import { ReactLenis } from "lenis/react";
import HomeHeader from "./Components/Home/HomeHeader";
import HomeSlider from "./Components/Home/Slider/HomeSlider";
import Network from "./Components/Home/Network";
import Services from "./Components/Home/Services";
import Footer from "./Components/Footer/Footer";
export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <HomeHeader />
        <HomeSlider />
        <Network />
        <Services />
        <Footer/>
      </main>
    </ReactLenis>
  );
}

"use client";
import { ReactLenis } from "lenis/react";
import HomeHeader from "./Components/Home/HomeHeader";
import Navbar from "./Components/Navbar/Navbar";

export default function Home() {
  return (
    <ReactLenis root>
      <Navbar />
      <main>
        <HomeHeader />
      </main>
    </ReactLenis>
  );
}

"use client";
import { ReactLenis } from "lenis/react";
import HomeHeader from "./Components/Home/HomeHeader";
export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <HomeHeader />
      </main>
    </ReactLenis>
  );
}

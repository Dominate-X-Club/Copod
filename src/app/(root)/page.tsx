import React from "react";
import Hero from "./hero/hero";
import LatestSection from "./latest/page";
import Aboutus from "./aboutus/about";
import Features from "./features/features";

function HomePage() {
  return (
    <>
      <Hero />
      <LatestSection />
      <Aboutus />
      <Features />
    </>
  );
}

export default HomePage;

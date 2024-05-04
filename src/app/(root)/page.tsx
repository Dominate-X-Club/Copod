import React from "react";
import Hero from "./hero/hero";
import LatestSection from "./latest/page";
import Aboutus from "./aboutus/about";
import Features from "./features/features";
import HostSection from "./Host";
import Testinomial from "./testimonal/testinomial";

function HomePage() {
  return (
    <>
      <Hero />
      <LatestSection />
      <Aboutus />
      <Features />
      <HostSection />
      <Testinomial />
    </>
  );
}

export default HomePage;

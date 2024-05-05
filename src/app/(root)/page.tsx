import React from "react";
import Hero from "./hero/hero";
import LatestSection from "./latest/page";
import Aboutus from "./aboutus/about";
import Features from "./features/features";
import HostSection from "./Host";
import Testinomial from "./testimonal/testinomial";
import Subscribe from "./subscibe/subscribe";

function HomePage() {
  return (
    <>
      <Hero />
      <LatestSection />
      <Aboutus />
      <Features />
      <HostSection />
      <Testinomial />
      <Subscribe />
    </>
  );
}

export default HomePage;

import React from "react";
import { montserrat } from "../aboutus/about";
import { opensans } from "../aboutus/about";
function Features() {
  return (
    <div className={`${montserrat.className} flex justify-center mt-60`}>
      <div className="w-1/2 text-center grid gap-5">
        <h1 className="font-normal text-[#00ffff] text-sm">FEATURED</h1>
        <p className="text-5xl font-light">
          <span className="font-medium">In the spotlight: </span> Our most
          popular episodes
        </p>
        <p className={`${opensans.className} text-lg font-normal`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}

export default Features;

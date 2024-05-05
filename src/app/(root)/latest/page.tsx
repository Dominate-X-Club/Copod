import { Montserrat } from "next/font/google";
import React from "react";
import Card from "../_components/Card";
const montserrat = Montserrat({
  subsets: ["latin"],
});
function LatestSection() {
  return (
    <div className="flex justify-between gap-20  flex-col lg:flex-row lg:gap-16 ">
      <div className={` ${montserrat.className} flex flex-col gap-5 px-9`}>
        <p className="text-[#00ffff] font-normal">Most recent</p>
        <h1 className=" text-5xl font-light">
          <span className="font-medium">Listen up: </span> Our latest
          discussions
        </h1>
        <p className="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <button
          type="button"
          className="px-8 py-3 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200   md:w-1/2 w-3/4"
        >
          See all Episodes
        </button>
      </div>
      <div className="flex flex-col gap-12 items-center ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default LatestSection;

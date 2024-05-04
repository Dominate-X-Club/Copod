import { Montserrat, Open_Sans } from "next/font/google";
import React from "react";
import { BiCheck } from "react-icons/bi";

export const montserrat = Montserrat({
  subsets: ["latin"],
});

export const opensans = Open_Sans({
  subsets: ["latin"],
});
function Aboutus() {
  return (
    <div className={`flex mt-52 ${montserrat.className} gap-12 px-12`}>
      <div>
        <p className="font-normal text-base text-[#00ffff] mb-4">About us</p>
        <h1 className="text-5xl font-light">
          <span className="font-medium">Our story: </span>We’re more than just
          voices
        </h1>
      </div>
      <div className={`${opensans.className} flex flex-col gap-6 w-3/4`}>
        <p className="font-normal text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex">
            <BiCheck color="#02e2e2" size={28} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="flex">
            <BiCheck color="#02e2e2" size={28} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="flex">
            <BiCheck color="#02e2e2" size={28} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <button
          type="button"
          className="px-8 py-3 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 w-[30%]"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Aboutus;

import Image from "next/image";
import React from "react";
import { montserrat, opensans } from "../aboutus/about";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

function HostSection() {
  return (
    <div className="px-8 lg:mt-32 relative mt-40 ">
      <img
        src={"/host.webp"}
        alt="hostimage"
        className="rounded-3xl opacity-60"
      />
      <div
        className={`${montserrat.className} lg:absolute mt-4  relative lg:top-48 left-6  flex flex-col gap-8 inset-0   lg:px-12 lg:w-1/2`}
      >
        <p className="text-sm ">MEET THE HOST</p>
        <h3 className="text-5xl text-[#00ffff] font-light ">Alex Thompson</h3>
        <p className={`${opensans.className} text-lg `}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex gap-4">
          <FaFacebook color="00ffff" size={20} />
          <FaLinkedin color="00ffff" size={20} />
          <FaTwitter color="00ffff" size={20} />
        </div>
      </div>
    </div>
  );
}

export default HostSection;

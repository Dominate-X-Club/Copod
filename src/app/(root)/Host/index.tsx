"use client";
import React, { useRef } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { montserrat } from "../_components/fonts";
import { Open_Sans } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function HostSection() {
  const HostContainer = useRef<HTMLDivElement | null>(null);
  const HostTl = gsap.timeline({ paused: true });
  useGSAP(() => {
    const Hostelement = HostContainer.current?.querySelector("#host-container");
    if (Hostelement) {
      HostTl.from(
        Hostelement,
        { opacity: 0, y: "5vh", duration: 1.2, ease: "power3.inOut" },
        0
      );
    }

    const timeline = ScrollTrigger.create({
      trigger: HostContainer.current,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
      onEnter: () => HostTl.play(),
    });

    return () => {
      timeline.kill();
    };
  });
  return (
    <div ref={HostContainer}>
      <div className="px-8 md:mt-64 relative mt-40 " id="host-container">
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
          <p className={`${openSans.className} text-lg `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div className="flex gap-4">
            <FaFacebook color="00ffff" size={20} />
            <FaLinkedin color="00ffff" size={20} />
            <FaTwitter color="00ffff" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostSection;

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat, Open_Sans } from "next/font/google";
import React, { useRef } from "react";
import { BiCheck } from "react-icons/bi";

export const montserrat = Montserrat({
  subsets: ["latin"],
});

export const opensans = Open_Sans({
  subsets: ["latin"],
});

function Aboutus() {
  const AboutContainer = useRef<HTMLDivElement | null>(null);
  const AboutTl = gsap.timeline({ paused: true });
  useGSAP(() => {
    const TitleComponent =
      AboutContainer.current?.querySelector("#title-component");
    const ParaComponent =
      AboutContainer.current?.querySelector("#para-component");
    if (TitleComponent && ParaComponent) {
      AboutTl.from(
        TitleComponent,
        {
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
          y: "10vh",
        },
        0
      ).from(
        ParaComponent,
        {
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
          y: "10vh",
        },
        0
      );
    }
    const trigger = ScrollTrigger.create({
      trigger: AboutContainer.current,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
      onEnter: () => AboutTl.play(),
    });

    return () => {
      trigger.kill();
    };
  });
  return (
    <div
      className={`flex mt-52 ${montserrat.className} gap-12 md:px-12 lg:flex-row flex-col px-4`}
      ref={AboutContainer}
    >
      <div id="title-component">
        <p className="font-normal text-base text-[#00ffff] mb-4">About us</p>
        <h1 className="text-5xl font-light">
          <span className="font-medium">Our story: </span>We’re more than just
          voices
        </h1>
      </div>
      <div
        className={`${opensans.className} flex flex-col gap-6 md:w-3/4 w-full`}
        id="para-component"
      >
        <p className="font-normal text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex lg:gap-0 gap-4">
            <BiCheck color="#02e2e2" size={28} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="flex  lg:gap-0 gap-4">
            <BiCheck color="#02e2e2" size={28} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="flex  lg:gap-0 gap-4">
            <BiCheck color="#02e2e2" size={28} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <button
          type="button"
          className="px-8 py-3 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 md:w-[40%] w-9/12"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Aboutus;

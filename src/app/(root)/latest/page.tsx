"use client";
import { Montserrat } from "next/font/google";
import React, { useRef } from "react";
import Card from "../_components/Card";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
const montserrat = Montserrat({
  subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

function LatestSection() {
  const LatestContainer = useRef<HTMLDivElement | null>(null);
  const LatestTl = gsap.timeline({ paused: true });

  useGSAP(() => {
    const TextContainer =
      LatestContainer.current?.querySelector("#text-container");
    const CardContainer =
      LatestContainer.current?.querySelector("#card-container");
    if (TextContainer && CardContainer) {
      LatestTl.from(
        TextContainer,
        { opacity: 0, duration: 1.5, ease: "power3.out", y: "5vw" },
        0
      ).from(
        CardContainer,
        { opacity: 0, duration: 1.5, ease: "power3.out", y: "5vw" },
        0
      );
    }

    const trigger = ScrollTrigger.create({
      trigger: LatestContainer.current,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
      onEnter: () => LatestTl.play(),
    });

    return () => {
      trigger.kill();
    };
  }, []);
  return (
    <div
      className="flex justify-between gap-20  flex-col lg:flex-row lg:gap-16 "
      ref={LatestContainer}
    >
      <div
        className={` ${montserrat.className} flex flex-col gap-5 px-9`}
        id="text-container"
      >
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
      <div className="flex flex-col gap-12 items-center " id="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default LatestSection;

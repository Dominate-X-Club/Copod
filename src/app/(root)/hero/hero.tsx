/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import { HeroSection } from "@/lib/constant";
import { montserrat } from "../navbar/navbar";
import { Open_Sans } from "next/font/google";
import Button from "../_components/Button";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

function Hero() {
  useGSAP(() => {
    gsap.from(".title", {
      opacity: 0,
      y: "2vw",

      delay: 1,
    });
    gsap.from(".para", {
      opacity: 0,
      y: "2vw",

      delay: 1,
    });
    gsap.from(".btn", {
      opacity: 0,
      y: "3vw",

      delay: 1,
    });
    gsap.from(".music", {
      opacity: 0,
      y: "3vw",

      delay: 1,
    });
  });
  return (
    <div className=" flex lg:flex-row flex-col ">
      <div className="lg:w-1/2 flex flex-col gap-8 sm:px-10 px-6 translate-y-20">
        <h1 className="sm:text-6xl font-thin text-4xl title">
          It’s time to
          <span className={` ${montserrat.className}`}> talk business.</span>
        </h1>
        <p className={`${openSans.className} md:w-2/3 para`}>
          {HeroSection.para}
        </p>
        <div className="flex sm:flex-row gap-4 flex-col btn">
          <button
            type="button"
            className="px-8 py-3 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
          >
            Latest Button
          </button>
          <button
            type="button"
            className="  shadow-[inset_0_0_0_2px_#616467] px-8 py-3 rounded-full tracking-widest   bg-transparent hover:border-blue-400 hover:text-blue-400 dark:text-neutral-200 transition duration-200  "
          >
            Subscibe
          </button>
        </div>
        <div className="flex gap-4 mt-6 z-50 music">
          <h2>Listen on</h2>
          <Image width={30} height={30} src="spotify.svg" alt="spotify-logo" />
          <Image
            width={30}
            height={30}
            src="podcast-manager.svg"
            alt="podcast-logo"
          />
          <Image
            width={30}
            height={30}
            src="soundcloud.svg"
            alt="soundcloud-logo"
          />
          <Image
            width={30}
            height={30}
            src="pocketcast.svg"
            alt="spotify-logo"
          />
        </div>
      </div>
      <div className="">
        <div className="relative z-20 overflow-hidden">
          <img
            src={"/mic.jpg"}
            alt="mic.jpg"
            className="w-full h-full z-10 sm:translate-y-[-34em] translate-y-[-13em] lg:translate-y-[-14em]"
          />
          <div className="absolute inset-0 mic-gradient"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

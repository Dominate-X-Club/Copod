"use client";
import { useRef, useEffect } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { LiaLinkedin } from "react-icons/lia";
import { footerSection } from "@/lib/constant";
import { montserrat } from "../aboutus/about";

interface MouseEvent {
  movementY: number;
  clientX: number;
}

export default function Line() {
  // Define a reference to an SVGPathElement
  const path = useRef<SVGPathElement>(null);

  // Initialize progress, x, time, and reqId variables
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;

  // Use the useEffect hook to set the path on component mount
  useEffect(() => {
    setPath(progress);
  }, []);

  // Define a function to set the path of the SVG element
  const setPath = (progress: number) => {
    // Get the width of the window
    const width = window.innerWidth * 1;

    // Set the "d" attribute of the SVG path element using a quadratic Bézier curve
    path.current?.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  // Define a linear interpolation function
  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  // Define a function to handle mouse enter events
  const manageMouseEnter = () => {
    // If there is an animation frame request, cancel it and reset the animation
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  // Define a function to handle mouse move events
  const manageMouseMove = (e: MouseEvent) => {
    // Get the movementY and clientX properties from the event object
    const { movementY, clientX } = e;

    // Get the bounding rectangle of the SVG path element
    const pathBound = path.current?.getBoundingClientRect();

    // If the bounding rectangle exists, update x and progress and set the path
    if (pathBound) {
      x = (clientX - pathBound.left) / pathBound.width;
      progress += movementY;
      setPath(progress);
    }
  };

  // Define a function to handle mouse leave events
  const manageMouseLeave = () => {
    // Start animating out
    animateOut();
  };

  // Define a function to animate out
  const animateOut = () => {
    // Calculate newProgress using sine of time
    const newProgress = progress * Math.sin(time);

    // Update progress using linear interpolation towards zero
    progress = lerp(progress, 0, 0.025);

    // Increment time by 0.2
    time += 0.2;

    // Set the path using newProgress
    setPath(newProgress);

    // If progress is greater than a threshold, request another animation frame,
    // otherwise reset the animation.
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  // Define a function to reset the animation variables
  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className={`flex flex-col items-end   ${montserrat.className}`}>
      <div className="relative w-full h-px mb-5">
        <div
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseMove={(e) => {
            manageMouseMove(e);
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          className="relative z-10 h-10 w-full top-[-40px]"
        ></div>
        <svg className="absolute w-full h-[500px] top-[-250px]">
          <path
            ref={path}
            className="stroke-current text-white stroke-[1px] fill-none"
          ></path>
        </svg>
      </div>
      <div className="flex gap-96 mt-12">
        <div className="flex flex-col gap-8">
          <img
            src="https://assets-global.website-files.com/64d34f2a6cc55497367eda5e/64d650ff27f1ba5ba5e5741b_Group%201.svg"
            alt=""
          />
          <div className="flex gap-4">
            <FaFacebook size={23} />
            <ImInstagram size={23} />
            <FaTwitter size={23} />
            <LiaLinkedin size={23} />
          </div>
        </div>
        <div className="flex gap-12">
          <ul className="font-medium flex flex-col gap-3  ">
            Main Pages
            {footerSection[0].Mainpages.map((list, index) => (
              <li key={index} className="text-sm">
                {list}
              </li>
            ))}
          </ul>
          <ul className="font-medium flex flex-col gap-3  ">
            Utility pages
            {footerSection[0].utility.map((list, index) => (
              <li key={index} className="text-sm">
                {list}
              </li>
            ))}
          </ul>
          {/* <div className="flex flex-col gap-2 font-medium">
            Listen on
            <ul className="flex gap-2 text-sm">
              <img src="/pocketcast.svg" alt="" />
              <li>Spotify</li>
            </ul>
          </div> */}
          <div className="flex flex-col gap-5">
            Listen on
            {footerSection[0].Listen[0].url.map((url, index) => (
              <>
                <div className="flex  gap-7 font-medium">
                  <ul className="flex text-sm gap-3" key={index}>
                    <img src={url} alt="a" />
                    <li>{footerSection[0].Listen[0].musicapp[index]}</li>
                  </ul>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

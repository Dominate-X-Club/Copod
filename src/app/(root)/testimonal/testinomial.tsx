"use client";
import React, { useRef } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { montserrat } from "../_components/fonts";
import { Open_Sans } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const dummyItems = [
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Alex Bennett ",
    title: "scammer",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Alex Bennett ",
    title: "CEO, LeeTech Solutions    ",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Alex Bennett ",
    title: "CEO, LeeTech Solutions    ",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Alex Bennett ",
    title: "CEO, LeeTech Solutions",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Alex Bennett ",
    title: "CEO, LeeTech Solutions    ",
  },
];

function Testinomial() {
  const TestinomialContainer = useRef<HTMLDivElement | null>(null);
  const TestimonialTl = gsap.timeline({ paused: true });

  useGSAP(() => {
    const TestimonialElement = TestinomialContainer.current?.querySelector(
      "#testimonial-element"
    );

    if (TestimonialElement) {
      TestimonialTl.from(
        TestimonialElement,
        { opacity: 0, duration: 1.5, ease: "power3.out", y: "5vw" },
        0
      );
    }

    const trigger = ScrollTrigger.create({
      trigger: TestinomialContainer.current,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
      onEnter: () => TestimonialTl.play(),
    });

    return () => {
      trigger.kill();
    };
  }, []);
  return (
    <div ref={TestinomialContainer}>
      <div
        id="testimonial-element"
        className={`${montserrat.className} md:w-[60%] md:px-12 flex gap-5 flex-col mt-36 px-6`}
      >
        <p className="text-sm text-[#00ffff]">TESTIMONIALS</p>
        <h2 className="text-5xl font-medium">
          In their words:
          <span className="font-light"> What our listeners say</span>
        </h2>
        <p className={`${openSans.className} text-lg `}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <InfiniteMovingCards items={dummyItems} />
    </div>
  );
}

export default Testinomial;

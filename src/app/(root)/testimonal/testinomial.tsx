import React from "react";
import { montserrat, opensans } from "../aboutus/about";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

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
  return (
    <div>
      <div
        className={`${montserrat.className} w-[60%] px-12 flex gap-5 flex-col mt-36`}
      >
        <p className="text-sm text-[#00ffff]">TESTIMONIALS</p>
        <h2 className="text-5xl font-medium">
          In their words:
          <span className="font-light"> What our listeners say</span>
        </h2>
        <p className={`${opensans.className} text-lg `}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <InfiniteMovingCards items={dummyItems} />
    </div>
  );
}

export default Testinomial;

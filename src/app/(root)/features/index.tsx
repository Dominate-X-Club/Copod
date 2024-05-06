"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { montserrat, opensans } from "../aboutus/about";
import { FaCirclePlay } from "react-icons/fa6";

interface CardProps {
  EPISODE: string;
  title: string;
  description: string;
  src: string;
  name: string;
  profession: string;
  banner: string;
  progress: any;
  range: any;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  targetScale: number;
  i: number;
  url?: string;
}
const Card: React.FC<CardProps> = ({
  EPISODE,
  i,
  title,
  description,
  name,
  profession,
  banner,
  flexDirection,
  progress,
  range,
  src,
  targetScale,
  url,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className={`${styles.cardContainer} ${montserrat.className}`}
    >
      <motion.div
        style={{
          backgroundColor: "#111111",

          scale,
        }}
        className="flex relative lg:top-[-20%] lg:gap-9 w-[1200px] border border-solid border-[#888888] rounded-3xl p-12  lg:flex-row flex-col-reverse origin-top	mb-20` "
        id="card-container"
      >
        <div
          className={"flex lg:gap-4 flex-col lg:w-1/2 top-16 relative h-full"}
        >
          <h2 className="text-sm ">{EPISODE}</h2>
          <p className="text-4xl text-[#00ffff]">{title}</p>
          <div className={styles.description}>
            <p className="text-base font-medium">{description}</p>
          </div>

          <div className="flex gap-4 mb-6 sm:mb-0 ">
            <img src={"64df5b9207e6565f76538a08_1.png"} alt="image" />
            <div className={`${opensans.className}`}>
              <p className="text-sm text-[#00ffff]"> {name}</p>
              {profession}
            </div>
          </div>

          <button
            type="button"
            className="px-8 py-3 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200  lg:w-[40%] w-10/12 mb-6 lg::mb-0"
          >
            Play Episode
          </button>
        </div>
        <div className="relative">
          <motion.div>
            <img
              src={`/${banner}`}
              alt="image"
              className="h-full w-full rounded-xl"
              id="music-img"
            />

            <FaCirclePlay
              size={55}
              id="play"
              className="absolute top-52 left-52 hidden "
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;

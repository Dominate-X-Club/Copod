import { PlayCircle } from "lucide-react";
import { Montserrat } from "next/font/google";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const montserrat = Montserrat({
  subsets: ["latin"],
});

function Card() {
  return (
    <>
      <div
        className={`bg-[#1D1D1D] rounded-2xl gap-4  ${montserrat.className} flex p-6 w-4/5 relative cursor-pointer `}
        id="card-container"
      >
        <div>
          <img
            src="/Tile-13-min.jpg"
            id="music-img"
            alt="23min"
            className="rounded-3xl w-11/12  "
          />

          <FaCirclePlay
            className="absolute top-[6.5rem] left-[6.5rem] hidden"
            id="play"
            size={43}
          />
        </div>
        <div className="flex-col gap-2 flex">
          <p className="font-light">EPISODE 126</p>
          <h2 className="text-[#00ffff] text-2xl">From bytes to business</h2>
          <p className="font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <div className="flex gap-2">
            <div>
              <img src="1.png" alt="1" />
            </div>
            <div className="text-sm font-medium">
              <span className="text-sm text-[#00ffff]">
                With Sarah Johnson <br />
              </span>
              InnovateTech Founder & CEO
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

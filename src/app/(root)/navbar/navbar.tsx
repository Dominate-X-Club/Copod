import Image from "next/image";
import React from "react";
import Button from "../_components/Button";
import { NavLink } from "@/lib/constant";
import { Montserrat } from "next/font/google";
export const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between sm:px-12 px-5 py-4">
        <Image
          width={150}
          height={10}
          src={"logo_main.svg"}
          alt="logo"
          className="w-2/6 sm:w-[10%]"
        />
        <div className="hidden md:block">
          <ul className={`flex lg:gap-14 gap-12 ${montserrat.className}`}>
            {NavLink.map((list, index) => (
              <li className="hover:underline cursor-pointer" key={index}>
                {list}
              </li>
            ))}
          </ul>
        </div>
        <Button text="Dashboard" />
      </nav>
    </>
  );
}

export default Navbar;

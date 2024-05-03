"use client";
import React from "react";
import copodlogo from "../../app/copodlogo.jpeg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <nav className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-8 mx-6 relative z-10">
        <div className="flex-shrink-0">
          <Image
            className="md:h-30 md:w-100 h-26 w-56 rounded-xl"
            src={copodlogo}
            alt=""
          />
        </div>
        <div className="flex md:mt-0 mt-4 md:space-x-6 md:flex-row flex-col items-center">
          <NavItem>About</NavItem>
          <NavItem>Contact Us</NavItem>
        </div>
        <div className="flex md:mt-0 mt-4 md:space-x-6 md:flex-row flex-col items-center">
          <NavItem>Login</NavItem>
          <NavItem>SignUp</NavItem>
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ children }) => {
  return (
    <div className="relative group">
      <div className="text-gray-700 cursor-pointer transition duration-300 ease-in-out transform hover:text-gray-900 hover:scale-110 rounded-full p-2 hover:bg-blue-500">
        {children}
      </div>
    </div>
  );
};

export default Navbar;

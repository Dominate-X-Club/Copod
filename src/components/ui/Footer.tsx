import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Connect with Us</h2>
          <div className="flex mt-2">
            <Link href="#">
              <i className="fab fa-twitter mr-4 hover:text-blue-500 transition-colors duration-300"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-facebook mr-4 hover:text-blue-500 transition-colors duration-300"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-instagram hover:text-blue-500 transition-colors duration-300"></i>
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-600 w-full"></div>
        <div className="flex mt-4">
          <p className="mr-6">© 2024 Copod. All Rights Reserved.</p>
          <Link href="/privacy-policy">
            <span className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

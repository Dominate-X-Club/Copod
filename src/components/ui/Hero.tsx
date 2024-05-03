import React from "react";
import pod1 from "../../../public/podimg.jpeg";
import pod2 from "../../../public/podimg2.jpeg";
import pod3 from "../../../public/podimg3.jpeg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="mt-6 md:mt-12">
        <div className="text-center text-2xl md:text-4xl font-bold text-blue-700">
          Welcome to Copod - Your Managed Podcast Recording Studio
        </div>
        <div className="text-center mt-4 md:text-lg text-gray-600">
          Copod is a managed podcast recording studio, situated on West End
          Marg, New Delhi. Our main focus is hospitality and quality of the
          podcast recording. A host doesn't have to spend lakhs in buying all
          the mic, camera, lights, mixers and what not. Neither do they need a
          space, sofa, ambience, and an attendant. Copod has got them covered!
        </div>
        <div className="flex justify-center mt-6">
          {/* Placeholder for Image Section */}
          <div className="flex flex-wrap justify-center">
            {/* Image Placeholder */}
            <div className="m-4 rounded-lg overflow-hidden shadow-md">
              <Image
                src={pod1}
                alt="Podcast Studio"
                className="w-full h-auto"
              />
            </div>
            {/* Image Placeholder */}
            <div className="m-4 rounded-lg overflow-hidden shadow-md">
              <Image
                src={pod2}
                alt="Podcast Studio"
                className="w-full h-auto"
              />
            </div>
            {/* Image Placeholder */}
            <div className="m-4 rounded-lg overflow-hidden shadow-md">
              <Image
                src={pod3}
                alt="Podcast Studio"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            Book Your Session Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

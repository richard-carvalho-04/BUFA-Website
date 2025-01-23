import React, { useState, useEffect } from "react";
import { Sticky } from "../Sticky_scroll/Sticky";
import { FlipWords } from "../Flip_Words/FlipWords";

export default function Home() {
  const images = [
    "/images/bufa_bg.png",
    "/images/teampic.png",
    "/images/teampic2.png",
  ]; // Array of image paths

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="mx-auto w-full ">
      {/* Background Image */}
      <img
        src={images[currentImageIndex]}
        className="w-full h-[655px] object-cover"
        alt="Background"
      />
    
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8 ">
        {/* Text Content */}
        <div className="text-center w-full ">
          <FlipWords/>
          {/* <h1 className="text-6xl ml-8 font-extrabold text-gray-800">Welcome to BUFA</h1>
          <p className="text-2xl ml-8 mt-4 text-gray-600">
            Explore opportunities, connect with the best, and unleash your potential.
          </p> */}
        </div>

        {/* Video Reel */}
        <div className="w-full md:mr-52 px-4 md:px-0 md:w-1/4 mt-8 flex justify-center md:flex-none">
          <video
            src="/videos/bufareel.mp4"
            autoPlay
            loop
            muted
            className="w-fit h-[600px] object-contain rounded-lg shadow-lg"
          ></video>
        </div>
      </div>
      <div>
        <Sticky/>
      </div>

    </div>   
  );
};

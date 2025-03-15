import React from "react";
import versace from "../assets/versace.png";
import zara from "../assets/versace.png";
import gucci from "../assets/versace.png";
import prada from "../assets/versace.png";
import calvinklien from "../assets/versace.png";
import Marquee from "react-marquee-slider";

const Slider = () => {
  const images = [versace, zara, gucci, prada, calvinklien];
  return (
    <div className="py-3 bg-black">
      <Marquee
        velocity={12}
        resetAfterTries={200}
        scatterRandomly={false}
        direction="rtl"
        onInit={() => console.log("Marquee Initialized")}
        onFinish={() => console.log("Marquee Finished")}
      >
        {images.map((image, index) => (
          <div key={index} className="text-black flex items-center gap-1 py-2">
            <img src={image} alt="" className="w-[120px]" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;

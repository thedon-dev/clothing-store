import React from "react";
import versace from "../../assets/versace.png";
import zara from "../../assets/zara-logo-1 1.png";
import gucci from "../../assets/gucci_logo.png";
import prada from "../../assets/prada_logo.png";
import calvinklien from "../../assets/calvin-klein.png";
import Marquee from "react-marquee-slider";

const Slider = () => {
  const images = [versace, zara, gucci, prada, calvinklien];
  return (
    <div className="py-3 bg-black ">
      <div className="lg:hidden">
        <Marquee
          velocity={20}
          resetAfterTries={200}
          scatterRandomly={false}
          direction="rtl"
          onInit={() => console.log("Marquee Initialized")}
          onFinish={() => console.log("Marquee Finished")}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="text-black flex items-center py-2 px-10 my-auto"
            >
              <img src={image} alt="" className="w-[120px]" />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="px-[5%] lg:px-[8%]">
        <div className="2xl:container mx-auto lg:flex items-center flex-wrap justify-around hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className="text-black flex items-center py-2 my-auto"
            >
              <img src={image} alt="" className="w-[100px] lg:w-[120px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

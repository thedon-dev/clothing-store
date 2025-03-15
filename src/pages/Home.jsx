import React from "react";
import { Link } from "react-router-dom";
import star from "../assets/Star.png";
import model from "../assets/shopping_illustration.png";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <main className="bg-[#f2f0f1] px-[5%] lg:px-[8%] py-20 lg:py-28">
        <div className="2xl:container mx-auto relative flex">
          <div className="lg:w-3/5">
            <h1 className="upppercase text-5xl lg:text-7xl font-bold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-lg mt-5">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div className="mt-8">
              <Link
                to="/shop"
                className="bg-black px-14 py-3 text-lg text-white rounded-full"
              >
                Shop Now
              </Link>
            </div>
            <div className="flex gap-10 mt-14 flex-wrap justify-center lg:justify-start">
              <div className="text-center">
                <h3 className="font-semibold text-3xl lg:text-4xl">200+</h3>
                <p className="text-gray-600 mt-1">International Brands</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-3xl lg:text-4xl">2,000+</h3>
                <p className="text-gray-600 mt-1">High-Quality Products</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-3xl lg:text-4xl">30,000+</h3>
                <p className="text-gray-600 mt-1">Happy Customers</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={star}
              alt=""
              className="w-[50px] h-[50px] absolute left-0 lg:left-2/3 top-[450px] lg:top-1/3"
            />
            <img
              src={star}
              alt=""
              className="w-[80px] h-[80px] absolute right-10 top-[500px] hidden lg:block lg:-top-10"
            />
          </div>
        </div>
      </main>
      <Slider />
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import star from "../assets/Star.png";
import model from "../assets/shopping_illustration.png";
import Slider from "../components/Slider";
import Product from "../components/Product";
import capPic from "../assets/CapPic.jpg";
import Hoodie from "../assets/HoodiePic.jpg";
import Jersey from "../assets/JerseyPic.jpg";

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
      <section className="px-[5%] lg:px-[10%] py-20 lg:py-32">
        <div className="2xl:container mx-auto">
          <h1 className="uppercase text-4xl lg:text-5xl font-bold text-center">
            New Arrivals
          </h1>
          <div className="mt-20">
            <div className="flex justify-between flex-col lg:flex-row gap-y-10">
              <Product
                image={capPic}
                name={"Bucket Hat"}
                rating={3.5}
                price={2000}
                discountPrice={0}
              />
              <Product
                image={Hoodie}
                name={"Hoodies"}
                rating={4.5}
                price={8000}
                discountPrice={6000}
              />
              <Product
                image={Jersey}
                name={"Jersey"}
                rating={3}
                price={4000}
                discountPrice={0}
              />
            </div>
          </div>
          <div className="mt-20 flex justify-center">
            <Link
              to="/newarrivals"
              className="px-10 py-2 rounded-full border border-black text-lg font-semibold"
            >
              View All{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

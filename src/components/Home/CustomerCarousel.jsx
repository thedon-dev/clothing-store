import React, { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Marquee from "react-marquee-slider";

const Review = ({ data, setCarouselSpeed }) => {
  const fullStars = Math.floor(data.rating);
  const hasHalfStar = data.rating % 1 !== 0;

  return (
    <div
      className="p-8"
      onMouseEnter={() => setCarouselSpeed(0)}
      onMouseLeave={() => setCarouselSpeed(20)}
    >
      <div className="border rounded-md p-5 w-[20rem] h-[13rem]">
        <div className="flex">
          {Array(fullStars)
            .fill()
            .map((_, i) => (
              <FaStar key={`full-${i}`} className="text-yellow-500" />
            ))}
          {hasHalfStar && <FaStarHalf className="text-yellow-500" />}
        </div>
        <div>
          <h3 className="font-semibold my-2 text-lg">{data.name}</h3>
        </div>
        <p className="italic text-sm">"{data.review}"</p>
      </div>
    </div>
  );
};

const CustomerCarousel = () => {
  const [carouselSpeed, setCarouselSpeed] = useState(20);
  const reviews = [
    {
      name: "David N.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      rating: 4,
    },
    {
      name: "Sarah T.",
      review:
        "Shop.co has completely changed my shopping experience! The website is easy to navigate, and the product quality is top-notch. Fast shipping and amazing customer service make it my go-to store!",
      rating: 5,
    },
    {
      name: "Michael R.",
      review:
        "I love the variety of trendy fashion items available at Shop.co! The prices are reasonable, and I always find exactly what I need. My only wish is for even more payment options!",
      rating: 4,
    },
    {
      name: "Jessica L.",
      review:
        "Shop.co never disappoints! The discounts and exclusive deals keep me coming back. Plus, the seamless checkout process makes online shopping effortless!",
      rating: 4,
    },
    {
      name: "Daniel K.",
      review:
        "The customer support at Shop.co is fantastic! I had an issue with my order, and they resolved it quickly. The only improvement I’d suggest is more size options for some clothing items.",
      rating: 3.5,
    },
    {
      name: "Emily S",
      review:
        "I was skeptical about online shopping, but Shop.co proved me wrong! The product descriptions are accurate, and what I received was exactly what I expected. Looking forward to more collections!",
      rating: 5,
    },
  ];

  return (
    <div>
      <Marquee
        velocity={carouselSpeed}
        direction="rtl"
        scatterRandomly={false}
        onInit={() => console.log("Marquee Initialized")}
        onFinish={() => console.log("Marquee Finished")}
      >
        {reviews.map((review, index) => (
          <Review
            key={index}
            data={review}
            setCarouselSpeed={setCarouselSpeed}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default CustomerCarousel;

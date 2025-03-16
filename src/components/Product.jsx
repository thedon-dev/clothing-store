import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import capPic from "../assets/CapPic.jpg";

const Product = ({ name, rating, price, discountPrice, image }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const discountPercentage = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;
  return (
    <div className="">
      <div className="w-full lg:w-[350px] h-[350px] overflow-hidden rounded">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="mt-3">
        <h4 className="font-semibold text-xl">{name}</h4>
        <div className="flex gap-1 items-center my-2">
          <div className="flex">
            {Array(fullStars)
              .fill()
              .map((_, i) => (
                <FaStar key={`full-${i}`} className="text-yellow-500" />
              ))}
            {hasHalfStar && <FaStarHalf className="text-yellow-500" />}
          </div>
          <p className="text-xs">{rating}/5</p>
        </div>
        <div className="flex items-center gap-2">
          {discountPrice ? (
            <>
              <span className="text-red-500 font-bold">NGN{discountPrice}</span>
              <span className="text-gray-500 line-through">NGN{price}</span>
              <span className="text-green-500 text-sm font-semibold">
                ({discountPercentage}% Off)
              </span>
            </>
          ) : (
            <h4 className="font-bold">NGN{price}</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

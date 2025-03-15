import React, { useState } from "react";
import { BiCart, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaBarsProgress, FaBarsStaggered } from "react-icons/fa6";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: "Electronics", path: "/category/electronics" },
    { name: "Clothing", path: "/category/clothing" },
    { name: "Accessories", path: "/category/accessories" },
    { name: "Shoes", path: "/category/shoes" },
    { name: "Books", path: "/category/books" },
  ];
  const links = [
    {
      name: "On Sale",
      path: "/onsale",
    },
    {
      name: "New Arrivals",
      path: "/newarrivals",
    },
    {
      name: "Brands",
      path: "/brands",
    },
  ];

  const showDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setDropDownOpen(false);
  };
  return (
    <nav className="px-[5%] lg:px-[8%] py-5">
      <div className="2xl:container mx-auto flex">
        <div>
          <Link to="/" className="font-extrabold text-4xl uppercase">
            Shop.Co
          </Link>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-5 justify-center flex-grow">
            <div className="relative">
              <button
                className="flex items-center gap-2 cursor-pointer px-2 py-1"
                onClick={showDropDown}
              >
                <p>Shop</p>
                {!dropDownOpen ? <FaAngleDown /> : <FaAngleUp />}
              </button>
              {/* DropDown */}
              {dropDownOpen && (
                <div className="absolute w-fit -left-10 top-14 border ">
                  {categories.map((lnk, idx) => (
                    <div
                      key={idx}
                      className="p-3 px-7 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleNavigate(lnk.path)}
                    >
                      {lnk.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {links.map((lnk, idx) => (
              <Link key={idx} className="" to={lnk.path}>
                {lnk.name}
              </Link>
            ))}
            <div className="flex gap-3 items-center bg-gray-300 py-2 px-4 rounded-full w-1/2">
              <BiSearch color="gray" />
              <input
                type="text"
                placeholder="Search For Product"
                className="focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <Link to="" className="">
              <BiCart className="w-[30px] h-[30px]" />
            </Link>
            <Link to="" className="">
              <CgProfile className="w-[25px] h-[25px]" />
            </Link>
          </div>
        </div>

        <div className="lg:hidden">
          <HiBars3BottomLeft size={45} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

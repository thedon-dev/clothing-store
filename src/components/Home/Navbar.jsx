import React, { useState } from "react";
import { BiCart, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

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
      <div className="2xl:container mx-auto flex justify-between">
        <div>
          <Link to="/" className="font-extrabold text-3xl uppercase">
            Shop.Co
          </Link>
        </div>
        <div
          className={`${
            navOpen ? "left-0" : "-left-[100%] lg:left-0"
          } top-0 bg-white h-screen lg:h-fit w-2/3 px-8 lg:px-0 fixed lg:relative flex flex-col lg:flex-row lg:w-full justify-center lg:justify-between lg:items-center z-50 transition-all duration-300`}
        >
          <h2 className="font-extrabold text-4xl uppercase text-start lg:hidden">
            Shop.Co
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-5 justify-center lg:flex-grow mt-10 lg:mt-0">
            <div className="relative">
              <button
                className="flex items-center gap-5 lg:gap-2 cursor-pointer w-full lg:px-2 py-1"
                onClick={showDropDown}
              >
                <p className="">Shop</p>
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
              <Link
                key={idx}
                className="w-full lg:w-fit py-2 lg:py-0"
                to={lnk.path}
              >
                {lnk.name}
              </Link>
            ))}
            <div className="flex gap-1 items-center bg-gray-300 py-2 px-4 rounded-full w-full lg:w-1/2">
              <BiSearch color="gray" />
              <input
                type="text"
                placeholder="Search For Product"
                className="focus:outline-none w-full text-sm lg:text-base"
              />
            </div>
          </div>
          <div className="flex gap-5 items-center mt-10 lg:mt-0">
            <Link to="" className="">
              <BiCart className="w-[30px] h-[30px]" />
            </Link>
            <Link to="" className="">
              <CgProfile className="w-[25px] h-[25px]" />
            </Link>
          </div>
        </div>

        <button
          className="lg:hidden cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          <HiBars3BottomLeft size={45} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

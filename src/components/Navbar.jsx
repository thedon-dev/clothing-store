import React, { useEffect, useRef, useState } from "react";
import { BiCart, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import NavigationPointer from "./NavigationPointer";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

  const navRef = useRef();

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navOpen]);

  const handleOutsideClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    if (navOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navOpen]);

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
    <>
      <nav className="px-[5%] lg:px-[8%] py-5 z-50">
        {navOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md transition-all duration-300 z-30"></div>
        )}
        <div className="2xl:container mx-auto flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="font-extrabold text-2xl lg:text-3xl uppercase"
            >
              Shop.Co
            </Link>
          </div>
          <div
            ref={navRef}
            className={`${
              navOpen ? "left-0" : "-left-[100%] lg:left-0"
            } top-0 bg-white h-screen lg:h-fit w-2/3 px-5 lg:px-0 fixed lg:relative flex flex-col lg:flex-row lg:w-full justify-center lg:justify-between lg:items-center z-50 transition-all duration-300 bg-50`}
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
                  <div className="absolute w-fit lg:-left-10 top-14 border bg-white">
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
            </div>
          </div>
          <div className="flex gap-4 items-center ms-auto me-5">
            <div className="flex gap-1 items-center rounded-full lg:w-1/2">
              <BiSearch color="black" className="rounded-full" size={30} />
              <input
                type="text"
                placeholder="Search For Product"
                className="focus:outline-none w-full text-sm lg:text-base hidden"
              />
            </div>
            <Link to="/cart" className="">
              <BiCart className="w-[30px] h-[30px]" />
            </Link>
            <Link to="/profile" className="">
              <CgProfile className="w-[25px] h-[25px]" />
            </Link>
          </div>
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setNavOpen(!navOpen)}
          >
            <HiBars3BottomLeft size={40} />
          </button>
        </div>
      </nav>
      <NavigationPointer />
    </>
  );
};

export default Navbar;

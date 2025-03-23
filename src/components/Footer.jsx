import React from "react";
import { BiMessage } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { FaCcMastercard, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { RiMastercardFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      name: "Company",
      links: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Features",
          link: "/features",
        },
        {
          name: "Works",
          link: "/works",
        },
        {
          name: "Career",
          link: "/career",
        },
      ],
    },
    {
      name: "Help",
      links: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Features",
          link: "/features",
        },
        {
          name: "Works",
          link: "/works",
        },
        {
          name: "Career",
          link: "/career",
        },
      ],
    },
    {
      name: "FAQs",
      links: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Features",
          link: "/features",
        },
        {
          name: "Works",
          link: "/works",
        },
        {
          name: "Career",
          link: "/career",
        },
      ],
    },
    {
      name: "Resources",
      links: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Features",
          link: "/features",
        },
        {
          name: "Works",
          link: "/works",
        },
        {
          name: "Career",
          link: "/career",
        },
      ],
    },
  ];
  return (
    <footer className="relative mt-20 lg:mt-0 pt-60 lg:pt-48 pb-20 px-[5%] lg:px-[10%] bg-[#f0f0f0]">
      <div className="absolute w-[90%] lg:w-[80%] rounded-lg text-white bg-black flex flex-col lg:flex-row -top-24 p-8 lg:p-10 justify-between">
        <h1 className="uppercase text-2xl lg:text-5xl font-bold lg:w-2/3">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex flex-col gap-3 mt-5 lg:mt-0 lg:w-1/3">
          <div className="bg-white rounded-full flex gap-3 items-center p-3">
            <div>
              <FiMail color="black" />
            </div>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="text-black focus:outline-none"
            />
          </div>

          <button className=" bg-white text-black rounded-full p-3 font-semibold">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="lg:w-2/5">
          <h1 className="uppercase text-5xl font-extrabold">Shop.Co</h1>
          <p className="mt-3">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3 mt-5">
            <Link>
              {" "}
              <FaXTwitter size={25} />
            </Link>
            <Link>
              <FaFacebookF size={25} />
            </Link>
            <Link>
              <FaInstagram size={25} />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
          {footerLinks.map((linkSection, index) => (
            <div key={index} className="lg:mx-auto mt-10">
              <h1 className="text-xl font-semibold">{linkSection.name}</h1>
              <div className="flex flex-col gap-3 mt-3">
                {linkSection.links.map((link, index) => (
                  <Link key={index} to={link.link}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t pt-8 flex flex-col lg:flex-row justify-between items-center mt-10">
        <p className="text-sm">Shop.co © 2000-2025, All Rights Reserved</p>
        <div className="flex gap-3 mt-3 lg:mt-0">
          <FaCcMastercard color="red" className="w-[50px] h-[50px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

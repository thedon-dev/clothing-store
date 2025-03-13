import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-[5%] lg:px-[10%] py-5">
      <div className="2xl:container mx-auto">
        <div>
          <Link className="font-extrabold text-4xl uppercase">Shop.Co</Link>
        </div>
        <div>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

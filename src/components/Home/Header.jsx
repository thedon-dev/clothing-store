import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="text-xs lg:text-sm flex justify-center py-1 w-full gap-1">
        <p className="text-center">
          Sign up and get 20% off to your first order.
        </p>
        <Link to="/signup" className="underline">
          Sign Up Now
        </Link>
      </div>
    </header>
  );
};

export default Header;

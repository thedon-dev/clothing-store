import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { LiaAngleRightSolid } from "react-icons/lia";
import { TfiAngleRight } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";

const NavigationPointer = () => {
  const location = useLocation();

  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  return (
    <nav className="text-gray-600 text-sm px-[5%] lg:px-[8%] bg-transparent absolute py-1 z-20">
      <ul className="flex gap-2">
        <li className={`${location.pathname === "/" ? "hidden" : "flex"}`}>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>

        {pathSegments.length > 0 && (
          <li className="flex items-center">
            {" "}
            <LiaAngleRightSolid color="" />
          </li>
        )}

        {pathSegments.map((segment, index) => {
          const url = "/" + pathSegments.slice(0, index + 1).join("/");

          return (
            <React.Fragment key={url}>
              <li>
                <Link to={url} className="hover:underline capitalize">
                  {segment.replace("-", " ")}
                </Link>
              </li>
              {index < pathSegments.length - 1 && (
                <li className="flex items-center">
                  <LiaAngleRightSolid color="" />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationPointer;

import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationPointer = () => {
  const location = useLocation();

  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  return (
    <nav className="text-gray-600 text-sm px-[5%] lg:px-[10%] border bg-transparent">
      <ul className="flex gap-2">
        <li>
          <Link to="/" className="hover:underline text-black">
            Home
          </Link>
        </li>

        {pathSegments.length > 0 && <li>&gt;</li>}

        {pathSegments.map((segment, index) => {
          const url = "/" + pathSegments.slice(0, index + 1).join("/");

          return (
            <React.Fragment key={url}>
              <li>
                <Link to={url} className="hover:underline capitalize">
                  {segment.replace("-", " ")}
                </Link>
              </li>
              {index < pathSegments.length - 1 && <li>&gt;</li>}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationPointer;

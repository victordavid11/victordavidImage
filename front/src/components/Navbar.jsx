import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex w-full fixed justify-between px-8 py-3">
        <span>
          <p className="font-bold text-sm text-gray-500">Victor David:</p>
          <h6 className="font-bold text-sm"> Photographer</h6>
        </span>

        <span>
          <h5 className="font-bold text-sm text-gray-500">Location:</h5>
          <h6 className="font-bold text-sm">Lagos, Nigeria</h6>
        </span>
        <span>
          <h5 className="font-bold text-sm text-gray-500">Navigations:</h5>
          <ul className="flex space-x-1 font-bold text-sm">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-sm"
                  : "font-bold text-sm text-gray-500"
              }
              to="/"
            >
              <h6>Home, </h6>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-sm"
                  : "font-bold text-sm text-gray-500"
              }
              to="/about"
            >
              <h6> About,</h6>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-sm"
                  : "font-bold text-sm text-gray-500"
              }
              to="/catalogue"
            >
              <h6> Catalogue, </h6>
            </NavLink>

            <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold text-sm"
                : "font-bold text-sm text-gray-500"
            }
            to="/contact">
              <h6>Contact</h6>
            </NavLink>
          </ul>
        </span>
        <span>
          <h5 className="font-bold text-sm text-gray-500">Theme:</h5>
          <h6 className="font-bold text-sm">
            {" "}
            <span>LightMode, </span>
            <span>DarkMode</span>
          </h6>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;

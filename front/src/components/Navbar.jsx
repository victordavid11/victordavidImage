import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex top-0 left-0 z-50 w-full fixed justify-between px-8 py-3">
        <span>
          <p className="font-bold text-sm text-gray-500">Victor David:</p>
          <h6 className="font-bold text-sm">Photographer</h6>
        </span>

        <span>
          <h5 className="font-bold text-sm text-gray-500">Location:</h5>
          <h6 className="font-bold text-sm">Lagos, Nigeria</h6>
        </span>

        <span>
          <h5 className="font-bold text-sm text-gray-500">Navigations:</h5>
          <ul className="flex space-x-1 font-bold text-sm">
            {/* Single-page scrolling links */}
            <li>
              <a href="/" className="font-bold text-sm text-gray-500">
                Home,
              </a>
            </li>
            {/* <li>
              <a href="/about" className="font-bold text-sm text-gray-500">
                About,
              </a>
            </li>
            <li>
              <a href="/catalogue" className="font-bold text-sm text-gray-500">
                Catalogue,
              </a>
            </li>
            <li>
              <a href="/contact" className="font-bold text-sm text-gray-500">
                Contact
              </a>
            </li> */}

            {/* Routing links */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-sm"
                    : "font-bold text-sm text-gray-500"
                }
                to="/about"
              >
                About,
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-sm"
                    : "font-bold text-sm text-gray-500"
                }
                to="/catalogue"
              >
                Catalogue,
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-sm"
                    : "font-bold text-sm text-gray-500"
                }
                to="/contact"
              >
                Contact.
              </NavLink>
            </li>
          </ul>
        </span>

        <span>
          <h5 className="font-bold text-sm text-gray-500">Theme:</h5>
          <h6 className="font-bold text-sm">
            <span>LightMode, </span>
            <span>DarkMode</span>
          </h6>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;

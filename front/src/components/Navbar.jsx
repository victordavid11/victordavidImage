import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [theme, setTheme] = useState("light");

   useEffect(() => {
     const savedTheme = localStorage.getItem("theme") || "light";
     setTheme(savedTheme);
     document.body.classList.add(savedTheme);
   }, []);

const toggleTheme = (newTheme) => {
  setTheme(newTheme);
  document.body.classList.remove("light", "dark"); // Remove both themes
  document.body.classList.add(newTheme); // Add the selected theme
  localStorage.setItem("theme", newTheme); // Save theme to localStorage
};

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);
    };
    const intervalId = setInterval(updateClock, 1000); // Update every second
    updateClock(); // Initial call to set the time immediately
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav
        className={`flex top-0 left-0 z-50 w-full fixed justify-between px-8 py-3 shadow-md transition-colors duration-300 ${
          theme === "light"
            ? "bg-white text-gray-800"
            : "bg-black text-white"
        }`}
      >
        <span className="hidden md:block">
          <p className="font-bold text-sm text-gray-500">Victor David:</p>
          <h6 className="font-bold text-sm">Photographer</h6>
        </span>

        <span className="hidden md:block">
          <h5 className="font-bold text-sm text-gray-500">Location:</h5>
          <h6 className="font-bold text-sm">Lagos, Nigeria ({currentTime})</h6>
        </span>

        <span className="hidden md:block">
          <h5 className="font-bold text-sm text-gray-500">Navigations:</h5>
          <ul className="flex gap-2 space-x-1 font-bold text-sm">
            <li>
              <a href="/" className="font-bold text-sm text-gray-500">
                Home
              </a>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-sm"
                    : "font-bold text-sm text-gray-500"
                }
                to="/about"
              >
                About
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
                Catalogue
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

        {/* Theme (Hidden on Mobile) */}
        <span className="hidden md:block">
          <h5 className="font-bold text-sm text-gray-500">Theme:</h5>
          <div className="flex space-x-2">
            <button
              onClick={() => toggleTheme("light")}
              className={`font-bold text-sm px-2 py-1 rounded ${
                theme === "light" ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              LightMode
            </button>
            <button
              onClick={() => toggleTheme("dark")}
              className={`font-bold text-sm px-2 py-1 rounded ${
                theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200"
              }`}
            >
              DarkMode
            </button>
          </div>
        </span>

        {/* Hamburger Icon (Visible on Mobile) */}
        <button
          className="md:hidden fixed top-4 right-4 z-50 bg-gray-100 p-2 rounded-full shadow-md"
          onClick={toggleMenu}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-200 bg-opacity-50 shadow-md  fixed top-16 left-0 h-full w-full z-50">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="/"
                className="font-bold text-sm text-gray-500"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-sm "
                    : "font-bold text-sm text-gray-500"
                }
                to="/about"
                onClick={() => setOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-sm "
                    : "font-bold text-sm text-gray-500"
                }
                to="/catalogue"
                onClick={() => setOpen(false)}
              >
                Catalogue
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-sm "
                    : "font-bold text-sm text-gray-500"
                }
                to="/contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

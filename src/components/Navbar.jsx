import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import logoImage from "../Assets/logo-image.png";

const Navbar = ({ logo, toggleBtn, isDarkMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="bg--300 p-2 sticky top-0 z-10 shadow-md"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex justify-between items-center">
        <img src={logoImage } alt="" className="h-12 w-12" />

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-black-800 focus:outline-none text-2xl"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        <ul
          className={`absolute sm:static top-16 left-0 w-full sm:w-auto bg-white-400 sm:bg-transparent sm:flex flex-col sm:flex-row sm:space-x-6 transition-all duration-300 ease-in-out ${
            open ? "block" : "hidden"
          }`}
        >
          <li className="py-2 sm:py-0">
            <a
              href="#home"
              className="block text-black-800 hover:text-gray-600 px-4 "
            >
              Home
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a
              href="#about"
              className="block text-black-800 hover:text-gray-600 px-4"
            >
              About
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a
              href="#skills"
              className="block text-black-800 hover:text-gray-600 px-4"
            >
              Skills
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a
              href="#projects"
              className="block text-black-800 hover:text-gray-600 px-4"
            >
             My Projects
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a
              href="#contact"
              className="block text-black-800 hover:text-gray-600 px-4"
            >
              Contact
            </a>
          </li>
          <button
            onClick={toggleBtn}
            className="text-2xl flex items-center text-black-800 focus:outline-none"
            type="button"
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? <FiMoon /> : <FiSun />}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
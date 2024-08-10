import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../Rdux/Slice/DarkModeSlice";
import { IoMenu } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { BsFillBrightnessHighFill } from "react-icons/bs";

function Header({ scrollToSection }) {
  const darkMode = useSelector((state) => state.darkMode.mode);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`flex justify-between items-center w-full h-[60px] px-6 md:px-24 fixed top-0 left-0 right-0 z-50 ${
        darkMode
          ? "bg-gray-800 text-white shadow-white"
          : "bg-white text-[#0e2431] shadow"
      }`}
    >
      <div>
        <a href="#home">
          <h1
            className={`text-[1.5rem] md:text-[1.9rem] font-bold ${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            Jaypal
          </h1>
        </a>
      </div>
      <div className="md:flex gap-10">
        <div className="hidden md:flex gap-10 text-[14px] md:text-[16px] font-medium">
          <button
            onClick={() => scrollToSection("home")}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("project")}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            Project
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            Contact
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <button onClick={handleToggleDarkMode} className="focus:outline-none">
            {darkMode ? (
              <MdDarkMode size={25} color="white" />
            ) : (
              <BsFillBrightnessHighFill size={25} />
            )}
          </button>
          <button
            onClick={handleMenuToggle}
            className="md:hidden focus:outline-none"
          >
            <IoMenu size={25} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`absolute top-[65px]  right-0 bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center gap-4 py-4 md:hidden w-[50%] ${
            darkMode ? "text-white" : "text-[#0e2431]"
          }`}
        >
          <button
            onClick={() => {
              scrollToSection("home");
              setIsMenuOpen(false);
            }}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("about");
              setIsMenuOpen(false);
            }}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection("skills");
              setIsMenuOpen(false);
            }}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => {
              scrollToSection("project");
              setIsMenuOpen(false);
            }}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            Project
          </button>
          <button
            onClick={() => {
              scrollToSection("education");
              setIsMenuOpen(false);
            }}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => {
              scrollToSection("contact");
              setIsMenuOpen(false);
            }}
            className={`hover:${
              darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"
            }`}
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;

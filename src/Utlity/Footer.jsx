import React from "react";
import { FaLinkedin, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDroprightCircle } from "react-icons/io";

function Footer({ scrollToSection }) {
  return (
    <footer className="relative flex flex-col items-center bg-gray-900 text-white pt-8 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-center w-full gap-10 pb-5 text-center md:text-left">
        <div className="flex flex-col w-full md:w-1/3 p-4">
          <h3 className="text-2xl font-semibold pb-4">Jaypal Portfolio</h3>
          <p className="text-lg text-gray-300">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. <br />
            <br />
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        <div className="w-full flex flex-col items-center  md:w-1/3 p-4">
          <h3 className="text-2xl font-semibold pb-4">Quick Links</h3>
          <div className="space-y-1">
            {["home", "about", "skills", "project", "education", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className=" text-lg text-gray-200 py-1 hover:text-[#ffae00] flex items-center justify-center md:justify-start"
                >
                  <IoMdArrowDroprightCircle className="inline mr-2 hover:text-[#ffae00]" />
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <h3 className="text-2xl font-normal pb-4">Contact</h3>
          <div className="space-y-2">
            <p className="text-lg text-gray-300 hover:text-[#ffae00] flex items-center justify-center md:justify-start">
              <FaPhone size={20} className="mr-2 hover:text-[#ffae00]" />
              6264599708
            </p>
            <p className="text-lg text-gray-300 hover:text-[#ffae00] flex items-center justify-center md:justify-start">
              <IoMailSharp size={20} className="mr-2 hover:text-[#ffae00]" />
              jaypalpatel713@gmail.com
            </p>
            <p className="text-lg text-gray-300 hover:text-[#ffae00] flex items-center justify-center md:justify-start">
              <FaLocationDot size={20} className="mr-2 hover:text-[#ffae00]" />
              Barwaha, India 451226
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start py-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/jaypal-patel"
              className="h-10 w-10 flex justify-center items-center text-xl p-2 rounded-full bg-gray-200 text-blue-900 hover:bg-[#cb24bb] hover:text-white border-2 border-transparent"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="mailto:jaypalpatel@gmail.com"
              className="h-10 w-10 flex justify-center items-center text-xl p-2 rounded-full bg-gray-200 text-blue-900 hover:bg-[#cb24bb] hover:text-white border-2 border-transparent"
            >
              <IoMailSharp size={25} />
            </a>
            <a
              href="https://www.instagram.com/mr_jaypal_patel?utm_source=qr&igsh=MTBnMXFuenJoeGU2Mg=="
              className="h-10 w-10 flex justify-center items-center text-xl p-2 rounded-full bg-gray-200 text-blue-900 hover:bg-[#cb24bb] hover:text-white border-2 border-transparent"
            >
              <FaInstagramSquare size={25} />
            </a>
            <a
              href="https://telegram.me/mr_jaypal_patel"
              className="h-10 w-10 flex justify-center items-center text-xl p-2 rounded-full bg-gray-200 text-blue-900 hover:bg-[#cb24bb] hover:text-white border-2 border-transparent"
            >
              <FaTelegram size={25} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-400 text-lg font-medium w-full">
        <p>
          Designed With ❤️ By{" "}
          <a href="#" className="text-[#ffae00]">
            Jaypal Patel
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

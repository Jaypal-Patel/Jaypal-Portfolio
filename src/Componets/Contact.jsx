import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useSelector } from "react-redux";

function Contect() {
  const darkMode = useSelector((state) => state.darkMode.mode);

  return (
    <section
      className={`relative flex flex-col items-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#e5ecfb] text-black"
      } w-full min-h-screen py-8`}
    >
      <h1
        className={`text-3xl md:text-4xl font-bold mb-8 ${
          darkMode ? "text-purple-400" : "text-purple-700"
        }`}
      >
        Get In{" "}
        <span className={`${darkMode ? "text-[#cb24bb]" : "text-purple-700"}`}>
          Touch
        </span>
      </h1>

      <div
        className={`flex flex-col md:flex-row justify-between items-center ${
          darkMode ? "bg-gray-800" : "bg-white"
        } w-full max-w-[1100px] rounded-xl py-8 px-6 md:px-16 shadow-lg`}
      >
        <div className="w-full md:w-[50%] flex justify-center mb-6 md:mb-0">
          <img
            src="./public/image/contact1.png"
            alt="Contact"
            className="w-[250px] md:w-[300px] h-auto object-cover rounded-lg hidden md:block"
          />
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-full md:w-[50%]"
        >
          <div className="flex flex-col space-y-4">
            <input
              type="hidden"
              name="access_key"
              value="0492e8c0-199c-4efe-95eb-b8a183162c3d"
            />

            <div className="relative w-full">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className={`w-full h-12 outline-none border ${
                  darkMode
                    ? "border-gray-600 bg-gray-800 text-white"
                    : "border-gray-700 bg-[#e5ecfb] text-black"
                } rounded-md px-4 py-2 pl-12`}
              />
              <FaUserCircle
                className={`absolute top-1/2 transform -translate-y-1/2 left-4 text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              />
            </div>

            <div className="relative w-full">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className={`w-full h-12 outline-none border ${
                  darkMode
                    ? "border-gray-600 bg-gray-800 text-white"
                    : "border-gray-700 bg-[#e5ecfb] text-black"
                } rounded-md px-4 py-2 pl-12`}
              />
              <MdEmail
                className={`absolute top-1/2 transform -translate-y-1/2 left-4 text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              />
            </div>

            <div className="relative w-full">
              <input
                type="number"
                placeholder="Phone"
                name="number"
                className={`w-full h-12 outline-none border ${
                  darkMode
                    ? "border-gray-600 bg-gray-800 text-white"
                    : "border-gray-700 bg-[#e5ecfb] text-black"
                } rounded-md px-4 py-2 pl-12`}
              />
              <FaPhone
                className={`absolute top-1/2 transform -translate-y-1/2 left-4 text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              />
            </div>

            <div className="relative w-full">
              <textarea
                placeholder="Message"
                name="feed"
                className={`min-h-[120px] max-h-[200px] w-full outline-none text-lg px-4 py-2 pl-12 border ${
                  darkMode
                    ? "border-gray-600 bg-gray-800 text-white"
                    : "border-gray-700 bg-[#e5ecfb] text-black"
                } rounded-md`}
              ></textarea>
              <AiFillMessage
                className={`absolute top-4 left-4 text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className={`text-white border-none outline-none cursor-pointer text-lg md:text-xl font-semibold rounded-md py-3 px-6 ${
                darkMode ? "bg-purple-600 shadow-lg" : "bg-[#2506ad] shadow-lg"
              }`}
            >
              Submit <i className="fa-regular fa-paper-plane text-lg ml-2"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contect;

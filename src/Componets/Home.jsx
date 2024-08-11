import React from "react";
import { useSelector } from "react-redux";
import HomeEffact from "../Utlity/HomeEffact";

import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaCloudDownloadAlt,
} from "react-icons/fa";

function Home() {
  const darkMode = useSelector((state) => state.darkMode.mode);

  return (
    <div>
      <HomeEffact className="absolute top-0 right-0 left-0 -z-0" />
      <section
        className={`flex flex-col md:flex-row justify-evenly md:items-center h-screen px-4 md:px-8 pt-24 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black "
        }`}
      >
        <div className="text-center md:text-left">
          <h1
            className={`text-3xl md:text-4xl font-bold mb-1 ${
              darkMode ? "text-white" : "text-[#002057]"
            } `}
          >
            Hi There,
          </h1>
          <h1
            className={`text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-[#002057]"
            } `}
          >
            I'm Jaypal{" "}
            <span
              className={`${darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"}`}
            >
              Patel
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mt-4 mb-2">
            I Am Into{" "}
            <span
              className={`${darkMode ? "text-[#ffb86c]" : "text-[#ff7b00]"}`}
            >
              Frontend Developer
            </span>
          </p>
          <a
            href="#about"
            className={`mt-4 py-3 px-5 rounded-full shadow-md hover:shadow-lg inline-block ${
              darkMode
                ? "bg-[#2506ad] text-white hover:bg-[#232b71]"
                : "bg-[#2506ad] text-white hover:bg-[#232b71]"
            }`}
          >
            <a
              href="https://drive.google.com/file/d/1pYGXhuY1wKxd3B_zkKHDIZwjqf2SwiXp/view?usp=drivesdk"
              target="-blank"
              className="text-lg font-bold tracking-wider"
            >
              Resume <FaCloudDownloadAlt className="inline" />
            </a>
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="https://www.linkedin.com/in/jaypal-patel"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[#00d9ff] p-3 rounded-full hover:text-white ${
                darkMode
                  ? "text-black bg-white hover:bg-[#cb24bb]"
                  : "bg-[#09011b] hover:bg-[#cb24bb]"
              }`}
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/Jaypal-Patel"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[#00d9ff] p-3 rounded-full hover:text-white ${
                darkMode
                  ? "text-black bg-white hover:bg-[#cb24bb]"
                  : "bg-[#09011b] hover:bg-[#00d9ff]"
              }`}
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://wa.me/916264599708"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[#00d9ff] p-3 rounded-full hover:text-white ${
                darkMode
                  ? "text-black bg-white hover:bg-[#cb24bb]"
                  : "bg-[#09011b] hover:bg-[#cb24bb]"
              }`}
            >
              <FaWhatsapp size={25} />
            </a>
          </div>
        </div>
        <div className="image-box mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/public/image/Jaypal.jpg"
            alt="photo"
            className={`relative h-60 w-60 md:h-80 md:w-80 rounded-full shadow-lg hover:shadow-2xl transition-all duration-200 ease-in-out ${
              darkMode ? "border-gray-700" : "border-gray-300"
            }`}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LuExternalLink } from "react-icons/lu";

function ProjectCart({ name, image, description, link }) {
  const darkMode = useSelector((state) => state.darkMode.mode);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-[300px] md:max-w-[320px] m-4 shadow-lg rounded overflow-hidden transition-transform duration-500 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-[200px] md:h-[290px]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div
        className={`absolute inset-0 p-4 flex flex-col justify-center items-center transition-transform duration-500 ${
          darkMode ? "bg-white text-black" : "bg-black/80 text-white"
        }  ${isHovered ? "translate-y-0" : "translate-y-full"}`}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="bg-blue-500 p-2 rounded-full text-white mb-4">
            <LuExternalLink size={25} />
          </div>
        </a>
        <h1 className="text-lg md:text-xl font-bold mb-2 text-center">
          {name}
        </h1>
        <p className="text-sm text-center">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCart;

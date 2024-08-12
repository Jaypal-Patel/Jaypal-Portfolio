import React from "react";
import { useSelector } from "react-redux";

function SkillsCart({ name, image, rating }) {
  const darkMode = useSelector((state) => state.darkMode.mode);

  return (
    <div
      className={`flex flex-col items-center p-4 rounded-lg ${
        darkMode
          ? "bg-gray-700 border border-gray-600"
          : "bg-white border border-gray-300"
      }`}
    >
      <div className="flex justify-center gap-2 mb-2">
        <img
          src={
            darkMode ? "./src/assets/verify2.png" : "./src/assets/verify.png"
          }
          alt={name}
          className="w-6 h-6 md:w-[30px] md:h-[30px]"
        />
        <span
          className={`font-bold text-lg md:text-xl ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {name}
        </span>
      </div>
      <p
        className={`my-2 text-sm md:text-lg font-medium ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {rating}
      </p>
      <img src={image} alt={name} className="w-1/3 md:w-[30%] rounded-lg" />
    </div>
  );
}

export default SkillsCart;

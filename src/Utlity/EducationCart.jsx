import React from "react";

function EducationCart({ title, name, date, image, darkMode }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center border shadow-lg w-full max-w-[1000px] mb-5 p-4 md:p-6 ${
        darkMode
          ? "bg-gray-800 border-gray-700 shadow-white/10"
          : "bg-white border-gray-300"
      }`}
    >
      <img
        src={image}
        alt={name}
        className="w-full md:w-[300px] h-[160px] object-cover rounded-lg md:mr-6 mb-4 md:mb-0"
      />
      <div
        className={`text-center md:text-left ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <h1
          className={`font-bold text-xl md:text-2xl ${
            darkMode ? "text-blue-400" : "text-blue-800"
          }`}
        >
          {title}
        </h1>
        <p className="text-lg my-1">{name}</p>
        <p
          className={`font-semibold text-lg md:text-xl ${
            darkMode ? "text-green-400" : "text-green-600"
          }`}
        >
          {date}
        </p>
      </div>
    </div>
  );
}

export default EducationCart;

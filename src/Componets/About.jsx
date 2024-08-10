import React from "react";
import { useSelector } from "react-redux";

function About() {
  const darkMode = useSelector((state) => state.darkMode.mode);

  return (
    <section
      className={`relative flex flex-col items-center px-6 md:px-[9%] py-10 md:py-0 md:h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
        About
        <span className={`${darkMode ? "text-[#cb24bb]" : "text-purple-700"}`}>
          {" "}
          Me
        </span>
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-10 mt-8 md:mt-10 w-full">
        <div className="hidden md:flex w-full md:w-[50%] justify-center items-center mb-8 md:mb-0">
          <img
            src="/public/image/Jaypal2.jpg"
            alt="Jaypal"
            className="w-[220px] md:w-[280px] h-auto object-cover rounded-lg shadow-lg hover:w-64 md:hover:w-72 transform hover:scale-110 transition-transform duration-200"
          />
        </div>
        <div className="flex flex-col px-4 md:px-8 w-full md:w-[50%] text-center md:text-left">
          <h3 className="text-2xl md:text-2xl font-bold ">I'm Jaypal Patel</h3>
          <p className="text-xl mb-3 mt-1 ">Frontend Developer</p>
          <p className="text-[16px] md:text-lg mb-6 opacity-80 ">
            Motivated Frontend Developer with expertise in React and JavaScript.
            Successfully developed and deployed multiple web applications and
            dynamic user interfaces. Recognized for problem-solving skills and
            the ability to work collaboratively in a team environment.
          </p>
          <p className="text-[15px] md:text-lg font-semibold mb-2 ">
            <span className="text-blue-600">Email :</span>{" "}
            jaypalpatel190@gmail.com
          </p>
          <p className="text-[15px] md:text-lg font-semibold ">
            <span className="text-blue-600">Place :</span> Barwaha, India -
            451226
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

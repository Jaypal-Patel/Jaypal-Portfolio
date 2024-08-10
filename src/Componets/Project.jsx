import React from "react";
import { useSelector } from "react-redux";
import ProjectCart from "../Utlity/ProjectCart";

function Project() {
  const darkMode = useSelector((state) => state.darkMode.mode);

  return (
    <section
      className={`relative w-full min-h-screen flex flex-col items-center py-10 px-4 md:px-10 shadow ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        Project
        <span className={`${darkMode ? "text-[#cb24bb]" : "text-purple-700"}`}>
          {" "}
          Details
        </span>
      </h1>
      <div className="w-full flex flex-wrap justify-center md:justify-center gap-1">
        <ProjectCart
          name="VegiFoods"
          image="./public/image/former1.jpeg"
          description="Developed an e-commerce website platform designed for farmers to sell their products online."
          link=""
        />
        <ProjectCart
          name="CrickPluse"
          image="./public/image/crickpluse2.png"
          description="Developed a web application focused on the Indian cricket team, providing detailed information on players, support staff, and the BCCI."
          link=""
        />
        <ProjectCart
          name="Zoredh"
          image="./public/image/zoredha2.png"
          description="Developed a stock trading platform using React, JavaScript, HTML, CSS, Bootstrap, Material-UI, and Firebase.."
          link=""
        />
      </div>
    </section>
  );
}

export default Project;

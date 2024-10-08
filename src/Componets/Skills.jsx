import React from "react";
import { useSelector } from "react-redux";
import SkillsCart from "../Utlity/SkillsCart";

function Skills() {
  const darkMode = useSelector((state) => state.darkMode.mode);

  return (
    <section
      className={`relative w-full min-h-screen flex flex-col items-center py-10 px-4 md:px-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        Skills &
        <span className={`${darkMode ? "text-[#cb24bb]" : "text-purple-700"}`}>
          {" "}
          Abilities
        </span>
      </h1>

      <div
        className={`w-full max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 p-4 md:p-10 ${
          darkMode
            ? "bg-gray-800 border-gray-700 shadow-lg"
            : "bg-gray-100 border-gray-300 shadow-md"
        }`}
      >
        <SkillsCart
          name="HTML"
          image="./src/assets/htmlImg.webp"
          rating="Excellent"
        />
        <SkillsCart
          name="CSS"
          image="./src/assets/cssImg.png"
          rating="Excellent"
        />
        <SkillsCart
          name="Tailwind CSS"
          image="./src/assets/tailwind.png"
          rating="Excellent"
        />
        <SkillsCart
          name="JavaScript"
          image="./src/assets/JavaScript-logo.png"
          rating="Excellent"
        />
        <SkillsCart
          name="ReactJs"
          image="./src/assets/react.png"
          rating="Excellent"
        />
        <SkillsCart
          name="Redux"
          image="./src/assets/redux.png"
          rating="Excellent"
        />
        <SkillsCart
          name="GitHub"
          image="./src/assets/github.png"
          rating="Intermediate"
        />
        <SkillsCart
          name="Firebase"
          image="./src/assets/firebase.png"
          rating="Intermediate"
        />
      </div>
    </section>
  );
}

export default Skills;

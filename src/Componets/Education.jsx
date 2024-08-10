import React from "react";
import EducationCart from "../Utlity/EducationCart";
import { useSelector } from "react-redux";

function Education() {
  const darkMode = useSelector((state) => state.darkMode.mode);

  return (
    <section
      className={`relative w-full min-h-screen flex flex-col items-center py-10 px-4 md:px-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        Experience &
        <span className={`${darkMode ? "text-[#cb24bb]" : "text-purple-700"}`}>
          {" "}
          Education
        </span>
      </h1>
      <div className="flex flex-col items-center space-y-6 md:w-[1000px]">
        <EducationCart
          title="React Developer Intern"
          name="Alphawizz Technologies Pvt. Ltd."
          date="June 2024 - August 2024 | Complete"
          image="./public/image/intern.jpg"
          darkMode={darkMode}
        />
        <EducationCart
          title="Bachelor of Engineering"
          name="Swami Vivekanand College of Engineering | RGPV"
          date="2019-2023 | Complete"
          image="./public/image/svce.jpeg"
          darkMode={darkMode}
        />
        <EducationCart
          title="12th | Maths"
          name="Govt. Higher Secondary School | M.P Board"
          date="2019 | Complete"
          image="./public/image/shcool.jpeg"
          darkMode={darkMode}
        />
      </div>
    </section>
  );
}

export default Education;

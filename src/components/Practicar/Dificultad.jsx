import React from "react";

const Dificultad = ({ selectedDificultad, setSelectedDificultad }) => {
  const handleDificultadClick = (dificultad) => {
    setSelectedDificultad(dificultad);
  };

  return (
    <div className="w-5/6 lg:w-[800px]">
      <div className="flex flex-col md:flex-row md:items-center">
        <p className="text-white text-md">Dificultad: </p>
        <div className="mt-4 md:mt-0 flex md:ml-3 space-x-4">
          <button
            onClick={() => handleDificultadClick("Intern")}
            className={` rounded-full bg-[#28292C] px-4 text-green-500 hover:scale-110 hover:bg-green-500/[0.5] transition duration-300 ${
              selectedDificultad === "Intern"
                ? "bg-green-500/[0.5] text-white "
                : ""
            }`}>
            Intern
          </button>
          <button
            onClick={() => handleDificultadClick("Junior")}
            className={`rounded-full bg-[#28292C]  px-4 text-blue-500 hover:scale-110 hover:bg-blue-500/[0.5] transition duration-300 ${
              selectedDificultad === "Junior"
                ? "bg-blue-500/[0.5] text-white "
                : ""
            }`}>
            Junior
          </button>
          <button
            onClick={() => handleDificultadClick("Senior")}
            className={`rounded-full bg-[#28292C] px-4 text-red-500 hover:scale-110 hover:bg-red-500/[0.5] transition duration-300 ${
              selectedDificultad === "Senior"
                ? "bg-red-500/[0.5] text-white "
                : ""
            }`}>
            Senior
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dificultad;

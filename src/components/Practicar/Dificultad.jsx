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
            className={`border-2 border-green-500 rounded-md px-4 text-white hover:scale-110 hover:bg-green-500/[0.5] transition duration-300 ${
              selectedDificultad === "Intern" ? "bg-green-500" : ""
            }`}>
            Intern
          </button>
          <button
            onClick={() => handleDificultadClick("Junior")}
            className={`border-2 border-blue-500 rounded-md px-4 text-white hover:scale-110 hover:bg-blue-500/[0.5] transition duration-300 ${
              selectedDificultad === "Junior" ? "bg-blue-500" : ""
            }`}>
            Junior
          </button>
          <button
            onClick={() => handleDificultadClick("Senior")}
            className={`border-2 border-red-500 rounded-md px-4 text-white hover:scale-110 hover:bg-red-500/[0.5] transition duration-300 ${
              selectedDificultad === "Senior" ? "bg-red-500" : ""
            }`}>
            Senior
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dificultad;

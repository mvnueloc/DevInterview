import React from "react";

const Input = ({ respuesta, setRespuesta, respuestaDisabled }) => {
  return (
    <div className="bg-primary border-2 border-gray-100/[0.5] p-4 md:p-8 rounded-lg w-5/6 lg:w-5/12 lg:h-[600px]">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Respuesta
      </label>
      <textarea
        rows="24"
        disabled={respuestaDisabled}
        className={`block p-2.5 w-full text-sm  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white ${
          respuestaDisabled ? "opacity-50" : ""
        } `}
        placeholder="Escribe tu respuesta aqui..."
        value={respuesta}
        onChange={(event) => {
          //   console.log(event.target.value);
          setRespuesta(event.target.value);
        }}></textarea>
    </div>
  );
};

export default Input;

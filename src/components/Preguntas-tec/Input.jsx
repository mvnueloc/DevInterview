import TextIcon from "../icons/Text";
import React from "react";

const Input = ({ respuesta, setRespuesta, respuestaDisabled }) => {
  return (
    <div className="rounded-lg w-full base:w-1/2 flex flex-col gap-2.5">
      <div className="rounded-lg h-full flex flex-col">
        <div className="px-2 py-2 inline-flex gap-2 items-center bg-[#28292c] w-full rounded-t-lg">
          <TextIcon className="size-4"/>
          <label className="text-sm font-medium text-gray-200">
            Respuesta
          </label>
        </div>
        <textarea
          disabled={respuestaDisabled}
          className={`${ respuestaDisabled ? "opacity-50" : ""} 
          w-full min-h-72 text-base bg-[#1B1D20] text-gray-300 focus:outline-none focus:ring-0 px-5 py-4 flex-1 base:min-h-[36rem] resize-none rounded-b-lg
          `}
          placeholder="Escribe tu respuesta aqui..."
          value={respuesta}
          onChange={(event) => {
            setRespuesta(event.target.value);
          }}></textarea>
      </div>
      <div className="base:flex-1 p-4 bg-[#1B1D20] rounded-lg border border-yellow-500 flex items-center min-h-24">
          <div className="text-white max-w-lg text-sm font-semibold">
            Esta entrevista es general; en entrevistas reales, las preguntas pueden ser más específicas según el rol.
          </div>
      </div>
    </div>
  );
};

export default Input;

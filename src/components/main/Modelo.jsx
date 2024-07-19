import React from "react";

const Modelo = () => {
  return (
    <div className=" w-full lg:w-1/2">
      <h2 className="text-xl font-semibold">¿Qué modelo usa?</h2>
      <p className="mt-4 text-sm ">
        Implementado con {" "}
        <span className="bg-gray-100/[0.3] px-1 rounded-md">Gemini-1.5-pro</span>{" "}
        por defecto. Cambia fácilmente a otros modelos con pocas líneas de código.
      </p>
    </div>
  );
};

export default Modelo;  
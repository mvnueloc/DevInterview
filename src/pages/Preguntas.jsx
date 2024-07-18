import React from "react";
import { useParams } from "react-router-dom";

const Preguntas = () => {
  const { categoria, nivel } = useParams();

  return (
    <div className="bg-custom-degrad bg-dot font-jetbrains ">
      <div className="relative w-screen lg:h-screen flex justify-center items-center">
        <div>
          <h1 className="text-white">Categoria: {categoria}</h1>
          <h1 className="text-white">Nivel: {nivel}</h1>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;

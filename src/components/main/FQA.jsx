import React from "react";
import Acordion from "./Acordion";

const FQA = () => {
  return (
    <div>
      <Acordion
        title="¿Se necesita una API Key?"
        answer={
          <div>
            La aplicación ofrece un número limitado de demos diarias. Al
            agotarse, los usuarios deben clonar la aplicación y seguir las
            instrucciones del{" "}
            <span className="bg-gray-100/[0.3] px-1 rounded-md">README</span>{" "}
            para continuar usándola.
          </div>
        }
      />

      <Acordion
        title="¿Qué modelo usa?"
        answer={
          <div>
            Implementado con{" "}
            <span className="bg-gray-100/[0.3] px-1 rounded-md">
              Gemini-1.5-pro
            </span>{" "}
            por defecto. Cambia fácilmente a otros modelos con pocas líneas de
            código.
          </div>
        }
      />
    </div>
  );
};

export default FQA;

import React from "react";

const ApiInfo = () => {
  return (
    <div className=" w-full lg:w-1/2">
      <h2 className="text-xl font-semibold">¿Se necesita una API Key?</h2>
      <p className="mt-4 text-sm">
      La aplicación ofrece un número limitado de demos diarias. Al agotarse, los usuarios deben clonar la aplicación y seguir las instrucciones del {" "}
      <span className="bg-gray-100/[0.3] px-1 rounded-md">README</span>{" "}
      para continuar usándola.
      </p>
    </div>
  );
};

export default ApiInfo;
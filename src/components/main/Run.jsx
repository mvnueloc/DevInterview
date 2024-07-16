import React from "react";

const Run = () => {
  return (
    <div className=" w-5/6 lg:w-[550px]">
      <h2 className="text-center text-2xl font-semibold">Ejecutar en local.</h2>
      <div className="mt-4">
        <p>
          1-. Git clone :{" "}
          <span className="bg-gray-100/[0.3] rounded-md break-words">
            https://github.com/mvnueloc/DevInterview
          </span>
        </p>
        <p>2-. Colocar las variables de entorno definidas en .env</p>
        <p>3-. Ejecutar en la terminal</p>

        <div className=" border-2 border-gray-100/[.5] px-1 py-2 rounded-md mt-4">
          <p className="mx-2">
            <span className="mr-4">1</span> npm install
          </p>
          <p className="mx-2">
            <span className="mr-4">2</span> npm run dev
          </p>
        </div>
      </div>
    </div>
  );
};

export default Run;

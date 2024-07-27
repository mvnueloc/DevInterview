import React, { useState } from "react";
import { executeCode } from "../../services/apiCode";

const CompilerInterpreter = ({ respuesta, language }) => {
  const [output, setOutput] = useState("Haz click en ejecutar");
  const [loading, setLoading] = useState(false);

  const handleExecuteCode = async () => {
    setLoading(true);
    try {
      const result = await executeCode(language, respuesta);
      setOutput(result);
      setLoading(false);
    } catch (error) {
      setOutput("Error al ejecutar el código");
      console.error(error);
    }
  };

  return (
    <div className="bg-primary border-2 border-gray-100/[0.5] p-4 md:p-8 rounded-lg w-full h-[309px]">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-semibold text-xl">Output</h1>
        <button
          className="px-2 py-1 border-2 border-green-500 text-green-500 rounded-md hover:scale-105 transition-all duration-300"
          onClick={handleExecuteCode}>
          {loading ? (
            <div className="flex">
              Cargando
              <div className="flex items-center ml-2">
                <div
                  role="status"
                  className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              </div>
            </div>
          ) : (
            "Ejecutar"
          )}
        </button>
      </div>

      {/* <p className="mt-8 text-gray-100/[0.5]">Haz click en "ejecutar"</p> */}
      <div className="bg-gray-950 mt-8 p-4 h-[175px] overflow-y-auto  rounded-md">
        <pre className="text-white ">{output}</pre>
      </div>
    </div>
  );
};

export default CompilerInterpreter;

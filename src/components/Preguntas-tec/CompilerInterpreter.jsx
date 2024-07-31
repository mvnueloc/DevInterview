import React from "react";

const CompilerInterpreter = ({output}) => {
  return (
    <div className="bg-[#1B1D20] h-full w-full rounded-lg flex flex-col">
      <div className="px-2 py-2 inline-flex gap-2 items-center bg-[#28292c] w-full rounded-t-lg">
        <span className="text-sm font-medium text-gray-200">
          Test de código
        </span>
      </div>
      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="overflow-y-auto h-full">
            <div className="p-4">
              {output !== "Haz click en ejecutar" && (
                <div className="text-gray-200 mb-2 text-sm font-medium">
                  Salida
                </div>
              )}
              <div className="p-4 rounded-md bg-[#28292c] text-gray-200">
                <pre className="text-gray-300 text-sm">
                  {output}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default CompilerInterpreter;
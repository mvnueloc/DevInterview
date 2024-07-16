import React from "react";

const Modelo = () => {
  return (
    <div className=" w-5/6 lg:w-[400px]">
      <h2 className="text-center text-2xl font-semibold">Modelo</h2>
      <p className="mt-4">
        Esta aplicación se realizo con Google{" "}
        <span className="bg-gray-100/[0.3] rounded-md">Gemini-1.5-pro</span>{" "}
        como modelo predeterminado. Sin embargo, gracias al SDK de IA de Vercel,
        puede cambiar de proveedor de LLM a Anthropic, gpt-3.5-turbo, Hugging
        Face o usar LangChain con solo unas pocas líneas de código.
      </p>
    </div>
  );
};

export default Modelo;

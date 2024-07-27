import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Informacion from "../components/Preguntas-tec/Informacion";
import Input from "../components/Preguntas-tec/Input.jsx";
import generarRespuesta from "../services/apiGemini.js";
import CodeEditor from "../components/Preguntas-tec/CodeEditor.jsx";
import CompilerInterpreter from "../components/Preguntas-tec/CompilerInterpreter.jsx";

const Preguntas = () => {
  const [numPregunta, setPregunta] = useState(0);
  const [numPreguntasTotales, setNumPreguntasTotales] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const [respuestaDisabled, setRespuestaDisabled] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const [preguntasRespuestas, setPreguntasRespuestas] = useState([]);
  const [language, setLanguajes] = useState("javascript");

  useEffect(() => {
    if (isFinished) {
      console.log(preguntasRespuestas);
      const stringPreguntasRespuestas = JSON.stringify(preguntasRespuestas);
      console.log(generarRespuesta(stringPreguntasRespuestas));
    }
  }, [isFinished]);

  return (
    <div className=" font-onest ">
      <div className="relative max-w-dvw pt-[56px] lg:h-screen flex justify-center items-center">
        <div className="w-full flex justify-center items-center flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-8">
          {!isFinished ? (
            <>
              <div
                className={` ${
                  numPregunta < numPreguntasTotales - 1
                    ? ""
                    : "h-[620px] md:h-[650px]"
                } w-5/6 lg:w-5/12 flex flex-col justify-between `}>
                <Informacion
                  numPregunta={numPregunta}
                  setPregunta={setPregunta}
                  respuesta={respuesta}
                  setRespuesta={setRespuesta}
                  setRespuestaDisabled={setRespuestaDisabled}
                  setFinished={setFinished}
                  setPreguntasRespuestas={setPreguntasRespuestas}
                  setNumPreguntasTotales={setNumPreguntasTotales}
                />
                {numPregunta < numPreguntasTotales - 1 ? (
                  ""
                ) : (
                  <CompilerInterpreter
                    respuesta={respuesta}
                    language={language}
                  />
                )}
              </div>

              {numPregunta < numPreguntasTotales - 1 ? (
                <>
                  <Input
                    respuesta={respuesta}
                    setRespuesta={setRespuesta}
                    respuestaDisabled={respuestaDisabled}
                  />
                </>
              ) : (
                <CodeEditor
                  setRespuesta={setRespuesta}
                  respuestaDisabled={respuestaDisabled}
                  language={language}
                  setLanguajes={setLanguajes}
                />
              )}
            </>
          ) : (
            <div className="text-gray-100 border-2 border-blue-500 px-2 py-1 rounded-md hover:scale-110 transition-all duration-300">
              <Link to="/">Ver tu Resumen</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preguntas;

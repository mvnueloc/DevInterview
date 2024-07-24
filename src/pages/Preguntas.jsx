import { React, useState } from "react";
import { Link } from "react-router-dom";
import Informacion from "../components/Preguntas-tec/Informacion";
import Input from "../components/Preguntas-tec/Input.jsx";
import generarRespuesta from "../services/apiGemini.js";

const Preguntas = () => {
  const [numPregunta, setPregunta] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const [respuestaDisabled, setRespuestaDisabled] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const [preguntasRespuestas, setPreguntasRespuestas] = useState([]);

  if (isFinished) {
    // console.log(preguntasRespuestas);
    const stringPreguntasRespuestas = JSON.stringify(preguntasRespuestas);
    console.log(generarRespuesta(stringPreguntasRespuestas));
  }

  return (
    <div className="bg-custom-degrad bg-dot font-onest ">
      <div className="relative max-w-dvw pt-[56px] lg:h-screen flex justify-center items-center">
        <div className="w-full flex justify-center items-center flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-8">
          {!isFinished ? (
            <>
              <Informacion
                numPregunta={numPregunta}
                setPregunta={setPregunta}
                respuesta={respuesta}
                setRespuesta={setRespuesta}
                setRespuestaDisabled={setRespuestaDisabled}
                setFinished={setFinished}
                setPreguntasRespuestas={setPreguntasRespuestas}
              />
              <Input
                respuesta={respuesta}
                setRespuesta={setRespuesta}
                respuestaDisabled={respuestaDisabled}
              />
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

import { React, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import questions from "../../data/preguntasTecnicas";
import questionsCode from "../../data/preguntasCode";
import { executeCode } from "../../services/apiCode";
import Play from "../icons/Play";
import { motion } from "framer-motion";

import ProblemIcon from "../icons/Problem";

const Informacion = ({
  numPregunta,
  setPregunta,
  respuesta,
  setRespuesta,
  setRespuestaDisabled,
  setFinished,
  setPreguntasRespuestas,
  setNumPreguntasTotales,
  setLoading,
  setOutput,
  loading,
  language,
}) => {
  // <-- Obtener pregunta codigo aleatoria -->
  const NUMERO_DE_PREGUNTAS_CODE = 1;
  const { categoria, nivel } = useParams();

  function obtenerPreguntasAleatoriasCode(arrayPreguntas, num) {
    const cloneArray = [...arrayPreguntas];
    const sortear = cloneArray.sort(() => 0.5 - Math.random());
    return sortear.slice(0, num);
  }

  const arrayPreguntasCode = questionsCode[categoria][nivel];

  const preguntasCode = useMemo(
    () =>
      obtenerPreguntasAleatoriasCode(
        arrayPreguntasCode,
        NUMERO_DE_PREGUNTAS_CODE
      ),
    [arrayPreguntasCode]
  );

  // <-- Obtener preguntas tecnicas aleatorias -->
  const NUMERO_DE_PREGUNTAS = 2;

  function obtenerPreguntasAleatorias(arrayPreguntas, num) {
    const cloneArray = [...arrayPreguntas];
    const sortear = cloneArray.sort(() => 0.5 - Math.random());
    return sortear.slice(0, num);
  }

  const arrayPreguntas = questions[categoria][nivel];

  const preguntasTecnicas = useMemo(
    () => obtenerPreguntasAleatorias(arrayPreguntas, NUMERO_DE_PREGUNTAS),
    [arrayPreguntas]
  );

  const preguntas = [...preguntasTecnicas, ...preguntasCode];

  useEffect(() => {
    setNumPreguntasTotales(NUMERO_DE_PREGUNTAS + NUMERO_DE_PREGUNTAS_CODE);
  }, []);

  const pregunta = preguntas[numPregunta].question;

  // <-- Obtener el color segun el nivel -->
  const obtenerColorNivel = (nivel) => {
    switch (nivel) {
      case "intern":
        return "text-green-500";
      case "junior":
        return "text-blue-500";
      case "senior":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const colorNivel = obtenerColorNivel(nivel);

  // <-- Manejar la respuesta -->
  function handleRespuesta() {
    const prompt = {
      Pregunta: `${pregunta}`,
      Respuesta: `${respuesta}`,
    };
    // generarRespuesta(prompt);
    setPreguntasRespuestas((prevPreguntasRespuestas) => [
      ...prevPreguntasRespuestas,
      prompt,
    ]);

    if (numPregunta === preguntas.length - 1) {
      setFinished(true);
      return;
    }
    setPregunta(numPregunta + 1);
    setRespuestaDisabled(false);
    setRespuesta("");
    {
      numPregunta < preguntas.length - 2
        ? setTiempoRestante(TIEMPO_PARA_RESPONDER)
        : setTiempoRestante(TIEMPO_PARA_RESPONDER_CODE);
    }
  }

  // <-- controlar el tiempo restante -->
  const TIEMPO_PARA_RESPONDER = 120;
  const TIEMPO_PARA_RESPONDER_CODE = 300;

  const [tiempoRestante, setTiempoRestante] = useState(TIEMPO_PARA_RESPONDER);

  useEffect(() => {
    const timer = setInterval(() => {
      setTiempoRestante((prevTiempo) => {
        if (prevTiempo <= 1) {
          clearInterval(timer);
          setRespuestaDisabled(true);
          return 0;
        }
        return prevTiempo - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [numPregunta]);

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

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const calculateProgress = () => {
    return ((numPregunta + 1) / preguntas.length) * 100;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col flex-1 w-full bg-[#1B1D20] rounded-lg base:h-full">
      <div className="px-2 py-2 inline-flex gap-2 items-center bg-[#28292c] w-full rounded-t-lg">
        <ProblemIcon className="size-4" />
        <span className="text-sm font-medium text-gray-200">Entrevista</span>
      </div>
      <div className="min-h-96 p-5 pt-3 flex-1  flex flex-col justify-between">
        <div className="base:flex-1 base:flex base:flex-col">
          <div className="flex justify-between">
            <p
              className={`${colorNivel} px-3 text-center text-sm py-1 rounded-full bg-[#28292C]`}>
              {nivel}
            </p>
            <div className="text-gray-100 text-sm md:text-base font-medium">
              Tiempo restante: {formatTime(tiempoRestante)}
            </div>
          </div>
          <div className="w-full text-gray-200 font-medium mt-6">
            {numPregunta + 1} de {preguntas.length}
          </div>
          <div className="max-w-lg base:w-full bg-gray-700 rounded-full h-2.5 mt-2">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${calculateProgress()}%` }}></div>
          </div>

          <div className="base:flex-1 relative">
            <div className="hidden inset-0 overflow-hidden base:block base:absolute py-4 pt-7">
              <div className="overflow-y-auto h-full">
                <pre
                  className={`
                  ${numPregunta < preguntas.length - 1 && "max-w-lg"}
                  text-gray-100 mb-4 text-base base:text-xl mt-8 whitespace-pre-wrap
    break-words font-onest`}>
                  {numPregunta + 1}. {pregunta}
                </pre>
              </div>
            </div>
            <pre
              className={`
              ${numPregunta < preguntas.length - 1 && "max-w-lg"}
              text-gray-100 base:hidden mb-4 text-base base:text-xl mt-8 whitespace-pre-wrap
    break-words font-onest`}>
              {numPregunta + 1}. {pregunta}
            </pre>
          </div>
        </div>

        <div className="flex justify-end gap-6">
          <button className="text-gray-300 text-sm underline">
            Necesito ayuda
          </button>
          <button
            className="bg-green-500 text-white text-base rounded-md px-2 py-1"
            onClick={() => handleRespuesta()}>
            Continuar
          </button>
          {numPregunta >= preguntas.length - 1 && (
            <button
              className={`px-2 py-1 border-2 border-green-500 text-green-500 rounded-md hover:scale-105 transition-all duration-300 ${
                language == "html" || language == "sql" || language == "txt"
                  ? "cursor-not-allowed text-gray-600 border-gray-600"
                  : ""
              }`}
              disabled={
                language == "html" || language == "sql" || language == "txt"
              }
              onClick={handleExecuteCode}>
              {loading ? (
                <div className="flex justify-center w-[90px]">
                  Cargando
                  <div className="flex items-center ml-2 ">
                    <div
                      role="status"
                      className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center w-[90px]">
                  Ejecutar
                  <div className="flex items-center ml-2">
                    <div>
                      <Play className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Informacion;

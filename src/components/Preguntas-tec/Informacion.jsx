import { React, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import questions from "../../data/preguntasTecnicas";
import questionsCode from "../../data/preguntasCode";

const Informacion = ({
  numPregunta,
  setPregunta,
  respuesta,
  setRespuesta,
  setRespuestaDisabled,
  setFinished,
  setPreguntasRespuestas,
  setNumPreguntasTotales,
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
        return "green-500";
      case "junior":
        return "blue-500";
      case "senior":
        return "red-500";
      default:
        return "gray-500";
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

  return (
    <div
      className={`  ${
        numPregunta < preguntas.length - 1 ? " lg:h-[650px]" : "lg:h-[309px]"
      }  lg:relative  bg-primary border-2 border-gray-100/[0.5] p-4 md:p-8 rounded-lg w-full`}>
      <div className="flex justify-between">
        <h2 className="text-gray-100 font-semibold text-xl md:text-2xl">
          Pregunta Tecnica
        </h2>
        <p className="text-gray-100 md:text-lg">
          {numPregunta + 1}/{preguntas.length}
        </p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p
          className={`text-gray-100 px-2 rounded-md border-2 border-${colorNivel}`}>
          {nivel}
        </p>
        <div className="text-gray-100">Tiempo restante: {tiempoRestante} s</div>
      </div>

      <div className="h-[100px] overflow-y-auto  ">
        <p className="text-gray-100 mt-8 ">{pregunta}</p>
      </div>

      <div className=" lg:absolute lg:bottom-9 lg:right-8 flex justify-between md:justify-end mt-8 md:space-x-5 ">
        <button className="text-white underline">Necesito ayuda</button>
        <button
          className="bg-green-500 text-white rounded-md px-2 py-1"
          onClick={() => handleRespuesta()}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Informacion;

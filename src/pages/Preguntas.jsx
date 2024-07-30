import { React, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../services/useLocalStorage";
import { feedbackContext } from "../context/feedbackContext";

import Container from "../components/Preguntas-tec/Container.jsx"
import Informacion from "../components/Preguntas-tec/Informacion";
import Input from "../components/Preguntas-tec/Input.jsx";
import generarRespuesta from "../services/apiGemini.js";
import CodeEditor from "../components/Preguntas-tec/CodeEditor.jsx";
import CompilerInterpreter from "../components/Preguntas-tec/CompilerInterpreter.jsx";
import Spliter from "../components/Preguntas-tec/Spliter.jsx";
import "./styles/preguntas.css";

const Preguntas = () => {
  const [numPregunta, setPregunta] = useState(0);
  const [numPreguntasTotales, setNumPreguntasTotales] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const [respuestaDisabled, setRespuestaDisabled] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const [preguntasRespuestas, setPreguntasRespuestas] = useState([]);
  const [language, setLanguajes] = useState("javascript");

  const [feedback, setFeedback] = useLocalStorage('feedback', '');
  const { setLoadingFeedback, setErrorFeedback, setDoneFeedback } = useContext(feedbackContext);

  const [output, setOutput] = useState("Haz click en ejecutar");
  const [loading, setLoading] = useState(false);

  const stringPreguntasRespuestas = 'Proporciona un JSON output válido sin markdown. No quieoro que ponga ```json ni ```. Respeta el esquema de datos. Las preguntas son las siguientes:' + JSON.stringify(preguntasRespuestas);
  
  useEffect(() => {
    if (isFinished) {
      setLoadingFeedback();
      setFeedback('{ "status": "loading" }');

      generarRespuesta(stringPreguntasRespuestas).then((response) => {
        if(response !== 'error-response'){
          setFeedback(response);
          setDoneFeedback();
        }else{
          setFeedback('{ "status": "error-response" }');
          setErrorFeedback();
        }

      });
    }
  }, [isFinished]);

  return (
    <Container>
      <div className="w-full flex flex-col gap-2.5 base:flex-row">
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
                  setNumPreguntasTotales={setNumPreguntasTotales}
                  setLoading={setLoading}
                  setOutput={setOutput}
                  loading={loading}
                  language={language}
                />
                {numPregunta < numPreguntasTotales - 1 ? (
                  <Input
                    respuesta={respuesta}
                    setRespuesta={setRespuesta}
                    respuestaDisabled={respuestaDisabled}
                  />  
                ) : (
                  <Spliter >
                      <CodeEditor
                      setRespuesta={setRespuesta}
                      respuestaDisabled={respuestaDisabled}
                      language={language}
                      setLanguajes={setLanguajes}
                    />
                    <CompilerInterpreter
                      output={output}
                    />
                  </Spliter>
                )
              }
            </>
          ) : (
            <div className="text-gray-100 flex-1 px-2 py-1 rounded-md hover:scale-110 transition-all duration-300 flex justify-center items-center">
              <div className="bg-blue-600 px-5 py-2 rounded-md">
                <Link to="/feedback">Ver tu Resumen</Link>
              </div>
            </div>
          )}
        </div>
    </Container>
  );
};

export default Preguntas;

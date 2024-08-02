import { React, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../services/useLocalStorage";
import { feedbackContext } from "../context/feedbackContext";

import Container from "../components/Preguntas-tec/Container.jsx"
import Informacion from "../components/Preguntas-tec/Informacion";
import Input from "../components/Preguntas-tec/Input.jsx";
import generarRespuesta from "../services/apiGemini.js";
import generarRespuestaCode from "../services/apiGeminiCode.js";
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
  const [feedbackCode, setFeedbackCode] = useLocalStorage('feedbackCode', '');
  const [readQuestStorage, setQuestStorage] = useLocalStorage('questData', '');
  const [languageStorage, setLanguageStorage] = useLocalStorage('language', '');

  const { setLoadingFeedback, setErrorFeedback, setDoneFeedback , setLoadingCode, setErrorCode, setDoneCode } = useContext(feedbackContext);

  const [output, setOutput] = useState("Haz click en ejecutar");
  const [loading, setLoading] = useState(false);

  const stringPreguntasRespuestas = 'Proporciona un JSON output. No quiero que ponga ```json ni ```. Respeta el esquema de datos. Las preguntas son las siguientes y si alguna no tiene respuesta quiero que me digas una forma concisa y correcta de responder, o da consejos:' + JSON.stringify(preguntasRespuestas);
  
  const stringRespuestaCodigo = 'Proporciona un JSON output. No quiero que ponga ```json ni ```. Respeta el esquema de datos. El problema es el siguiente y quiero que me digas consejos para resolver problemas de código siendo conciso:';
  
  useEffect(() => {
    if (isFinished) {
      setLoadingCode();
      setFeedbackCode('{ "status": "loading" }');

      console.log(preguntasRespuestas);
      
      const promptCode = stringRespuestaCodigo + JSON.stringify(preguntasRespuestas[preguntasRespuestas.length - 1]);

      generarRespuestaCode(promptCode).then((response) => {
        if(response !== 'error-response'){
          setLanguageStorage(JSON.stringify(language));
          setFeedbackCode(response);
          setQuestStorage(JSON.stringify(preguntasRespuestas));
          setDoneCode();
        }else{
          setFeedbackCode('{ "status": "error-response" }');
          setErrorCode();
        }

      });
    }
  }, [isFinished]);

  useEffect(() => {
    if (numPregunta === 2) {
      setLoadingFeedback();
      setFeedback('{ "status": "loading" }');

      console.log(preguntasRespuestas);

      generarRespuesta(stringPreguntasRespuestas).then((response) => {
        if(response !== 'error-response'){
          setFeedback(response);
          setQuestStorage(JSON.stringify(preguntasRespuestas));
          setDoneFeedback();
        }else{
          setFeedback('{ "status": "error-response" }');
          setErrorFeedback();
        }

      });
    }
  },[numPregunta])

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

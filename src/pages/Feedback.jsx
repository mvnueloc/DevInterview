import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../services/useLocalStorage";
import { feedbackContext } from "../context/feedbackContext";

import IAicon from "../components/icons/IA";
import ResumenQuest from "../components/feedback/ResumenPreguntas";
import ResumenCode from "../components/feedback/ResumenCode";

function FeedbackPage() {
  const navigate = useNavigate();
  const { feedback, feedbackCode } = useContext(feedbackContext);
  const [data, setData] = useState(null);
  const [dataCode, setDataCode] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    const storedData = getLocalStorage("feedback");
    const storedDataCode = getLocalStorage("feedbackCode");
    const storedQuestions = getLocalStorage("questData");
    const storedLanguage = getLocalStorage("language");

    if (!storedData && !storedDataCode) {
      navigate("/practicar");
      return;
    }

    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
      setLanguage(JSON.parse(storedLanguage));
    }

    if (storedData) {
      setData(JSON.parse(storedData));
    }

    if (storedDataCode) {
      setDataCode(JSON.parse(storedDataCode));
    }
  }, [feedback, feedbackCode]);

  useEffect(() => {
    const storedData = getLocalStorage("feedback");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, [feedback]);

  useEffect(() => {
    const storedDataCode = getLocalStorage("feedbackCode");
    if (storedDataCode) {
      setDataCode(JSON.parse(storedDataCode));
    }
  }, [feedbackCode]);

  return (
    <main className="relative font-onest px-4 py-10 base:pb-20 base:pt-24 min-h-screen max-w-dwv text-gray-100">
      <section className="hero mx-auto w-full md:w-11/12 2xl:w-[1280px] xl:w-10/12">
        <h1 className="inline-flex text-4xl font-bold  items-center gap-3">
          <IAicon className="size-8" color="#4a67a1" />
          Retroalimentación
        </h1>
        {!data ? (
          <div>No hay feedback</div>
        ) : data["status"] === "error-response" ? (
          <div>Error al cargar la retroalimentación</div>
        ) : (
          <>
            <ResumenQuest data={data} questions={questions} />
          </>
        )}

        {!dataCode ? (
          <div>No hay feedback para Código</div>
        ) : dataCode["status"] === "error-response" ? (
          <div>Error al cargar la retroalimentación</div>
        ) : (
          <>
            <ResumenCode
              data={dataCode}
              questions={questions}
              language={language}
            />
          </>
        )}
      </section>
    </main>
  );
}

export default FeedbackPage;

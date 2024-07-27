import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../services/useLocalStorage";
import { feedbackContext } from "../context/feedbackContext";


import IAicon from "../components/icons/IA";
import ResumenQuest from "../components/feedback/ResumenPreguntas";



function FeedbackPage() {
    const navigate = useNavigate();
    const { feedback, setLoadingFeedback, setErrorFeedback, setDoneFeedback } = useContext(feedbackContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        const storedData = getLocalStorage("feedback");
        
        if (!storedData) {
            navigate("/practicar");
            return;
        } 

        setData(JSON.parse(storedData));

    }, []);

    useEffect(() => {
        const storedData = getLocalStorage("feedback");
        setData(JSON.parse(storedData));
    }, [feedback]);

    return (
        <main className="relative font-onest px-4 py-10 base:pb-20 base:pt-24 min-h-screen max-w-dwv text-gray-100">
            <section className="hero mx-auto w-full md:w-11/12 2xl:w-[1280px] xl:w-10/12">
                {!data ? (
                    <div>No hay feedback</div>
                ) : data["status"] === "error-response" ? (
                    <div>Error al cargar la retroalimentación</div>
                ) : (
                    <>
                        <h1 className="inline-flex text-4xl font-bold  items-center gap-3">
                            <IAicon className="size-8" color="#4a67a1" />
                            Retroalimentación
                        </h1>
                        <ResumenQuest data={ data } />
                    </>
                )}
            </section>
        </main>
    );
}

export default FeedbackPage;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../services/useLocalStorage";

import IAicon from "../components/icons/IA";
import ResumenQuest from "../components/feedback/ResumenPreguntas";



function Feedback() {
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        const storedFeedback = getLocalStorage("feedback");
        if (!storedFeedback) {
            console.log("No hay feedback");
            navigate("/practicar");
        } else {
            setFeedback(JSON.parse(storedFeedback));
            console.log("Feedback cargado");
        }
    }, [navigate]);

    return (
        <main className="relative bg-black font-onest px-4 py-10 base:pb-20 base:pt-24 min-h-screen max-w-dwv text-gray-100">
            <section className="hero 2xl:w-[1280px] xl:w-10/12 w-11/12 mx-auto">
                
                {feedback && feedback["feedback"] && (
                    <div>Cargando...</div>
                )}

                {feedback && feedback["feedback-1"] && (
                    <>
                        <h1 className="inline-flex text-4xl font-bold  items-center gap-3">
                            <IAicon className="size-8" color="#4a67a1" />
                            Retroalimentación
                        </h1>
                        <ResumenQuest data={ feedback } />
                    </>
                )}

                {
                    feedback && feedback["error"] && (
                        <div>Error al cargar la retroalimentación</div>
                    )
                }

                {!feedback && (
                    <div>No hay feedback</div>
                )}
            </section>
        </main>
    );
}

export default Feedback;
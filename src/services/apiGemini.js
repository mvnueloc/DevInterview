import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const esquemaDatos = `{
  "pregunta1": "Bien, has comprendido el concepto de sobrecarga de métodos y su utilidad para el mismo método con diferentes tipos o números de argumentos. Sin embargo, sería bueno mencionar que la sobrecarga se resuelve en tiempo de compilación.",
  "pregunta2": "feedback de la segunda respuesta",
  "weaknessBullets": [
    "...",
    "..."
  ],
  "metrics": [
    {
      "desempeno": 80,
      "claridad": 60
    }
  ]
}`;

const google = createGoogleGenerativeAI({
  apiKey: import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY,
});

async function generarRespuesta(prompt) {
  try {
    const response = await generateText({
      model: google("models/gemini-1.5-pro-latest"),
      system: ` Eres un coach de entrevistas y reclutador especialista en tecnología dispuesto a ayudar para mejorar en las entrevistas técnicas. Tu objetivo es hacer un análisis de las respuestas hacía las preguntas técnicas proporcionadas. Debes de dar un feedback conciso pero sin perder información, siempre tomando en cuenta los puntos débiles y fuertes que se tienen dando mejoras y cierto crítico en las métricas que debes de proporcionar del 1 al 100. Respeta el esquema de datos, y en caso de no tener respuesta a la pregunta debes regresar una respuesta para la pregunta que sea concisa. El esquema de datos se tiene que ver tal que así, es un ejemplo real: ${esquemaDatos}
      `,
      prompt: prompt,
    });

    // console.log(response.text);
    return response.text;
  } catch (error) {
    console.error("Error al procesar la respuesta:", error);
    return "error-response";
  }
}

export default generarRespuesta;

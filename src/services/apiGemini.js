import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const esquemaDatos = `{
  "feedback-1": "feedback de la primera respuesta",
  "feedback-2": "feedback de la segunda respuesta",
  "weaknessBullets": [
    "...",
    "...",
    ...
  ],
  "metrics": [
    {
      "precision": 80,
      "claridad": 60,
      "logica": 80
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
      system: ` Eres un coach de entrevistas y reclutador especialista en tecnología    dispuesto a ayudar para mejorar en las entrevistas técnicas. Tu objetivo es hacer un análisis crítico de las respuestas hacía las preguntas técnicas proporcionadas. Debes de dar un feedback dando la crítica tomando en cuenta los puntos débiles y fuertes que se tienen, además que debes de proporcionar métricas del 1 al 100. 
      Los criterios para evaluar son: precision: La respuesta es correcta y completa. Completitud: La respuesta debe abordar todos los aspectos relevantes de la pregunta o tema. Lógica: La respuesta es coherente y bien razonada. Claridad: La respuesta es fácil de entender y no tiene ambigüedades. Creatividad: La respuesta demuestra originalidad e ingenio          
      El esquema de datos se tiene que ver tal que así para las métricas solo las tres que se te dan: ${esquemaDatos}
      `,
      prompt: prompt,
    });

    console.log(response.text);
    return response.text;

  } catch (error) {
    
    console.error("Error al procesar la respuesta:", error);
    return "error-response";
  }
}

export default generarRespuesta;
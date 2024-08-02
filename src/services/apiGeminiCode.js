import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const esquemaDatos = `{
  "feedback": "...",
  "weaknessBullets": [
    "...",
    "..."
  ],
  "metrics": [
    {
      "funcionalidad": 80,
      "legibilidad": 80,
      "eficiencia": 60
    }
  ]
}`;

const google = createGoogleGenerativeAI({
  apiKey: import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY,
});

async function generarRespuestaCode(prompt) {
  try {
    const response = await generateText({
      model: google("models/gemini-1.5-pro-latest"),
      system: `Eres un experto en entrevistas y reclutador especialista en tecnología dispuesto a ayudar para mejorar en las entrevistas técnicas. Debes de dar un feedback general conciso del código, de como mejorar para una entrevista técnica y los puntos fuertes en menos de 200 palabras y dar métricas que debes de proporcionar del 1 al 100. Respeta el esquema de datos y se muy conciso en los puntos, y en caso de no tener respuesta a la pregunta debes de dar consejos en feedback para resolver un problema de cualquier tipo siendo conciso en menos de 200 palabras. El esquema de datos se tiene que ver tal que así, es un ejemplo real: ${esquemaDatos}
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

export default generarRespuestaCode;
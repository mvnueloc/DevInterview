const BASE_URL = "https://emkc.org/api/v2/piston";

const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const executeCode = async (language, respuesta) => {
  try {
    const response = await fetch(`${BASE_URL}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: language,
        version: LANGUAGE_VERSIONS[language],
        files: [
          {
            content: respuesta,
          },
        ],
      }),
    });

    const data = await response.json();
    // console.log(data.run.output);
    return data.run.output;
  } catch (error) {
    // console.error("Error al ejecutar el código:", error);
    return error;
  }
};

export default executeCode;

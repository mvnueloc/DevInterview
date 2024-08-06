import PopOver from "./PopOver";
import GaugeChart from "./GaugeChart";
import BulletPoints from "./BulletPointsCross";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "react-loading-skeleton/dist/skeleton.css";
import Acordion from "./Acordion";

const languageMap = {
  javascript: "javascript",
  typescript: "javascript",
  python: "python",
  java: "java",
  cpp: "cpp",
  csharp: "csharp",
  php: "php",
  html: "xml",
  // Agrega más lenguajes según sea necesario
};

const ResumenPreguntas = ({ data, questions, language }) => {
  const markdownLanguage = languageMap[language] || "plaintext";
  console.log(questions);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="md:px-6 py-6 rounded-lg">
        <h2 className="mb-6 text-3xl font-bold border-b border-white">
          Código
        </h2>
        <div className="flex flex-col  gap-3 justify-between w-full base:flex-row base:items-stretch">
          <div className="w-full flex flex-col p-6 min-h-64 bg-[#1B1D20] rounded-lg">
            <h3 className="inline-flex text-xl font-semibold items-center">
              <span className="flex w-2.5 h-2.5 bg-blue-800    rounded-full me-1.5 flex-shrink-0"></span>
              Métricas
            </h3>
            <div className="mt-2">Métricas del código proporcionado</div>
            <div className="flex-1 flex flex-col justify-center">
              {data["status"] ? (
                <Skeleton height="156px" width="100%" />
              ) : (
                <div className="relative w-full flex flex-col sm:flex-row justify-between">
                  <GaugeChart
                    height={250}
                    data={
                      data.metrics.length === 0
                        ? 0
                        : data.metrics[0].funcionalidad
                        ? data.metrics[0].funcionalidad
                        : 0
                    }
                    title="Funcional"
                  />
                  <GaugeChart
                    height={250}
                    data={
                      data.metrics.length === 0
                        ? 0
                        : data.metrics[0].eficiencia
                        ? data.metrics[0].eficiencia
                        : 0
                    }
                    title="Eficiencia"
                  />
                  <GaugeChart
                    height={250}
                    data={
                      data.metrics.length === 0
                        ? 0
                        : data.metrics[0].legibilidad
                        ? data.metrics[0].legibilidad
                        : 0
                    }
                    title="Legibilidad"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3 gap-3 justify-between base:flex-row w-full base:items-stretch">
          <div className="w-full p-6 bg-[#1B1D20] rounded-lg base:max-w-[40%]">
            <h3 className="inline-flex text-xl font-semibold items-center">
              <span className="flex w-2.5 h-2.5 bg-yellow-500 rounded-full me-1.5 flex-shrink-0"></span>
              Puntos de mejora
            </h3>
            <div className="mt-2 ml-4 feedback-content text-[#b3b3b3] text-base">
              {data["status"] ? (
                <>
                  <Skeleton count={3} className="mt-4" />
                </>
              ) : data.weaknessBullets.length === 0 ? (
                <div>- Todavía no se han identificado puntos de mejora.</div>
              ) : (
                <>
                  <BulletPoints points={data.weaknessBullets} />
                </>
              )}
            </div>
          </div>
          <div className="flex-1 w-full p-6 bg-[#1B1D20] rounded-lg">
            <div className="w-full min-h-12">
              {data["status"] ? (
                <>
                  <Skeleton count={3} />

                  <Skeleton className="mt-3" />
                  <Skeleton />
                </>
              ) : (
                <>
                  {data["feedback"] ? (
                    <div className="mt-2 feedback-content text-[#b3b3b3] text-base">
                      <ReactMarkdown>{data.feedback}</ReactMarkdown>
                    </div>
                  ) : (
                    <div className="mt-2 feedback-content text-[#b3b3b3] text-base">
                      - No hay feedback para el problema de código.
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mt-3 w-full p-6 bg-[#1B1D20] rounded-lg">
          <div className="w-full">
            {data["status"] ? (
              <>
                <Skeleton count={3} />

                <Skeleton className="mt-3" />
                <Skeleton />
              </>
            ) : (
              <>
                {questions.length === 3 ? (
                  <>
                    <Acordion
                      title={
                        <h4 className="text-lg mb-3 text-white">
                          {questions[2] ? questions[2]["Pregunta"] : ""}
                        </h4>
                      }
                      answer={
                        <ReactMarkdown
                          components={{
                            code({
                              node,
                              inline,
                              className,
                              children,
                              ...props
                            }) {
                              const match = /language-(\w+)/.exec(
                                className || ""
                              );
                              return !inline && match ? (
                                <SyntaxHighlighter
                                  style={atomDark}
                                  language={match[1]}
                                  PreTag="div"
                                  className="rounded-lg p-4"
                                  {...props}>
                                  {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                              ) : (
                                <code className={className} {...props}>
                                  {children}
                                </code>
                              );
                            },
                          }}>
                          {` \`\`\`${markdownLanguage}\n${
                            questions[2] && questions[2]["Respuesta"]
                              ? questions[2]["Respuesta"]
                              : ""
                          }\n\`\`\` `}
                        </ReactMarkdown>
                      }
                    />
                  </>
                ) : (
                  <div>- No hay código</div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ResumenPreguntas;

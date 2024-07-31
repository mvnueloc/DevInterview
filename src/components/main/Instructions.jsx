import Question from "../icons/Question";
import TechnicalIcon from "../icons/Technical";
import CodeIcon from "../icons/Code";
import BulletPointIcon from "../icons/BulletPoint";
import FadeInLeft from "../common/Animations/FadeInLeft";
import FadeInRight from "../common/Animations/FadeInRight";

const Instructions = () => {
  return (
    <div className="w-full pb-20">
      <h2 className="text-center text-2xl md:text-4xl font-semibold">
        Estás a un Paso de tu Empleo Soñado
      </h2>
      <p className="m-auto max-w-3xl text-lg text-center my-10">
        Tendrás una entrevista técnica evaluada por una Inteligencia Artificial.
        ¿Estás listo para demostrar tus habilidades?, esto es lo que necesitas
        saber:
      </p>
      <div className="w-full flex flex-col gap-6 base:flex-row overflow-x-hidden">
        <FadeInLeft>
          <article className="w-full min-h-full p-6 bg-[#2f2f31]/30 flex flex-col gap-y-4  md:flex-row base:flex-col items-center rounded-md">
            <div className="flex-1">
              <h3 className="inline-flex text-base bg-[#97E1C5]/50 rounded-full px-3 py-1 font-semibold items-center">
                <TechnicalIcon className="size-5" color="#97E1C5" />
                <span className="ml-2 text-[#97E1C5]">Preguntas Técnicas</span>
              </h3>
              <div className="w-full inline-flex text-base mt-4">
                <BulletPointIcon className="size-5" color="#97E1C5" />
                Duración de 2 a 5 minutos por pregunta.
              </div>
              <div className="inline-flex text-base">
                <BulletPointIcon className="size-5" color="#97E1C5" />
                Evaluación de tu conocimiento teórico.
              </div>
            </div>
            <div className="flex-1">
              <h3 className="inline-flex text-base bg-[#E4607B]/50 rounded-full px-3 py-1 font-semibold items-center">
                <CodeIcon className="size-5" color="#E4607B" />
                <span className="ml-2 text-[#E4607B]">Prueba de Código</span>
              </h3>
              <div className="w-full inline-flex mt-4 text-base">
                <BulletPointIcon className="size-5" color="#E4607B" />
                Duración de 15 a 20 minutos.
              </div>
              <div className="inline-flex text-base">
                <BulletPointIcon className="size-5" color="#E4607B" />
                Resolución de problemas prácticos.
              </div>
            </div>
          </article>
        </FadeInLeft>
        <div className="base:min-w-[60%] base:max-w-[60%] overflow-x-hidden">
          <FadeInRight>
            <article className="w-full h-full flex flex-col justify-center p-6 bg-[#2f2f31]/30 rounded-md gap-4">
              <div>
                <h3 className="inline-flex text-base bg-[#DFDE51]/50 rounded-full px-3 py-1 font-semibold items-center">
                  <Question className="size-5" color="#DFDE51" />
                  <span className="ml-2 text-[#DFDE51]">Información</span>
                </h3>
              </div>
              <div className="w-full">
                <h4 className="text-base font-semibold">
                  ¿Se necesita una API Key?
                </h4>
                <p className="mt-3 text-base">
                  La aplicación ofrece un número limitado de demos diarias. Al
                  agotarse, los usuarios deben clonar la aplicación y seguir las
                  instrucciones del{" "}
                  <span className="bg-gray-100/[0.3] px-1 rounded-md">
                    README
                  </span>{" "}
                  para continuar usándola.
                </p>
              </div>
              <div className=" w-full">
                <h4 className="text-base font-semibold">¿Qué modelo usa?</h4>
                <p className="mt-3 text-base">
                  Implementado con{" "}
                  <span className="bg-gray-100/[0.3] px-1 rounded-md">
                    Gemini-1.5-pro
                  </span>{" "}
                  por defecto. Cambia fácilmente a otros modelos con pocas
                  líneas de código.
                </p>
              </div>
            </article>
          </FadeInRight>
        </div>
      </div>
    </div>
  );
};

export default Instructions;

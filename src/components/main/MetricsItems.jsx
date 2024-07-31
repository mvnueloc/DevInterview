import StatsIcon from "../icons/Stats";
import BookIcon from "../icons/Book";
import IAicon from "../icons/IA";
import TimeIcon from "../icons/Time";
import FadeInLeft from "../common/Animations/FadeInLeft";
import FadeInLeft_25 from "../common/Animations/Left/FadeInLeft_25";

const MetricsItems = () => {
  return (
    <>
      <div className="flex-1 flex flex-col sm:flex-row base:flex-col gap-4">
        <div className="flex-1 bg-[#2f2f31]/30 px-8 py-7 inline-flex items-center rounded-xl gap-4 base:py-0 base:px-5 backdrop-blur-sm hover:scale-105 hover:shadow-md hover:shadow-[#32C766]/50 transition-all duration-300 cursor-pointer ">
          <FadeInLeft>
            <div className="p-4 bg-[#32C766]/30 rounded-xl">
              <IAicon className="size-5" color="#32C766" />
            </div>
          </FadeInLeft>
          <FadeInLeft_25>
            <div className="text-base lg:text-xl font-bold">
              Retroalimentación con IA
            </div>
          </FadeInLeft_25>
        </div>
        <div className="flex-1 bg-[#2f2f31]/30 px-8 py-7 inline-flex items-center rounded-xl gap-4 base:py-0 base:px-5 hover:scale-105 hover:shadow-md hover:shadow-[#FECC17]/50 transition-all duration-300 cursor-pointer ">
          <FadeInLeft>
            <div className="p-4 bg-[#FECC17]/30 rounded-xl">
              <StatsIcon className="size-5" color="#FECC17" />
            </div>
          </FadeInLeft>
          <FadeInLeft_25>
            <div className="text-base lg:text-xl font-bold">
              Métricas de Desempeño
            </div>
          </FadeInLeft_25>
        </div>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row base:flex-col gap-4">
        <div className="flex-1 bg-[#2f2f31]/30 px-8 py-7 inline-flex items-center rounded-xl gap-4 base:py-0 base:px-5 backdrop-blur-sm hover:scale-105 hover:shadow-md hover:shadow-red-400/50 transition-all duration-300 cursor-pointer ">
          <FadeInLeft>
            <div className="p-4 bg-red-400/30 rounded-xl">
              <TimeIcon className="size-5" color="#ED2939" />
            </div>
          </FadeInLeft>
          <FadeInLeft_25>
            <div className="text-base lg:text-xl font-bold">
              Cronometraje de Pruebas
            </div>
          </FadeInLeft_25>
        </div>
        <div className="flex-1 bg-[#2f2f31]/30 px-8 py-7 inline-flex items-center rounded-xl gap-4 base:py-0 base:px-5 backdrop-blur-sm hover:scale-105 hover:shadow-md hover:shadow-[#164DFF]/50 transition-all duration-300 cursor-pointer">
          <FadeInLeft>
            <div className="p-4 bg-[#164DFF]/30 rounded-xl">
              <BookIcon className="size-5" color="#164DFF" />
            </div>
          </FadeInLeft>
          <FadeInLeft_25>
            <div className="text-base lg:text-xl font-bold">
              Recursos de Aprendizaje
            </div>
          </FadeInLeft_25>
        </div>
      </div>
    </>
  );
};

export default MetricsItems;

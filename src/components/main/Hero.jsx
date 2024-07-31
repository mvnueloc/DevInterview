import { Link } from "react-router-dom";
import Github from "../icons/Github";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full font-onest grid-container items-center">
      <div className="base:w-full ">
        <h1 className="text-3xl md:text-5xl font-bold mb-0.5">
          Mejora tus habilidades técnicas con ayuda de Inteligencia Artificial
        </h1>

        <h2 className="text-[#C8C8C8] text-xl md:text-2xl font-semibold mt-3">
          Creado para{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#0E54BC] from-[#6b94d2]">
            <ReactTyped
              strings={[
                "Frontend",
                "Backend",
                "FullStack",
                "Software Developer",
              ]}
              typeSpeed={50}
              backSpeed={100}
              loop></ReactTyped>
          </span>
        </h2>

        <p className="mt-6 text-base text-[#C8C8C8]">
          Responde preguntas y recibe evaluaciones instantáneas.
        </p>

        <div className="inline-flex mt-7 gap-4">
          <Link
            to="/practicar"
            className="bg-[#4545E6] hover:shadow-lg hover:shadow-[#4545E6]/50 hover:scale-105 transition-all duration-500 px-6 pt-[14px] pb-3 rounded text-sm font-medium neon-shadow">
            Prácticar
          </Link>
          <a
            href="https://github.com/mvnueloc/DevInterview"
            className="inline-flex bg-black hover:shadow-lg hover:shadow-gray-700/50 hover:scale-105 transition-all duration-500 px-6 pt-[14px] items-center gap-2 pb-3 rounded font-medium text-sm ">
            <Github className="size-4" />
            Repositorio
          </a>
        </div>
      </div>
      <div className="w-full">
        <img
          src="images/hero-image.png"
          alt="Dev Interview Presentación"
          className="base:hidden img-gradient-bottom rounded-b-lg"
        />
        <img
          src="images/hero-image-crop.png"
          alt="Dev Interview Presentación"
          className="w-full hidden base:block img-gradient-right"
        />
      </div>
    </motion.div>
  );
};

export default Hero;

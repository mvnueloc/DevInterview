import { Link } from "react-router-dom";
const Informacion = () => {
  return (
    <div className="w-full lg:w-1/2 ">
      <h2 className="text-4xl font-semibold mt-2">Dev-</h2>
      <h2 className="text-4xl font-semibold">Interview.</h2>
      <p className="mt-6 text-base">
        Entrena tus habilidades técnicas con IA: responde preguntas y recibe evaluaciones instantáneas.
      </p>
      <div className="flex justify-between mt-5 w-full space-x-4">
        <a
          href="https://github.com/mvnueloc/DevInterview/"
          target="_blank"
          className="bg-gradient-to-r from-blue-700 to-gray-700 text-white font-bold text-sm py-2 w-1/2 text-center rounded-md">
          Repositorio
        </a>
        <Link
          to="/practicar"
          className="bg-gray-100 text-black rounded-md text-sm py-2 w-1/2 font-bold text-center">
          Prácticar
        </Link>
      </div>
      
    </div>
  );
};

export default Informacion;

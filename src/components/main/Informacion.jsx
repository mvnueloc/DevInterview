import { Link } from "react-router-dom";
const Informacion = () => {
  return (
    <div className="flex justify-center">
      <div className="w-5/6 md:w-[400px] ">
        <h2 className="text-4xl font-semibold mt-2">Dev-</h2>
        <h2 className="text-4xl font-semibold">Interview.</h2>
        <p className="mt-2">
          Aplicación web que simula entrevistas técnicas para desarrolladores.
        </p>
        <div className="flex justify-between mt-4 w-full space-x-4">
          <a
            href="https://github.com/mvnueloc/DevInterview/"
            target="_blank"
            className="bg-blue-600 text-white rounded-md px-4 py-2 w-1/2 text-center">
            Respositorio
          </a>
          <Link
            to="/practicar"
            className="bg-gray-100 text-black rounded-md px-4 py-2 w-1/2 text-center">
            Ver Demo
          </Link>
        </div>
        <div className="flex justify-between mt-4">
          <p className="font-semibold">Libreria</p>
          <p>React.js</p>
        </div>
        <hr className="mt-2" />
        <div className="flex justify-between mt-2">
          <p className="font-semibold">CSS</p>
          <p>Tailwind</p>
        </div>
        <hr className="mt-2" />
      </div>
    </div>
  );
};

export default Informacion;

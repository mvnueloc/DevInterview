import React, { useState, useEffect } from "react";
import Dificultad from "../components/Practicar/Dificultad";
import CardCategoria from "../components/Practicar/CardCategoria";
import "./styles/index.css";
import { Link, useNavigate } from "react-router-dom";

const Practicar = () => {
  const [selectedDificultad, setSelectedDificultad] = useState(null);
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const navegate = useNavigate();

  const url =
    selectedCategoria != null
      ? `preguntas/${selectedCategoria
          .toLowerCase()
          .replace(/\s+/g, "-")}/${selectedDificultad.toLowerCase()}`
      : "";

  useEffect(() => {
    if (selectedCategoria && selectedDificultad) {
      navegate(url);
    }
  }, [selectedCategoria, selectedDificultad]);

  const front_end = ["react", "angular", "html", "css", "javaScript"];
  const back_end = ["node", "docker", "python", "git", "sql"];
  const full_stack = ["react", "node", "express", "mongo", "git"];
  const software_developer = ["pytest", "c++", "git", "python", "sql"];

  return (
    <div className="bg-custom-degrad bg-dot font-onest ">
      <div className="relative w-screen lg:h-screen flex justify-center items-center">
        <div className="w-full my-8 lg:my-0">
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
            Entrevistas Técnicas.
          </h1>
          <div className="mt-8 lg:mt-8 flex justify-center">
            <Dificultad
              selectedDificultad={selectedDificultad}
              setSelectedDificultad={setSelectedDificultad}
            />
          </div>
          <div className="mt-6 flex justify-center flex-wrap lg:space-x-6 space-x-0 space-y-6 lg:space-y-0">
            <CardCategoria
              categoria={"Front-End"}
              icons={front_end}
              enfoque={
                "Orientado a desarrolladores especializados en la creación de interfaces de usuario y la experiencia del usuario."
              }
              disabled={!selectedDificultad}
              onSelect={() => setSelectedCategoria("Front-End")}
            />
            <CardCategoria
              categoria={"Back-End"}
              icons={back_end}
              enfoque={
                "Diseñada para desarrolladores que se centran en la lógica del servidor, bases de datos y la integración de sistemas."
              }
              disabled={!selectedDificultad}
              onSelect={() => setSelectedCategoria("Back-End")}
            />
          </div>
          <div className="mt-6 flex justify-center flex-wrap lg:space-x-6 space-x-0 space-y-6 lg:space-y-0">
            <CardCategoria
              categoria={"Full-Stack"}
              icons={full_stack}
              enfoque={
                "Orientado a desarrolladores que trabajan tanto en el front-end como en el back-end, manejando la arquitectura completa de una aplicación."
              }
              disabled={!selectedDificultad}
              onSelect={() => setSelectedCategoria("Full-Stack")}
            />
            <CardCategoria
              categoria={"Software Developer"}
              icons={software_developer}
              enfoque={
                "Dirigido a desarrolladores con un enfoque general en la creación de software, abarcando múltiples áreas de desarrollo y tecnologías."
              }
              disabled={!selectedDificultad}
              onSelect={() => setSelectedCategoria("Software Developer")}
            />
          </div>
          {selectedCategoria && selectedDificultad && (
            <div className="mt-6 flex justify-center">
              <Link to={`/${url}`} className="btn btn-primary">
                Ir a la categoría y dificultad seleccionada
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Practicar;

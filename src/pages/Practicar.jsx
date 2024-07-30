import React, { useState, useEffect } from "react";
import Dificultad from "../components/Practicar/Dificultad";
import CardCategoria from "../components/Practicar/CardCategoria";
import "./styles/index.css";
import { Link, useNavigate } from "react-router-dom";

import GitIcon from "../components/icons/skills/Git";
import PythonIcon from "../components/icons/skills/Python";
import SqlIcon from "../components/icons/skills/Sql";
import CplusplusIcon from "../components/icons/skills/Cplusplus";
import NodeJsIcon from "../components/icons/skills/NodeJs";
import CssIcon from "../components/icons/skills/Css";
import JavaScript from "../components/icons/skills/JavaScript";
import MongoIcon from "../components/icons/skills/Mongo";
import HtmlIcon from "../components/icons/skills/Html";
import DockerIcon from "../components/icons/skills/Docker";
import ReactIcon from "../components/icons/skills/React";
import AngularIcon from "../components/icons/skills/Angular";

const Practicar = () => {
  const [selectedDificultad, setSelectedDificultad] = useState(null);
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const navegate = useNavigate();

  const url =
    selectedCategoria != null
      ? `${selectedCategoria
          .toLowerCase()
          .replace(/\s+/g, "_")}/${selectedDificultad.toLowerCase()}`
      : "";

  useEffect(() => {
    if (selectedCategoria && selectedDificultad) {
      navegate(url);
    }
  }, [selectedCategoria, selectedDificultad]);

  const front_end = ["html", "css", "javascript", "react", "angular"];
  const back_end = ["node", "docker", "python", "git", "sql", "mongo"];
  const full_stack = ["javascript", "node", "express", "mongo", "sql", "git"];
  const software_developer = ["cplusplus","python", "git", "sql", "mongo", "docker"];
  const softwareDevIcon = {
    git: <GitIcon />,
    python: <PythonIcon />,
    sql: <SqlIcon />,
    cplusplus: <CplusplusIcon />,
    node: <NodeJsIcon />,
    css: <CssIcon />,
    javascript: <JavaScript />,
    mongo: <MongoIcon />,
    html: <HtmlIcon />,
    docker: <DockerIcon />,
    react: <ReactIcon />,
    angular: <AngularIcon />,
  } 

  return (
    <div className="bg-custom-degrad bg-dot font-onest ">
      <div className="relative w-full lg:h-dvh flex justify-center items-center">
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
          <div className="mt-6 flex justify-center flex-wrap md:space-x-6 space-x-0 space-y-6 md:space-y-0">
            <CardCategoria
              categoria={"Frontend"}
              enfoque={
                "Orientado a desarrolladores especializados en la creación de interfaces de usuario y la experiencia del usuario."
              }
              disabled={!selectedDificultad}
              onSelect={() => setSelectedCategoria("Frontend")}
            >
              {front_end.map((icon, index) => 
                softwareDevIcon[icon] && React.cloneElement(softwareDevIcon[icon], { key: index, className: 'size-7' })
              )}
            </CardCategoria>
            <CardCategoria
              categoria={"Backend"}
              enfoque={
                "Diseñada para desarrolladores que se centran en la lógica del servidor, bases de datos y la integración de sistemas."
              }
              disabled={!selectedDificultad}
              onSelect={() => setSelectedCategoria("Backend")}
            >
              {back_end.map((icon, index) => 
                softwareDevIcon[icon] && React.cloneElement(softwareDevIcon[icon], { key: index, className: 'size-7' })
              )}
            </CardCategoria>
          </div>
          <div className="mt-6 flex justify-center flex-wrap md:space-x-6 space-x-0 space-y-6 md:space-y-0">
            <CardCategoria
              categoria={"Full Stack"}
              enfoque={
                "Orientado a desarrolladores que trabajan tanto en el front-end como en el back-end, manejando la arquitectura completa de una aplicación."
              }
              disabled={!selectedDificultad}
              onSelect={() => setSelectedCategoria("Full_Stack")}
            >
              {full_stack.map((icon, index) => 
                softwareDevIcon[icon] && React.cloneElement(softwareDevIcon[icon], { key: index, className: 'size-7' })
              )}
            </CardCategoria>
            <CardCategoria
              categoria={"Software Developer"}
              
              enfoque={
                "Dirigido a desarrolladores con un enfoque general en la creación de software, abarcando múltiples áreas de desarrollo y tecnologías."
              }
              disabled={!selectedDificultad}
              onSelect={() => setSelectedCategoria("Software_Developer")}>
                {software_developer.map((icon, index) => 
                  softwareDevIcon[icon] && React.cloneElement(softwareDevIcon[icon], { key: index, className: 'size-7' })
                )}
              </CardCategoria>
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

import React, { useState, useEffect } from "react";
import "./styles/recursosstyles.css";
import { useNavigate } from "react-router-dom";
import nerdImage from "../components/icons/Recursos/nerd.png";

const Recursos = () => {
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  
  const url = selectedCategoria
    ? `/recursos/${selectedCategoria.toLowerCase().replace(/\s+/g, "-")}`
    : "";
  
  useEffect(() => {
    if (selectedCategoria) {
      navigate(url);
    }
  }, [selectedCategoria]);
  
  const handleStartClick = () => {
    setShowContent(true);
  };
  
  return (
    <div className="relative bg-custom-degrad bg-dot font-onest">
      <div className="grid lg:grid-cols-2 contenedor">
        <div className="grid grid-row">
          <div className="titleresources">
            Recu<span style={{ color: "#607cf7" }}>rsos</span>
          </div>
        </div>
        <div className="flex justify-left ml-[1em] showorno">
          <img
            src={nerdImage}
            alt="nerdyface"
            border="0"
            className="nerd showorno"
          />
        </div>
      </div>

      <div className="mt-10" />
      
      <div className=" relative flex mx-8">
        <nav className="w-50 bg-none text-white h-screen p-4 mr-[7em] mobileview">
          <h2 className="text-lg font-bold mb-4">Índice</h2>
          <ul>
            <li><a href="#section1" className="block py-2 px-4 hover:bg-gray-600 font-light">Aspectos a tomar <br />en cuenta</a></li>
            <li><a href="#section2" className="block py-2 px-4 hover:bg-gray-600 font-light">Pensamiento<br />Algorítmico</a></li>
            <li><a href="#section3" className="block py-2 px-4 hover:bg-gray-600 font-light">Páginas para<br />practicar</a></li>
            <li><a href="#section4" className="block py-2 px-4 hover:bg-gray-600 font-light">¿Sabes<br />comunicarte?</a></li>
          </ul>
        </nav>
        <div className="ml-10 flex flex-col">
        <section>
        <div className="relative grid grid-col text-white">
          <p className="text-left text-xl font-semibold mb-[2.5em] baselineconfig">¡Te damos la bienvenida! En este apartado podrás encontrar recursos que te ayudarán a prepararte para tus entrevistas técnicas.</p>
        </div>
      </section>
        <div class="grid grid-cols-2">
          <div id="section1" className="sectiontitles">ASPECTOS A TOMAR EN CUENTA</div>
          <div class="text-white text-sm text-right mr-2">Si-✅ No-❌ Evitar-⚠️</div>
        </div>
          <div className="graltext mt-8">Hay que tener siempre presente que el objetivo de una empresa al hacer una entrevista, es conocer a su solicitante y, de la misma forma, lo que este puede aportar a la empresa. En la siguiente tabla tenemos aspectos que deberías tomar en cuenta <span class="font-bold">ANTES</span> de tu entrevista de trabajo </div>
          <div class="grid grid-rows-1">
          <div className="ml-[4.0em] mr-20 mt-5 w-[80%] overflow-x-auto item-center">
            <table className="w-auto text-sm text-left text-gray-500 bordered">
              <thead className="text-xs text-gray-50 uppercase bg-none">
                <tr>
                  <th className="px-6 py-3 border-b border-r ">Acción</th>
                  <th className="px-6 py-3 border-b">¿Hacerlo?</th>
                  <th className="px-6 py-3 border-b">Razón</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-700 border-b ">
                  <th className="px-6 py-4 font-medium text-white">Prepararse antes de la entrevista.</th>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-5 py-3 text-justify text-white">Sentirás mayor comodidad al entrevistarte, ya que tendrás una noción más clara que tus competidores de lo que harás y te evaluarán. </td>
                </tr>
                <tr className="bg-gray-800 border-b">
                  <th className="px-6 py-4 font-medium text-white">Usar atajos o métodos poco convencionales</th>
                  <td className="px-6 py-4 text-center">⚠️</td>
                  <td className="px-6 py-4 text-white">Te precaución en usar prácticas poco usuales, tendrás que explicarlo.</td>
                </tr>
                  <tr className="bg-gray-700 border-b">
                  <th className="px-6 py-4 font-medium text-white">Respuestas y soluciones complejas.</th>
                  <td className="px-6 py-4 text-center">⚠️</td>
                  <td className="px-6 py-4 text-white">El tiempo que tienes para poder completar la entrevista es limitado, es por ello que soluciones complejas podrían jugarte en tu contra.</td>
                </tr>
                <tr className="bg-gray-800 border-b">
                  <th className="px-6 py-4 font-medium text-white">Mentir</th>
                  <td className="px-6 py-4 text-center">❌</td>
                  <td className="px-6 py-4 text-white">Sé honesto sobre tus habilidades y experiencia ya que mentir puede llevarte a problemas si consigues el puesto</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          <div className="sectiontitles mt-10" id="section2">PENSAMIENTO ALGORÍTMICO</div>
        <div className="graltext">El pensamiento algorítmico es una habilidad que te permitirá resolver problemas de forma eficiente y efectiva. A continuación, te dejamos una lista de recursos que te ayudarán a mejorar esta habilidad.</div>
        <p class="mr-10 text-white font-semibold text-lg">Algoritmos y Estructuras de datos</p>

      <div class="grid grid-rows-1 mt-10">
        <div class="grid grid-cols-2 items-center">
        

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="https://visualgo.net/en">
        <img class="rounded-t-lg" src="/src/components/icons/Recursos/visualgo.png" alt="" />
    </a>
    <div class="p-5">
        <a href="https://visualgo.net/en">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">VisuAlgo</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Visualgo es una herramienta muy útil para aprender y entender algoritmos y estructuras de datos de manera visual e interactiva.</p>
        <a href="https://visualgo.net/en" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ve a la página
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="https://leetcode.com/">
        <img class="rounded-t-lg" src="/src/components/icons/Recursos/leetcode.png" alt="" />
    </a>
    <div class="p-5">
        <a href="https://leetcode.com/">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">LeetCode</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">LeetCode es una plataforma excelente para mejorar tus habilidades de programación y prepararte para entrevistas técnicas.</p>
        <a href="https://leetcode.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ve a la página
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



  </div>
</div>

<div class="grid grid-rows-1 mt-10">
  <div class="grid grid-cols-2 items-center">
        

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="https://codeforces.com/">
        <img class="rounded-t-lg" src="/src/components/icons/Recursos/codeforces.png" alt="" />
    </a>
    <div class="p-5">
        <a href="https://codeforces.com/">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Codeforces</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Codeforces es una plataforma excelente para la programación competitiva y problemas de algoritmos.</p>
        <a href="https://codeforces.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ve a la página
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
              </a>
          </div>
      </div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="https://coderbyte.com/">
        <img class="rounded-t-lg" src="/src/components/icons/Recursos/coderbyte.png" alt="" />
    </a>
    <div class="p-9">
        <a href="https://coderbyte.com/">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Coderbyte</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ofrece desafíos de codificación y preparación para entrevistas</p>
        <a href="https://coderbyte.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ve a la página
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
      </div>

   </div>
</div>



<div id="section3" className="sectiontitles mt-12">PÁGINAS PARA PRACTICAR</div>
<div class="graltext">Aquí te dejamos una lista de páginas web que te ayudarán a practicar y mejorar tus habilidades de programación.</div>









<div id="section4" className="sectiontitles mt-12">¿SABES COMUNICARTE?</div>
<div>
<p className="mt-8 text-white font-regular text-justify">Imagina que una empresa busca a alguien no solo para realizar una tarea, sino para integrarse a un equipo, colaborar con otros y representar a la compañía. En este escenario, las habilidades técnicas (conocimientos específicos) son fundamentales, pero no lo son todo.
</p>
<p className="mt-4 text-white font-regular text-justify">
Las habilidades blandas son como el pegamento que une a las personas y los equipos. Son aquellas cualidades personales y sociales que te permiten interactuar de manera efectiva con los demás.</p>
<p className="mt-4 font-bold text-white">Aqui te dejamos algunos puntos a tomar en cuenta para mejorar tus habilidades blandas: </p>
<ol class="space-y-4 graltext list-decimal list-inside mt-8">
   <li>
   Autoconocimiento:
      <ul class="ps-5 mt-2 space-y-3 list-disc list-inside">
         <li>Identifica tus fortalezas y debilidades: Reflexiona sobre situaciones pasadas donde hayas destacado o enfrentado dificultades.</li>
         <li>Define tus objetivos: ¿Qué habilidades quieres mejorar? ¿Por qué son importantes para ti?</li>
      </ul>
   </li>
   <li>
   Práctica constante:
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
         <li>Busca oportunidades: Participa en actividades grupales, toma cursos, únete a clubes o asociaciones.</li>
         <li>Sal de tu zona de confort: Acepta nuevos desafíos y retos.</li>
      </ul>
   </li>
   <li>
   Desarrollo de habilidades específicas:
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
         <li>Comunicación: Practica la escucha activa, expresa tus ideas con claridad y da retroalimentación constructiva.</li>
         <li>Trabajo en equipo: Colabora en proyectos, delega tareas y resuelve conflictos.</li>
         <li>Resolución de problemas: Enfrenta desafíos de manera proactiva y busca soluciones creativas.</li>
         <li>Adaptabilidad: Sé flexible ante los cambios y aprende a manejar la incertidumbre.</li>
         <li>Inteligencia emocional: Reconoce y gestiona tus emociones, y desarrolla empatía hacia los demás.</li>

      </ul>
   </li>
</ol>


</div>






        </div>  
      </div>
    </div>
  );
};

export default Recursos;

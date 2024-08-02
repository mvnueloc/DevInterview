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
      
      <div className=" relative flex mx-[4em] lg:mx-[8em]">
        <nav className="w-50 bg-none text-white h-screen p-4 mr-[5em] mobileview">
          <h2 className="text-lg font-bold mb-4">Índice</h2>
          <ul>
            <li><a href="#section1" className="block py-2 px-4 hover:bg-gray-600 font-light">Aspectos a tomar <br />en cuenta</a></li>
            <li><a href="#section2" className="block py-2 px-4 hover:bg-gray-600 font-light">Pensamiento<br />Algorítmico</a></li>
            <li><a href="#section3" className="block py-2 px-4 hover:bg-gray-600 font-light">Páginas para<br />practicar</a></li>
            <li><a href="#section4" className="block py-2 px-4 hover:bg-gray-600 font-light">Software <br/>Development</a></li>
            <li><a href="#section5" className="block py-2 px-4 hover:bg-gray-600 font-light">Front-end</a></li>
            <li><a href="#section6" className="block py-2 px-4 hover:bg-gray-600 font-light">Back-end</a></li>
            <li><a href="#section7" className="block py-2 px-4 hover:bg-gray-600 font-light">Fullstack</a></li>
            <li><a href="#section8" className="block py-2 px-4 hover:bg-gray-600 font-light">¿Sabes<br />comunicarte?</a></li>
          </ul>
        </nav>
        <div className="ml-10 flex flex-col">
        <section>
        <div className="relative grid grid-col text-white">
          <p className="text-left text-xl font-semibold mb-[2.5em] baselineconfig">¡Te damos la bienvenida! En este apartado podrás encontrar recursos que te ayudarán a prepararte para tus entrevistas técnicas.</p>
        </div>
      </section>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div className="sectiontitles"  id="section1" >ASPECTOS A TOMAR EN CUENTA</div>
          <div class="text-white text-sm text-right showorno">Si-✅ No-❌ Evitar-⚠️</div>
        </div>
          <div className="graltext mt-8">Hay que tener siempre presente que el objetivo de una empresa al hacer una entrevista, es conocer a su solicitante y, de la misma forma, lo que este puede aportar a la empresa. En la siguiente tabla tenemos aspectos que deberías tomar en cuenta <span class="font-bold">ANTES</span> de tu entrevista de trabajo </div>
          <div class="grid grid-rows-1">
          <div className="ml-[4.0em] mr-20 mt-5 w-[50]lg:w-[80%] max-w-auto item-center">
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
                <tr className="bg-gray-700 border-b ">
                  <th className="px-6 py-4 font-medium text-white">Ser cortés.</th>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-5 py-3 text-justify text-white">Puede parecer irrelevante, pero causar una buena impresión al entrevistador suma puntos. </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          <div className="sectiontitles mt-10" id="section2">PENSAMIENTO ALGORÍTMICO</div>
        <p className="graltext">El pensamiento algorítmico es una habilidad que te permitirá resolver problemas de forma eficiente y efectiva, optmizar soluciones ya creadas o por crear, la innovación, entre otras.</p>
        <p class="text-white font-regular font-[1.25rem]">Antes de adentrarnos en el tema, definamos un algoritmo. Un algoritmo es una secuencia finita de instrucciones claras y precisas, diseñadas para resolver un problema específico. El pensamiento algorítmico implica la capacidad de descomponer un problema en pasos más pequeños, identificar patrones y diseñar una secuencia lógica de acciones para alcanzar una solución.</p>
        <div class="text-white font-semibold text-[1.45rem] mt-5">Importancia del pensamiento algorítmico</div>
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside text-white">
         <li>Informática: Base de la programación, desde simples cálculos hasta inteligencia artificial.</li>
         <li>Matemáticas: Diseño de algoritmos para resolver ecuaciones, optimizar procesos, etc.</li>
         <li>Ingeniería: Automatización de procesos industriales, diseño de sistemas embebidos.</li>
         <li>Ciencias de la computación: Desarrollo de software, análisis de datos, aprendizaje automático.</li>
      </ul>

<div id="section3" className="sectiontitles mt-12">PÁGINAS PARA PRACTICAR</div>
<div class="graltext">Aquí te dejamos una lista de páginas web que te ayudarán a practicar y mejorar tus habilidades de programación.</div>
<p id="section4" class="mt-5 text-white font-semibold text-[1.7rem] mr-[5.0em]">
  Software development
</p>
<div class="grid grid-rows-1 mt-7">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
<p id="section5" class="mt-5 text-white font-semibold text-[1.9rem] mr-[5.0em]">
  Front-end
</p>
<div class="grid grid-rows-1 mt-7">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://www.frontendmentor.io/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Frontend Mentor</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Dirigida a cualquier desarrollador frontend que quiera mejorar sus habilidades y construir un portafolio sólido.</p>
        <a href="https://www.frontendmentor.io/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ve a la página
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://css-tricks.com/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">CSS-Tricks</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ofrece tutoriales, artículos y desafíos para aprender CSS y crear diseños web atractivos.</p>
        <a href="https://css-tricks.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://javascript30.com/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">JavaScript30</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">30 días, 30 ejercicios para practicar acerca de JavaScript vanilla.</p>
        <a href="https://javascript30.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ve a la página
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://codepen.io/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">CodePen</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Plataforma para crear y compartir snippets de código HTML, CSS y JavaScript. Ideal para experimentar y aprender nuevas técnicas.</p>
        <a href="https://codepen.io/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ve a la página
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
<p id="section6" class="mt-5 text-white font-semibold text-[1.9rem] mr-[5.0em]">
  Back-end
</p>
<div class="grid grid-rows-1 mt-10">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://www.theodinproject.com/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">The Odin Project</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Esta página tiene una sección dedicada al backend. Podrás aprender sobre servidores, bases de datos y frameworks como Node.js y Ruby on Rails.</p>
        <a href="https://www.theodinproject.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ve a la página
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://codesignal.com/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">CodeSignal</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ofrece desafíos técnicos y simulacros de entrevistas para una variedad de roles, incluyendo backend.</p>
        <a href="https://codesignal.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://exercism.org/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Exercism</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">También ofrece ejercicios de backend en lenguajes como Ruby, Go y Python.</p>
        <a href="https://exercism.org/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ve a la página
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://www.hackerrank.com/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">HackerRank: </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ofrece secciones orientados a problemas de backend que te ayudarán a practicar algoritmos y estructuras de datos en el contexto del desarrollo de servidores.</p>
        <a href="https://www.hackerrank.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ve a la página
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
<p id="section7" class="mt-5 text-white font-semibold text-[1.9rem] mr-[5.0em]">
  Fullstack
</p>
<div class="grid grid-rows-1 mt-10">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://www.freecodecamp.org/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">freeCodeCamp</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ofrece un currículo completo y gratuito para aprender desarrollo web fullstack. Incluye desafíos de codificación y proyectos prácticos.</p>
        <a href="https://www.freecodecamp.org/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ve a la página
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://www.theodinproject.com/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">The Odin Project</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Se enfoca en proyectos prácticos y te guía paso a paso en el proceso de construcción de aplicaciones web.</p>
        <a href="https://www.theodinproject.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://www.udemy.com/es/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Udemy</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Puedes encontrar cursos de alta calidad impartidos por expertos en la industria.</p>
        <a href="https://www.udemy.com/es/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ve a la página
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <a href="https://www.frontendmentor.io/">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Frontend Mentor</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Te proporciona diseños prediseñados y tú debes implementarlos utilizando HTML, CSS y JavaScript.</p>
        <a href="https://www.frontendmentor.io/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ve a la página
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>








<div id="section8" className="sectiontitles mt-12">¿SABES COMUNICARTE?</div>
<div>
<p className="mt-8 text-white font-regular text-justify">Imagina que una empresa busca a alguien no solo para realizar una tarea, sino para integrarse a un equipo, colaborar con otros y representar a la compañía. En este escenario, las habilidades técnicas (conocimientos específicos) son fundamentales, pero no lo son todo.
</p>
<p className="mt-4 text-white font-regular text-justify">
Las habilidades blandas son el pegamento que une a las personas y a los equipos. Son aquellas cualidades personales y sociales que te permiten interactuar de manera efectiva con los demás.</p>
<p className="mt-4 font-bold text-white">Aqui te dejamos algunos puntos a tomar en cuenta para mejorar tus habilidades blandas: </p>
<ol class="space-y-4 graltext list-decimal list-inside mt-8 font-regular">
   <li class="font-semibold">
   Autoconocimiento:
      <ul class="ps-5 mt-2 space-y-3 list-disc list-inside">
         <li class="font-regular">Identifica tus fortalezas y debilidades: Reflexiona sobre situaciones pasadas donde hayas destacado o enfrentado dificultades.</li>
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

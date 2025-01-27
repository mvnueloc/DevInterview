const questions = {
  software_developer: {
    intern: [
      { question: "¿Qué es una variable en programación?" },
      {
        question:
          "¿Cuál es la diferencia entre una variable global y una variable local?",
      },
      { question: "¿Qué es un bucle en programación y para qué se utiliza?" },
      {
        question:
          "¿Puedes explicar qué es una estructura de datos y dar algunos ejemplos comunes?",
      },
      { question: "¿Qué es una función o método en programación?" },
      {
        question:
          "¿Qué es una API (Interfaz de Programación de Aplicaciones) y cuáles son sus principales usos en el desarrollo de software?",
      },
      {
        question:
          "¿Qué es un sistema de control de versiones y por qué es importante en el desarrollo colaborativo de software?",
      },
      { question: "¿Qué es un algoritmo en programación?" },
      {
        question:
          "¿Cuál es la diferencia entre compilación e interpretación en lenguajes de programación?",
      },
      { question: "¿Qué es una excepción en programación?" },
      { question: "¿Qué es un objeto en programación orientada a objetos?" },
      { question: "¿Qué es la modularidad en el desarrollo de software?" },
      { question: "¿Qué es el ciclo de vida del software?" },
      { question: "¿Qué es un diagrama de flujo?" },
      {
        question:
          "¿Qué es una transacción en bases de datos y por qué es importante?",
      },
      { question: "¿Qué es un entorno de desarrollo integrado (IDE)?" },
      { question: "Explica la diferencia entre una pila y una cola." },
      {
        question: "¿Qué es la recursividad y cómo se utiliza en programación?",
      },
      { question: "¿Qué es la complejidad computacional?" },
      { question: "¿Qué es la herencia en programación orientada a objetos?" },
      { question: "¿Qué es la sobrecarga de métodos y cómo se implementa?" },
      { question: "¿Cuál es el propósito de una tabla hash y cómo funciona?" },
    ],
    junior: [
      {
        question:
          "¿Cómo le explicarías las API a un miembro del equipo no técnico?",
      },
      { question: "¿Cómo abordas los problemas en tu código?" },
      { question: "¿Qué es una variable en programación?" },
      { question: "¿Cómo Abordas un Problema de Codificación?" },
      {
        question:
          "¿Qué Estrategias Utilizas para Optimizar el Rendimiento del Código?",
      },
      {
        question:
          "¿Cómo explicaría qué es un programa informático y cómo se lo describiría a alguien con palabras no técnicas?",
      },
      {
        question:
          "¿Puede mencionar las etapas esenciales del proceso de desarrollo de software?",
      },
      { question: "Explique algunos de los modelos del SDLC." },
      { question: "¿Qué es la escalabilidad horizontal y vertical?" },
      {
        question:
          "¿Puede explicar qué es la verificación en el desarrollo de software?",
      },
      { question: "Describa la modularización." },
      { question: "¿Qué es la depuración de código?" },
      { question: "¿Por qué es necesaria la documentación del código?" },
      {
        question:
          "¿Qué es una prueba unitaria (unit test) y por qué es importante?",
      },
      {
        question: "¿Qué es la abstracción en programación orientada a objetos?",
      },
      { question: "¿Qué es CASE (Computer-Aided Software Engineering)?" },
      { question: "¿Qué se entiende por alcance del software?" },
      { question: "¿Qué es la programación orientada a objetos?" },
    ],
    senior: [
      { question: "¿Qué es la programación orientada a eventos?" },
      { question: "¿Dime la diferencia entre un EXE y una DLL?" },
      {
        question:
          "Describa las diferencias principales entre hilos y procesos.",
      },
      { question: "¿Qué son las herramientas CASE?" },
      { question: "¿Qué es la programación estructurada?" },
      { question: "¿Qué es el diseño estructurado?" },
      { question: "¿Qué es la programación declarativa?" },
      { question: "¿Puede describir la programación funcional?" },
      {
        question:
          "Describe la diferencia entre programación orientada a interfaces, orientada a objetos y orientada a aspectos.",
      },
      {
        question:
          "¿Cómo decides qué tipo de base de datos utilizar en diferentes situaciones para NoSQL y SQL?",
      },
      { question: "¿Qué tipo de datos se pasan a través de encabezados HTTP?" },
      { question: "¿Cuándo usas polimorfismo?" },
      { question: "¿Dame diferencias entre etiquetas y ramas?" },
      {
        question:
          "¿Has liderado equipos técnicos o proyectos complejos? Describe tu rol y las estrategias que utilizaste para asegurar el éxito del proyecto.",
      },
      { question: "Describe que es Scrum o Kanban." },
      {
        question:
          "¿Qué prácticas de seguridad implementas en el ciclo de vida del desarrollo de software (SDLC)?",
      },
      {
        question:
          "¿Cómo gestionas las dependencias en un proyecto de software?",
      },
      {
        question:
          "Cuáles son las limitaciones de la Programación Orientada a Objetos (OOP)?",
      },
      {
        question:
          "¿Cuál es la diferencia entre herencia prototipo y herencia clásica en la Programación Orientada a Objetos?",
      },
      {
        question:
          "¿En qué casos es mejor una arquitectura de microservicios que una monolítica?",
      },
      { question: "¿Cómo evitar la exposición de datos sensibles?" },
      { question: "Nombra y explica los roles del Scrum." },
      { question: "¿Qué entiendes por éxito de un proyecto?" },
    ],
  },
  frontend: {
    intern: [
      { question: "¿Qué es HTML y cuál es su propósito en el desarrollo web?" },
      {
        question:
          "¿Qué es CSS y cómo se utiliza en el desarrollo de sitios web?",
      },
      {
        question:
          "¿Qué es JavaScript y por qué es importante en el desarrollo frontend?",
      },
      { question: "¿Cuál es la diferencia entre HTML y HTML5?" },
      {
        question:
          "¿Qué es el DOM (Document Object Model) y cómo interactúa con JavaScript?",
      },
      {
        question:
          "¿Qué son las etiquetas semánticas en HTML5 y por qué son importantes?",
      },
      { question: "¿Qué es un framework frontend y cuáles has utilizado?" },
      {
        question:
          "¿Qué es una hoja de estilos en cascada (CSS) y cómo se aplica a un documento HTML?",
      },
      { question: "¿Cuál es la diferencia entre una clase y una id en CSS?" },
      {
        question:
          "¿Qué es un preprocesador de CSS y para qué se utiliza? Menciona ejemplos.",
      },
      {
        question:
          "¿Qué es la adaptabilidad o responsive design en el desarrollo web?",
      },
      { question: "¿Qué es Flexbox en CSS y para qué se utiliza?" },
      { question: "¿Qué son los media queries en CSS y cómo se utilizan?" },
      {
        question:
          "¿Qué es una SPA (Single Page Application) y cómo difiere de una aplicación tradicional de varias páginas?",
      },
      { question: "¿Qué es AJAX y cómo se utiliza en el desarrollo frontend?" },
      {
        question:
          "¿Qué es un CDN (Content Delivery Network) y cómo beneficia a una página web?",
      },
      { question: "¿Qué es una fuente web y cómo se implementa en CSS?" },
      { question: "¿Qué es una librería JavaScript y cuáles has utilizado?" },
      {
        question:
          "¿Qué es el versionado de control y por qué es importante para un desarrollador frontend?",
      },
      {
        question:
          "¿Qué es el acceso a la web (Web Accessibility) y por qué es importante?",
      },
    ],
    junior: [
      {
        question:
          "¿Qué es el modelo de caja (box model) en CSS y cómo se utiliza?",
      },
      { question: "¿Qué es la especificidad en CSS y cómo se calcula?" },
      {
        question:
          "¿Cuál es la diferencia entre el posicionamiento relativo y absoluto en CSS?",
      },
      { question: "¿Qué es una transacción en CSS y cómo se aplica?" },
      {
        question:
          "¿Qué es un selector en CSS y cuáles son los diferentes tipos de selectores?",
      },
      {
        question:
          "¿Qué es el evento 'DOMContentLoaded' en JavaScript y cuándo se utiliza?",
      },
      {
        question:
          "¿Qué es la manipulación del DOM y cómo se realiza en JavaScript?",
      },
      {
        question:
          "¿Qué es el modelo de eventos en JavaScript y cómo se maneja?",
      },
      { question: "¿Cuál es la diferencia entre '==' y '===' en JavaScript?" },
      { question: "¿Qué es una función de callback en JavaScript?" },
      { question: "¿Qué es una promesa en JavaScript y cómo se utiliza?" },
      {
        question:
          "¿Qué es el diseño móvil primero (mobile-first design) y por qué es importante?",
      },
      { question: "¿Qué es una fuente web y cómo se implementa en CSS?" },
      { question: "¿Qué es un framework CSS y cuáles has utilizado?" },
      { question: "¿Qué es el modo estricto ('use strict') en JavaScript?" },
      {
        question: "¿Qué es una API RESTful y cómo interactúa con el frontend?",
      },
      {
        question:
          "¿Cuál es la diferencia entre una SPA (Single Page Application) y una MPA (Multiple Page Application)?",
      },
      {
        question:
          "¿Qué es el rendimiento web (web performance) y cómo lo optimizas?",
      },
      {
        question:
          "¿Qué es la accesibilidad web (web accessibility) y cómo se implementa en un proyecto?",
      },
      {
        question:
          "¿Qué es el almacenamiento local (local storage) en el navegador y cómo se utiliza?",
      },
    ],
    senior: [
      {
        question:
          "¿Cómo optimizarías el rendimiento de una aplicación web compleja en términos de carga y renderizado?",
      },
      {
        question:
          "¿Qué estrategias utilizas para gestionar el estado de una aplicación en frameworks como React o Vue?",
      },
      {
        question:
          "¿Cómo implementarías un diseño responsive avanzado utilizando CSS Grid y Flexbox?",
      },
      {
        question:
          "¿Cuál es tu enfoque para asegurar la accesibilidad web (a11y) en grandes aplicaciones?",
      },
      {
        question:
          "¿Qué son las técnicas de Lazy Loading y cómo las implementarías en una aplicación frontend?",
      },
      {
        question:
          "¿Cómo gestionas y optimizas las dependencias en proyectos frontend?",
      },
      {
        question:
          "¿Qué es el Server-Side Rendering (SSR) y cuándo lo utilizarías en lugar del Client-Side Rendering (CSR)?",
      },
      {
        question:
          "Describe tu experiencia con el uso de Progressive Web Apps (PWA). ¿Cuáles son los beneficios y desafíos?",
      },
      {
        question:
          "¿Cómo abordas la integración de frontend con backend en aplicaciones complejas?",
      },
      {
        question:
          "¿Qué es el rendimiento percibido y cómo lo mejoras en una aplicación web?",
      },
      {
        question:
          "¿Cómo aseguras la calidad del código en un equipo utilizando herramientas de linters y formateadores?",
      },
      {
        question:
          "¿Cuál es tu experiencia con la internacionalización (i18n) y la localización (l10n) en aplicaciones frontend?",
      },
      {
        question:
          "¿Cómo manejas la implementación de temas oscuros y claros en aplicaciones web?",
      },
      {
        question:
          "¿Qué es WebAssembly y cómo podría mejorar el rendimiento de las aplicaciones web?",
      },
      {
        question:
          "¿Cómo abordas la seguridad en aplicaciones frontend, especialmente contra ataques XSS y CSRF?",
      },
      {
        question:
          "Describe una situación en la que tuviste que refactorizar un componente crítico en una aplicación. ¿Cuál fue tu enfoque y los resultados?",
      },
      {
        question:
          "¿Qué herramientas y prácticas utilizas para el monitoreo y el rastreo de errores en producción?",
      },
      {
        question:
          "¿Cómo manejas la integración continua y el despliegue continuo (CI/CD) en proyectos frontend?",
      },
      {
        question:
          "¿Qué consideraciones tienes en cuenta al elegir un framework o librería frontend para un nuevo proyecto?",
      },
      {
        question:
          "¿Cuál es tu experiencia con el uso de GraphQL en lugar de REST y cuáles son las ventajas y desventajas?",
      },
    ],
  },
  backend: {
    intern: [
      { question: "¿Qué es un servidor web y para qué se utiliza?" },
      { question: "¿Qué es una base de datos y cuál es su propósito?" },
      {
        question:
          "¿Cuál es la diferencia entre una base de datos SQL y una NoSQL?",
      },
      { question: "¿Qué es un endpoint en el contexto de una API?" },
      { question: "¿Qué es HTTP y cuáles son sus métodos principales?" },
      { question: "¿Qué es una API REST y cómo funciona?" },
      {
        question:
          "¿Qué es un modelo de datos y por qué es importante en el desarrollo backend?",
      },
      {
        question:
          "¿Qué es la autenticación y cómo se diferencia de la autorización?",
      },
      { question: "¿Qué es JSON y cómo se utiliza en el contexto de APIs?" },
      { question: "¿Qué es un framework backend y cuáles has oído mencionar?" },
      { question: "¿Qué es una consulta SQL y para qué se utiliza?" },
      {
        question:
          "¿Qué es un ORM (Object-Relational Mapping) y para qué se utiliza?",
      },
      {
        question:
          "¿Qué es un servidor de aplicaciones y cómo se diferencia de un servidor web?",
      },
      {
        question:
          "¿Qué es la escalabilidad en el contexto de aplicaciones backend?",
      },
      {
        question:
          "¿Qué es la latencia y por qué es importante en los servicios backend?",
      },
      {
        question:
          "¿Qué es la caché y cómo ayuda a mejorar el rendimiento de una aplicación?",
      },
      { question: "¿Qué es el balanceo de carga y por qué se utiliza?" },
      {
        question:
          "¿Qué es la arquitectura de microservicios y cuáles son sus beneficios?",
      },
      {
        question:
          "¿Qué es la concurrencia en programación y por qué es importante en backend?",
      },
      {
        question:
          "¿Qué es una transacción en bases de datos y por qué es importante?",
      },
    ],
    junior: [
      {
        question:
          "¿Qué es una API y cuál es su función en una arquitectura de software?",
      },
      { question: "¿Qué es una consulta JOIN en SQL y cuándo la usarías?" },
      {
        question:
          "¿Qué es un índice en una base de datos y por qué es importante?",
      },
      { question: "¿Cuál es la diferencia entre HTTP y HTTPS?" },
      { question: "¿Qué es un servidor proxy y para qué se utiliza?" },
      {
        question:
          "¿Qué es el principio de responsabilidad única (SRP) en la programación?",
      },
      { question: "¿Qué es la inyección de dependencias y por qué es útil?" },
      {
        question:
          "¿Qué son las migraciones de base de datos y cómo se gestionan?",
      },
      {
        question: "¿Cuál es la diferencia entre un proceso y un hilo (thread)?",
      },
      {
        question:
          "¿Qué es un sistema de mensajería en el contexto de aplicaciones distribuidas?",
      },
      {
        question:
          "¿Qué es un entorno de desarrollo integrado (IDE) y cuáles son sus beneficios?",
      },
      {
        question:
          "¿Qué es la autenticación basada en tokens y cómo se implementa?",
      },
      {
        question:
          "¿Qué es el principio de diseño REST y cuáles son sus principales restricciones?",
      },
      {
        question: "¿Qué es el middleware en el contexto de desarrollo backend?",
      },
      { question: "¿Qué son las pruebas unitarias y por qué son importantes?" },
      {
        question:
          "¿Cuál es la diferencia entre el almacenamiento en caché en memoria y en disco?",
      },
      {
        question:
          "¿Qué es una cola de mensajes y cómo se utiliza en aplicaciones backend?",
      },
      {
        question:
          "¿Qué es el patrón de diseño MVC y cómo se aplica en el desarrollo backend?",
      },
      { question: "¿Qué es la serialización de datos y por qué se utiliza?" },
      { question: "¿Qué es la paginación y cómo se implementa en una API?" },
    ],
    senior: [
      {
        question:
          "¿Cómo manejarías eficientemente las transacciones en una base de datos relacional en un entorno de alta concurrencia?",
      },
      {
        question:
          "Explica en detalle el patrón de diseño 'Repository' y cómo lo aplicarías en un proyecto de backend.",
      },
      {
        question:
          "¿Cuáles son las ventajas y desventajas de utilizar bases de datos NoSQL en comparación con las bases de datos relacionales tradicionales?",
      },
      {
        question:
          "Describe cómo implementarías un sistema de caché distribuido para mejorar el rendimiento de una aplicación web escalable.",
      },
      {
        question:
          "¿Cómo diseñarías una arquitectura de microservicios escalable y resiliente? ¿Qué consideraciones tendrías en cuenta?",
      },
      {
        question:
          "¿Qué estrategias y herramientas utilizarías para monitorizar y depurar el rendimiento de una aplicación backend en producción?",
      },
      {
        question:
          "¿Cuál es tu enfoque para diseñar APIs RESTful que sean intuitivas, eficientes y fáciles de mantener?",
      },
      {
        question:
          "¿Cómo gestionarías la seguridad y la autorización en una aplicación backend que maneja datos sensibles?",
      },
      {
        question:
          "Explica cómo implementarías la replicación de datos en una base de datos distribuida para asegurar la alta disponibilidad y la recuperación ante desastres.",
      },
      {
        question:
          "¿Qué métodos utilizarías para asegurar la coherencia de datos en sistemas distribuidos que manejan transacciones concurrentes?",
      },
      {
        question:
          "¿Cómo abordarías la gestión de versiones de APIs en un entorno de desarrollo ágil y colaborativo?",
      },
      {
        question:
          "Describe tu experiencia en la migración de aplicaciones monolíticas a arquitecturas basadas en microservicios. ¿Qué desafíos enfrentaste y cómo los superaste?",
      },
      {
        question:
          "¿Qué herramientas y técnicas utilizarías para asegurar la continuidad operativa (operational continuity) de una aplicación backend en caso de fallos inesperados?",
      },
      {
        question:
          "¿Cuál es tu aproximación para optimizar consultas SQL complejas en grandes volúmenes de datos?",
      },
      {
        question:
          "¿Cómo evaluarías y seleccionarías una tecnología de base de datos adecuada para un nuevo proyecto de backend?",
      },
      {
        question:
          "Describe cómo implementarías un sistema de mensajería asíncrona para mejorar la escalabilidad y el rendimiento de una aplicación backend.",
      },
      {
        question:
          "¿Qué factores considerarías al diseñar la arquitectura de almacenamiento de datos para soportar análisis en tiempo real (real-time analytics)?",
      },
      {
        question:
          "¿Cómo manejarías la gestión de la configuración y la secretización de variables sensibles en una aplicación backend desplegada en múltiples entornos?",
      },
      {
        question:
          "Explica cómo aplicarías el principio de diseño DRY (Don't Repeat Yourself) en el contexto del desarrollo backend.",
      },
      {
        question:
          "¿Qué estrategias utilizarías para asegurar la consistencia de datos en un entorno de replicación multi-región?",
      },
    ],
  },
  full_stack: {
    intern: [
      {
        question:
          "¿Qué es una API y por qué es importante para el desarrollo fullstack?",
      },
      {
        question:
          "Describe la diferencia entre el frontend y el backend en una aplicación web.",
      },
      {
        question:
          "Explica qué es una base de datos relacional y menciona un ejemplo de su uso en aplicaciones web.",
      },
      {
        question:
          "¿Qué es Git y por qué es útil para desarrolladores fullstack?",
      },
      {
        question:
          "Describe el concepto de routing en el contexto del desarrollo web. ¿Por qué es importante?",
      },
      {
        question:
          "¿Qué es el modelo vista controlador (MVC) y cómo se aplica en el desarrollo fullstack?",
      },
      {
        question:
          "¿Qué es AJAX y cuál es su función en aplicaciones web interactivas?",
      },
      {
        question:
          "Explica cómo manejarías la validación de datos en el frontend y el backend de una aplicación web.",
      },
      {
        question:
          "¿Qué son las cookies y cómo se utilizan en el desarrollo web?",
      },
      {
        question:
          "Describe cómo implementarías autenticación de usuarios en una aplicación fullstack.",
      },
      {
        question:
          "¿Qué es el despliegue (deployment) de una aplicación y cuáles son algunos métodos comunes?",
      },
      {
        question:
          "Explica qué es el versionado de software y por qué es importante en el desarrollo fullstack.",
      },
      {
        question:
          "¿Cuál es la diferencia entre el desarrollo frontend y el desarrollo backend en términos de responsabilidades?",
      },
      {
        question:
          "¿Qué es una API RESTful y cuáles son sus ventajas en el desarrollo de aplicaciones web?",
      },
      {
        question:
          "Describe cómo manejarías el almacenamiento de contraseñas de forma segura en una base de datos.",
      },
      {
        question:
          "¿Qué es una sesión en el contexto del desarrollo web y cómo se gestiona?",
      },
      {
        question:
          "Explica qué es el testing unitario y por qué es importante en el desarrollo fullstack.",
      },
      {
        question:
          "¿Qué es Bootstrap y cómo puede facilitar el desarrollo frontend en aplicaciones web?",
      },
      {
        question:
          "Describe cómo optimizarías el rendimiento de una aplicación fullstack.",
      },
      {
        question:
          "¿Qué es el concepto de Single Page Application (SPA) y cuáles son sus beneficios?",
      },
    ],
    junior: [
      {
        question:
          "¿Qué es una API y por qué es importante para el desarrollo fullstack?",
      },
      {
        question:
          "Describe la diferencia entre el frontend y el backend en una aplicación web.",
      },
      {
        question:
          "Explica qué es una base de datos relacional y menciona un ejemplo de su uso en aplicaciones web.",
      },
      {
        question:
          "¿Qué es Git y por qué es útil para desarrolladores fullstack?",
      },
      {
        question:
          "Describe el concepto de routing en el contexto del desarrollo web. ¿Por qué es importante?",
      },
      {
        question:
          "¿Qué es el modelo vista controlador (MVC) y cómo se aplica en el desarrollo fullstack?",
      },
      {
        question:
          "¿Qué es AJAX y cuál es su función en aplicaciones web interactivas?",
      },
      {
        question:
          "Explica cómo manejarías la validación de datos en el frontend y el backend de una aplicación web.",
      },
      {
        question:
          "¿Qué son las cookies y cómo se utilizan en el desarrollo web?",
      },
      {
        question:
          "Describe cómo implementarías autenticación de usuarios en una aplicación fullstack.",
      },
      {
        question:
          "¿Qué es el despliegue (deployment) de una aplicación y cuáles son algunos métodos comunes?",
      },
      {
        question:
          "Explica qué es el versionado de software y por qué es importante en el desarrollo fullstack.",
      },
      {
        question:
          "¿Cuál es la diferencia entre el desarrollo frontend y el desarrollo backend en términos de responsabilidades?",
      },
      {
        question:
          "¿Qué es una API RESTful y cuáles son sus ventajas en el desarrollo de aplicaciones web?",
      },
      {
        question:
          "Describe cómo manejarías el almacenamiento de contraseñas de forma segura en una base de datos.",
      },
      {
        question:
          "¿Qué es una sesión en el contexto del desarrollo web y cómo se gestiona?",
      },
      {
        question:
          "Explica qué es el testing unitario y por qué es importante en el desarrollo fullstack.",
      },
      {
        question:
          "¿Qué es Bootstrap y cómo puede facilitar el desarrollo frontend en aplicaciones web?",
      },
      {
        question:
          "Describe cómo optimizarías el rendimiento de una aplicación fullstack.",
      },
      {
        question:
          "¿Qué es el concepto de Single Page Application (SPA) y cuáles son sus beneficios?",
      },
    ],
    senior: [
      {
        question:
          "¿Cómo diseñarías una arquitectura fullstack escalable y resiliente?",
      },
      {
        question:
          "Explica cómo integrarías un servicio de autenticación y autorización centralizado en una aplicación fullstack.",
      },
      {
        question:
          "¿Cuáles son las estrategias para optimizar el rendimiento tanto del frontend como del backend de una aplicación fullstack?",
      },
      {
        question:
          "Describe un escenario en el que aplicarías arquitectura de microservicios en una aplicación fullstack. ¿Qué beneficios esperarías?",
      },
      {
        question:
          "¿Qué métodos utilizarías para asegurar la coherencia de datos en sistemas distribuidos que manejan transacciones concurrentes?",
      },
      {
        question:
          "Explica cómo manejarías la gestión de configuraciones y variables de entorno en una aplicación fullstack desplegada en múltiples entornos.",
      },
      {
        question:
          "¿Cómo abordarías el despliegue continuo (continuous deployment) en el desarrollo fullstack?",
      },
      {
        question:
          "Describe cómo implementarías un sistema de caching efectivo para mejorar el rendimiento de una aplicación fullstack.",
      },
      {
        question:
          "¿Qué estrategias utilizarías para asegurar la seguridad de una aplicación fullstack, desde el frontend hasta el backend y la base de datos?",
      },
      {
        question:
          "Explica cómo gestionarías la integración de APIs de terceros en una aplicación fullstack.",
      },
      {
        question:
          "¿Qué es GraphQL y cómo se compara con REST en el contexto del desarrollo fullstack?",
      },
      {
        question:
          "Describe cómo implementarías la internacionalización (i18n) en una aplicación fullstack.",
      },
      {
        question:
          "¿Cuáles son las mejores prácticas para el diseño y mantenimiento de APIs RESTful en una aplicación fullstack?",
      },
      {
        question:
          "Explica cómo aplicarías el principio de separación de preocupaciones (SoC) en el desarrollo fullstack.",
      },
      {
        question:
          "¿Qué consideraciones tendrías en cuenta al diseñar la arquitectura de almacenamiento de datos para soportar análisis en tiempo real en una aplicación fullstack?",
      },
      {
        question:
          "¿Cómo evaluarías y seleccionarías tecnologías frontend y backend para un nuevo proyecto fullstack?",
      },
      {
        question:
          "Explica qué es el desarrollo guiado por pruebas (TDD) y cómo lo aplicarías en el contexto del desarrollo fullstack.",
      },
      {
        question:
          "¿Qué herramientas y técnicas utilizarías para asegurar la monitorización y el logging efectivo en una aplicación fullstack en producción?",
      },
      {
        question:
          "Describe cómo manejarías la migración de una base de datos relacional en una aplicación fullstack sin interrumpir el servicio.",
      },
      {
        question:
          "¿Qué es el concepto de arquitectura serverless y cuáles son sus ventajas y desventajas en el desarrollo fullstack?",
      },
    ],
  },
};

export default questions;

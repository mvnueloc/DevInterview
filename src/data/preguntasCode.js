const questionsCode = {
  software_developer: {
    intern: [
      {
        question:
          "Escribe una función para determinar si una cadena es un palíndromo.",
      },
      {
        question:
          "Define una clase 'Persona' con atributos 'nombre' y 'edad'. Crea un método que imprima los detalles de la persona.",
      },
      {
        question:
          "Escribe una función recursiva que calcule el factorial de un número.",
      },
      {
        question:
          "Dado un array de enteros nums y un entero target, necesitas encontrar dos números en nums que sumen target. Debes devolver sus índices como un array de dos elementos [index1, index2]. \n\n Puedes asumir que cada entrada tendrá exactamente una solución y no puedes usar el mismo elemento dos veces. El orden de los índices en la respuesta no importa. \n\n Ejemplo: \n Input: nums = [2, 7, 11, 15], target = 9 \nOutput: [0, 1].",
      },
      {
        question:
          "Implementa una función que reciba una cadena y devuelva un diccionario o un map con la frecuencia de cada carácter en la cadena.",
      },
      {
        question:
          "Dada una lista enlazada, invierte el orden de sus nodos. La lista enlazada es una estructura de datos en la que cada nodo contiene un valor y una referencia al siguiente nodo en la secuencia. El objetivo es modificar la lista para que el último nodo se convierta en el primer nodo, el penúltimo nodo se convierta en el segundo, y así sucesivamente.\n\n# Nodo:\n#     valor: entero\n#     siguiente: Nodo (o nulo)\n#\n # Constructores:\n#     Nodo()\n#         valor = 0\n#         siguiente = nulo\n#         \n#     Nodo(valor)\n#         valor = valor dado\n#         siguiente = nulo\n#         \n#     Nodo(valor, siguiente)\n#         valor = valor dado\n#         siguiente = siguiente nodo dado\n\nEjemplo: \nInput: head = [1, 2, 3, 4, 5]\nOutput: [5, 4, 3, 2, 1]",
      },
    ],
    junior: [
      {
        question:
          "Dado un array de enteros únicos candidates y un entero target, devuelve todas las combinaciones únicas de candidates donde la suma de los números es igual a target. Los números en candidates pueden ser usados un número ilimitado de veces en la combinación.\n\n Las combinaciones pueden ser devueltas en cualquier orden. \n\n Ejemplo: \n Input: candidates = [2, 3, 6, 7], target = 7 \nOutput: [[2, 2, 3], [7]] \n\n Input: candidates = [2, 3, 5], target = 8 \nOutput: [[2, 2, 2, 2], [2, 3, 3], [3, 5]].",
      },
      {
        question:
          "Escribe una clase 'Rectángulo' con atributos 'ancho' y 'alto', y métodos para calcular el área y el perímetro.",
      },
      {
        question:
          "Define una clase base 'Animal' y una clase derivada 'Perro'. La clase 'Perro' debe tener un método que imprima 'Guau'.",
      },
      {
        question:
          "Crea una función que reciba un número n y devuelva una lista con los n primeros números de la secuencia de Fibonacci.",
      },
      {
        question:
          "Crea una clase 'Banco' con métodos para depositar y retirar dinero, y consultar el saldo.",
      },
    ],
    senior: [],
  },
  frontend: {
    intern: [
      {
        question:
          "Escribe una función en JavaScript que tome una cadena y devuelva la misma cadena pero en mayúsculas.",
      },
      {
        question:
          "Implementa una función en JavaScript que tome una matriz de números y devuelva la suma de todos los números.",
      },
      {
        question:
          "Escribe una función en JavaScript que tome una cadena y devuelva 'true' si es un palíndromo y 'false' en caso contrario.",
      },
      {
        question:
          "Implementa una función en JavaScript que tome un array de números y devuelva el número más grande.",
      },
      {
        question:
          "Escribe una función en JavaScript que tome un array de números y devuelva el número más pequeño.",
      },
      {
        question:
          "Implementa una función en JavaScript que tome una cadena y devuelva la cantidad de vocales en la cadena.",
      },
      {
        question:
          "Escribe una función en JavaScript que tome una cadena y devuelva la cadena invertida.",
      },
      {
        question:
          "Implementa una función en JavaScript que tome una matriz de números y devuelva una nueva matriz con los números ordenados de manera ascendente.",
      },
      {
        question:
          "Escribe una función en JavaScript que tome un objeto y devuelva un array de los valores del objeto.",
      },
      {
        question:
          "Implementa una función en JavaScript que tome un array de cadenas y devuelva una nueva matriz con las cadenas ordenadas alfabéticamente.",
      },
      {
        question:
          "Escribe una función en JavaScript que tome dos números y devuelva su máximo común divisor (MCD).",
      },
      {
        question:
          "Implementa una función en JavaScript que tome una cadena y reemplace todas las ocurrencias de una subcadena con otra subcadena.",
      },
      {
        question:
          "Escribe una función en JavaScript que tome un array de números y devuelva 'true' si el array está ordenado de manera ascendente, 'false' en caso contrario.",
      },
      {
        question:
          "Implementa una función en JavaScript que tome una URL y devuelva un objeto con los parámetros de la consulta (query parameters) como pares clave-valor.",
      },
      {
        question:
          "Escribe una función en JavaScript que tome una fecha como cadena y devuelva 'true' si la fecha es válida, 'false' en caso contrario.",
      },
      {
        question:
          "Implementa una función en JavaScript que tome un array de objetos y un campo específico, y devuelva el objeto con el valor máximo en ese campo.",
      },
      {
        question:
          "Escribe una función en JavaScript que tome una cadena y devuelva la primera letra de cada palabra en mayúscula.",
      },
      {
        question:
          "Implementa una función en JavaScript que tome una matriz de números y devuelva una nueva matriz con los números duplicados eliminados.",
      },
      {
        question:
          "Escribe una función en JavaScript que tome dos matrices y devuelva una nueva matriz que contenga solo los elementos comunes entre las dos matrices.",
      },
      {
        question:
          "Implementa una función en JavaScript que tome un array de números y devuelva un nuevo array con los números elevados al cuadrado.",
      },
      {
        question:
          "Crea un componente en React que reciba una lista de tareas y las muestre en una lista. Cada tarea debe tener un botón para marcarla como completada.",
      },
      {
        question:
          "Escribe una función en JavaScript que renderice un botón en React. Al hacer clic en el botón, debe mostrar una alerta con el mensaje 'Hola, mundo!'.",
      },
      {
        question:
          "Implementa un componente en React que tenga un campo de entrada de texto y un botón. Al hacer clic en el botón, el texto ingresado debe mostrarse debajo del campo de entrada.",
      },
      {
        question:
          "Escribe una función en JavaScript que aplique estilos CSS a un elemento HTML para cambiar su color de fondo a azul.",
      },
      {
        question:
          "Implementa una función en JavaScript que cree un div con un ancho de 100px, un alto de 100px y un color de fondo rojo usando CSS.",
      },
      {
        question:
          "Escribe una función en JavaScript que añada una clase CSS a un elemento HTML para ocultarlo.",
      },
      {
        question:
          "Implementa una función en JavaScript que cambie el texto de un párrafo a 'Hola, mundo!' al hacer clic en un botón.",
      },
    ],
    junior: [
      {
        question:
          "Escribe el código HTML básico para crear un formulario de contacto con campos para nombre, email y mensaje.",
      },
      {
        question:
          "Implementa una función en JavaScript que valide que un campo de texto no esté vacío antes de enviar un formulario.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que un botón tenga un fondo azul cuando se le pase el cursor (hover).",
      },
      {
        question:
          "Implementa una función en JavaScript que cambie dinámicamente el contenido de un elemento <div> cuando se haga clic en un botón.",
      },
      {
        question:
          "Escribe el código HTML y CSS necesario para crear una barra de navegación horizontal básica.",
      },
      {
        question:
          "Implementa una función en JavaScript que agregue un nuevo elemento <li> a una lista <ul> cuando se envíe un formulario.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que una imagen tenga un borde sólido de 2px de color rojo.",
      },
      {
        question:
          "Implementa una función en JavaScript que cuente y muestre el número de caracteres restantes en tiempo real mientras se escribe en un campo de texto.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear una cuadrícula de imágenes en la que cada imagen tenga un tamaño de 100x100px y un espacio de 10px entre ellas.",
      },
      {
        question:
          "Implementa una función en JavaScript que cambie el color de fondo de una página web cada vez que se actualice la página.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que un elemento <div> tenga una sombra con un desenfoque de 5px.",
      },
      {
        question:
          "Implementa una función en JavaScript que valide que un campo de email tenga un formato correcto al perder el foco.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear un botón con un efecto de transición suave cuando se le pase el cursor (hover).",
      },
      {
        question:
          "Implementa una función en JavaScript que cambie el tamaño de fuente de un elemento <p> cuando se haga doble clic en él.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que un elemento <div> se desplace suavemente hacia abajo cuando se cargue la página.",
      },
      {
        question:
          "Implementa una función en JavaScript que permita ocultar y mostrar el contenido de un elemento <div> al hacer clic en un botón.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear una lista de elementos <li> con viñetas personalizadas.",
      },
      {
        question:
          "Implementa una función en JavaScript que valide que un campo de número tenga un valor dentro de un rango específico al enviar un formulario.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que un elemento <div> tenga un fondo degradado de color azul a verde.",
      },
      {
        question:
          "Implementa una función en JavaScript que muestre un mensaje de alerta cuando se haga clic en un enlace específico.",
      },
    ],
    senior: [
      {
        question:
          "Implementa una función en JavaScript que convierta una cadena de texto en formato camelCase.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente un diseño de cuadrícula usando CSS Grid o Flexbox.",
      },
      {
        question:
          "Implementa una función en JavaScript que ordene alfabéticamente un array de objetos por el valor de una propiedad específica.",
      },
      {
        question:
          "Escribe el código HTML y CSS necesario para crear un menú desplegable (dropdown) con CSS puro.",
      },
      {
        question:
          "Implementa una función en JavaScript que busque y reemplace todas las ocurrencias de una palabra específica en una cadena de texto.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente un efecto de animación utilizando keyframes.",
      },
      {
        question:
          "Implementa una función en JavaScript que valide un formulario con validación personalizada usando expresiones regulares.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear un carrusel de imágenes que se desplacen automáticamente cada 5 segundos.",
      },
      {
        question:
          "Implementa una función en JavaScript que maneje la paginación de resultados de una lista de elementos.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente un diseño responsive para una página web.",
      },
      {
        question:
          "Implementa una función en JavaScript que filtre y muestre los resultados de una lista dinámicamente según el criterio de búsqueda ingresado.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear un modal (ventana emergente) con efectos de transición suaves.",
      },
      {
        question:
          "Implementa una función en JavaScript que obtenga datos de una API RESTful y los muestre dinámicamente en una página web.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente un diseño fluido (fluid layout) para adaptarse a diferentes tamaños de pantalla.",
      },
      {
        question:
          "Implementa una función en JavaScript que maneje la autenticación de usuarios utilizando localStorage o sessionStorage.",
      },
      {
        question:
          "Escribe el código HTML y CSS necesario para crear un efecto de parallax en una página web.",
      },
      {
        question:
          "Implementa una función en JavaScript que permita arrastrar y soltar elementos dentro de una página web.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente un diseño de tarjeta (card layout) con sombra y bordes redondeados.",
      },
      {
        question:
          "Implementa una función en JavaScript que calcule y muestre el tiempo transcurrido desde una fecha específica hasta la fecha actual.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear un formulario de registro con validación de campos y mensajes de error personalizados.",
      },
    ],
  },
  backend: {
    intern: [
      {
        question:
          "Escribe una función que conecte a una base de datos SQLite y cree una tabla llamada 'usuarios' con columnas 'id', 'nombre' y 'correo'.",
      },
      {
        question:
          "Implementa una función que realice una consulta SQL para insertar un nuevo registro en la tabla 'usuarios'.",
      },
      {
        question:
          "Escribe una función que consulte todos los registros de la tabla 'usuarios' y los devuelva en una lista.",
      },
      {
        question:
          "Implementa una función que actualice el 'correo' de un usuario en la tabla 'usuarios' dado su 'id'.",
      },
      {
        question:
          "Escribe una función que elimine un usuario de la tabla 'usuarios' dado su 'id'.",
      },
      {
        question:
          "Implementa una función que maneje la conexión a una API REST y obtenga datos en formato JSON.",
      },
      {
        question:
          "Escribe una función que lea un archivo JSON y lo convierta en un diccionario de Python.",
      },
      {
        question:
          "Implementa una función que escriba un diccionario de Python en un archivo JSON.",
      },
      {
        question:
          "Escribe una función que realice una solicitud HTTP GET a un endpoint y devuelva la respuesta.",
      },
      {
        question:
          "Implementa una función que genere un hash de una cadena utilizando SHA-256.",
      },
      {
        question:
          "Escribe una función que valide si una cadena tiene el formato de una dirección de correo electrónico.",
      },
      {
        question:
          "Implementa una función que lea y escriba datos en un archivo CSV.",
      },
      {
        question:
          "Escribe una función que realice una consulta SQL parametrizada para evitar inyecciones SQL.",
      },
      {
        question:
          "Implementa una función que conecte a una base de datos SQLite y realice una operación SELECT con una condición WHERE.",
      },
      {
        question:
          "Escribe una función que implemente un endpoint RESTful simple que responda con un mensaje 'Hola, mundo!'.",
      },
      {
        question:
          "Implementa una función que convierta una cadena en mayúsculas.",
      },
      {
        question:
          "Escribe una función que verifique si una cadena es un palíndromo.",
      },
      {
        question:
          "Implementa una función que calcule la suma de todos los números en una lista.",
      },
      {
        question:
          "Escribe una función que cuente la frecuencia de cada carácter en una cadena.",
      },
      {
        question:
          "Implementa una función que encuentre el número máximo en una lista de números.",
      },
    ],
    junior: [
      {
        question:
          "Escribe una función que conecte a una base de datos MySQL y cree una tabla llamada 'empleados' con columnas 'id', 'nombre', 'puesto' y 'salario'.",
      },
      {
        question:
          "Implementa una función que realice una consulta SQL para insertar un nuevo registro en la tabla 'empleados'.",
      },
      {
        question:
          "Escribe una función que consulte todos los registros de la tabla 'empleados' y los devuelva en una lista.",
      },
      {
        question:
          "Implementa una función que actualice el 'salario' de un empleado en la tabla 'empleados' dado su 'id'.",
      },
      {
        question:
          "Escribe una función que elimine un empleado de la tabla 'empleados' dado su 'id'.",
      },
      {
        question:
          "Implementa una función que maneje una conexión a una API REST y obtenga datos en formato JSON.",
      },
      {
        question:
          "Escribe una función que lea datos de un archivo JSON y los convierta en un diccionario de Python.",
      },
      {
        question:
          "Implementa una función que escriba un diccionario de Python en un archivo JSON.",
      },
      {
        question:
          "Escribe una función que realice una solicitud HTTP POST a un endpoint con un cuerpo de solicitud en formato JSON.",
      },
      {
        question:
          "Implementa una función que genere un hash de una cadena utilizando MD5.",
      },
      {
        question:
          "Escribe una función que valide si una cadena tiene el formato de una dirección de correo electrónico utilizando una expresión regular.",
      },
      {
        question:
          "Implementa una función que lea datos de un archivo CSV y los convierta en una lista de diccionarios.",
      },
      {
        question:
          "Escribe una función que realice una consulta SQL parametrizada para evitar inyecciones SQL.",
      },
      {
        question:
          "Implementa una función que conecte a una base de datos PostgreSQL y realice una operación SELECT con una condición WHERE.",
      },
      {
        question:
          "Escribe una función que implemente un servidor HTTP simple que responda a una solicitud GET con un mensaje 'Hola, mundo!'.",
      },
      {
        question:
          "Implementa una función que convierta una cadena en mayúsculas.",
      },
      {
        question:
          "Escribe una función que verifique si una cadena es un palíndromo.",
      },
      {
        question:
          "Implementa una función que calcule la suma de todos los números en una lista.",
      },
      {
        question:
          "Escribe una función que cuente la frecuencia de cada carácter en una cadena.",
      },
      {
        question:
          "Implementa una función que encuentre el número máximo en una lista de números.",
      },
    ],
    senior: [
      {
        question:
          "Implementa una función que realice una consulta SQL para seleccionar todos los registros de una tabla llamada 'usuarios'.",
      },
      {
        question:
          "Escribe una función que realice una conexión a una base de datos y ejecute una consulta SELECT.",
      },
      {
        question:
          "Implementa una función que consulte una API REST y devuelva los datos en formato JSON.",
      },
      {
        question:
          "Escribe una función que realice una operación CRUD (Create, Read, Update, Delete) en una base de datos utilizando SQL.",
      },
      {
        question:
          "Implementa una función que maneje la paginación de resultados de una consulta SQL.",
      },
      {
        question:
          "Escribe una función que encripte una cadena utilizando un algoritmo de hash (por ejemplo, SHA-256).",
      },
      {
        question:
          "Implementa un servidor HTTP básico que responda a una solicitud GET con un mensaje 'Hola, mundo!'.",
      },
      {
        question:
          "Escribe una función que maneje la autenticación de usuarios utilizando tokens JWT.",
      },
      {
        question:
          "Implementa una función que envíe un correo electrónico utilizando un servicio de SMTP.",
      },
      {
        question:
          "Escribe una función que lea y escriba datos en un archivo JSON.",
      },
      {
        question:
          "Implementa una función que realice una operación JOIN en SQL entre dos tablas relacionadas.",
      },
      {
        question:
          "Escribe una función que implemente un sistema de caché simple utilizando un diccionario en Python.",
      },
      {
        question:
          "Implementa una función que valide una dirección de correo electrónico utilizando una expresión regular.",
      },
      {
        question:
          "Escribe una función que realice una consulta parametrizada para prevenir inyecciones SQL.",
      },
      {
        question:
          "Implementa una función que maneje las migraciones de una base de datos utilizando una herramienta como Flyway o Alembic.",
      },
      {
        question:
          "Escribe una función que implemente un middleware en un framework web como Express.js o Flask.",
      },
      {
        question:
          "Implementa una función que registre eventos y errores en un archivo de log.",
      },
      {
        question:
          "Escribe una función que genere y verifique contraseñas seguras utilizando bcrypt.",
      },
      {
        question:
          "Implementa una función que realice operaciones CRUD en una base de datos NoSQL como MongoDB.",
      },
      {
        question:
          "Escribe una función que implemente un endpoint RESTful para subir archivos y almacenarlos en el servidor.",
      },
    ],
  },
  full_stack: {
    intern: [
      {
        question:
          "Escribe una función en JavaScript que calcule la suma de dos números.",
      },
      {
        question:
          "Implementa una función en JavaScript que encuentre el número mayor en un array de números.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear una página web con un encabezado, un cuerpo y un pie de página.",
      },
      {
        question:
          "Implementa una función en JavaScript que verifique si un número dado es primo.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que un elemento <div> tenga un fondo verde y texto blanco centrado.",
      },
      {
        question:
          "Implementa una función en JavaScript que convierta un número decimal en binario.",
      },
      {
        question:
          "Escribe el código HTML y CSS necesario para crear una lista ordenada (<ol>) con tres elementos.",
      },
      {
        question:
          "Implementa una función en JavaScript que calcule el factorial de un número dado.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que un botón tenga bordes redondeados y un efecto de sombra al pasar el cursor.",
      },
      {
        question:
          "Implementa una función en JavaScript que verifique si una cadena de texto es un palíndromo.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear un formulario de contacto con campos para nombre, email y mensaje.",
      },
      {
        question:
          "Implementa una función en JavaScript que ordene alfabéticamente un array de strings.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente un diseño de dos columnas con un ancho fijo y un margen entre ellas.",
      },
      {
        question:
          "Implementa una función en JavaScript que calcule la potencia de un número dado.",
      },
      {
        question:
          "Escribe el código HTML y CSS necesario para crear una barra de navegación horizontal con tres enlaces.",
      },
      {
        question:
          "Implementa una función en JavaScript que sume todos los elementos de un array.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que un elemento <div> tenga un borde sólido de 1px de color negro.",
      },
      {
        question:
          "Implementa una función en JavaScript que encuentre el número menor en un array de números.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear una tabla con dos filas y dos columnas.",
      },
      {
        question:
          "Implementa una función en JavaScript que busque y reemplace todas las ocurrencias de una palabra específica en una cadena de texto.",
      },
    ],
    junior: [
      {
        question:
          "Implementa una función en JavaScript que valide un formulario con campos obligatorios (nombre, email, mensaje).",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear una tabla que muestre datos de usuarios (columnas: nombre, edad, correo).",
      },
      {
        question:
          "Implementa una función en JavaScript que consulte una API REST y muestre los datos en una página web.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente un diseño de cuadrícula (grid layout) con 3 columnas y 2 filas.",
      },
      {
        question:
          "Implementa una función en JavaScript que calcule la edad de una persona a partir de su fecha de nacimiento.",
      },
      {
        question:
          "Escribe el código HTML y CSS necesario para crear un formulario de registro con campos para nombre, email, contraseña y confirmación de contraseña.",
      },
      {
        question:
          "Implementa una función en JavaScript que maneje el inicio de sesión de usuarios usando localStorage.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que un botón tenga un fondo azul y texto blanco, con bordes redondeados.",
      },
      {
        question:
          "Implementa una función en JavaScript que valide que un campo de email tenga un formato correcto al perder el foco.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear una lista de elementos con viñetas personalizadas.",
      },
      {
        question:
          "Implementa una función en JavaScript que maneje la paginación de resultados de una lista de elementos.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que un elemento <div> tenga una sombra sutil.",
      },
      {
        question:
          "Implementa una función en JavaScript que calcule y muestre el total de una factura a partir de una lista de productos con precios.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear un menú de navegación horizontal con tres enlaces.",
      },
      {
        question:
          "Implementa una función en JavaScript que ordene alfabéticamente un array de nombres.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente un diseño responsive para una página web.",
      },
      {
        question:
          "Implementa una función en JavaScript que maneje el envío de un formulario y muestre un mensaje de confirmación.",
      },
      {
        question:
          "Escribe el código HTML y CSS necesario para crear un carrusel de imágenes que se desplacen automáticamente cada 5 segundos.",
      },
      {
        question:
          "Implementa una función en JavaScript que obtenga datos de un servidor mediante una solicitud HTTP (AJAX).",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que un elemento <div> tenga un borde sólido de 1px de color gris.",
      },
    ],
    senior: [
      {
        question:
          "Implementa una función en JavaScript que maneje la autenticación de usuarios utilizando JSON Web Tokens (JWT).",
      },
      {
        question:
          "Escribe el código HTML y CSS necesario para crear un dashboard con un gráfico interactivo utilizando bibliotecas como Chart.js o D3.js.",
      },
      {
        question:
          "Implementa una función en JavaScript que consulte una base de datos MongoDB y devuelva los resultados en formato JSON.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente un diseño de mosaico (tiles) con imágenes y texto.",
      },
      {
        question:
          "Implementa una función en JavaScript que maneje el CRUD (Create, Read, Update, Delete) de usuarios utilizando Node.js y Express.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear un formulario de edición de perfil con campos para nombre, correo, imagen de perfil y contraseña.",
      },
      {
        question:
          "Implementa una función en JavaScript que valide la fortaleza de una contraseña según criterios como longitud, caracteres especiales, etc.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente animaciones CSS avanzadas utilizando keyframes.",
      },
      {
        question:
          "Implementa una función en JavaScript que gestione el envío y recepción de mensajes en tiempo real utilizando WebSockets.",
      },
      {
        question:
          "Escribe el código HTML y CSS necesario para crear un formulario de búsqueda con autocompletado utilizando JavaScript.",
      },
      {
        question:
          "Implementa una función en JavaScript que calcule y muestre el tiempo transcurrido desde la última actividad del usuario en la sesión.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente un diseño fluido (fluid layout) con media queries para diferentes tamaños de pantalla.",
      },
      {
        question:
          "Implementa una función en JavaScript que maneje la internacionalización (i18n) de una aplicación web mediante el uso de bibliotecas como i18next.",
      },
      {
        question:
          "Escribe el código HTML y CSS para crear una lista de elementos desplegable (dropdown) con animaciones CSS.",
      },
      {
        question:
          "Implementa una función en JavaScript que ordene dinámicamente una tabla de datos al hacer clic en el encabezado de una columna.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que haga que un elemento <div> tenga un efecto de parallax en respuesta al desplazamiento vertical.",
      },
      {
        question:
          "Implementa una función en JavaScript que maneje la carga y manipulación de archivos (upload/download) utilizando Node.js y Express.",
      },
      {
        question:
          "Escribe el código HTML y CSS necesario para crear una barra de navegación con pestañas (tabs) que cambien dinámicamente el contenido mostrado.",
      },
      {
        question:
          "Implementa una función en JavaScript que realice operaciones matemáticas complejas (por ejemplo, cálculos estadísticos) sobre un conjunto de datos.",
      },
      {
        question:
          "Escribe un fragmento de código CSS que implemente un diseño de tarjeta (card layout) adaptable y accesible.",
      },
    ],
  },
};

export default questionsCode;

const questionsCode = {
  software_developer: {
    intern: [
      {
        question:
          "En Amazon, necesitas calcular el promedio de precios en una lista de productos.\nEscribe una función que calcule el promedio de precios.\nInput:\nLista de precios: [25.99, 15.50, 30.00, 22.75]",
      },
      {
        question:
          "En Netflix, tienes una lista de películas con sus ratings y quieres ordenar las películas por rating descendente.\nEscribe una función que ordene la lista de películas por rating.\nInput:\nLista de películas: [{'title': 'Movie A', 'rating': 8.5}, {'title': 'Movie B', 'rating': 9.0}, {'title': 'Movie C', 'rating': 7.0}]",
      },
      {
        question:
          "En Google, necesitas calcular el tiempo total de actividad a partir de una lista de tiempos en minutos.\nEscribe una función que calcule el tiempo total.\nInput:\nLista de tiempos: [60, 45, 30, 15]",
      },
      {
        question:
          "En Facebook, necesitas contar el número de comentarios en una publicación.\nEscribe una función que cuente el número de comentarios dados los IDs de los comentarios.\nInput:\nLista de comentarios: [1, 2, 3, 4, 5]",
      },
      {
        question:
          "En Twitter, necesitas calcular la media de los retweets de una serie de tweets.\nEscribe una función que calcule la media de retweets.\nInput:\nLista de retweets: [5, 10, 2, 8, 12]",
      },
      {
        question:
          "En Microsoft, tienes una lista de nombres de empleados y necesitas contar cuántos nombres empiezan con una letra específica.\nEscribe una función que cuente el número de nombres que empiezan con una letra dada.\nInput:\nLista de nombres: ['Alice', 'Bob', 'Charlie', 'Andrew']\nLetra: 'A'",
      },
      {
        question:
          "En LinkedIn, necesitas determinar si un usuario tiene un perfil completo basado en una lista de campos requeridos.\nEscribe una función que verifique si todos los campos están completos.\nInput:\nCampos completos: {'name': 'John Doe', 'headline': 'Software Engineer', 'location': 'New York'}\nCampos requeridos: ['name', 'headline', 'location']",
      },
      {
        question:
          "En Instagram, necesitas calcular el total de 'likes' en una lista de publicaciones.\nEscribe una función que calcule el total de 'likes'.\nInput:\nLista de likes: [100, 250, 80, 300]",
      },
      {
        question:
          "En Amazon, tienes una lista de fechas de envío y necesitas calcular el número de días de envío promedio.\nEscribe una función que calcule el promedio de días de envío.\nInput:\nLista de días de envío: [5, 7, 4, 6, 8]",
      },
      {
        question:
          "En Netflix, necesitas verificar si una lista de películas contiene una película específica.\nEscribe una función que verifique si una película está en la lista.\nInput:\nLista de películas: ['Movie A', 'Movie B', 'Movie C']\nPelícula a buscar: 'Movie B'",
      },
    ],
    junior: [
      {
        question:
          "En Google, necesitas crear una consulta SQL que devuelva los usuarios que han iniciado sesión en el último mes.\nInput:\nTabla de sesiones: sessions (user_id, login_date)",
      },
      {
        question:
          "En Facebook, necesitas calcular el total de interacciones (likes, shares, comments) en una publicación.\nEscribe una función que calcule el total de interacciones dado el número de likes, shares y comments.\nInput:\nLikes: 150\nShares: 30\nComments: 20",
      },
      {
        question:
          "En LinkedIn, necesitas una consulta MongoDB que devuelva los perfiles que fueron actualizados en los últimos 7 días.\nInput:\nColección de perfiles: profiles (profile_id, last_updated)",
      },
      {
        question:
          "En Twitter, necesitas crear un endpoint en una API REST que permita obtener la lista de seguidores de un usuario.\nEscribe el código para un endpoint que devuelva la lista de seguidores.\nInput:\nEndpoint: GET /user/<user_id>/followers\nDatos de seguidores: [{'user_id': 2, 'name': 'Follower A'}, {'user_id': 3, 'name': 'Follower B'}]",
      },
      {
        question:
          "En Microsoft, tienes una lista de tareas y necesitas filtrar las tareas completadas.\nEscribe una función que filtre las tareas completadas de una lista.\nInput:\nLista de tareas: [{'task': 'Task A', 'completed': True}, {'task': 'Task B', 'completed': False}, {'task': 'Task C', 'completed': True}]",
      },
      {
        question:
          "En Netflix, necesitas crear una consulta SQL que devuelva todas las películas de una categoría específica.\nInput:\nTabla de películas: movies (movie_id, title, category)",
      },
      {
        question:
          "En Google, necesitas crear una consulta MongoDB para contar el número de documentos en una colección con un campo específico.\nInput:\nColección: documents (field_name)",
      },
      {
        question:
          "En LinkedIn, necesitas escribir una función que calcule el promedio de recomendaciones recibidas por usuario.\nEscribe una función que calcule el promedio de recomendaciones.\nInput:\nLista de recomendaciones por usuario: [5, 10, 7, 8]",
      },
      {
        question:
          "En Twitter, necesitas crear una API en Flask que permita publicar un nuevo tweet.\nEscribe el código para un endpoint que permita publicar un tweet.\nInput:\nEndpoint: POST /tweets\nDatos del tweet: {'user_id': 1, 'content': 'Hello World!'}",
      },
      {
        question:
          "En Amazon, necesitas crear una consulta SQL que devuelva todos los productos en stock.\nInput:\nTabla de inventario: inventory (product_id, stock_quantity)",
      },
    ],
    senior: [
      {
        question:
          "En Amazon, necesitas escribir una consulta SQL para obtener el total de ventas por categoría de producto en los últimos seis meses.\nInput:\nTabla de ventas: sales (sale_id, product_id, sale_date, amount)\nTabla de productos: products (product_id, category_id)\nTabla de categorías: categories (category_id, category_name)",
      },
      {
        question:
          "En Google, necesitas crear una API REST en Node.js que permita gestionar publicaciones (crear, leer, actualizar, eliminar).\nEscribe el código para los endpoints básicos de gestión de publicaciones.\nInput:\nEndpoints: GET /posts, POST /posts, PUT /posts/<post_id>, DELETE /posts/<post_id>\nDatos de publicación: {'post_id': 1, 'title': 'New Post', 'content': 'Content of the post'}",
      },
      {
        question:
          "En Facebook, necesitas escribir una consulta MongoDB que agrupe los usuarios por región y calcule el número total de usuarios por región.\nInput:\nColección de usuarios: users (user_id, region)",
      },
      {
        question:
          "En LinkedIn, necesitas escribir una función que genere un reporte de las publicaciones más comentadas en el último mes.\nEscribe una función que devuelva las publicaciones más comentadas.\nInput:\nLista de publicaciones con comentarios: [{'post_id': 1, 'comment_count': 50}, {'post_id': 2, 'comment_count': 80}]",
      },
      {
        question:
          "En Netflix, necesitas crear una API en Python utilizando Flask que permita obtener los registros de actividad de los usuarios en un período específico.\nEscribe el código para un endpoint que devuelva los registros de actividad.\nInput:\nEndpoint: GET /users/activities?start_date=<start_date>&end_date=<end_date>\nDatos de actividad: {'user_id': 1, 'activity': 'watch', 'timestamp': '2024-08-01T12:00:00'}",
      },
      {
        question:
          "En Amazon, necesitas crear una consulta SQL que devuelva los productos que han sido comprados más de 100 veces.\nInput:\nTabla de ventas: sales (sale_id, product_id)\nTabla de productos: products (product_id, name)",
      },
      {
        question:
          "En Google, necesitas escribir una función que reciba un JSON de datos de usuario y devuelva un reporte con los usuarios que tienen más de una cierta cantidad de publicaciones.\nEscribe una función que devuelva el reporte.\nInput:\nDatos de usuario: [{'user_id': 1, 'posts': 25}, {'user_id': 2, 'posts': 10}, {'user_id': 3, 'posts': 30}]",
      },
      {
        question:
          "En Twitter, necesitas crear una consulta MongoDB que devuelva los tweets con más de 100 retweets.\nInput:\nColección de tweets: tweets (tweet_id, retweet_count)",
      },
      {
        question:
          "En LinkedIn, necesitas una API en Flask que permita a los usuarios actualizar su perfil.\nEscribe el código para un endpoint que permita actualizar el perfil del usuario.\nInput:\nEndpoint: PUT /users/<user_id>\nDatos del perfil: {'name': 'Jane Smith', 'headline': 'senior Developer', 'location': 'San Francisco'}",
      },
      {
        question:
          "En Netflix, necesitas escribir una consulta SQL que devuelva el promedio de duración de las películas por categoría.\nInput:\nTabla de películas: movies (movie_id, title, duration, category)",
      },
    ],
  },
  backend: {
    intern: [
      {
        question:
          "En Google, necesitas crear una función en Python que reciba una lista de números y devuelva el número máximo.\nInput:\nLista de números: [5, 12, 7, 23, 18]",
      },
      {
        question:
          "En Amazon, tienes una lista de datos de ventas y necesitas calcular el total de ventas.\nEscribe una función en Python que calcule el total de ventas.\nInput:\nLista de ventas: [100.50, 200.75, 150.00, 80.25]",
      },
      {
        question:
          "En Netflix, necesitas crear una función que reciba un JSON con detalles de un usuario y devuelva solo el nombre del usuario.\nInput:\nJSON de usuario: {'user_id': 1, 'name': 'John Doe', 'email': 'john@example.com'}",
      },
      {
        question:
          "En Facebook, necesitas crear una función en Python que verifique si una lista de IDs de usuarios contiene un ID específico.\nInput:\nLista de IDs: [1, 2, 3, 4, 5]\nID a buscar: 3",
      },
      {
        question:
          "En Twitter, necesitas escribir una función en Python que reciba una lista de retweets y devuelva el promedio de retweets.\nInput:\nLista de retweets: [10, 20, 15, 30]",
      },
      {
        question:
          "En LinkedIn, necesitas una función que reciba un texto y devuelva la cantidad de palabras en el texto.\nInput:\nTexto: 'This is a sample text with several words.'",
      },
      {
        question:
          "En Instagram, tienes una lista de comentarios y necesitas contar cuántos comentarios contienen una palabra específica.\nEscribe una función en Python que cuente los comentarios que contienen la palabra.\nInput:\nLista de comentarios: ['Great post!', 'I love this', 'Amazing content', 'This is great']\nPalabra a buscar: 'great'",
      },
      {
        question:
          "En Amazon, necesitas calcular la media de precios en una lista de productos.\nEscribe una función en Python que calcule la media de precios.\nInput:\nLista de precios: [25.99, 15.50, 30.00, 22.75]",
      },
      {
        question:
          "En Google, necesitas una función que reciba una lista de fechas y devuelva la fecha más reciente.\nInput:\nLista de fechas: ['2024-08-01', '2024-08-05', '2024-08-03']",
      },
      {
        question:
          "En Facebook, tienes una lista de usuarios con sus edades y necesitas calcular la edad promedio.\nEscribe una función en Python que calcule la edad promedio.\nInput:\nLista de edades: [25, 30, 35, 40]",
      },
    ],
    junior: [
      {
        question:
          "En Microsoft, necesitas crear una API en Python utilizando Flask que permita agregar un nuevo usuario.\nEscribe el código para un endpoint que permita agregar un usuario a la base de datos.\nInput:\nEndpoint: POST /users\nDatos del usuario: {'name': 'Alice', 'email': 'alice@example.com'}",
      },
      {
        question:
          "En LinkedIn, necesitas crear una función en Python que reciba un JSON con detalles de empleados y devuelva solo los empleados con un salario mayor a un valor específico.\nInput:\nJSON de empleados: [{'id': 1, 'name': 'Bob', 'salary': 5000}, {'id': 2, 'name': 'Alice', 'salary': 6000}]\nSalario mínimo: 5500",
      },
      {
        question:
          "En Netflix, necesitas escribir una función en Python que reciba una lista de IDs de películas y devuelva una lista de nombres de películas.\nInput:\nLista de IDs: [101, 102, 103]\nDatos de películas: [{'id': 101, 'name': 'Movie A'}, {'id': 102, 'name': 'Movie B'}, {'id': 103, 'name': 'Movie C'}]",
      },
      {
        question:
          "En Twitter, necesitas una consulta SQL que devuelva todos los tweets publicados en los últimos 7 días.\nInput:\nTabla de tweets: tweets (tweet_id, content, publish_date)",
      },
      {
        question:
          "En Google, necesitas crear una API en Node.js que permita obtener detalles de un producto por su ID.\nEscribe el código para un endpoint que devuelva la información del producto.\nInput:\nEndpoint: GET /products/<product_id>\nDatos del producto: {'product_id': 1, 'name': 'Product A', 'price': 19.99}",
      },
      {
        question:
          "En Facebook, necesitas escribir una consulta SQL que devuelva todos los comentarios de una publicación específica.\nInput:\nTabla de comentarios: comments (comment_id, post_id, comment_text)",
      },
      {
        question:
          "En LinkedIn, necesitas una API en Flask que permita actualizar la información de un usuario.\nEscribe el código para un endpoint que permita actualizar la información del usuario.\nInput:\nEndpoint: PUT /users/<user_id>\nDatos a actualizar: {'name': 'Alice Smith', 'email': 'alice.smith@example.com'}",
      },
      {
        question:
          "En Netflix, necesitas una función en Python que devuelva el total de duraciones de una lista de películas.\nInput:\nLista de duraciones: [120, 90, 150, 110]",
      },
      {
        question:
          "En Microsoft, tienes una lista de productos y necesitas filtrar solo los productos que están en stock.\nEscribe una función en Python que filtre los productos en stock.\nInput:\nLista de productos: [{'id': 1, 'in_stock': True}, {'id': 2, 'in_stock': False}, {'id': 3, 'in_stock': True}]",
      },
      {
        question:
          "En Google, necesitas escribir una consulta MongoDB que devuelva todos los documentos con una fecha de creación en el último mes.\nInput:\nColección de documentos: documents (document_id, creation_date)",
      },
    ],
    senior: [
      {
        question:
          "En Amazon, necesitas crear una API en Python utilizando Flask que permita gestionar productos (crear, leer, actualizar, eliminar).\nEscribe el código para los endpoints básicos de gestión de productos.\nInput:\nEndpoints: GET /products, POST /products, PUT /products/<product_id>, DELETE /products/<product_id>\nDatos del producto: {'product_id': 1, 'name': 'Product X', 'price': 29.99}",
      },
      {
        question:
          "En Google, necesitas una consulta SQL que devuelva el total de ventas y el número de transacciones por cliente en el último año.\nInput:\nTabla de ventas: sales (sale_id, customer_id, sale_date, amount)",
      },
      {
        question:
          "En Facebook, necesitas una función en Python que reciba una lista de usuarios y devuelva solo aquellos que tienen más de un número específico de amigos.\nInput:\nLista de usuarios: [{'user_id': 1, 'friends_count': 150}, {'user_id': 2, 'friends_count': 80}]\nNúmero mínimo de amigos: 100",
      },
      {
        question:
          "En LinkedIn, necesitas crear una API en Node.js que permita gestionar las conexiones entre usuarios (enviar, aceptar, rechazar).\nEscribe el código para los endpoints básicos de gestión de conexiones.\nInput:\nEndpoints: POST /connections/send, POST /connections/accept, POST /connections/reject\nDatos de conexión: {'from_user': 1, 'to_user': 2}",
      },
      {
        question:
          "En Netflix, necesitas una consulta MongoDB que devuelva el total de visualizaciones por categoría en el último mes.\nInput:\nColección de visualizaciones: views (user_id, movie_id, view_date)\nColección de películas: movies (movie_id, category)",
      },
      {
        question:
          "En Twitter, necesitas escribir una consulta SQL que devuelva todos los usuarios que han publicado más de un número específico de tweets en el último año.\nInput:\nTabla de tweets: tweets (tweet_id, user_id, publish_date)",
      },
      {
        question:
          "En Instagram, necesitas una función en Python que reciba una lista de seguidores y devuelva los seguidores que siguen a más de un número específico de usuarios.\nInput:\nLista de seguidores: [{'user_id': 1, 'following_count': 150}, {'user_id': 2, 'following_count': 50}]\nNúmero mínimo de seguidores: 100",
      },
      {
        question:
          "En Microsoft, necesitas crear una API en Flask que permita obtener los detalles de una venta por su ID.\nEscribe el código para un endpoint que devuelva la información de la venta.\nInput:\nEndpoint: GET /sales/<sale_id>\nDatos de la venta: {'sale_id': 1, 'product_id': 1, 'amount': 49.99}",
      },
      {
        question:
          "En Google, necesitas una función en Python que reciba un JSON de transacciones y devuelva el total de transacciones por cada tipo de transacción.\nInput:\nJSON de transacciones: [{'transaction_id': 1, 'type': 'credit', 'amount': 100}, {'transaction_id': 2, 'type': 'debit', 'amount': 50}]",
      },
      {
        question:
          "En LinkedIn, necesitas crear una API en Python utilizando Flask que permita gestionar las publicaciones (crear, leer, actualizar, eliminar).\nEscribe el código para los endpoints básicos de gestión de publicaciones.\nInput:\nEndpoints: GET /posts, POST /posts, PUT /posts/<post_id>, DELETE /posts/<post_id>\nDatos de publicación: {'post_id': 1, 'title': 'New Post', 'content': 'This is the content'}",
      },
    ],
  },
  full_stack: {
    intern: [
      {
        question:
          "En LinkedIn, necesitas crear una función que reciba un objeto JSON con los datos de un usuario y devuelva una respuesta en formato HTML que muestre el nombre y el email del usuario.\nInput:\nJSON del usuario: {'name': 'Alice', 'email': 'alice@example.com'}",
      },
      {
        question:
          "En Google, necesitas crear una página web simple con HTML y CSS que muestre un formulario de inicio de sesión con campos para el nombre de usuario y la contraseña.\nInput:\nFormulario de inicio de sesión: \n- Campo de nombre de usuario\n- Campo de contraseña",
      },
      {
        question:
          "En Twitter, necesitas una función en Python que procese una lista de tweets y devuelva el tweet con más retweets.\nEscribe una función en Python que devuelva el tweet con más retweets.\nInput:\nLista de tweets: [{'tweet': 'Tweet A', 'retweets': 15}, {'tweet': 'Tweet B', 'retweets': 25}]",
      },
      {
        question:
          "En Facebook, necesitas crear una página HTML que muestre una tabla con los datos de usuarios y sus edades. La tabla debe tener encabezados para el nombre y la edad.\nInput:\nDatos de usuarios: [{'name': 'Bob', 'age': 30}, {'name': 'Alice', 'age': 25}]",
      },
      {
        question:
          "En Instagram, tienes una API en Flask que devuelve una lista de posts. Crea una función en JavaScript que consuma esta API y muestre los títulos de los posts en una lista HTML.\nInput:\nEndpoint de API: GET /posts\nDatos de posts: [{'id': 1, 'title': 'Post A'}, {'id': 2, 'title': 'Post B'}]",
      },
      {
        question:
          "En Amazon, necesitas crear una página web que muestre un producto con su nombre, precio y descripción. Usa HTML para la estructura y CSS para el estilo.\nInput:\nDatos del producto: {'name': 'Product X', 'price': '29.99', 'description': 'A great product'}",
      },
      {
        question:
          "En Netflix, necesitas una función en JavaScript que tome una lista de películas y devuelva una lista de títulos en orden alfabético.\nInput:\nLista de películas: [{'title': 'Movie B'}, {'title': 'Movie A'}, {'title': 'Movie C'}]",
      },
      {
        question:
          "En LinkedIn, necesitas una API en Node.js que permita a los usuarios actualizar su perfil. Crea una función en JavaScript que envíe una solicitud PUT a esta API para actualizar el perfil del usuario.\nInput:\nEndpoint de API: PUT /users/<user_id>\nDatos de actualización: {'name': 'John Doe', 'headline': 'Developer'}",
      },
      {
        question:
          "En Google, necesitas una función en Python que genere un archivo JSON con una lista de usuarios y sus edades. La función debe guardar el archivo en el sistema de archivos.\nInput:\nLista de usuarios: [{'name': 'Alice', 'age': 28}, {'name': 'Bob', 'age': 32}]",
      },
      {
        question:
          "En Twitter, necesitas una función en JavaScript que tome una respuesta JSON de un endpoint y muestre el contenido de los tweets en una página web.\nInput:\nDatos del endpoint: [{'tweet_id': 1, 'content': 'Hello World!'}, {'tweet_id': 2, 'content': 'Goodbye World!'}]",
      },
    ],
    junior: [
      {
        question:
          "En LinkedIn, necesitas crear un formulario de registro en HTML con campos para el nombre, el correo electrónico y la contraseña. La página debe tener estilo con CSS.\nInput:\nCampos del formulario: \n- Nombre\n- Correo electrónico\n- Contraseña",
      },
      {
        question:
          "En Facebook, necesitas crear una función en Python que reciba una lista de comentarios y devuelva el comentario más reciente basado en la fecha de publicación.\nInput:\nLista de comentarios: [{'comment': 'Nice post!', 'date': '2024-08-05'}, {'comment': 'Great!', 'date': '2024-08-01'}]",
      },
      {
        question:
          "En Twitter, necesitas una API en Flask que devuelva una lista de usuarios con su nombre y número de seguidores. Crea una función en JavaScript que consuma esta API y muestre los nombres de los usuarios en una página web.\nInput:\nEndpoint de API: GET /users\nDatos de usuarios: [{'name': 'Alice', 'followers': 150}, {'name': 'Bob', 'followers': 120}]",
      },
      {
        question:
          "En Netflix, necesitas una consulta SQL que devuelva todos los usuarios que han visto una película específica en el último mes.\nInput:\nTabla de visualizaciones: views (user_id, movie_id, view_date)\nTabla de películas: movies (movie_id, title)",
      },
      {
        question:
          "En Amazon, necesitas una API en Node.js que permita obtener una lista de productos filtrados por categoría. Crea una función en JavaScript que consuma esta API y muestre los nombres de los productos en una página web.\nInput:\nEndpoint de API: GET /products?category=<category>\nDatos de productos: [{'product_id': 1, 'name': 'Product A'}, {'product_id': 2, 'name': 'Product B'}]",
      },
      {
        question:
          "En Google, necesitas crear una página de perfil de usuario en HTML y CSS que muestre el nombre, la foto de perfil y la biografía del usuario.\nInput:\nDatos del usuario: {'name': 'John Doe', 'profile_picture': 'john.jpg', 'bio': 'Software Developer'}",
      },
      {
        question:
          "En Facebook, necesitas crear una función en Python que procese una lista de publicaciones y devuelva el total de comentarios en todas las publicaciones.\nInput:\nLista de publicaciones: [{'post_id': 1, 'comments_count': 5}, {'post_id': 2, 'comments_count': 8}]",
      },
      {
        question:
          "En LinkedIn, necesitas crear un endpoint en Flask que permita a los usuarios crear nuevas publicaciones. Escribe el código para el endpoint que recibe los datos de la publicación y los almacena en la base de datos.\nInput:\nEndpoint: POST /posts\nDatos de la publicación: {'title': 'New Post', 'content': 'Content of the post'}",
      },
      {
        question:
          "En Netflix, necesitas una función en JavaScript que tome una lista de ratings y calcule el rating promedio de todas las películas.\nInput:\nLista de ratings: [4.5, 3.8, 5.0, 4.2]",
      },
      {
        question:
          "En Twitter, necesitas crear una página web con HTML y CSS que muestre una lista de tweets en un formato de tarjeta. Cada tarjeta debe mostrar el contenido del tweet y el nombre del usuario.\nInput:\nDatos de tweets: [{'user': 'Alice', 'content': 'Hello World!'}, {'user': 'Bob', 'content': 'Goodbye World!'}]",
      },
    ],
    senior: [
      {
        question:
          "En LinkedIn, necesitas una API en Node.js que permita gestionar conexiones entre usuarios (enviar, aceptar, rechazar). Escribe el código para los endpoints básicos de gestión de conexiones.\nInput:\nEndpoints: POST /connections/send, POST /connections/accept, POST /connections/reject\nDatos de conexión: {'from_user': 1, 'to_user': 2}",
      },
      {
        question:
          "En Amazon, necesitas crear una API en Python utilizando Flask que permita obtener el total de ventas y el número de transacciones por cliente en el último año. Crea una función en Python que realice esta operación.\nInput:\nDatos de ventas: [{'sale_id': 1, 'customer_id': 1, 'sale_date': '2024-07-01', 'amount': 50.0}, {'sale_id': 2, 'customer_id': 1, 'sale_date': '2024-08-01', 'amount': 70.0}]",
      },
      {
        question:
          "En Google, necesitas una función en Python que genere un archivo CSV con una lista de productos y sus precios. La función debe guardar el archivo en el sistema de archivos.\nInput:\nLista de productos: [{'product_id': 1, 'name': 'Product X', 'price': 29.99}, {'product_id': 2, 'name': 'Product Y', 'price': 49.99}]",
      },
      {
        question:
          "En Facebook, necesitas una API en Flask que permita obtener los detalles de una publicación por su ID. Escribe el código para un endpoint que devuelva la información de la publicación.\nInput:\nEndpoint: GET /posts/<post_id>\nDatos de la publicación: {'post_id': 1, 'title': 'Post Title', 'content': 'Post content'}",
      },
      {
        question:
          "En Netflix, necesitas crear una consulta MongoDB que devuelva el total de visualizaciones por categoría en el último mes. Escribe la consulta en MongoDB.\nInput:\nColección de visualizaciones: views (user_id, movie_id, view_date)\nColección de películas: movies (movie_id, category)",
      },
      {
        question:
          "En LinkedIn, necesitas una función en JavaScript que consuma una API que devuelve detalles de usuarios y muestre una lista de usuarios con sus nombres y fotos de perfil en una página web.\nInput:\nEndpoint de API: GET /users\nDatos de usuarios: [{'user_id': 1, 'name': 'Alice', 'profile_picture': 'alice.jpg'}, {'user_id': 2, 'name': 'Bob', 'profile_picture': 'bob.jpg'}]",
      },
      {
        question:
          "En Amazon, necesitas una página de administración en HTML y CSS que muestre una tabla de productos con opciones para editar y eliminar cada producto.\nInput:\nDatos de productos: [{'product_id': 1, 'name': 'Product A', 'price': '20.00'}, {'product_id': 2, 'name': 'Product B', 'price': '35.00'}]",
      },
      {
        question:
          "En Google, necesitas una API en Flask que permita a los usuarios filtrar productos por categoría y rango de precio. Crea una función en Python para este endpoint.\nInput:\nEndpoint: GET /products?category=<category>&min_price=<min_price>&max_price=<max_price>\nDatos de productos: [{'product_id': 1, 'category': 'Electronics', 'price': 99.99}, {'product_id': 2, 'category': 'Books', 'price': 14.99}]",
      },
      {
        question:
          "En Twitter, necesitas crear una función en JavaScript que consuma una API que devuelve una lista de tweets y muestre los tweets en una página web con una interfaz de usuario sencilla.\nInput:\nEndpoint de API: GET /tweets\nDatos de tweets: [{'tweet_id': 1, 'content': 'Hello Twitter!'}, {'tweet_id': 2, 'content': 'JavaScript is awesome!'}]",
      },
      {
        question:
          "En Facebook, necesitas una función en Python que tome una lista de publicaciones y devuelva la publicación con el mayor número de interacciones (likes y comentarios).\nInput:\nLista de publicaciones: [{'post_id': 1, 'likes': 10, 'comments': 5}, {'post_id': 2, 'likes': 15, 'comments': 10}]",
      },
    ],
  },
  frontend: {
    intern: [
      {
        question:
          "En Facebook, necesitas crear una página web simple en HTML que muestre un formulario de registro con campos para el nombre y el correo electrónico. Usa CSS para el estilo básico.\nInput:\nFormulario de registro:\n- Campo de nombre\n- Campo de correo electrónico",
      },
      {
        question:
          "En Twitter, necesitas una función en JavaScript que tome un array de números y devuelva el número más grande. Muestra el resultado en la consola del navegador.\nInput:\nArray de números: [1, 3, 2, 5, 4]",
      },
      {
        question:
          "En LinkedIn, necesitas crear una página web en HTML y CSS que muestre una tabla con los nombres de los empleados y sus roles. La tabla debe tener encabezados para 'Nombre' y 'Rol'.\nInput:\nDatos de empleados: [{'name': 'Alice', 'role': 'Developer'}, {'name': 'Bob', 'role': 'Designer'}]",
      },
      {
        question:
          "En Google, necesitas crear una página web que muestre un contador en JavaScript que aumente el número cada vez que se haga clic en un botón.\nInput:\nBotón de incrementar\nContador inicial: 0",
      },
      {
        question:
          "En Instagram, necesitas escribir una función en JavaScript que tome una lista de cadenas y devuelva la cadena más larga.\nInput:\nLista de cadenas: ['short', 'medium length', 'a much longer string']",
      },
      {
        question:
          "En Amazon, crea una página HTML que tenga un botón para cambiar el color de fondo de la página. Usa JavaScript para implementar el cambio de color.\nInput:\nBotón de cambio de color\nColores posibles: rojo, azul, verde",
      },
      {
        question:
          "En Netflix, necesitas una página web que muestre una lista de películas con sus títulos y descripciones en un formato de tarjetas usando HTML y CSS.\nInput:\nDatos de películas: [{'title': 'Movie A', 'description': 'Description A'}, {'title': 'Movie B', 'description': 'Description B'}]",
      },
      {
        question:
          "En LinkedIn, necesitas una función en JavaScript que tome un array de objetos con información de contacto y devuelva una cadena con todos los nombres concatenados.\nInput:\nArray de objetos: [{'name': 'Alice', 'email': 'alice@example.com'}, {'name': 'Bob', 'email': 'bob@example.com'}]",
      },
      {
        question:
          "En Google, necesitas una página HTML con un formulario de búsqueda y un resultado de búsqueda que se muestre debajo del formulario. Usa CSS para el estilo básico.\nInput:\nFormulario de búsqueda\nResultado de búsqueda: 'No results found'",
      },
      {
        question:
          "En Twitter, necesitas una función en JavaScript que tome una cadena de texto y devuelva el número de palabras en la cadena.\nInput:\nCadena de texto: 'This is a sample text with several words.'",
      },
    ],
    junior: [
      {
        question:
          "En LinkedIn, necesitas crear una página web en HTML y CSS que muestre una lista de artículos de blog con sus títulos y descripciones en formato de lista.\nInput:\nDatos de artículos: [{'title': 'Article 1', 'description': 'Description 1'}, {'title': 'Article 2', 'description': 'Description 2'}]",
      },
      {
        question:
          "En Facebook, crea una página HTML con un formulario que permita ingresar nombre, correo electrónico y mensaje. Usa CSS para el diseño del formulario.\nInput:\nCampos del formulario:\n- Nombre\n- Correo electrónico\n- Mensaje",
      },
      {
        question:
          "En Twitter, necesitas crear una página en HTML y CSS que muestre un reloj digital. Usa JavaScript para actualizar la hora en tiempo real.\nInput:\nReloj digital\nFormato de hora: HH:MM:SS",
      },
      {
        question:
          "En Google, necesitas una función en JavaScript que tome un array de objetos de productos y devuelva el producto con el precio más bajo.\nInput:\nArray de productos: [{'name': 'Product A', 'price': 30}, {'name': 'Product B', 'price': 20}, {'name': 'Product C', 'price': 25}]",
      },
      {
        question:
          "En Netflix, necesitas una página HTML que muestre una cuadrícula de imágenes de películas. Usa CSS para el diseño de la cuadrícula y asegúrate de que las imágenes se ajusten correctamente.\nInput:\nDatos de imágenes: ['image1.jpg', 'image2.jpg', 'image3.jpg']",
      },
      {
        question:
          "En LinkedIn, crea una página en HTML y CSS con un menú de navegación horizontal que contenga enlaces a Inicio, Servicios y Contacto. Usa CSS para el estilo del menú.\nInput:\nMenú de navegación:\n- Inicio\n- Servicios\n- Contacto",
      },
      {
        question:
          "En Facebook, necesitas una función en JavaScript que tome una lista de usuarios y devuelva solo aquellos que tienen una edad mayor a un valor específico.\nInput:\nLista de usuarios: [{'name': 'Alice', 'age': 25}, {'name': 'Bob', 'age': 30}]\nEdad mínima: 26",
      },
      {
        question:
          "En Amazon, necesitas una página web que muestre una tarjeta de producto con nombre, precio y una imagen. Usa HTML y CSS para el diseño.\nInput:\nDatos del producto: {'name': 'Product X', 'price': '99.99', 'image': 'product.jpg'}",
      },
      {
        question:
          "En Google, crea una página HTML que tenga un formulario para enviar comentarios. Usa CSS para el estilo del formulario y asegúrate de que tenga campos para nombre, correo electrónico y mensaje.\nInput:\nCampos del formulario:\n- Nombre\n- Correo electrónico\n- Mensaje",
      },
      {
        question:
          "En Netflix, necesitas una función en JavaScript que tome una lista de películas y devuelva la película con el mayor número de vistas.\nInput:\nLista de películas: [{'title': 'Movie A', 'views': 1000}, {'title': 'Movie B', 'views': 1500}]",
      },
    ],
    senior: [
      {
        question:
          "En LinkedIn, necesitas crear una página en HTML y CSS que muestre un dashboard con gráficos de barras y líneas. Usa una librería de gráficos como Chart.js para representar los datos.\nInput:\nDatos de gráficos: {'labels': ['January', 'February', 'March'], 'data': [10, 20, 30]}",
      },
      {
        question:
          "En Google, necesitas una página web con una barra de navegación fija en la parte superior y un contenido que se desplace hacia abajo. Usa CSS para el diseño y asegúrate de que la barra de navegación se mantenga fija al hacer scroll.\nInput:\nBarra de navegación fija\nContenido desplazable",
      },
      {
        question:
          "En Amazon, crea una página web en HTML y CSS que muestre un catálogo de productos con filtros de búsqueda y categorías. Usa JavaScript para implementar el filtrado de productos.\nInput:\nDatos de productos: [{'name': 'Product A', 'category': 'Electronics'}, {'name': 'Product B', 'category': 'Books'}]\nCategorías de filtro: 'Electronics', 'Books'",
      },
      {
        question:
          "En Facebook, necesitas una función en JavaScript que tome una lista de comentarios y devuelva un resumen con el número total de comentarios y la longitud promedio de los comentarios.\nInput:\nLista de comentarios: ['Great post!', 'Very informative article.', 'Thanks for sharing!']",
      },
      {
        question:
          "En Netflix, necesitas crear una página web en HTML y CSS que muestre un slider de imágenes con flechas para navegar entre las imágenes. Usa JavaScript para implementar la funcionalidad del slider.\nInput:\nImágenes para el slider: ['image1.jpg', 'image2.jpg', 'image3.jpg']",
      },
      {
        question:
          "En LinkedIn, crea una página de perfil en HTML y CSS que muestre la información del usuario, incluyendo una foto de perfil, nombre, título y biografía. Usa CSS para el diseño.\nInput:\nDatos del usuario: {'name': 'John Doe', 'profile_picture': 'john.jpg', 'title': 'Software Engineer', 'bio': 'Passionate developer.'}",
      },
      {
        question:
          "En Twitter, necesitas una página HTML que muestre un formulario para enviar mensajes directos. Usa CSS para el diseño del formulario y asegúrate de que tenga campos para destinatario, asunto y mensaje.\nInput:\nCampos del formulario:\n- Destinatario\n- Asunto\n- Mensaje",
      },
      {
        question:
          "En Google, crea una página en HTML y CSS que tenga una sección de comentarios con un campo de entrada para agregar nuevos comentarios y una lista que muestre todos los comentarios existentes. Usa JavaScript para manejar el agregado de nuevos comentarios.\nInput:\nComentarios existentes: ['Nice!', 'Interesting article.']",
      },
      {
        question:
          "En Instagram, necesitas una página HTML con una galería de imágenes que se muestre en un formato de cuadrícula. Usa CSS para el diseño de la galería y asegúrate de que las imágenes se ajusten correctamente.\nInput:\nDatos de imágenes: ['img1.jpg', 'img2.jpg', 'img3.jpg']",
      },
      {
        question:
          "En Amazon, necesitas una página web que muestre una lista de reseñas de productos con calificaciones y comentarios. Usa HTML y CSS para el diseño y JavaScript para manejar el filtrado por calificación.\nInput:\nDatos de reseñas: [{'product': 'Product A', 'rating': 4, 'comment': 'Good product!'}, {'product': 'Product B', 'rating': 5, 'comment': 'Excellent!'}]",
      },
    ],
  },
};

export default questionsCode;

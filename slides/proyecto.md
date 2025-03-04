---
title: Proyecto
theme: solarized
slideNumber: true
---

# Proyecto: Práctico Integrador

---

## Temario

1. Enunciado
2. Requisitos

---

## Enunciado

<!-- TODO: CAMBIAR ENUNCIADO -->

Como práctico integrador se solicita la creación de un sistema de **gestión de cursos en línea (LMS)**, donde se destacan dos componentes a ser desarrollados.

El **backend**, desarrollado en **Golang**, brindará todas las interfaces necesarias para dar solución al requerimiento.

El **frontend**, desarrollado en **React**, representa la vista final del usuario y consumirá los servicios desarrollados en el backend.
Para la construcción del sistema de gestión de cursos se solicitan los siguientes puntos.

---

## Requisitos Backend

<!-- .slide: style="font-size: 0.90em" -->

- **Autenticación de usuarios:** Implementar un sistema de login y gestión de permisos de usuarios. Deben existir 2 tipos de usuarios: alumno y administrador.
- **Gestión de cursos:** Desarrollar endpoints que permitan la creación, edición, y eliminación de cursos por parte de los administradores.
- **Gestión de usuarios inscritos:** Implementar un endpoint para listar los cursos a los que un usuario está inscrito.
- **Seguridad:** Garantizar la seguridad de las transacciones (autorización por token firmado entre frontend y backend) y datos (hashing de contraseñas) del sistema.

---

## Requisitos Frontend

<!-- .slide: style="font-size: 0.80em" -->

- **Pantalla de inicio (Home):** Mostrar un listado de cursos disponibles para inscripción.
- **Búsqueda de cursos:** Implementar un motor de búsqueda que permita a los usuarios encontrar cursos por palabras clave o categorías.
- **Detalle del curso:** Mostrar información detallada sobre un curso seleccionado, incluyendo descripción, instructor, duración, y requisitos.
- **Inscripción en curso:** Habilitar un botón de inscripción para que los usuarios puedan registrarse en los cursos de su interés.
- **Mis cursos:** Mostrar un listado de los cursos a los que el usuario está inscrito, con la opción de acceder a los detalles de cada curso.

---

## Criterios de Evaluación - Entrega Final

- Frontend
- Backend
- Seguridad
- Database
- General

---

## Criterios de Evaluación: FRONTEND

<!-- .slide: style="font-size: 0.70em" -->

- [ ] Formulario de Login y botón para hacer Logout
- [ ] Página de bienvenida se muestra correctamente
- [ ] Se pueden buscar cursos correctamente
- [ ] Muestra correctamente resultados de búsqueda / No hay resultados
- [ ] Se puede inscribir correctamente a un curso
- [ ] Se muestra error si no se puede inscribir a un curso (Por ej. ya inscripto)
- [ ] Muestra el listado de cursos a los que se encuentra inscripto un usuario
- [ ] Formulario para dejar un comentario y puntuación sobre el curso
- [ ] Formulario para crear curso sólo visible usuario administrador
- [ ] Formulario para editar curso sólo visible usuario administrador
- [ ] Permite al administrador subir un archivo relacionado con el curso
- [ ] Opción para eliminar un curso sólo visible usuario administrador
- [ ] Los errores al crear/editar/eliminar curso se muestran correctamente

---

## Criterios de Evaluación: BACKEND

<!-- .slide: style="font-size: 0.65em" -->

- [ ] Login recibe las credenciales y genera un token de acceso
- [ ] Implementa correctamente el registro de un usuario nuevo
- [ ] Manejo de errores (401 Login inválido, 404 curso no encontrado, 400/409 ya inscripto, etc.)
- [ ] Implementa correctamente la búsqueda de cursos
- [ ] Implementa correctamente la generación de la inscripción
- [ ] Implementa correctamente la obtención de cursos a los que está inscripto un user ID
- [ ] Implementa correctamente agregar un comentario y puntuación al curso (y retorna esta información en el GET)
- [ ] Implementa correctamente el agregado de un archivo relacionado a un curso
- [ ] Implementa estructura MVC y respeta las responsabilidades de modelo, vista y controlador.
- [ ] Implementa correctamente la separación entre los objetos del modelos (DAOs) y los DTOs
- [ ] Implementa correctamente el manejo de errores (no ignora los errores) y códigos de estado
- [ ] Las funciones del backend no ignoran los errores (Validan siempre err != nil)

---

## Criterios de Evaluación: SEGURIDAD

- [ ] La base de datos no almacena la información de la password de forma plana, usa hashing
- [ ] Se valida el tipo de usuario via token para todas las funciones que lo necesiten (administrador)

---

## Criterios de Evaluación: DATABASE

- [ ] Se conecta correctamente contra la base de datos usando GORM
- [ ] Las distintas tablas en la base no duplican la información en más de una tabla

---

## Criterios de Evaluación: GENERAL

- [ ] Cada componente de la solución se encuentra Dockerizada (Dockerfile, Docker Compose, etc.)
- [ ] La solución completa corre correctamente con Docker

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

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

## [Enunciado](https://docs.google.com/document/d/1kshladtOu1VUWsoAw-S_mw03kIyq28Tyv56mvzKLQos/edit?tab=t.0#heading=h.pdp9wsykfu56)

Como práctico integrador se solicita la creación de un sistema de **gestión de actividades deportivas** en un gimnasio, donde se destacan dos componentes a ser desarrollados:
* **Backend**, desarrollado en Golang, que brindará todas las interfaces necesarias para dar solución al requerimiento.
* **Frontend**, desarrollado en React, representa la vista final del usuario y consumirá los servicios desarrollados en el backend.

El grupo será de **3** o **4** personas.

---

## Requisitos Backend

<!-- .slide: style="font-size: 0.90em" -->

- **Autenticación de usuarios:** Implementar un sistema de login y gestión de permisos de usuarios. Deben existir 2 tipos de usuarios: socio y administrador.
- **Gestión de actividades deportivas:** Desarrollar endpoints que permitan la creación, edición, y eliminación de actividades deportivas por parte de los administradores del gimnasio. (ej. deben poder agregar clases de musculación, pilates, yoga, funcional, spinning, taekwondo, gap, aerobox, mma, boxeo, etc).
- **Gestión de usuario:** Implementar endpoints para listar las clases a las que un socio está inscripto.
- **Seguridad:** Garantizar la seguridad de las transacciones (autorización por token firmado entre frontend y backend) y datos (hashing de contraseñas) del sistema.

---

## Requisitos Frontend

<!-- .slide: style="font-size: 0.80em" -->

- **Pantalla de inicio (Home):** Mostrar un listado de las actividades deportivas disponibles para inscripción.
- **Búsqueda de actividades deportivas:** Implementar un motor de búsqueda que permita a los socios encontrar las actividades deportivas por palabras clave o por horario.
- **Detalle de la actividad deportiva:** Mostrar información detallada sobre una actividad deportiva seleccionada, incluyendo descripción, foto, instructor, horario, duración, cupo, etc.
- **Inscripción en actividad deportiva:** Habilitar un botón de inscripción para que el socio pueda registrarse en una clase de la actividad de su interés.
- **Mis actividades deportivas:** Mostrar un listado de las actividades deportivas a los que el usuario está inscrito, con la opción de acceder a los detalles de cada actividad.

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
- [ ] Se pueden buscar actividades deportivas correctamente
- [ ] Muestra correctamente resultados de búsqueda / No hay resultados
- [ ] Se puede inscribir correctamente a una actividad deportiva
- [ ] Se muestra error si no se puede inscribir a una actividad deportiva (Por ejemplo si ya inscripto, o si se acabó el cupo)
- [ ] Muestra el listado de actividades deportivas a los que se encuentra inscripto un usuario
- [ ] Formulario para dejar un comentario y puntuación sobre la actividad deportiva
- [ ] Formulario para crear una actividad deportiva sólo visible usuario administrador
- [ ] Formulario para editar una actividad deportiva sólo visible usuario administrador
- [ ] Permite al administrador subir un archivo relacionado con la actividade deportiva
- [ ] Opción para eliminar una actividad deportiva sólo visible usuario administrador
- [ ] Los errores al crear/editar/eliminar actividad deportiva se muestran correctamente

---

## Criterios de Evaluación: BACKEND

<!-- .slide: style="font-size: 0.65em" -->

- [ ] Login recibe las credenciales y genera un token de acceso
- [ ] Implementa correctamente el registro de un usuario nuevo
- [ ] Manejo de errores (401 Login inválido, 404 curso no encontrado, 400/409 ya inscripto, etc.)
- [ ] Implementa correctamente la búsqueda de actividades deportivas
- [ ] Implementa correctamente la generación de la inscripción
- [ ] Implementa correctamente la obtención de actividades deportivas a los que está inscripto un user ID
- [ ] Implementa correctamente agregar un comentario y puntuación al curso (y retorna esta información en el GET)
- [ ] Implementa correctamente el agregado de un archivo relacionado a una actividad deportiva
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

## Github Classromm

[Proyecto2025](https://classroom.github.com/a/imdgYQQs)

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

---
title: DAO & ORM
theme: solarized
slideNumber: true
---

# DAO & ORM

<style>
	.p-12 {
		font-size: 0.6em;
	}

.grid-container2 {
    display: grid;
    grid-template-columns: auto auto;
    font-size: 0.8em;
    text-align: left !important;
}

.grid-item {
    border: 3px solid rgba(121, 177, 217, 0.8);
    padding: 20px;
    text-align: left !important;
}
</style>

---

## Temario

<div class="grid-container2">
<div class="grid-item">

- DAO

</div>
<div class="grid-item">

- ORM

</div></div>

---

## DAO: Data Access Object

Se centra en separar la lógica de acceso a datos de la lógica de negocio. Proporciona una interfaz para interactuar con 
una fuente de datos específica, como una base de datos, ocultando los detalles de la implementación. 

Su objetivo principal es abstraer la interacción de la base de datos y proporcionar métodos para operaciones CRUD 
(Create, Read, Update, Delete).

<!-- https://leanmind.es/es/blog/comprendiendo-las-diferencias-entre-dao-repository-active-record/ -->
<!-- https://levelup.gitconnected.com/understanding-abstraction-levels-in-database-interactions-dal-dao-raw-queries-query-builder-4819d607b0d6 -->
<!-- https://www.youtube.com/watch?v=Knjw5_DshK8 -->

---

## DAO: Data Access Object

- Es un objeto que actúa como interfaz entre la aplicación y la base de datos
- Se centra en operaciones CRUD específicas para una fuente de datos
- Separa la lógica de persistencia de datos en una capa separada
- Permite independizar la aplicación de la forma de acceder a la base de datos

---

### ORM: Object-Relational Mappin

Permite que los desarrolladores trabajen con la base de datos utilizando objetos en lugar de escribir consultas SQL 
directamente. 

Estos frameworks se encargan de la asignación (mapeo) entre las estructuras de datos en la base de datos relacional y 
las representaciones de objetos en el lenguaje de programación.

Estás librerías adoptan este patrón para simplificar el desarrollo de la interacción con la base de datos a través de objetos en el código.

---

### ORM: Object-Relational Mapping

- Es una biblioteca o API que permite hacer que las interacciones con una base de datos sean más robustas 
- Permite a un programa de software acceder y manipular datos almacenados en un sistema de gestión de bases de datos (DBMS) mediante objetos
- Permite persistir objetos Java directamente en una base de datos sin tener que generar sentencias SQL

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

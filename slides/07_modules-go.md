---
title: Go Modules
theme: solarized
slideNumber: true
---

<style>
h1 {
  background-color: rgba(255,255,255,.7);
}

.small{
	font-size: 0.5em
}
</style>

<section data-background-image="images/go/background.jpeg">

<br><br><br><br><br><br>

<h1>Go Modules y APIS</h1>

</section>

---

## Temario

- Go Modules
- Vebtajas
- Archivos
- Comandos

---

## Go Modules

**Go module** es una forma de organizar y gestionar dependencias en un proyecto.

Fue introducido oficialmente en Go 1.11 como una forma de manejar las dependencias de manera más robusta y reproducible en proyectos Go.

---

## Go Modules

Antes de la introducción de Go Modules, la gestión de dependencias en Go solía ser más manual y estaba basada principalmente en el GOPATH y herramientas como "dep" o el mismo control de versiones (Git, principalmente). 

Sin embargo, estas soluciones tenían limitaciones y problemas, como la falta de soporte para la gestión de versiones semánticas, la necesidad de repositorios centralizados y la dificultad para trabajar con múltiples proyectos en el mismo entorno.

---

## Modulo en Go

Un **módulo** es una colección de paquetes Go que se versionan juntos como una unidad. Cada módulo tiene un archivo llamado **go.mod** en su raíz, que define el nombre del módulo y las dependencias externas necesarias para que el código funcione.

---

## Ventajas de Go Modules

<!-- .slide: style="font-size: 0.80em" -->

- **Versionado semántico:** Permite especificar las versiones de las dependencias utilizando semver (Semantic Versioning), lo que facilita la gestión de las dependencias y garantiza una mayor compatibilidad entre versiones.
- **Reproducibilidad:** Con Go Modules, se garantiza que los builds sean reproducibles, ya que las dependencias y versiones exactas se registran en un archivo de bloqueo (go.mod) junto con el proyecto.
- **Soporte para múltiples repositorios:** No se depende únicamente de un único repositorio centralizado (como era común con GOPATH), lo que permite trabajar con múltiples módulos en diferentes repositorios.
- **Privacidad y seguridad mejoradas:** Se utilizan URLs basadas en HTTPS para importar dependencias, lo que proporciona una capa adicional de seguridad y privacidad.

---

### Archivos al manejar módulos

- **go.mod**: Contiene un listado de todas los paquetes de terceros que están importados en el proyecto.
- **go.sum**: Registro de seguridad que acompaña al **go.mod** y contiene contiene checksums (resúmenes hash) de todas las versiones de dependencias que el módulo ha descargado.

---

## Comandos para manejar módulos

1. En la carpeta raíz del proyecto (donde está **main.go**) ejecutar el siguiente comandos para generar el **go.mod** y el **go.sum**

```bash
go mod init {nombre-del-proyecto}
```

2. Cada vez que se necesite limpiar u organizar estos archivos, ejecutar:
```bash
go mod tidy
```

Esto eliminará las dependencias no usadas, agregará las dependencias faltantes.

---

### Ejercicio 7: API de Vinilos

<!-- .slide: style="font-size: 0.80em" -->

El programa debe proporcionar el acceso a una tienda de vinilos. Usando [gin-gonic](https://gin-gonic.com/) se deben crear los **endpoints** para:
1. Visualizar el listado de todos los álbumes en formato json. **GET /albums**
2. Agregar un nuevo álbun. **POST /albums**
3. Obtener los datos de un álbum específico. **GET /albums/:id**
4. Actualizar los datos de un álbum específico. **PUT /albums/:id**
5. Eliminar un álbum específico. **DELETE /albums/:id**

Estos datos se guardarán en la memoria temporal y no en una Base de Datos (para simplificar el desarrollo).

Los **albums** deben contener: id, título, artista, año y precio. Los **status-code** se deben obtener del package [http](https://pkg.go.dev/net/http).

---

#### Ejercicio 7: Ejemplo de Datos
Albums pre-existentes:
```go
{ID: "1",Title: "The Number of the Beast",Artist: "Iron Maiden",Year: 1982,Price: 25.19},
{ID: "2",Title: "Youthanasia",Artist: "Medadeth",Year: 1994,Price: 13.65},
{ID: "3",Title: "Master of Puppets",Artist: "Metallica",Year: 1986,Price: 20.97}
```

Agregar un nuevo Album:
```json
{
  "id": "4",
  "title": "Fear of the Dark",
  "artist": "Iron Maiden",
  "year": 1992,
  "price": 13.98 
}
```

---

### Ejercicio 7: API de Vinilos (parte 1)

<p class="small">(para ver en casa y repasar)</p>
<p>module - GET</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZO6YPNGXW70?si=JORyPzw2HIfe49K5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Ejercicio 7: API de Vinilos (parte 2)

<p class="small">(para ver en casa y repasar)</p>

<p>POST - GET by ID</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/NGfjAG6Rifw?si=IP9Ne8a4zZACEET3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

### Ejercicio 7: API de Vinilos (parte 3)

<p class="small">(para ver en casa y repasar)</p>

<p>PUT - DELETE</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/-1jl5pZwerQ?si=cBhzawrCxJ3tlePF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

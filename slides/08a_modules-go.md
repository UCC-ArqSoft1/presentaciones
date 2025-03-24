---
title: Go Modules
theme: solarized
slideNumber: true
---

# Go Modules

---

## Temario

- Go Modules
- Documentación de una API

---

## Go Modules

<!-- .slide: style="font-size: 0.80em" -->

Go Modules es un sistema de administración de dependencias para el lenguaje de programación Go. Fue introducido oficialmente en Go 1.11 como una forma de manejar las dependencias de manera más robusta y reproducible en proyectos Go.

Antes de la introducción de Go Modules, la gestión de dependencias en Go solía ser más manual y estaba basada principalmente en el GOPATH y herramientas como "dep" o el mismo control de versiones (Git, principalmente). Sin embargo, estas soluciones tenían limitaciones y problemas, como la falta de soporte para la gestión de versiones semánticas, la necesidad de repositorios centralizados y la dificultad para trabajar con múltiples proyectos en el mismo entorno.

---

## Documentación de una API: Ventajas

<!-- .slide: style="font-size: 0.80em" -->

- **Versionado semántico:** Permite especificar las versiones de las dependencias utilizando semver (Semantic Versioning), lo que facilita la gestión de las dependencias y garantiza una mayor compatibilidad entre versiones.
- **Reproducibilidad:** Con Go Modules, se garantiza que los builds sean reproducibles, ya que las dependencias y versiones exactas se registran en un archivo de bloqueo (go.mod) junto con el proyecto.
- **Soporte para múltiples repositorios:** No se depende únicamente de un único repositorio centralizado (como era común con GOPATH), lo que permite trabajar con múltiples módulos en diferentes repositorios.
- **Privacidad y seguridad mejoradas:** Se utilizan URLs basadas en HTTPS para importar dependencias, lo que proporciona una capa adicional de seguridad y privacidad.

---

## Paquetes de Terceros

Son paquetes que no etsán incluidos en la biblioteca estándar de Go. Estos paquetes han sido desarrollados y mantenidos por la comunidad de desarrollados de go.

Para incluir paquetes externos es necesario inicializar un **manejador de modulos** de Go. Para eso, en la carpeta root (donde se encuenta **main.go**), ejecutar:

```bash
go mod init {nombre-del-proyecto}
go mod tidy
```

Esto creo un archivo **go.mod** que permite manejar los módulos.

---

## go.mod

Es un archivo que se usa para definir y gestionar los módulos y dependencias en go.

---

### Ejercicio: Agregar paquete

1. En la terminal ejecutar

```bash
go mod init holamundo
```

2. Descargar el paquete:

```bash
go get rsc.io/quote
```

3. Modificar el código de Hola Mundo

```go []
package main

import (
    "fmt"
    "rsc.io/quote"
)

func main() {
	fmt.Println("Hola Mundo!")
    fmt.Println(quote.Hello())
}
```

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

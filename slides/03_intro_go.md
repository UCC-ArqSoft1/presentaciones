---
title: Introducción a GO
theme: solarized
slideNumber: true
---

# Introducción a GO

---

<style> 
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

## Temario

<div class="grid-container2">
<div class="grid-item">

- Instalar Go
- Instalar VSC
- Configuración de VSC
- Playground
- Links para comenzar en Go
- ¿Qué es Go?
- ¿Cuáles son sus características?
- Lenguaje Go
- ¿Por qué usar Go?
- ¿Cuáles son sus ventajas y desventajas?

</div>
<div class="grid-item">

- Empresas que usan Go
- Hola mundo!
- Declaración de Paquetes
- Importanción de Paquetes
- Paquetes Estándar
- Organización de Paquetes
- Paquetes Personalizados
- Espacio de trabajo
- Ejercicio Hola Mundo!
- Visibilidad de Símbolos

</div></div>

---

### Instalar go

1. Ir a https://go.dev
2. Click en **Download**
3. En la sección **Featured downloads** seleccionar uno acorde al SO. (pasos detallados de instalación en [https://go.dev/doc/install](https://go.dev/doc/install))
4. Una vez completado el proceso de intalación, para verificar que se realizó correctamente, abrir la terminal y ejecutar

```bash
go version
```

---

### Instalar go

![Instalar go](images/go/install_go.png)

---

### Instalar VSC

1. Ingresar a [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click "Download".
3. Seguir los pasos de instalaicón.

![Instalación VSC](images/go/VSC_install.png)

---

### Configuración de VSC

1. Presionar en el menú izquierdo "Extensiones"
2. Buscar **Go** e instalarla
3. Hacer click en Manage (engranaje abajo a la izquierda)
4. Click en "Settings"
5. Buscar "Save" y clickear el checkbox **Format on Save**

---

### Playground de Go

Esta herramienta permite probar código sencillo sin tener instalado un IDE de desarrollo. El [playground de Go](https://go.dev/play/) está disponible en su página.

![Playground](images/go/playground.png)

---

## Links para comenzar en Go

- [Go](https://go.dev/)
- [Go Tour](https://goo.gl/rGzKJj)
- [Gopher's Reading List](https://goo.gl/PG5KU8)

---

## ¿Qué es Go?

Go se originó (2007/09) como un experimento para diseñar un nuevo lenguaje de programación que resolvería las críticas comunes a otros lenguajes manteniendo sus características.

![Devs](images/go/devs.png)

---

## ¿Cuáles son sus características?

<!-- ![Go Pet](images/go/go-hat.png) -->

- De código abierto
- Compilado
- Tipado estático
- Multiplataforma y multiparadigma (orientado a objetos, funcional y estructurada)
- Garbage collection
- Administración segura de la memoria
- Manejo de Concurrencia
- Paralelismo
- Velocidad
- Gran biblioteca estándar

---

## Lenguaje de Go

- Hereda aspectos de C (punteros)
- Comparte similitudes con Java, Python y otros
- Características de otros lenguajes de programación
- Algunas características de POO

---

## ¿Por qué usar Go?

![Tendencias](images/go/tendencias.png)

---

## Principales ventajas

- Sintaxis parecida a lenguajes dinámicos
- Inferencia de tipos (aún con tipado estático)
- Rápida compilación y ejecución de test
- Manejo de paquetes remotos
- Go routines, canales y select
- Implementación de interfaces
- Compilación a binarios nativos

![Go OK](images/go/ok.png)

---

## Principales desventajas

- Requiere manejo correcto de punteros
- Expresiones no compactas
- Inflexible
- No para cualquier tipo de aplicación
- Poca comunidad (cada vez más)
- Peligro de mala implementación

![Go NO](images/go/no.png)

---

## Empresas que usan Go

![Empresas que usan Go](images/go/companies.png)

---

## Hola Mundo

```go []
package main
import "fmt"
func main() {
	fmt.Println("Hola mundo")
}
```

![Go Bootom](images/go/go_bottom.png)

---

## Declaración de paquetes

- Cada archivo fuente Go comienza con una declaración de paquete en la parte superior del archivo.
- La declaración de paquete especifica a qué paquete pertenece el archivo.
- La declaración de paquete se realiza mediante la palabra clave package, seguida del nombre del paquete.

```go
package main //Ejemplo de declaración de paquete
```

---

## Importación de paquetes:

- Los paquetes se importan para que sus funcionalidades estén disponibles en el archivo de código actual.
- La importación de paquetes se realiza mediante la palabra clave import, seguida del nombre del paquete.

```go
import (
	"fmt"
	"math"
) //Ejemplo de importación de paquetes
```

---

## Paquetes estándar:

- Go proporciona una amplia biblioteca estándar que incluye muchos paquetes predefinidos para realizar tareas comunes.
- Estos paquetes se pueden importar y utilizar en cualquier programa Go sin necesidad de instalarlos por separado.

[Go Package](https://pkg.go.dev/)

---

## Paquetes personalizados:

- Además de los paquetes estándar, puedes crear tus propios paquetes personalizados.
- Agrupa la funcionalidad relacionada en un paquete y reutiliza este paquete en diferentes partes de tu aplicación o en diferentes proyectos.

---

## Organización de paquetes:

- Los paquetes en Go están organizados en una estructura de directorios.
- La convención común es que el nombre del paquete sea el último segmento del nombre del directorio que contiene el archivo fuente.

```bash
/src
  /myproject
    main.go
    /util
      helper.go
```

---

## Espacio de trabajo

Para saber donde es el espacio de trabajo de go, ejecutar:

```bash
go env
```

Allí figura el **GOPATH**. Si bien se pueden crear proyectos en otras carpetas, se recomienda que sean creados dentro de **go/src/nombre-proyecto**. Aquí se descargaran los paquetes, los binarios y las herramientas.

---

### Ejercicio 1: Hola Mundo!

<!-- .slide: style="font-size: 0.80em" -->

1. Escribir en la terminal `go env`.
2. Dentro de esa dirección crear una carpeta **src** y dentro de ella una carpeta **hola-mundo**
3. Abrir en el VSC la carpeta de **hola-mundo**
4. Crear un archivo **hola.go**
5. Agregar el código:

```go []
package main

import "fmt" //Se importa automáticamente

func main() {
	fmt.Println("Hola Mundo!")
}
```

6. En la terminal escribir `go run hola.go`
7. Si queremos compilar `go build hola.go`

Nota: Si VSC sugiere agregar herramientas, presionar SI

---

## Visibilidad de símbolos:

- En Go, la visibilidad de un símbolo (función, tipo, variable) fuera de un paquete está determinada por si su nombre comienza con una letra **mayúscula** o **minúscula**.
- Los símbolos que comienzan con una letra **mayúscula** son visibles fuera del paquete (exportados), mientras que los símbolos que comienzan con una letra **minúscula** son visibles sólo dentro del paquete (no exportados).

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

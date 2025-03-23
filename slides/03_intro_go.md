---
title: Introducción a GO
theme: solarized
slideNumber: true
---

# Introducción a GO

---

## Temario

1. Links para comenzar en Go
2. Configurando nuestro entorno de desarrollo

- Instalación
- IDE

3. ¿Qué es Go?
4. ¿Cuáles son sus características principales?
5. ¿Por qué usar Go?
6. ¿Cuáles son sus ventajas y desventajas?
7. ¡Hola mundo!
8. Ejercicios

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

## Links para comenzar en Go

- [Go](https://go.dev/)
- [Go Tour](https://goo.gl/rGzKJj)
- [Gopher's Reading List](https://goo.gl/PG5KU8)
- [Docker](https://www.docker.com/products/docker-desktop/)

---

## ¿Qué es Go?

Go se originó (2007/09) como un experimento para diseñar un nuevo lenguaje de programación que resolvería las críticas comunes a otros lenguajes manteniendo sus características.

![Devs](images/go/devs.png)

---

## ¿Cuáles son sus características?

<!-- ![Go Pet](images/go/go-hat.png) -->

- Compilado
- Tipado estático
- Garbage collection
- Administración segura de la memoria
- Concurrencia
- Paralelismo
- Velocidad

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

## Tipos de datos

<!-- .slide: style="font-size: 0.65em" -->

- **Tipos Numéricos:**
  - **int**: Enteros con signo. Su tamaño depende de la plataforma.
  - **uint**: Enteros sin signo. Su tamaño depende de la plataforma.
  - **float32, float64**: Números de punto flotante de 32 y 64 bits respectivamente.
- **Tipo String:**
  - **string**: Una secuencia inmutable de bytes.
- **Tipo Booleano:**
  - **bool**: Representa un valor booleano, que puede ser true o false.
- **Tipo de Datos Compuestos:**
  - **Array**: Una secuencia fija de elementos del mismo tipo.
  - **Slice**: Una secuencia dinámica de elementos de cualquier tipo.
  - **Map**: Una colección no ordenada de pares clave-valor.
  - **Struct**: Un tipo de datos compuesto que agrupa campos con nombres.
- **Tipo de Puntero:**
  - **Pointer**: Almacena la dirección de memoria de una variable.
- **Tipo de Datos Interfaz:**
  - **Interface**: Define un conjunto de métodos que una estructura debe implementar para satisfacer la interfaz.

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
import "fmt" //Ejemplo de importación de paquete
```

---

## Paquetes estándar:

- Go proporciona una amplia biblioteca estándar que incluye muchos paquetes predefinidos para realizar tareas comunes.
- Estos paquetes se pueden importar y utilizar en cualquier programa Go sin necesidad de instalarlos por separado.

[Go Package](https://pkg.go.dev/)

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

## Paquetes personalizados:

- Además de los paquetes estándar, puedes crear tus propios paquetes personalizados.
- Agrupa la funcionalidad relacionada en un paquete y reutiliza este paquete en diferentes partes de tu aplicación o en diferentes proyectos.

---

## Visibilidad de símbolos:

- En Go, la visibilidad de un símbolo (función, tipo, variable) fuera de un paquete está determinada por si su nombre comienza con una letra mayúscula o minúscula.
- Los símbolos que comienzan con una letra mayúscula son visibles fuera del paquete (exportados), mientras que los símbolos que comienzan con una letra minúscula son visibles sólo dentro del paquete (no exportados).

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

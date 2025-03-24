---
title: Funciones, variables y estructuras en GO
theme: solarized
slideNumber: true
---

# Funciones, variables y estructuras en GO

---

## Temario

- Constantes
- Variables
- Tipos de Datos
- Funciones
- Estructuras
- Receivers

---

## Constantes

<!-- .slide: style="font-size: 0.75em" -->

Las **constantes** en Go nos permiten definir valores cuyo contenido no se modificará y que será reutilizado varias veces en un paquete o fuera del mismo. Las constantes siempre se definen a nivel paquete (no existen constantes locales o globales) y se declaran dentro del módulo const.

```go
	package ejemplo
	const (
		mensajePrivado = "Éste es un mensaje privado a mi paquete"
		MensajePublico = "Éste es un mensaje público de mi paquete"
  )
```

- Las **constantes** que comienzan con minúscula sólo serán visibles dentro de mi paquete.
- Las **constantes** que comienzan con mayúscula serán visibles desde cualquier paquete.

---

## Variables

<!-- .slide: style="font-size: 0.80em" -->

Las **variables** en Go nos permiten definir valores cuyo contenido puede ser modificado y no necesariamente será reutilizado. Aquellas variables que deban ser utilizadas muchas veces en un paquete se declararán a nivel paquete en el módulo var.

```go
	package ejemplo
	var (
		variablePrivada = “Ésta es una variable privada”
		VariablePublica = “Ésta es una variable pública”
  )
```

- Las **variables** que comienzan con minúscula sólo serán visibles dentro de mi paquete.
- Las **variables** que comienzan con mayúscula serán visibles desde cualquier paquete.

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

## Tipos de datos en Go

<!-- .slide: style="font-size: 0.80em" -->

- Existen muchos tipos de datos en Go, de hecho, yo puedo crear mis propios tipos de datos en Go.
- Los que más utilizaremos son los siguientes:
  - bool
  - string
  - int, int8, int16, int32, int64, uint, uint8, uint16, uint32, uint64
  - float32, float64
  - error (soporta nil)
  - struct (soporta nil)
- **NIL** es el equivalente a null en otros lenguajes de programación, pero de una naturaleza distinta.
- **NIL** nos va a permitir representar la nulidad de la estructura o el error que estemos manejando.

---

## Declaración de una función que recibe parámetros y retorna valores

<!-- .slide: style="font-size: 0.70em" -->

```go
func Nombre (par1 tipo1, par2 tipo2) (tipo3, tipo4) {
	return valor1, valor2
}
```

- Los parámetros de entrada de la función tienen que recibirse mediante un nombre e indicando su tipo
- Siempre una función tiene que retornar todos los valores que especifica en su declaración
- Para los valores de retorno se debe especificar el tipo
- Para los valores de retorno es opcional especificar un nombre y trabajarlo dentro de la función

Ejemplo:

```go
	func Suma(a int, b int) int {
		return a + b
}
```

---

## Declaración de una función con parámetros variádicos

<!-- .slide: style="font-size: 0.70em" -->

```go
func Nombre (pars ...tipo) {
	return
}
```

- Los parámetros de entrada de la función tienen que recibirse en un sólo valor mediante un nombre e indicando su tipo
- Externamente los valores se envían como parámetros independientes
- Internamente los valores se tratan como un array

Ejemplo:

```go
	func Suma(values ...int) int {
		suma := 0
		for _, v := range values {
			suma += v
}
		return suma
}
```

---

## ¿Cómo se crean estructuras en Go?

<!-- .slide: style="font-size: 0.70em" -->

Puedo crear mis propias estructuras en Go de la siguiente manera:

```go
type Persona struct {
  Nombre 		string
  Edad			int
  Trabajo  	Empleo
}

type Empleo struct {
  Nombre 		      string
  Sueldo		      float32
  Independiente 	bool
}
```

- Se coloca en cada estructura el nombre del campo acompañado del tipo de dato que representa.
- Al igual que en variables y constantes, la primer letra tanto de la estructura como de cada uno de sus campos indicará si el elemento es privado al paquete o es público y visible para los demás paquetes.

---

## Declaración de una función que recibe y retorna estructuras

<!-- .slide: style="font-size: 0.75em" -->

- Esta función de ejemplo recibe una persona y retorna otra estructura que es de tipo Empleado, que tiene campos distintos.
- Es importante notar que si bien en este caso se envía y recibe una sola estructura, es válido parametrizar con múltiples estructuras una función así como retornar un conjunto de estructuras.

```go []
func Emplear(persona Persona) Empleado {
	return Empleado{
		Nombre: persona.Nombre,
		Empleo: “Nombre del empleo”,
		Antiguedad: 0,
		Edad: persona.Edad,
  }
}
```

- Las funciones que devuelven errores son el ejemplo típico de una función que retorna estructuras.

---

## Receivers

<!-- .slide: style="font-size: 0.75em" -->

Los receivers permiten implementar métodos que formen parte de una estructura. De esta manera, yo puedo crear una estructura y luego definir para esa estructura una función mediante un receiver para luego invocarla.
Por ejemplo:

```go []
type Persona struct {
	Nombre 	string
	Edad		int
}

func (p Persona) Mostrar() {
	fmt.Println(p)
}
```

Luego puedo utilizar este método sobre una persona:

```go
var p Persona
p.Mostrar()
```

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

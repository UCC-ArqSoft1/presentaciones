---
title: Funciones, variables y estructuras en GO
theme: solarized
slideNumber: true
---

<section data-background-image="images/go/background.jpeg">

<br><br><br><br><br><br>

<h1> Funciones, variables y estructuras en GO </h1>

</section>

---

<style>
h1 {
  background-color: rgba(255,255,255,.7);
}

.small{
	font-size: 0.5em
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

## Temario

<div class="grid-container2">
<div class="grid-item">

- Constantes
- Variables
- Tipos de Datos en Go
- Ejercicio: Valores Predeterminados
- Conversión de Datos (Casteo)
- Paquete FMT
- Paquete Math
- Ejercicio: Triángulo
- Operadores booleanos
- Control de flujo: if- else

</div>
<div class="grid-item">

- Control de flujo: Switch
- Control de flujo: for
- Funciones
- Ejercicio: Adivinar número
- Estructura de Datos
- Matrices
- Slice
- Mapas
- Estructuras
- Punteros

</div></div>

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

- Las **constantes** que comienzan con **minúscula** sólo serán visibles dentro de mi paquete.
- Las **constantes** que comienzan con **mayúscula** serán visibles desde cualquier paquete.

---

## Constantes

```go
const Pi float32 = 3.14 //Deben declararse e inicializarse
const Euler = 2.71828 //No es necesario declarar el tipo de datos
//Se recomienda crearlos con mayúscula para para que puedan ser leídos por cualquier paquete

const (
	x = 100
	y = 0b1010 //binarios
	z = 0o12 //octal
	w = 0xFF //Hexadecimal
)

fmt.Println(x, y, z, w)

//iota permite empezar en 0 e ir incrementalmente
const (
	Lunes = iota + 1
	Martes
	Miercoles
	Jueves
	Viernes
	Sabado
	Domingo
)
fmt.Println(Viernes) //Imprime 5
```

---

## Variables

<!-- .slide: style="font-size: 0.80em" -->

Las **variables** en Go nos permiten definir valores cuyo contenido puede ser modificado y no necesariamente será reutilizado. Aquellas variables que deban ser utilizadas muchas veces en un paquete se declararán a nivel paquete en el módulo var.

```go
package ejemplo
var (
	variablePrivada = "Ésta es una variable privada" //Empieza en minúscula
	VariablePublica = "Ésta es una variable pública" //Empieza en mayúscula
)
```

- Las **variables** que comienzan con **minúscula** sólo serán visibles dentro de mi paquete.
- Las **variables** que comienzan con **mayúscula** serán visibles desde cualquier paquete.

---

## Variables

```go
var firstName1 string //Declarar una sola variable
var middleName1, lastName1 string //Declarar varias variables del mismo tipo
var age1 int

firstName1 = "Agus"
age1 = 89

fmt.Println(firstName1, age1)

var ( //Declarar todas las variables juntas
	firstName2, lastName2 string
	age2 = 89 //Cuando una variable se crea e inicializa no es necesario colocar el tipo de dato
	dni2 string = "34004888"
)

fmt.Println(age2, dni2)

//Se pueden crear todas las variables en la misma línea
var firstName3, lastName3, age3 = "Agus", "Alici", 89

fmt.Println(firstName3, lastName3, age3)

dni1 string := "34004888" //Declarar una variable e inicializarla
firstName4, lastName4, age4 := "Agus", "Alici", 89 //Declarar e inicializar (forma más usada DENTRO de las funciones)
firstName4 = "Agustina" //Modificar una variable
fmt.Println(dni1, firstName4, lastName4, age4)

```

---

## No se pueden compilar archivos que posean variables o constantes que NO estén siendo usadas

---

## Variables

```go
var a byte = 'a'
fmt.Println(a) //Imprime 97 en ascii
s := "hola"
fmt.Println(s[0]) //Imprime 104

var r rune = '❤' //Unicode
fmt.Println(r) //Imprime 10084
```

---

## Tipos de datos en Go

<!-- .slide: style="font-size: 0.80em" -->

- Existen muchos tipos de datos en Go, de hecho, yo puedo crear mis propios tipos de datos en Go (**struct**).
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

<!--https://go.dev/ref/spec-->

### Tipo de datos: uint

| Number | Min. value |      Max. value      |
| :----: | :--------: | :------------------: |
| uint8  |     0      |         255          |
| uint16 |     0      |        65535         |
| uint32 |     0      |      4294967295      |
| uint64 |     0      | 18446744073709551615 |

---

### Tipo de datos: int

| Number |      Min. value      |     Max. value      |
| :----: | :------------------: | :-----------------: |
|  int8  |         -128         |         127         |
| int16  |        -32768        |        32767        |
| int32  |     -2147483648      |     2147483647      |
| int64  | -9223372036854775808 | 9223372036854775807 |

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

## Ejercicio 2: Valores predeterminados

1. Crear una carpeta **variables-predeterminados**
2. Crear un archivo **main.go**
3. Crear variables de diferente tipo: int, uint, float32, bool, string
4. Imprimirlas en la terminal
5. Ejecutar **main.go**
6. ¿Que valores poseen estas variables por defecto?

```go
var (
	defaultInt int
	defaultUint uint //...etc
)
```

---

## Ejercicio 2: Valores predeterminados

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/dDDGRu_kzUA?si=tJ2IztG1UsaABa0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Conversión de Datos (casteo)

Para sumar variables deben ser del mismo tipo. Sino, es necesario convertir:

```go
var integer16 int16 = 50
var integer32 int32 = 100
fmt.Println(integer16 + int16(integer32))
```

Para convertir string a número se require un paquete ([strconv](https://pkg-go-dev.translate.goog/strconv?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc)):

```go
s := "100"
i, _ := strconv.Atoi(s) //Devuelve 2 valores
fmt.Println(i)
var n:= 42
c
```

---

### Paquete [fmt](https://pkg.go.dev/fmt)

Es un conjunto de funciones que se utiliza para formatear entradas y salidas de datos, y para imprimir en pantalla.

Funciones más usadas:

- Println
- Printf (con %d, %s, %t, %g)
- Scanln

```go
var name string
altura := 1.5400002
fmt.Print("Ingrese su nombre: ") //no contiene salto de línea
fmt.Scanln(&name)
fmt.Printf("Hola %s.\n", name)
fmt.Printf("Altura: %.2f \n", altura) //Muestra solo 2 decimales
```

---

### Paquete [math](https://pkg.go.dev/math)

Posee contantes matemáticas y funciones como seno, coseno, tangente, potencia, entre otros.

<p class="small">(Es importante acostumbrarse a leer la documentación para entender como funciona cada paquete y que funciones ofrece)</p>

---

### Ejercicio 3: Triángulo

<!-- .slide: style="font-size: 0.80em" -->

El programa debe:

1. Solicitar al usuario que ingrese la longitud de los 2 lados del triángulo rectángulo.
2. Calcular la **hipotenusa** del triángulo
3. Calcular el **área** del triángulo.
4. Calcular el **perímetro**.
5. Imprimir el **área** y el **perímetro** del triángulo con dos decimales de precisión.

Ejemplo de salida de pantalla:

```bash
Ingrese lado 1: 12.4
Ingrese lado 2: 10.75
Área: 66.65
Perímetro: 39.56
```

---

### Ejercicio 3: Triángulo

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/vsjqy9U-TSo?si=mZoZoAuwFSchhuLC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Operadores Booleanos

- **Operadores de Comparación**
  - Igualdad (==)
  - Desigualdad (!=)
  - Mayor que (>)
  - Menor que (<)
  - Mayor o igual que (>=)
  - Menor o igual que (<=)
- **Operadores lógicos**
  - AND (&&)
  - OR (||)
  - NOT (!)

---

## Control de Flujo: If - Else

```go
if condicion {//no usa paréntesis
	//Código
} else if condicion2 {
	//Código
} else {
	//Código
}
```

---

## Control de Flujo: If - Else

```go
if t := time.Now(); t.Hour() < 12 { //se puede declarar dentro del if, pero solo usar dentro del if
	fmt.Println("Mañana")
} else if t.Hour() < 17 {
	fmt.Println("Tarde")
} else {
	fmt.Println("Noche")
}
```

---

## Control de Flujo: Switch

```go
switch valor {
	case caso1:
		//Código
	case caso2:
		//Código
	default:
		//Código
}
```

No hace falta el break!

---

## Control de Flujo: Switch

```go
switch os := runtime.GOOS; os {
	//Se puede declarar una variable dentro del switch
	case "windows":
		fmt.Println("Go run -> Windows")
	case "linux":
		fmt.Println("Go run -> Linux")
	case "darwin":
		fmt.Println("Go run -> macOs")
	default:
		fmt.Println("Go run -> en otro OS")
}
```

---

## Control de Flujo: For

<!-- .slide: style="font-size: 0.70em" -->

Es la única estructura repetitiva (no hay while o do/while)

```go
for {
	//Ejemplo de bucle infinito
}
```

Bucle con 1 condición:

```go
var i int
for i <= 10{
	fmt.Println(i)
	i++
}
```

Bucle con inicio ; condición ; actualización :

```go
for i := 1 ; i <= 10; i++{
	fmt.Println(i)
}
```

Con un **break** se puede salir de un bucle antes de que una condición sea alcanzada. Con **continue** se puede saltar a la siguiente iteración.

---

## Función: recibe parámetros y retorna valores

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

### Ejercicio 4: Juego de Adivinar Número

<!-- .slide: style="font-size: 0.80em" -->

Crear un programa que permita a un usuario adivinar un número.

1. Generar un número aleatorio entre 0 y 100.
2. El usuario tiene hasta 10 intentos para acertar el número.
3. Tras cada intento el programa debe imprimir si el número aleatorio es menor o mayor al número ingresado por el usuario.
4. Se debe mostrar un menú para permitir jugar nuevamente o salir del programa
5. Deben existir 2 funciones: play(), displayMenu()

Ejemplo de salida de pantalla:

```bash
Ingrese un número (intentos restantes 10): 50
No acertaste. El número es mayor.
Ingrese un número (intentos restantes 9): 75
No acertaste. El número es menor.
Ingrese un número (intentos restantes 8): 56
Felicitaciones! Adivinaste el número!
Desea jugar nuevamente (s/n):
```

---

### Ejercicio 4: Juego de Adivinar Número

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/U1BXtyUO_Xc?si=SGUt6_PTOvZ23NTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Estructuras de Datos

- **Matrices:** Almacena un conjunto de elementos (fijos) del mismo tipo.
- **Slices o Rebanadas:** Es como una matriz pero dinámica.
- **Mapas:** Almacenan clave-valor.
- **Estructuras:** Se pueden crear tipos de datos personalizados.

---

### Matrices Unidimensionales

Es una colección de valores de un mismo tipo, requiere que se defina una capacidad inicial y se vayan asignando valores a través de su índice.

```go
var miMatriz [5]int //Se puede crear una matriz vacía, se ve como [0 0 0 0 0]
miMatriz[0] = 10 //Se puede ir completando elemento por elemento

var miMatrizNew = [5]int{10, 20, 30, 40, 50} //Se puede crear una matriz y asignar valores
var newMatrix = [...]int{10, 30, 60} //Si no sabemos con cuantos datos va a inicializar

//Recorrer una matriz: Ejemplo 1
for i:=0; i < len(newMatrix); i++ {
	fmt.Println(newMatrix[i])
}

//Recorrer una matriz: Ejemplo 2
for index, value := range newMatrix {
	fmt.Printf("Índice: %d, Valor: %d\n", index, value)
}
```

---

### Matrices Multidimensionales

```go
var matriz = [3][5]int{
	{1,2,3,4,5},
	{1,2,3,4,5},
	{1,2,3,4,5}
} //3 filas y 5 columnas
```

---

### Slice

Forma sencilla de trabajar con partes de una matriz, que provee ciertas funciones adicionales.

- **append**: Agrega un nuevo elemento al slice.
- **len**: Obtiene la longitud de un slice.
- **cap**: Retorna la capacidad del arreglo subyacente del slice.
- **copy**: Copia el contenido de un slice en otro.

---

### Slice

```go
var slice1 []int //Declarar Slice o Rebanada

diasSemana := []string{"Lunes", "Martes", "Miércoles", "Jueves", "Viernes","Sábado", "Domingo"}

//A partir de un slice se puede crear otro slice
finSemana := diasSemana[5:7]

fmt.Println(len(finSemana))//Para conocer la longitud. =2
fmt.Println(cap(finSemana))//Para conocer la capacidad. =7

finSemana = append(finSemana, "Osvaldo", "NuevoDiaDeFinde") //Si se agregan más de 7 elementos, su capacidad aumentará

semanaSinMartes := append(diasSemana[:1], diasSemana[2:]...)

nombres := make([]string, 5, 10) //Crea un slice con tipo de datos, longitud y capacidad
nombres[0] = "Agus" //Se pueden crear 5 elementos de esta forma y el resto agregarlos por append

slice2 := []int{1,2,3,4,5}
slice3 := make([]int, 5)

copy(slice3, slice2) //Se copian los valores de slice2 a -> slice3
```

---

### Mapas

Estructuras de datos que permiten almacenar clave-valor. Un Hash-Table es utilizado para almacenar elementos en un mapa de tal forma que los valores se almacenan sin un orden.

---

### Mapas

```go
colores := map[string]string{
	"rojo":"#FF0000",
	"verde": "#00FF00",
	"azul": "#0000FF",
}

fmt.Println(colores) //Se puden imprimir todos los elementos
fmt.Println(colores["azul"]) //O solo un elemento puntual
colores["negro"] = "#000000" //Se pueden agregar más elementos

//No respeta el orden - Pone los elementos en orden alfabético

valorNew, ok := colores["rojo"] //Devuelve 2 valores, el valor y verificación true/false si ese elemento existe

if ok{
	fmt.Println("Si existe la clave")
}else{
	fmt.Println("No existe esta clave")
}

//Se pueden eliminar elementos
delete(colores, "rojo")

//Se puede iterar sobre todos los elementos
for clave, valor := range colores{
	fmt.Printf("Clave: %s, Valor: %s\n", clave, valor)
}
```

---

## Estructuras

<!-- .slide: style="font-size: 0.70em" -->

Puedo crear mis propias estructuras en Go de la siguiente manera:

```go
type Persona struct {
  Nombre 		string
  Edad			int
  Trabajo  		Empleo
}

type Empleo struct {
  Nombre 		    string
  Sueldo		    float32
  Independiente 	bool
}
```

- Se coloca en cada estructura el nombre del campo acompañado del tipo de dato que representa.
- Al igual que en variables y constantes, la primer letra tanto de la estructura como de cada uno de sus campos indicará si el elemento es privado al paquete o es público y visible para los demás paquetes.

---

## Estructuras

```go
package main

import "fmt"
type Persona struct  {
	nombre string
	edad int
	correo string
}

func main(){
	//Creamos instancia de tipo persona
	var p Persona
	p.nombre = "Agus"
	p.edad = 99
	p.correo = "agus@email.com"

	fmt.Println(p)

	//Creamos instancia de tipo persona en 1 línea
	per := Persona{"Emi", 89, "emi@email.com"}
	fmt.Println(per.nombre)
}
```

---

## Punteros

Un **puntero** almacena la dirección de memoria de otra variable. Se utilizan para referenciar y acceder a la variable original en la dirección de memoria.

```go
package main

func main() {
	var x int = 10
	fmt.Println(x) //10
	editar(&x)
	fmt.Println(x) //20
}

func editar(x *int) {
	*x = 20
}
```

---

## Punteros y Métodos (receivers)

<!-- .slide: style="font-size: 0.80em" -->

Se pueden definir **métodos** para realizar operaciones con las variables de las estructuras.

Ejemplo:

```go
package main

import "fmt"
type Persona struct  {
	nombre string
	edad int
	email string
}

//(p *Persona) define un receptor (receiver) con puntero para el método diHola.
//Esto significa que diHola es un método que pertenece al tipo Persona
// Al ser llamado, diHola recibe una referencia (*Persona) a la instancia sobre la que se invoca.
//diHola puede acceder y de ser necesario modificar Persona
// El puntero *Persona permite evitar copias innecesarias
func (p *Persona) diHola(){
	fmt.Println("Hola, mi nombres es", p.nombre)
}

func main() {
	p := {"Agus", 99, "agus@email.com"}
	p.diHola()

	j := {"Juan", 25, "juan@emal.com"}
	j.diHola()
}

```

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

### Ejercicio 5: Lista de Tareas

<!-- .slide: style="font-size: 0.70em" -->

Crea un programa que permita gestionar (agregar, editar, eliminar) una lista de tareas. El programa debe tener en cuenta:

1. Cada tarea debe tener un título, descripción y si está completada o no (**struc**).
2. El programa debe permitir agregar, eliminar y actualizar tareas (**slice**)

Ejemplo de Salida de Pantalla:

```bash
Seleccione una opción:
1. Agregar tarea
2. Marcar tarea como completada
3. Editar Tarea
4. Eliminar Tarea
5. Salir
Ingrese la opción:
1
Ingrese nombre de la tarea:
Preparar Guia de Trabajos Prácticos
Ingrese descripción de la tarea:
Editar el template y agregar los ejercicio para arqui de soft
Tarea agregada correctamente
Lista de tareas:
===================================
0. Preparar Guia de Trabajos Prácticos
 - Editar el template y agregar los ejercicio para arqui de soft
 - Completado: false
===================================
```

---

### Ejercicio 5: Lista de Tareas (parte 1)

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/T9H5GIMx1BM?si=TmY2hqpEke1ymzwW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Ejercicio 5: Lista de Tareas (parte 2)

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/1hHIK90PD8Q?si=zCjQ1t1zxfpg-t1O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Ejercicio 5: Lista de Tareas (parte 3)

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/HMEr1tE05b0?si=fysPXoHYnc2y1BTb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Declaración de una función que recibe y retorna estructuras

<!-- .slide: style="font-size: 0.75em" -->

- Esta función de ejemplo recibe una persona y retorna otra estructura que es de tipo Empleado, que tiene campos distintos.
- Es importante notar que si bien en este caso se envía y recibe una sola estructura, es válido parametrizar con múltiples estructuras una función así como retornar un conjunto de estructuras.

```go []
func Emplear(persona Persona) Empleado {
	return Empleado{
		Nombre: persona.Nombre,
		Empleo: "Nombre del empleo",
		Antiguedad: 0,
		Edad: persona.Edad,
  }
}
```

- Las funciones que devuelven errores son el ejemplo típico de una función que retorna estructuras.

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

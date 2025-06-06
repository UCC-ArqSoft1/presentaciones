---
title: Manejo de Errores en GO
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

<h1> Manejo de Errores GO </h1>

</section>

---

## Temario

1. ¿Qué son los errores en Go?
2. Panic
3. ¿Cómo crear un error?
4. ¿Cómo capturar un error?
5. Early return

---

## ¿Qué son los errores en Go?

<!-- .slide: style="font-size: 0.80em" -->

Los **errores en Go** nos permiten manejar situaciones no deseadas. En otros lenguajes de programación se utiliza el esquema **try catch** para capturar excepciones. Pero en Go no existen las excepciones. Para evitar que un programa rompa en tiempo de ejecución se pueden crear errores que ayuden a validar estas situaciones.

- Existe un tipo de dato estándar de Go que se llama **error**.
- Si bien este tipo de dato ya nos permite manejar un error, con sus atributos y métodos, existe un paquete de Go que nos permite crear y manejar errores de manera más fácil, el package **errors**.
- Los errores en Go admiten **nil** como valor, que es el valor más usado cuando el error no existe.
- Para obtener el mensaje de un tipo error, se utiliza el método **Error()** del tipo **error**, que devuelve un **string**.

---

### Panic

Es una función integrada que detiene la ejecución normal de un programa. Se produce cuando el programa encuentra un error que no puede gestionar.

Se produce un **pánico**:

- Al acceder a un puntero nulo
- Al realizar una operación ilegal
- Al dividir por cero
- Al intentar acceder a un índice de matriz fuera de límites

---

### ¿Qué hace un pánico?

- Detiene la ejecución normal del programa
- Desempaqueta la pila de llamadas
- Ejecuta las funciones diferidas (defer) en el proceso
- Imprime un mensaje de error en el flujo de error estándar

---

### ¿Por qué se usa un pánico?

- Para señalar errores irrecuperables o condiciones excepcionales
- Para reaccionar rápidamente ante errores que no deberían ocurrir durante el funcionamiento normal
- Para abortar si una función devuelve un valor de error que no sabemos (o no queremos) gestionar

---

## ¿Cómo crear un error en Go?

Para crear un error en Go hay que utilizar la librería errors. Un error se crea de esta forma:

```go
err := errors.New("Mensaje del error")
```

También podemos crear errores con directivas de formato:

```go
err := fmt.Errorf("Mensaje %d con directiva de %s", 1, "formato")
```

---

## ¿Cómo crear un error en Go?

Luego a esta variable puede retornarla en una función para informar que ocurrió un error:

```go []
func division(a int, b int) (int, error) {
  if b == 0 {
    return -1, errors.New("b no puede ser cero")
  }
  return a / b, nil
}
```

En este punto, si no ocurre ningún error, en el lugar del error para retornar, colocamos un **nil**.

---

## ¿Cómo capturar un error?

<!-- .slide: style="font-size: 0.80em" -->

- Para capturar un error lo único que debemos hacer es asignarlo en una variable.
- De esta manera, lo primero que debemos hacer es preguntar si el valor del error es distinto de **nil**.
- Continuando con el ejemplo anterior:

```go []
_, err := division(7, 0)
if err != nil {
  fmt.Println("Error:", err.Error())
  return
}
```

- Siempre es importante que cuando utilicemos una función que puede devolver un error, lo primero que hagamos sea validar que el mismo no existe.
  Si obviamos esta validación o colocamos un guión bajo para evitarlo, podríamos usar resultados erróneos.

---

## Ejercicio: Refactor todo-list

Modifique el código desarrollado en **todo-list** para realizar manejo de errores.

- En caso de que el usuario ingrese un índice mayor al existente o menor a cero, muestre el mensaje "Índice fuera de rango".

---

## Ejercicio: Refactor todo-list

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/iTBZD-sQvf4?si=V-srwZxnhDflM3QG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Early Return

<!-- .slide: style="font-size: 0.70em" -->

**Early Return** es un concepto que nos servirá como una convención al momento de trabajar sobre todo con errores, pero con cualquier tipo de lógica en un programa en general.

- El concepto indica que siempre debemos validar la situación que no queremos que ocurra para que, en caso contrario, sigamos nuestra ejecución del programa sin incrementar el nivel de complejidad ciclomática de nuestro código.
- En otras palabras, debemos retornar lo antes posible nuestra función si entra por alguno de los casos de error.
- Ventajas:
  - Simplicidad
  - Complejidad ciclomática baja
  - Menor cantidad de casos de prueba
- Esto no afecta al funcionamiento normal de nuestra función

---

## Early Return

Ejemplo **INCORRECTO**:

```go []
div, err := division(5, 0)
if err != nil {
  fmt.Println("Error:", err.Error())
} else {
  fmt.Println("Division:", div)
}
```

Ejemplo **CORRECTO**:

```go []
div, err := division(5, 0)
if err != nil {
  fmt.Println("Error:", err.Error())
  return
}
fmt.Println("Division:", div)
```

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

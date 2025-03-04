---
title: Introducción a GO Extendida
theme: solarized
slideNumber: true
---

# Introducción a GO Extendida

---

## Temario

1. Ciclos

---

## Ciclo For

```go []
sum := 0
for i := 0; i < 10; i++ {
	sum += i
}
```

Ejemplo:

```go []
For
sum := 0
for \_, value := range array {
	sum += value
}
```

```go []
for pos, char := range myList {
	fmt.Printf("character %U starts at byte position %d\n", char, pos)
}
```

---

## Go - Defer

```go []
for i := 0; i < 5; i++ {
	defer fmt.Printf("%d ", i)
}
```

---

## Go - Byref

Punteros

```go []
func swap(x *int, y *int) {
	var temp int
	temp = *x //save the value at address x
	*x = *y //put y into x
	*y = temp //put temp into y
}
var a int = 100
var b int = 200
&a //puntero de a
&b //puntero de b
swap(&a, &b);
```

---

### Ejercicio:

Escriba dos funciones, una que realice una asignación por valor de un string y otra que lo realice por referencia.

- func byval(algo string)
- func byref(algo \* string)

---

## Go - Files

File Write

```go []
import (
	"fmt"
	"os"
)
…
f, err := os.Create(path) //*os.File fmt.Fprintln(f, "data")
err = f.Close()
```

File Read

```go []
import (
	"fmt"
	"os"
)
…
f, \_ := os.ReadFile(path) fmt.Print(string(f))
```

---

## Go - Ejercicio

Realizar un programa en Go que escriba un archivo. El programa debe tener 3 funciones:

1. que cree el archivo y devuelva el puntero
2. que escriba un texto sobre el archivo
3. que cierre el archivo

El orden de ejecución en main tiene que ser 1 - 3 - 2

---

## Go - Ejercicio

```go []
package main
import (
	"fmt"
	"os"
)
func main() {
	f := createFile("/tmp/defer.txt")
	defer closeFile(f)
	writeFile(f)
}
```

---

## Go - Ejercicio

```go []
func createFile(p string) *os.File { fmt.Println("creating")
	f, err := os.Create(p)
	if err != nil {
		panic(err)
	}
	return f
}

func writeFile(f *os.File) {
	fmt.Println("writing")
	fmt.Fprintln(f, "data")
}

func closeFile(f *os.File) {
	fmt.Println("closing")
	err := f.Close()
	if err != nil {
		fmt.Fprintf(os.Stderr, "error: %v\n", err)
		os.Exit(1)
	}
}
```

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

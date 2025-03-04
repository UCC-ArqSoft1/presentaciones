---
title: Interfaces en GO
theme: solarized
slideNumber: true
---

# Interfaces en GO

---

## Temario

---

## Estructura del proyecto

**main.go**

| clients | product_client.go |
| services | product_service.go |
| services | product_service_test.go |

---

## product_client.go

```go
package product_client

import (
    "math/rand"
    "time"
)

// Definimos la estructura productClient sin campos que usamos para implementar la interfaz
type productClient struct{}

// ProductClientInterface: Definimos la interfaz que expone los métodos GetProductId y GetProductName
type ProductClientInterface interface {
    GetProductId() int
    GetProductName() string
}

// ProductClient: Variable global de tipo ProductClientInterface
var (
    ProductClient ProductClientInterface
)
```

---

## product_client.go (2)

```go
package product_client

import (
    "math/rand"
    "time"
)

// Usamos esta función para que cuando se inicialice el paquete,
// se guarde nuestra interfaz en la variable global.
func init() {
    ProductClient = &productClient{}
}

// GetProductId devuelve un número aleatorio que puede ser -1 o 0.
func (s *productClient) GetProductId() int {
    rand.Seed(time.Now().UnixNano())
    return rand.Intn(2) - 1
}

// GetProductName devuelve una cadena aleatoria que puede ser vacía o "Hello".
func (s *productClient) GetProductName() string {
    rand.Seed(time.Now().UnixNano())
    if rand.Intn(2) == 0 {
        return ""
    }
    return "Hello"
}
```

---

## product_service.go

```go
package services

import (
    "errors"
    client "ucc/clients/product_client"
)

// Definimos la estructura que guarda la información del servicio,
// y es la que usamos para implementar la interfaz
type productService struct {
    productClient client.ProductClientInterface
}

// Definimos la interfaz de servicio
type productServiceInterface interface {
    GetProductId() (int, error)
    GetProductName() (string, error)
}

// Variable global de tipo productServiceInterface
var (
    ProductService productServiceInterface
)
```

---

## product_service.go (2)

```go
// Usamos esta función para que cuando se inicialice el paquete,
// se guarde nuestra interfaz en la variable global.
func init() {
    ProductService = initProductService(client.ProductClient)
}

// GetProductId busca una ID del cliente y la analiza para ver si devuelve un error o no.
// Si la ID es -1, devuelve un error indicando que la ID no fue encontrada.
// Si no, devuelve la ID.
func (s *productService) GetProductId() (int, error) {
    id := s.productClient.GetProductId()
    if id == -1 {
        return id, errors.New("no se encontró la ID")
    }
    return id, nil
}

// GetProductName busca un Nombre del cliente y lo analiza para ver si devuelve un error o no.
// Si el nombre está vacío devuelve un error.
// Si no, devuelve el nombre.
func (s *productService) GetProductName() (string, error) {
    name := s.productClient.GetProductName()
    if len(name) <= 0 {
        return name, errors.New("el nombre está vacío")
    }
    return name, nil
}
```

---

## main.go

```go
package main

import (
    "fmt"
    "ucc/services"
)

func main() {
    id, err := services.ProductService.GetProductId()
    name, err2 := services.ProductService.GetProductName()

    fmt.Println(id, err)
    fmt.Println(name, err2)
}
```

```bash
go mod init ucc
go mod tidy
go run main.go
```

---

## product_service_test.go

```go
package services

import (
    "testing"
    "github.com/stretchr/testify/assert"
    "github.com/stretchr/testify/mock"
)

// mockProductClient implementamos la estructura con Mock
type mockProductClient struct {
    mock.Mock
}

// Definimos las funciones con la interfaz Mock
func (c *mockProductClient) GetProductId() int {
    ret := c.Called() // Guardamos en una variable todos los argumentos que pasemos en el test
    return ret.Int(0) // Devuelve el primer return
}

func (c *mockProductClient) GetProductName() string {
    ret := c.Called()
    return ret.String(0)
}
```

---

## product_service_test.go (2)

```go
// TestGetProductId prueba el caso en que `GetProductId` devuelve un valor válido.
func TestGetProductId(t *testing.T) {
    // Creamos una instancia del cliente mock
    mockClient := new(mockProductClient)

    // Definimos el valor que debe devolver cuando se llama a GetProductId
    mockClient.On("GetProductId").Return(1)

    // Creamos una instancia del servicio con el cliente mock como parámetro
    service := initProductService(mockClient)

    id, err := service.GetProductId()

    // Validamos los resultados esperados
    assert.Equal(t, 1, id)
    assert.Nil(t, err)
}

// TestGetProductIdWithError prueba el caso en que `GetProductId` devuelve un error (-1).
func TestGetProductIdWithError(t *testing.T) {
    mockClient := new(mockProductClient)
    mockClient.On("GetProductId").Return(-1)

    service := initProductService(mockClient)

    id, err := service.GetProductId()

    // Validamos los resultados esperados
    assert.Equal(t, -1, id)
    assert.NotNil(t, err)
}
```

---

## Ejercicio:

Escribir los tests para:

- GetProductName
- func TestGetProductName(t \*testing.T)
- func TestGetProductNameWithError(t \*testing.T)

---

## product_service_test.go

```bash
go mod tidy
go test ./…
```

```go
// TestGetProductName prueba el caso en que `GetProductName` devuelve un valor válido.
func TestGetProductName(t *testing.T) {
    // Creamos una instancia del cliente mock
    mockClient := new(mockProductClient)

    // Definimos el valor que debe devolver cuando se llama a GetProductName
    mockClient.On("GetProductName").Return("Juan")

    // Creamos una instancia del servicio con el cliente mock como parámetro
    service := initProductService(mockClient)

    name, err := service.GetProductName()

    // Validamos los resultados esperados
    assert.Equal(t, "Juan", name)
    assert.Nil(t, err)
}

// TestGetProductNameWithError prueba el caso en que `GetProductName` devuelve un string vacío.
func TestGetProductNameWithError(t *testing.T) {
    mockClient := new(mockProductClient)
    mockClient.On("GetProductName").Return("")

    service := initProductService(mockClient)

    name, err := service.GetProductName()

    // Validamos los resultados esperados
    assert.Equal(t, "", name)
    assert.NotNil(t, err)
}
```

---

[https://github.com/cukeds/ucc-interfaces](https://github.com/cukeds/ucc-interfaces)

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

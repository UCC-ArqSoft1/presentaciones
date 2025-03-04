---
title: Consumo de APIs en Go con HTTP
theme: solarized
slideNumber: true
---

# Consumo de APIs en Go con HTTP

---

## Temario

1. Documentación de una API
2. Cómo consumir una API en GO utilizando los paquetes HTTP y JSON.

---

### Documentación de una API

Las **APIS** tienen disponible documentos donde se especifica cómo interactuar con ellas para enviar y recibir datos.

---

### Documentación de una API

<!-- .slide: style="font-size: 0.80em" -->

Para consumir una API necesitamos conocer:

- El método **HTTP** (GET, POST, PUT, DELETE, etc.)
- Las URL, que están conformadas por:
  - **Base URL:** Es la ruta básica a partir de la cual se forman todos los endpoints disponibles para consumir. Por ej. [http://api.mercadolibre.com/](http://api.mercadolibre.com/)
  - **Endpoint:** Es el path dentro de la API para acceder al recurso solicitado. Por ej. [/sites/MLA/categories]()
  - **Parámetros:** Son un conjunto de valores que se envían en la misma dirección. Se especifican mediante nombre=valor y se separan mediante el caracter &.
- El cuerpo del mensaje, llamado **body**.
- Las cabeceras del mensaje, llamados **headers**.

---

## Paquete HTTP

El paquete HTTP nos permite realizar peticiones y procesar los datos correspondientes a una solicitud HTTP, además de contar con variables, constantes y funciones útiles en este procesamiento. Para utilizarlo, debemos:

Importar el paquete HTTP:

```go
import “net/http”
```

---

## Paquete HTTP

<!-- .slide: style="font-size: 0.80em" -->

Invocar a la función correspondiente mediante http. Métodos básicos:

- **GET**

```go
resp := http.Get(url)
```

- **POST**

```go
resp := http.Get(url, body)
```

Luego, debemos leer los bytes de esta respuesta mediante:

```go
data, err := ioutil.ReadAll(resp.Body)
```

---

## Paquete HTTP

Una vez obtenidos los bytes, debemos crear una variable del tipo de dato que estamos esperando recibir.

```go
var myVar myStruct
```

Ahora debemos asociar toda la información contenida en el cuerpo de mensaje con nuestra estructura. Para esto, debemos tener en cuenta las anotaciones especificadas a la derecha de cada uno de los atributos de nuestra estructura e invocar un método del paquete encoding/json.

---

## Paquete ENCODING/JSON

El paquete ENCODING/JSON nos disponibiliza un gran número de funciones y útiles para trabajar con datos en formato json.
Para consumir una API, debemos desplegar, o asociar los datos obtenidos en una variable del tipo deseado. Para esto se utiliza la función **unmarshal** de la siguiente manera:

```go
err := json.Unmarshal(bytes, &myVar)
```

---

## Paquete ENCODING/JSON

Donde bytes, es el conjunto de bytes que leímos de la response y &myVar es la dirección de memoria del objeto creado anteriormente que se rellenará con los datos mediante las notations.

Si en este punto no obtenemos ningún error, entonces ya podríamos acceder a los valores de los atributos de nuestra variable tal como nos llegaron en el cuerpo de la respuesta a nuestra solicitud.

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

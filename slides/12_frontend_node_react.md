---
title: Frontend - Node + React
theme: solarized
slideNumber: true
---

# Frontend - Node + React

---

## Temario
- Node JS
- npm
- npx
- React

---

### Node.js 

Es un entorno de ejecución de JavaScript que permite correr código JS fuera del navegador (por ejemplo, en la terminal o en un servidor).
Lo usamos porque muchas herramientas modernas de desarrollo frontend están escritas en JavaScript y necesitan un entorno para ejecutarse.

---

### npm 

Son las siglas de **Node Package Manager**.
Es el sistema que usamos para instalar y gestionar librerías o herramientas escritas en JavaScript.
Se instala automáticamente cuando instalás Node.js.

Pensalo como un "App Store" para desarrolladores JavaScript.

---

### npx

Es una herramienta que viene con npm.
Sirve para ejecutar paquetes que no tenemos instalados globalmente.
Por ejemplo, `npx create-react-app` te permite usar `create-react-app` sin instalarlo primero.

Ventaja: Siempre se usa la última versión del paquete, sin ensuciar el sistema.

---

### React 

Es una librería de JavaScript para construir interfaces de usuario.

Fue creada por Facebook.

Su gran ventaja es que permite crear componentes reutilizables.

---

### create-react-app

Es una herramienta de React para crear un proyecto listo para usar sin configurar nada.

Genera toda la estructura básica (archivos, carpetas, configuraciones, scripts, etc.).

Ahorra tiempo configurando Webpack, Babel, ESLint, etc.

---

### Ejercicio: Instalar Node.Js

1. Ingresar a https://nodejs.org/en
2. Descargar e instalar Node 22.14.0 o superior (si trabajas en múltiples proyectos te recomiendo emplear [nvm](https://github.com/coreybutler/nvm-windows/releases))
3. En una terminal verificar que la instalación se realizó correctamente
```bash
node -v
npm -v
npx -v
```

---

### Proyecto: Crear la app base frontend

1. Ejecutar en comando 
```bash
npm create-react-app@latest frontend
```
2. Ir al directorio del proyecto `cd frontend`
3. Ejecutar el proyecto con `npm start`

---

### CORS

CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad que implementan los navegadores para controlar qué recursos pueden ser accedidos desde otro origen.
Por ejemplo: El frontend en localhost:3000 intenta hacer una petición fetch() a un backend en localhost:8080. Aunque parezca el mismo host, el puerto cambia, entonces el navegador lo considera un "origen cruzado" y bloquea la petición a menos que el backend diga que lo permite.

---

### Configurar CORS en GO

Cuando se agrega esto en el handler o middleware:
- c.Header("Access-Control-Allow-Origin", "*")
- c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
- c.Header("Access-Control-Allow-Headers", "Content-Type, Authorization")

Estás diciéndole al navegador:
- **Allow-Origin:** "Cualquier frontend puede acceder a mi backend" (ideal para desarrollo).
- **Allow-Methods:** "Permití estos métodos HTTP".
- **Allow-Headers:** "Permití que vengan estos headers" (como Content-Type, Authorization, etc)

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
import "net/http"
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

## Arquitectura web

![Arquitectura Web](images/react/arquitetcura.png)

---

## Frontend

- Descargar e instalar NodeJS desde https://nodejs.org/en/download
- Ir a la carpeta de la materia _/frontend_
- Ejecutar

```bash
npx create-react-app client
```

---

## Conectar frontend con backend

- Completar la vista del ítem
- Crear la carpeta frontend/server
  - Package.JSON
  - Server.JS
- Implementar la llamada a localhost:5001 en **useEffect** del componente

---

## Conexión frontend con backend

![Conexion Front-Back](images/react/conexion-front-back.png)

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

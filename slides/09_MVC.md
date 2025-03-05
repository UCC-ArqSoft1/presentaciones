---
title: MVC
theme: solarized
slideNumber: true
---

# MVC

---

## Temario

(A COMPLETAR)

---

### Estructura del Proyecto Final

<!-- .slide: style="font-size: 0.85em" -->

- VISTA – FRONTEND – (REACT)
- BACKEND – (GO)
- BDD (MYSQL)

- Nos vamos a enfocar ahora en el BackEnd
- Hasta ahora tenemos el archivo MAIN.GO, cuando tenemos que agregar los paquetes, en un principio GO propuso que todas las dependencias de un programa en GO estén en un mismo proyecto, con el tiempo GO agilizó todo con la manera actual, que son los módulos de GO.
- Definimos los archivos GO.mod y GO.sum (hash del código).

---

## Patrones de diseño

Los patrones de diseño son soluciones habituales a problemas que ocurren con frecuencia en el diseño de software. Son como
planos prefabricados que se pueden personalizar para resolver un problema de diseño recurrente en tu código.

---

## MVC

![MVC](images/mvc/mvc.png)

---

![MVC](images/mvc/mvc2.png)

---

## Gin-Gonic

```bash
go mod init "NOMBRE"
go mod tidy
go run main.go
```

RECUERDEN: Estamos construyendo un API

Las API van a estar corriendo todo el tiempo

---

## Gin-Gonic

```go []
package main

import (
    "fmt"
    "github.com/gin-gonic/gin"
    "net/http"
)

type Body struct {
    // json tag to serialize json body
    Name string `json:"name"`
}

func main() {
    engine := gin.New()
    engine.POST("/test", func(context *gin.Context) {
        body := Body{}
        // using BindJSON method to serialize body with struct
        if err := context.BindJSON(&body); err != nil {
            context.AbortWithError(http.StatusBadRequest, err)
            return
        }
        fmt.Println(body)
        context.JSON(http.StatusAccepted, &body)
    })
    engine.Run(":3000")
}
```

---

## Gin-Gonic

Una vez que copien este código en el main, abren una terminal y ejecutan estos comandos:

```curl
curl -X POST -H "Content-Type: application/json" -d '{"name":"lalala"}' localhost:3000/test
```

---

Un **framework** es un esquema o marco de trabajo que ofrece una estructura base para elaborar un proyecto con objetivos específicos, una especie de plantilla que sirve como punto de partida para la organización y desarrollo de software.

Si nosotros tenemos un servidor que va a escuchar solicitudes de clientes, debe estar corriendo todo el tiempo, ese MAIN no va a terminar de ejecutarse, y eso esta OK.

---

**Engine** es una instancia del framework.

Creamos un endpoint, que va a usar el método post.
El 2do parámetro no se ejecuta.
La función solo se declara, y se ejecuta solo cuando alguien nos envía una Request.

Esta línea hace el unmarshal, pero como no tengo los bites en este momento para hacerlo, le pide a GIN que lo haga, éste nos provee una variable de contexto (request) BindJSON.

Para que alguien pueda generar una conexión a mi servidor, yo le ofrezco un puerto, en éste caso, le ofrezco el 3000.

---

## Auth

![Auth](images/mvc/auth.png)

---

## Auth

Siempre que ponemos un método de autenticación debemos poner un tiempo de expiración.
Si el usuario nos da un user y un pass, NO DEBEMOS GUARDARLO EN LA BDD, debemos hashearlo para que se asigne a un usuario un token por las dudas no nos hackeen la base de datos.

---

### Auth

Con la estructura completa MVC implementa un mecanismo de autenticación que reciba el siguiente DTO, y valide la información contra unas credenciales guardadas en un archivo de texto (cred.txt) como base de datos y retorne el token contenido en el archivo token.txt.

---

### Auth: Ejemplo

Request: **POST /login**

```json
Body: {"username":"user1","password":"A1_3jq"}
```

Response (Valid Credentials): **HTTP Status 200**

```json
{ "token": "94a08da1fecbb6e8b46990538c7b50b2" }
```

Response (Invalid Credentials): **HTTP Status 401**

```json
{ "error": "invalid login", "code": "401" }
```

---

### Auth: Ejemplo

```go []
package main

import (
    "fmt"
    "net/http"
    "time"
    "github.com/dgrijalva/jwt-go"
)

var mySigningKey = []byte("secret")

func homePage(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Página de inicio")
}

func login(w http.ResponseWriter, r *http.Request) {
    // Aquí verificarías las credenciales del usuario, y si son válidas, generas el token

    // Creamos un token JWT
    token := jwt.New(jwt.SigningMethodHS256)

    // Configuramos los claims (pueden ser datos adicionales del usuario)
    claims := token.Claims.(jwt.MapClaims)
    claims["authorized"] = true
    claims["user"] = "usuario_ejemplo"
    claims["exp"] = time.Now().Add(time.Hour * 24).Unix() // Token expira en 24 horas

    // Firmamos el token con una clave secreta
    tokenString, err := token.SignedString(mySigningKey)
    if err != nil {
        fmt.Println("Error al firmar el token:", err)
        return
    }

    // Devolvemos el token JWT al cliente
    w.Write([]byte(tokenString))
}

func handleRequests() {
    http.HandleFunc("/", homePage)
    http.HandleFunc("/login", login)
    http.ListenAndServe(":8080", nil)
}

func main() {
    fmt.Println("Servidor iniciado en http://localhost:8080")
    handleRequests()
}
```

---

### Cifrado

La encriptación es una forma de ocultar información alterándola para que parezca un dato aleatorio.

![Cifrado](images/mvc/cifrado.webp)

---

### Protocolos de estandar seguros

**JWT**

- Basado en encriptación Clave Pública/Privada
- Utilizado en la web (SPA) y en mobile o multidispositivo.

**Oauth2**

- Protocolo de autorización que puede utilizar JWT como token.
- Token de autorización y token de refresco.

---

### Tarea

Investigue e implemente la autenticación con [JWT](https://jwt.io/)

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

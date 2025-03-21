---
title: Docker Compose
theme: solarized
slideNumber: true
---

# Docker Compose

---

## Temario

- Docker compose
- Docker File

---

### Docker Compose

Objetivo: Conectar dos contenedores, un
microservicio con una base de datos.

---

## Ejemplo

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

## Ejemplo: Dockerfile

```bash []
FROM golang:1.17

RUN mkdir /gin

ADD . /gin

WORKDIR /gin

RUN go mod init gin
RUN go mod tidy

RUN go build -o gin .

RUN chmod +x /gin/gin

ENTRYPOINT ["/gin/gin"]
```

```bash
docker build -t gin:latest .
docker run -p 3001:3000 gin
```

---

**MAC M1**

```
docker run --name class-mysql -e MYSQL_ROOT_PASSWORD=pass

--publish 3306:3306 -d arm64v8/mysql:oracle
```

**Linux - Windows - Mac**

```
docker run --name class-mysql -e MYSQL_ROOT_PASSWORD=pass

--publish 3306:3306 -d mysql:5.7
```

---

```
docker ps
docker exec -it [id-contenedorSql] bash
mysql -p
```

**file**

```sql []
CREATE DATABASE nums;

USE nums;

CREATE TABLE squarenum (
    number INT,
    squareNumber INT
);
```

---

```go []
package main

import (
    "database/sql"
    "fmt"
    _ "github.com/go-sql-driver/mysql"
)

func main() {
    // Conectar a la base de datos MySQL
    db, err := sql.Open("mysql", "root:pass@tcp(127.0.0.1:3306)/nums")
    if err != nil {
        panic(err.Error()) // Para propósitos de ejemplo, se recomienda un mejor manejo de errores
    }
    defer db.Close()

    // Preparar una sentencia para eliminar datos de la tabla
    stmtDel, err := db.Prepare("DELETE FROM squarenum;") // ? = marcador de posición
    if err != nil {
        panic(err.Error()) // Manejo de errores adecuado en vez de un panic en producción
    }
    defer stmtDel.Close()

    // Preparar una sentencia para insertar datos en la tabla
    stmtIns, err := db.Prepare("INSERT INTO squarenum VALUES( ?, ? )") // ? = marcador de posición
    if err != nil {
        panic(err.Error()) // Manejo de errores adecuado
    }
    defer stmtIns.Close() // Cerrar la sentencia cuando el programa finaliza
}
```

---

```go []
// Preparar una sentencia para leer datos
stmtOut, err := db.Prepare("SELECT squareNumber FROM squarenum WHERE number = ?")
if err != nil {
    panic(err.Error()) // Se recomienda un mejor manejo de errores en producción
}
defer stmtOut.Close()

// Ejecutar la eliminación de registros en la tabla
_, err = stmtDel.Exec()
if err != nil {
    panic(err.Error()) // Manejo de errores adecuado en lugar de panic
}

// Insertar números cuadrados para valores de 0 a 24 en la base de datos
for i := 0; i < 25; i++ {
    _, err = stmtIns.Exec(i, (i * i)) // Inserta tuplas (i, i^2)
    if err != nil {
        panic(err.Error()) // Manejo de errores adecuado
    }
}
```

---

```go []
var squareNum int // Variable para almacenar el resultado

// Consultar el cuadrado del número 13
err = stmtOut.QueryRow(13).Scan(&squareNum) // WHERE number = 13
if err != nil {
    panic(err.Error()) // Manejo adecuado de errores en lugar de panic en producción
}
fmt.Printf("The square number of 13 is: %d \n", squareNum)

// Consultar otro número, por ejemplo, el 1
err = stmtOut.QueryRow(1).Scan(&squareNum) // WHERE number = 1
if err != nil {
    panic(err.Error()) // Manejo adecuado de errores en lugar de panic en producción
}
fmt.Printf("The square number of 1 is: %d \n", squareNum)

```

```bash
docker ps
docker exec -it [id-contenedorSql] bash
mysql -p
use nums;
select * form squarenum;
```

---

```go []
package main

import (
    "database/sql"
    "fmt"
    "net/http"

    _ "github.com/go-sql-driver/mysql"
    "github.com/gin-gonic/gin"
)

// Definir la estructura Body con JSON serialization
type Body struct {
    Number int `json:"number"`
}

func main() {
    // Conectar a la base de datos MySQL
    db, err := sql.Open("mysql", "root:pass@tcp(dbmysql:3306)/nums")
    if err != nil {
        panic(err.Error()) // Manejo de errores básico, mejor evitar panic en producción
    }
    defer db.Close()

    // Preparar una consulta para obtener el cuadrado de un número
    stmtOut, err := db.Prepare("SELECT squareNumber FROM squarenum WHERE number = ?")
    if err != nil {
        panic(err.Error()) // Manejo de errores adecuado
    }
    defer stmtOut.Close()

    // Crear una instancia de Gin
    engine := gin.New()

    // Definir una ruta GET para consultar el número cuadrado
    engine.GET("/test", func(context *gin.Context) {
        // Variable para almacenar el resultado de la consulta
        squareNum := 0

        // Crear una estructura Body para la respuesta
        body := Body{}

        // Ejecutar la consulta para obtener el cuadrado del número 13
        err = stmtOut.QueryRow(13).Scan(&squareNum) // WHERE number = 13
        if err != nil {
            panic(err.Error()) // Manejo adecuado de errores
        }

        // Asignar el valor obtenido a la estructura Body
        body.Number = squareNum

        // Responder con el JSON del número cuadrado
        context.JSON(http.StatusAccepted, body)
    })

    // Iniciar el servidor en el puerto 3000
    engine.Run(":3000")
}

```

---

## Dockerfile

```bash []
FROM golang:1.17

RUN mkdir /gin

ADD . /gin

WORKDIR /gin

RUN go mod init gin
RUN go mod tidy

RUN go build -o gin .

RUN chmod +x /gin/gin

ENTRYPOINT ["/gin/gin"]

```

---

## docker-compose.yml

```yml []
version: "3"

services:
  dbmysql:
    image: arm64v8/mysql:oracle
    environment:
      MYSQL_ROOT_PASSWORD: pass
    ports:
      - "3306:3306"
    volumes:
      - ./db:/docker-entrypoint-initdb.d
    healthcheck:
      test:
        [
          "CMD",
          "mysqladmin",
          "ping",
          "-h",
          "localhost",
          "-u",
          "root",
          "-p$MYSQL_ROOT_PASSWORD",
        ]
      timeout: 20s
      retries: 10

  web:
    build: .
    container_name: gin
    depends_on:
      dbmysql:
        condition: service_healthy
    ports:
      - "3000:3000"
```

---

## db-create.sql

```sql []
CREATE DATABASE nums;

USE nums;

CREATE TABLE squarenum (
    number INT,
    squareNumber INT
);

INSERT INTO squarenum VALUES (13, 169);
```

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

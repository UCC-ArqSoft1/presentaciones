---
title: Docker
theme: solarized
slideNumber: true
---

# Docker

---

## Temario

- Deploy
- Máquinas Virtuales
- Docker
- TL;DR
- Comandos Docker
- Docker File
- Recomendaciones
- Terminal

---

### Deploy

El despliegue de software es el proceso de entregar el software completado al cliente que lo solicitó o implementarlo 
para los consumidores. El despliegue de software solo debe realizarse después de pruebas exhaustivas para garantizar 
que todos los errores y fallas hayan sido identificados y corregidos.

---

## Virtual Machine

![Virtual Machine](images/docker/virtual-machine.png)

---

## Docker

<!-- .slide: style="font-size: 0.90em" -->

Docker es una herramienta que permite a los desarrolladores, administradores de sistemas, etc., implementar fácilmente 
sus aplicaciones en un entorno aislado (llamado contenedor) para ejecutarse en el sistema operativo anfitrión, es decir, Linux.

El principal beneficio de Docker es que permite a los usuarios empaquetar una aplicación con todas sus dependencias en 
una unidad estandarizada para el desarrollo de software. A diferencia de las máquinas virtuales, los contenedores no 
tienen una gran sobrecarga, lo que permite un uso más eficiente del sistema y los recursos subyacentes.

---

## Docker

<!-- .slide: style="font-size: 0.90em" -->

![Docker](images/docker/docker.png)

La imagen de docker puede ser propia o de un tercero.

El Registry es una aplicación del lado del servidor sin estado y altamente escalable que almacena y permite distribuir 
imágenes de Docker. El Registry es de código abierto y está bajo la licencia permisiva Apache.

---

## TL;DR

<!-- .slide: style="font-size: 0.80em" -->

- Cada capa es una imagen en sí misma, solo que sin una etiqueta asignada por un humano. Sin embargo, tienen IDs generados automáticamente.
- Cada capa almacena los cambios en comparación con la imagen en la que se basa.
- Una imagen puede estar compuesta por una sola capa (esto suele ocurrir cuando se usa el comando squash).
- Cada instrucción en un Dockerfile genera una nueva capa. (Excepto en compilaciones multi-etapa, donde generalmente solo se incluyen las capas de la imagen final, o cuando una imagen se aplana en una sola capa).
- Las capas se utilizan para evitar transferir información redundante y omitir pasos de compilación que no han cambiado (según la caché de Docker).

---

![Docker layers](images/docker/TL_DR.png)

---

## Comandos Docker Terminal

```bash
Install Docker

docker images ls

docker container ls

docker pull {name}:{tag}

docker pull {name}:{latest}

docker pull golang:latest

docker run {name}:{tag}

docker run {name}:{latest}

docker run golang:latest

docker run -d -p 80:80 docker/getting-started

docker ps

docker exec -it -t {container} sh
  // ejecuta una terminal en el contenedor
  // -i interactive
  // -t terminal
```

---

## Docker File

```bash []
# syntax=docker/dockerfile:1

FROM golang:1.18.1-alpine3.15
WORKDIR /app

COPY . .
RUN go mod download
RUN go build -o /docker-go

EXPOSE 8081

CMD [ "/docker-go" ]
```

```bash
docker build -t docker-go .
docker run -d -p 8080:8080 docker-go:0.0.1
```

---

## Docker File

```bash
El comando -v permite compartir un volumen para almacenamiento de datos

docker logs -f {container}
Permite ver los logs del contenedor

docker push emikohmann/docker-go:0.0.1
```

---

## Docker: Recomendación

- Generalmente los datos que se manejan dentro de los container son volátiles, es decir que si los almacenamos en el container se pueden perder.
- Por eso se recomienda gestionarlo de alguna manera que nos permita recuperarlos o utilizarlos sin depender de un container ID.
- Tener en cuenta que generalmente nos vamos a basar en imágenes para correr las aplicaciones.

---

## Docker: terminal

```bash
ekohmann @ docker-go $ docker images
REPOSITORY               TAG       IMAGE ID       CREATED              SIZE
docker-go                latest    53dcdeeb3c6c   About a minute ago   423MB
ubuntu                   latest    d2e4e1f51132   3 days ago           77.8MB
golang                   latest    65375c930b21   12 days ago          964MB
docker/getting-started   latest    cb90f98fd791   3 weeks ago          28.8MB
alpine                   latest    0ac33e5f5afa   4 weeks ago          5.57MB
```

---

## Docker: terminal

```bash
[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:   export GIN_MODE=release
 - using code:  gin.SetMode(gin.ReleaseMode)

[GIN-debug] GET    /ping                     --> main.main.func1 (1 handlers)
[GIN-debug] [WARNING] You trusted all proxies, this is NOT safe. We recommend you to set a value.
Please check https://pkg.go.dev/github.com/gin-gonic/gin#readme-don-t-trust-all-proxies for details.
[GIN-debug] Listening and serving HTTP on :8081
```

---

## Docker: terminal

```bash
docker network -d create docker-net
```

---

![Terminal](images/docker/terminal1.png)

---

## Docker: terminal

![Terminal](images/docker/terminal2.png)

---

![Terminal](images/docker/terminal3.png)

---

## Docker: terminal

![Terminal](images/docker/terminal4.png)

---

## Docker Compose

```bash []
version: "3.7"

services:

  #docker run -dp 3000:3000 --network todo-app -e MYSQL_HOST=mysql -e MYSQL_USER=root -e MYSQL_PASSWORD=secret -e MYSQL_DB=docker-db getting-started:v2

   app:
     image: emikohmann/example:v1
     ports:
       - 3000:3000
     environment:
       MYSQL_HOST: mysql
       MYSQL_USER: root
       MYSQL_PASSWORD: secret
       MYSQL_DB: todos


# docker run -d     --network todo-app --network-alias mysql     -v todo-mysql-data:/var/lib/mysql     -e MYSQL_ROOT_PASSWORD=secret     -e MYSQL_DATABASE=docker-db     mysql:5.7

   mysql:
     image: mysql:5.7
     volumes:
       - ./todo-mysql-data:/var/lib/mysql
     environment:
       MYSQL_ROOT_PASSWORD: secret
       MYSQL_DATABASE: todos
```

---

## Docker Compose

![Terminal](images/docker/terminal5.png)

---

## Docker Compose

![Terminal](images/docker/terminal6.png)

---

## Docker Images

[https://docker-curriculum.com/#docker-images](https://docker-curriculum.com/#docker-images)

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

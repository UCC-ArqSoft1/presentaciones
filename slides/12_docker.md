---
title: Docker
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

<section data-background-image="images/docker/background.avif">

<br><br><br><br><br><br>

<h1>Docker</h1>

</section>

---

## Temario

- Docker
- ¿Por qué usar Docker?
- Contenedores vs. Máquinas Virtuales
- Docker Layers
- Docker Hub
- Dockerfile
- Dockerfile: Instrucciones
- Docker compose

---

## Docker

Docker es una herramienta que permite crear, desplegar y ejecutar aplicaciones dentro de contenedores, que son entornos aislados y livianos. Estos contenedores incluyen todo lo necesario para que una aplicación funcione —como el código, librerías y dependencias—, lo que facilita la portabilidad, la escalabilidad y la consistencia entre distintos entornos de desarrollo, prueba y producción.

---

## ¿Qué es Docker?
Docker es una herramienta que te permite empaquetar tu aplicación con todo lo que necesita para funcionar (código, dependencias, librerías, etc.) en algo que se llama un contenedor.
Es como poner tu aplicación dentro de una caja que lleva todo lo necesario. Así, se puede mover esa caja a cualquier lugar (otra computadora, otro servidor, la nube) y siempre va a funcionar igual.

---

### ¿Por qué usar Docker?
Funciona igual en cualquier lugar: No importa si es tu computadora, la de otro o un servidor, el contenedor siempre se comporta igual.

- **Fácil de compartir:** Le das tu contenedor a otro y ya puede ejecutarlo, sin preocuparse por instalar nada más.
- **Aísla la aplicación:** Lo que pase dentro del contenedor no afecta a tu máquina ni a otras aplicaciones.
- **Ahorra tiempo:** No te peleás con “en mi máquina funciona y en la tuya no”.

---

## Virtual Machine

![Virtual Machine](images/docker/virtual-machine.png)

---

## Docker

<!-- .slide: style="font-size: 0.90em" -->

![Docker](images/docker/docker.png)

La imagen de docker puede ser propia o de un tercero.

El Registry es una aplicación del lado del servidor, sin estado (stateless) y altamente escalable, que almacena y permite distribuir imágenes de Docker. 

---

## Docker Layers

<!-- .slide: style="font-size: 0.90em" -->

- Cada capa es una imagen en sí misma, solo que sin una etiqueta asignada por un humano. Sin embargo, tienen IDs generados automáticamente.
- Cada instrucción en un **Dockerfile** genera una nueva capa. (Excepto en compilaciones multi-etapa, donde generalmente solo se incluyen las capas de la imagen final, o cuando una imagen se aplana en una sola capa).
- Las capas se utilizan para evitar transferir información redundante y omitir pasos de compilación que no han cambiado (según la caché de Docker).

---

![Docker layers](images/docker/TL_DR.png)

---

### Requisitos Mínimos de Docker

- Procesador (CPU) 64 bits
- Memoria RAM 4 GB
- Virtualización de Hardware activada en la BIOS
- Hyper-V activado
- Espacio en Disco

---

### Docker 1: Intalación

1. Ingresar a [https://www.docker.com/](https://www.docker.com/)
2. Click en **Download Docker Desktop**
3. Seleccionar la versión de Docker acorde al sistema operativo
4. Seguir los pasos de instalación

---

### Docker Hub

Permite a los usuarios almacenar, compartir, y recuperar imágenes de contenedores, tanto de forma pública como privada.

Funciona como un repositorio donde se almacenan las imágenes de Docker.

[https://hub.docker.com/](https://hub.docker.com/) 

---

#### Docker 2: Ejecución de una imagen de DockerHub

1. Buscar en [https://hub.docker.com/](https://hub.docker.com/) la imagen de "hello-world" para asegurarnos de que exista.
2. En una terminal ejecutar:
```bash
docker run hello-world
```
3. Verificar en **Docker Desktop** que exista un contenedor con la imagen **hello-world**
4. Si la imagen ya no es necesaria, no te olvides de borrarla desde el Docker Desktop

---

#### Docker 2: Ejecución de una imagen de DockerHub

<iframe width="560" height="315" src="https://www.youtube.com/embed/Dnom8K3lytE?si=N1Z1_hNzJcZoXRPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Dockerfile

Es un archivo de texto que contiene las instrucciones necesarias para construir una imagen de Docker. 

Es como una receta que define los pasos para crear una imagen de contenedor. 

Con un Dockerfile, puedes especificar la imagen base, instalar software, copiar archivos, configurar variables de entorno y más. 

---

### Docker 3: Dockerfile

1. Creamos un archivo **Dockerfile**
2. Vamos a [https://hub.docker.com/](https://hub.docker.com/) y buscamos **golang**
3. Escribimos en nuestro archivo:
```bash
FROM golang:latest
CMD echo "Hello Go!"
```
4. Generamos la imagen ejecutando: `docker build . -t myfirstimage:1`
5. Ejecutamos el contenedor `docker run myfirstimage:1`

---

### Docker 3: Dockerfile

<iframe width="560" height="315" src="https://www.youtube.com/embed/l7UOdHWaI3g?si=BTxigQ-UqVR4oES5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Dockerfile: Instrucciones

<!-- .slide: style="font-size: 0.80em" -->

- **FROM:** Define la imagen base (como un sistema operativo con herramientas).
- **WORKDIR:** Establece el directorio donde se ejecutarán las siguientes instrucciones.
- **COPY origen destino:**	Copia archivos/carpetas desde tu computadora al contenedor.
- **RUN:**	Ejecuta comandos durante la construcción (como instalar dependencias).
- **CMD:**	Indica el comando que se ejecutará cuando se arranque el contenedor.
- **EXPOSE:**	Declara un puerto que la aplicación usará (informativo, no abre el puerto).
- **ENV:**	Define variables de entorno dentro del contenedor.

---

### Docker 4: Dockerfile para backend

<!-- .slide: style="font-size: 0.60em" -->

1. Crear un archivo **Dockerfile** en la carpeta raiz del ejercicio 7 de vinilos (version SIN BD)
2. En el archivo escribir los comandos para:
  - utilizar una imagen de golang
  - establecer el directorio de trabajo
  - copiar el contenido del ejercicio7 a la carpeta
  - descargar las dependencias de go
  - compilar la aplicación
  - exponer el puerto del contenedor para comunicarse con el exterior
  - ejecutar la aplicación compilada

<!--
```bash
FROM golang:1.24

WORKDIR /app

COPY . .

RUN go mod tidy
RUN go build -o server . -> Compila el archivo main.go y genera un ejecutable llamado server

EXPOSE 8080

CMD ["./server"]
```
-->
3. Modifica el código de golang para que pueda utilizar el puerto del contenedor
4. Generar la imagen del contenedor ejecutando `docker build . -t vinilback:1`
5. Verifica en el **Docker Desktop** la sección de **Images**
6. Ejecutar el contenedor con `docker run --name vinilback-cont -p 8080:8080 vinilback:1`
7. Verifica en el **Docker Desktop** la sección de **Containers**
8. Prueba empleando Postman que puedes acceder a los datos del servicio

---

### Docker 4: Dockerfile para backend

<iframe width="560" height="315" src="https://www.youtube.com/embed/QYKDwtv6fVg?si=K52iTAOrZHOmDzeq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Docker Compose 

Es una herramienta para orquestar y gestionar aplicaciones que utilizan múltiples contenedores Docker, haciendo que el proceso sea más eficiente y fácil de manejar. 

Utilizando un archivo YAML para configurar la aplicación, las dependencias y los servicios. Con un solo comando, Docker Compose puede crear, arrancar, detener y gestionar todos los contenedores definidos en el archivo de configuración. 

---

### Docker 5: Dockerfiles + Docker Compose

<!-- .slide: style="font-size: 0.60em" -->

1. Reutilizaremos el archivo **Dockerfile** llevando una copia a la carpeta del ejercicio 7 de vinilos (version CON BD)
2. Modifica el código de golang para que pueda utilizar el puerto del contenedor y no solo localhost
<!--
```bash
FROM golang:1.24

WORKDIR /app

COPY . .

RUN go mod tidy
RUN go build -o server .

EXPOSE 8080

CMD ["./server"]
```
-->


---

### Docker 5: Dockerfiles + Docker Compose

3. Vamos a la carpeta **ej-react/frontend**
4. Creamos un archivo **Dockerfile** y escribimos los comandos para:
  - utilizar una imagen de node
  - establecer el directorio de trabajo
  - copiar el contenido de frontend a la carpeta
  - descargar las dependencias de node
  - exponer el puerto del contenedor para comunicarse con el exterior
  - ejecutar vite
<!--
```bash
FROM node:22

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
```
-->

---

### Docker 5: Crear docker-compose.yml

5. Crear un archivo **docker-compose.yml** en la carpeta raíz del proyecto.
6. Escribir en el archivo:
  - los contenedores que se van a ejecutar: backend, frontend, base de datos
  - establecer que imágenes se van a contruir
  - que puertos se van a exponer (host:contenedor)
<!--
```bash
services:
  backend:
    build: ./ejercicio7-db
    ports:
      - "8080:8080"
    depends_on:
      - db
    environment:
      - DB_HOST=db
      - DB_USER=root
      - DB_PASSWORD=root
      - DB_NAME=mydb

  frontend:
    build: ./ej-react/frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend

  db:
    image: mysql:8
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: db_vinilos
    ports:
      - "3307:3306" # host:contenedor
    volumes:
      - db-data:/var/lib/mysql

volumes:
  db-data:
```
-->

---

### Docker 5: Crear docker-compose.yml

<iframe width="560" height="315" src="https://www.youtube.com/embed/YiI5_4F5RTE?si=kKrZp_OmyCZvW3Mf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Docker 5: Crear docker-compose.yml

<!-- .slide: style="font-size: 0.70em" -->

7. Si intentamos ejecutar, fallará, porque no se le brinda suficiente tiempo a la BD para que se instale. Por eso agregaremos una función en go:
```go
func waitForDB(dsn string) (*gorm.DB, error) {
	var db *gorm.DB
	var err error

	for i := 0; i < 10; i++ {
		db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
		if err == nil {
			sqlDB, err := db.DB()
			if err == nil && sqlDB.Ping() == nil {
				return db, nil
			}
		}

		log.Printf("⏳ Esperando base de datos... intento %d/10\n", i+1)
		time.Sleep(3 * time.Second)
	}

	return nil, fmt.Errorf("❌ no se pudo conectar a la BD: %v", err)
}
```
También deberemos modificar **InitDB**:
```go
db, err := waitForDB(dsn)
	if err != nil {
		return nil, err
	}
```

---

### Docker 5: Crear docker-compose.yml

8. Ejecutar en la terminal: 
```bash
docker-compose up --build
```
9. Ingresa a `http://localhost:5173/` para verificar que Vite responde correctamente.`
10. Con postman asegurarse de que los servicios de GO responden

---

### Docker 5: Crear docker-compose.yml

<iframe width="560" height="315" src="https://www.youtube.com/embed/1qRH3azHDYM?si=JLCUE-iGEsSnenw-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

![Docker Desktop](images/docker/docker-desktop.png)

---

## Comandos Docker Terminal

```bash
docker images ls // permite listar las imagenes

docker container ls // permite listar los contenedores

docker pull {name}:{tag} // permite descargar una imagen-version

docker pull {name}:{latest} // descarga la ultima version

docker pull golang:latest

docker run {name}:{tag} // corre un contenedor de docker

docker run {name}:{latest}

docker run golang:latest

docker run -d -p 80:80 docker/getting-started // agrega parámetros

docker ps // muestra los procesos

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

<!-- .slide: style="font-size: 0.85em" -->

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

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

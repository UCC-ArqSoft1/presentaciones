---
title: mySQL
theme: solarized
slideNumber: true
---

<style>
h1 {
  background-color: rgba(255,255,255,.7);
}

.small{
	font-size: 0.2em
}
</style>

<section data-background-image="images/mySQL/background.png">

<br><br><br><br><br><br><br><br><br>

<h1>Base de Datos</h1>

</section>

---

## Temario

- Instalar MySQL
- Instalar Driver para Go
- Comandos Básicos
- Ejercicio: Crear BD
- GORM
- Refactor API Vinilos
- Go DotEnv

---

### Instalar MySQL

1. Ingresamos a [https://www.mysql.com/downloads/](https://www.mysql.com/downloads/)
2. Click en **MySQL Community**
3. Seleccionar "MySQL Community Server"
4. Seleccionar en el menú desplegable la versión según el SO

![Instalar MySQL](images/go/mySQL.png)

---

### Instalar el Driver para Go

1. Ingresar a https://go.dev/wiki/SQLDrivers
2. Click en el link de "MySQL" (nos redirecciona acá https://github.com/go-sql-driver/mysql/)
3. Vamos a la sección de **Installation** y usamos el comando `

```bash
go get -u github.com/go-sql-driver/mysql
```

---

### MySQL: Comandos básicos BD

- Mostrar todas las base de datos:
```bash
show databases;
``` 

- Crear una nueva bases de datos:
```bash
create database if not exists db_contacts;
``` 

- Usar/Acceder a una base de datos:
```bash
use db_contacts;
```

- Eliminar una base de datos:
```bash
drop database db_contacts;
```

---

### MySQL: Comandos básicos de Tablas

- Ver tablas de una base de datos:
```bash
show tables;
```

- Crear una tabla en la base de datos:
```bash
create table if not exists contact(
    id int auto_increment primary key,
    name varchar(255) not null,
    email varchar(255),
    phone varchar(20));
```

- Eliminar una tabla de base de datos:
```bash
drop table contact;
```

---

### MySQL: Comandos básicos de Consulta

- Consulta para ver la estructura de la tabla:
```bash
describe nombre-tabla;
```
- Consulta básica para ver registros:
```bash
select * from contact;
```

- Consulta para ingresar registros:
```bash
insert into contact (name, email, phone) values 
('Juan Perez', 'juan@ejemplo.com', '123-456-789'),
('María Gomez', 'maria_gomez@email.com', '887-556-564'),
('Carlos López', null, '555-123-4567')
```

---

### Ejercicio 1: Crear BD

1. Abrir MySQL Command Line Client
2. Crear una base de datos de **db_vinilos**
3. Crear una tabla de **albums** con id, title, artist, year y price.
4. Insertar 3 registros en la tabla:
```bash
('The Number of the Beast', 'Iron Maiden', 1982, 25.19),
('Youthanasia', 'Megadeth', 1994, 13.65),
('Master of Puppets', 'Metallica', 1986, 20.97);
```

----

### Ejercicio 1: Crear BD

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/OtGU1ztqB1s?si=0G6qtXrb3cwTk7n7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### GORM

Es una librería ORM (Object-Relational Mapping) para Go que permite interactuar con bases de datos relacionales (como MySQL, PostgreSQL, SQLite, etc.) usando estructuras (structs) de Go en lugar de escribir directamente SQL.

En lugar de:
```bash
SELECT * FROM albums;
```

Permite realizar:
```go
var albums []Album
db.Find(&albums)
```

---

### GORM: Ventajas

- Mapea estructuras de Go a tablas de base de datos fácilmente.
- Tiene migraciones automáticas (opcional).
- Incluye relaciones (has many, belongs to, etc.).
- Simplifica el CRUD (crear, leer, actualizar, eliminar).

---

### GORM: Ejemplos


| SQL | GORM |
|-----|------|
| select * from clients; | db.Find(&clients) |
| insert into clients (name, email, phone) values ('Perry', 'perry@detective.com', '123-456-789') | db.Create(&newClient) //donde newClient es un **struct** |
| select * from clients where name='Perry' | db.First(&client, "name = ?", name) |
| update clients set name = 'Perry Ornitorrinco' where phone='123-456-789' |  db.Save(&client) |
| delete from clients where name='Perry' | db.Delete(&Client{}, , "name = ?", name) |

[Documentación de GORM](https://gorm.io/docs/query.html)

---

### Ejercicio: Refactor API de Vinilos

Empleando [gorm](https://pkg.go.dev/gorm.io/gorm) conectarse a la base de datos mySQL para que la información de los **albums** tenga persistencia.
1. Instalar el driver de mySQL 
```go get -u github.com/go-sql-driver/mysql```

2. Crea una función **initDB** (te recomiendo leer esta documentación https://gorm.io/docs/connecting_to_the_database.html)

---

### Ejercicio: Refactor API de Vinilos (parte 1)

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/UJHJcrNvVeE?si=xdXvNr7-2VTMyAaz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Ejercicio: Refactor API de Vinilos (parte 2)

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/7v7JffEy3xA?si=dbYM4rpGs-ODaZG1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Go DotEnv

Es una [librería de Go](https://pkg.go.dev/github.com/joho/godotenv) que permite cargar variables de entorno desde un archivo **.env** de forma sencilla.

Al desarrollar una aplicación (por ejemplo, con una base de datos), muchas veces es necesario usar variables de configuración sensibles como:
- claves de API
- credenciales de base de datos
- puertos, entornos (development, production)
- rutas o tokens secretos

---

### Go DotEnv

1. Instalar el paquete
```bash
go get github.com/joho/godotenv
```

2. Crear un **.env**
```env
PORT=8080
DB_USER=admin
DB_PASSWORD=supersecreta
```

---

### Ejercicio: Refactor PRO API de Vinilos
- Emplee un archivo **.env** para almacenar los datos de la base de datos
- Cree 3 carpetas y re-organice el código:
    - database
    - handlers
    - models

---

### Ejercicio: Refactor PRO API de Vinilos (parte 1)

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/uAn8YOtUdgA?si=qRgLdAQ70mfwmaFD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Ejercicio: Refactor PRO API de Vinilos (parte 2)

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/GRXy2prOnpg?si=1a0C7z_a288Xr8FH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

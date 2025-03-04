---
title: Control de Versiones
theme: solarized
slideNumber: true
---

# Control de Versiones

---

## Temario

1. Control de versiones
2. Introducción a GIT
3. Características principales
4. Branching model
5. Órdenes básicas
6. Buenas prácticas
7. Plataforma Github
8. Proyecto de ejemplo

---

## Download

- [Golang](https://go.dev/)
- [Docker](https://www.docker.com/products/docker-desktop/)

---

## Control de versiones

Se llama control de versiones a la gestión de los diversos cambios que se realizan sobre los elementos de algún producto o una configuración del mismo. Una versión, revisión o edición de un producto, es el estado en el que se encuentra el mismo en un momento dado de su desarrollo o modificación.

---

## Control de versiones

![CVS](images/git/csv.png)

---

Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente.

![Empresas que usan GIT](images/git/companies.png)

---

## Principales características de GIT

- Fuerte apoyo al desarrollo no lineal
- Gestión distribuida: cada dev tiene una copia local del desarrollo entero.
- Los almacenes de información pueden publicarse mediante distintos protocolos (http, ssh, etc)
- Gestión eficiente de proyectos grandes basada en rapidez de gestión de diferencias.
- Detección de renombrados
- Permite la implementación de branching model

---

## Branching model

- Es una convención utilizada en la gestión y control de versiones de un proyecto, objetivosimplificar la gestión de cambios
- Los branches (ramas, trees, code lines) permiten paralelizar el desarrollo de features, fixes y mejoras.
- Los branches child tienen un parent a partir del cual fueron creados.
- Un branch que no tiene parent es denominado trunk branch o mainline.

---

![Branching1](images/git/branching1.png)

---

![Branching1](images/git/branching2.png)

---

## Comandos Básicos de GIT

<!-- .slide: style="font-size: 0.83em" -->

- `git init`: Inicializa un nuevo repositorio.
- `git set remote`: Setea la URL remota del upstream (referencia al repositorio productivo).
- `git status`: Muestra el estado actual de los cambios en el repositorio.
- `git add`: Agrega determinados archivos para ser trackeados.
- `git checkout -b`: Permite crear nuevos branches o ramas.
- `git branch`: Permite visualizar y ejecutar acciones sobre las ramas existentes.
- `git pull`: Actualiza localmente los últimos cambios del upstream.
- `git push`: Sube los cambios locales al upstream.
- `git commit`: Informa un nuevo conjunto de cambios.

---

### Buenas prácticas

- Se recomienda no trabajar sobre la rama master o main
- Para los cambios en desarrollo, utilizar el branch develop o features
- Para fixes de urgencia, se utilizan branches hot fix.
- También se pueden utilizar branches improve o fix si son necesarios.

---

## Github

- GitHub es una plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git.
  Se utiliza principalmente para la creación de código fuente de programas de computadora.
- [Link a Github](https://github.com/)
- Permite una visualización más amigable de los repositorios GIT.

---

## Instalación

- Descargar GIT desde [https://git-scm.com/download/win](https://git-scm.com/download/win)
- Configurar nombre de usuario y mail

```bash
git config --global user.name "FIRST_NAME LAST_NAME"
git config --global user.email "MY_NAME@example.com"
```

- Clonar repositorio

<!--TODO: SE RECOMIENDA PONER TODOS LOS REPOSITORIOS COMO PARTE DE LA ORGANIZACIÓN PARA TENER MAYOR CONTROL DE LAS CORRECCIONES-->

```bash
git clone https://github.com/emikohmann/ucc-arqsoft-1-2023.git
```

---

## Instalación

- Crear un branch con el nombre del grupo grupo-{numero}

```bash
cd ucc-arqsoft-1-2023
git checkout -b grupo-1
```

- Hacer push desde una cuenta

```bash
git status
git add .
git commit -m “Cambio”
git push origin grupo-1
```

---

¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

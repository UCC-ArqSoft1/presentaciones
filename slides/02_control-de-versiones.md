---
title: Control de Versiones
theme: solarized
slideNumber: true
---

# Control de Versiones

<style>
.small{
	font-size: 0.5em
}
</style>

---

## Temario

<!-- .slide: style="font-size: 0.70em" -->

1. Control de versiones
2. Introducción a GIT
3. Características principales
4. Branching model
5. Comandos básicos
6. Buenas prácticas
7. Plataforma Github
8. Ejercicio de branchs
9. Pull Request & Drafts
10. Ejercicio Pull Request
11. Conventional Commits
12. Ejercicios de conventional commits

---

## Bibliografía

[![Book](images/git/book_git.png)](https://git-scm.com/book/en/v2)

---

### Recuerdas lo que vimos en laboratorio de Computación II?

[Git (parte 1)](https://ucc-labcompu2.github.io/filminas/U2_git.html#/)

[Git (parte 2)](https://ucc-labcompu2.github.io/filminas/U2_git_avanzado.html#/)

---

## Control de versiones

<!-- .slide: style="font-size: 0.70em" -->

Se llama control de versiones a la gestión de los diversos cambios que se realizan sobre los elementos de algún producto o una configuración del mismo. Una versión, revisión o edición de un producto, es el estado en el que se encuentra el mismo en un momento dado de su desarrollo o modificación.

![CVS](images/git/csv.png)

---

**Git** es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente.

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

- Es una convención utilizada en la gestión y control de versiones de un proyecto
- Objetivo: Simplificar la gestión de cambios
- Los branches (ramas, trees, code lines) permiten paralelizar el desarrollo de features, fixes y mejoras.
- Los branches child tienen un parent a partir del cual fueron creados.
- Un branch que no tiene parent es denominado trunk branch o mainline.

---

![Branching1](images/git/branching1.png)

---

![Branching1](images/git/branching2.png)

---

## Comandos Básicos de GIT

<!-- .slide: style="font-size: 0.80em" -->

- `git init`: Inicializa un nuevo repositorio.
- `git clone`: Crea una copia local de un repositorio remoto.
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

- Se recomienda **no** trabajar sobre la rama master o main
- Para los cambios en desarrollo, utilizar el branch develop o features
- Para fixes de urgencia, se utilizan branches hot fix.
- También se pueden utilizar branches improve o fix si son necesarios.
- Emplear "conventional commits"

---

## Github

- GitHub es una plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git.
  Se utiliza principalmente para la creación de código fuente de programas de computadora.
- [Link a Github](https://github.com/)
- Permite una visualización más amigable de los repositorios GIT.

---

### Github Classroom

Es una herramienta que permite a profesoresgestionar aulas y tareas digitales.

- Crear tareas individuales o grupales
- Establecer fechas de entrega
- Seguimiento de las tareas
- Enviar comentarios

[Proyecto2025](https://classroom.github.com/a/imdgYQQs)

---

### Github Classroom

![Github Classroom](images/git/classroom.png)

---

### Ejercicio 1.0: Github Básico

1. Crear un repositorio en Github
2. Clonarlo en nuestra compu
3. Agregar un archivo **Readme.md**
4. Versionarlo localmente
5. Llevar los cambios a github

---

### Ejercicio 1.0: Github Básico

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/VOrSQApihmc?si=AgcGWvoFao7qvoYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Ejercicio 1.1: Github Branchs

1. Visualizar en que rama estamos trabajando
2. Cree una nueva rama (develop)
3. Vea el listado de todas las branchs
4. Cambie de rama
5. Realice algún cambio en el código y commit al repositorio local
6. Guarde los cambios en el repositorio remoto
7. Visualice en Github los commits de las branchs

---

Puedes usar este código de ejemplo para tu archivo **main.go**:

```bash
package main

import (
	"fmt"
)

func main(){
	fmt.Println("Hola Mundo")...
}
```

---

### Ejercicio 1.1: Github Branchs

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/m4-SueQ7l9E?si=47erfMTkklw0W5G9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Pull Request

Un pull request (PR) es una solicitud para revisar y aprobar cambios en un repositorio de código.

- Se propone incorporar cambios en una rama
- Se discute sobre los cambios propuestos
- Se detectan errores o problemas potenciales
- Se mantiene el proyecto limpio y estable

---

### Draft

Es una solicitud de incorporación de cambios que aún no está lista para revisión.

---

### Ejercicio 2: Github - Pull Request

<!-- .slide: style="font-size: 0.90em" -->

1. Cree un Pull Request en github
   - El _título_ del PR debe ser el adecuado
   - La _descripción_ debe agregar un detalle de los cambios que se realizaron
   - Se debe seleccionar _revisores_
2. Si hay algún error en el código, deje un comentario con la observación.
3. Realice cambios en la rama para solucionar el error detectado.
4. Realice un pull de los cambios para actualizar la rama remota
5. Verifique si el Pull Request es correcto -> Merge

---

### Ejercicio 2: Github - Pull Request

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/j3Su-k84F4Y?si=3atFdV09xWoBoHP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Conventional commits

Es una convención en el formato de los mensajes de los commits.
Esta convención define una serie de reglas que hacen muy sencillo tanto la legibilidad del histórico del repositorio
como el poder tener herramientas que automaticen procesos basándose en el historial de commits.

[Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

---

### Conventional commits

Posee la siguiente estructura:

```bash
<tipo>(ámbito opcional): <descripción>
```

Ejemplo:

```bash
fix(PDEC-2146): resize modal
```

---

### Conventional commits: Tipo

<!-- .slide: style="font-size: 0.65em" -->

Los tipos más comunes:

- **feat:** cuando se añade una nueva funcionalidad.
- **fix:** cuando se arregla un error.
- **chore:** tareas rutinarias que no sean específicas de una feature o un error como por ejemplo añadir contenido al fichero .gitignore o instalar una dependencia.
- **test:** si añadimos o arreglamos tests.
- **docs:** cuando solo se modifica documentación.
- **build:** cuando el cambio afecta al compilado del proyecto.
- **ci:** el cambio afecta a ficheros de configuración y scripts relacionados con la integración continua.
- **style:** cambios de legibilidad o formateo de código que no afecta a funcionalidad.
- **refactor:** cambio de código que no corrige errores ni añade funcionalidad, pero mejora el código.
- **perf:** usado para mejoras de rendimiento.
- **revert:** si el commit revierte un commit anterior. Debería indicarse el hash del commit que se revierte.

---

### Conventional commits: Ventajas

- Conseguimos un acuerdo en el formato de los commits con todo el equipo de desarrollo tanto interno como externo
- Armonía en el histórico del repositorio
- Generación automática de CHANGELOG
- Versionado automático del proyecto

---

### Ejercicio 3: Conventional Commits

1. Cree una nueva rama. El nombre de la rama debe serguir una convención.
2. Agregue código y realice un commit empleando "Conventional Commits".
3. Realice un Pull Request para integrar estos cambios con main.
4. Una vez mergeados los cambios, elimine la branch que ya no es necesaria.

---

### Ejercicio 3: Conventional Commits

<p class="small">(para ver en casa y repasar)</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/-AguKC9Me2s?si=5Wb2RwEjtFJ20VNe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

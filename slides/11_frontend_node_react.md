---
title: Frontend - Node + React
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

<section data-background-image="images/react/react-logo-banner.jpg">

<br><br><br><br><br><br>

<h1>Frontend - Node + React</h1>

</section>

---

## Temario
- Node JS
- npm
- npx
- React

---

### Node.js 

Es un entorno de ejecución de JavaScript que permite ejecutar código JS fuera del navegador (por ejemplo, en la terminal o en un servidor).
Lo usamos porque muchas herramientas modernas de desarrollo frontend están escritas en JavaScript y necesitan un entorno para ejecutarse.

Si necesitas tener varias versiones de node.js en tu computadora investiga sobre: [nvm](https://github.com/coreybutler/nvm-windows) 

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

[https://react.dev/](https://react.dev/)

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
4. Ingresar a localhost:3000

---

### Vite

Es una herramienta de desarrollo de Frontend que busca proporcionar una experiencia de desarrollo más rápida y eficiente para proyectos web modernos. 

Su objetivo principal es acelerar el proceso de construcción y compilación de aplicaciones web, ofreciendo tiempos de arranque, compilación y recarga muy breves.

[https://es.vite.dev/guide/](https://es.vite.dev/guide/)

---

### Vite

1. Ejecutar el siguiente comando para inicializar el proyecto:
```
npm create vite@latest
```
2. Colocar un nombre al proyecto
3. Seleccionar el framework: React
4. Seleccionar el lenguaje: JavaScript
5. Ingresar a la carpeta creada `cd nombre-proyecto`
6. Ejecutar `npm install`
7. Ejecutar `npm run dev`
8. Ingresar a localhost:5173

---

### Instalación de React Usando Vite

<iframe width="560" height="315" src="https://www.youtube.com/embed/7SjTALRxnjA?si=LnK2mq4n9fEUPqFa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### React 1: Crear un Login Básico

1. Crear un archivo **Login.jsx** similar al siguiente:

![Login](images/react/ejemplo-login.png)

2. Al presionar **Ingresar**, si el usuario y password es 'admin', mostrar por consola "Login OK", sino "Login Incorrecto".

---

### React 1: Crear un Login Básico

<iframe width="560" height="315" src="https://www.youtube.com/embed/CgZpHKvEaGg?si=0XKvTBIcz3UPBAxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Redirección de Rutas

1. Ejecutar `npm install react-router-dom`
2. Leer la documentación [routing](https://reactrouter.com/start/declarative/routing)

---

### React 2: Redirección de Rutas

1. Ejecutar `npm install react-router-dom`
2. Si el login es exitoso redireccionar a "/actividades"
3. Use la siguiente información para crear una pantalla donde se pueda mostrar adecuadamente

```javaScript
const activities = [
  {
    nombre: "taekwondo",
    descripcion: "Arte marcial coreana",
    horarios: [
      { dia: 2, "hora-inicio": "18:30", "hora-fin": "20:00" },
      { dia: 4, "hora-inicio": "18:30", "hora-fin": "20:00" }
    ]
  },
  {
    nombre: "zumba",
    descripcion: "ritmos latinos",
    horarios: [
      { dia: 1, "hora-inicio": "19:30", "hora-fin": "20:30" },
      { dia: 3, "hora-inicio": "19:30", "hora-fin": "20:30" }
    ]
  }
];

const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];



```

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

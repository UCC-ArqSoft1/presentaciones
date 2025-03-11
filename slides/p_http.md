---
title: HTTP
theme: solarized
slideNumber: true
---

# HTTP

---

## Temario

---

## HTTP: Generalidades

Hypertext Transfer Protocol (HTTP) es un protocolo de la capa de aplicación para la transmisión de documentos hipermedia, como HTML. 
Fue diseñado para la comunicación entre los navegadores y servidores web.

Es un protocolo sin estado, es decir, que cada petición es independiente.
Aunque en la mayoría de casos se basa en una conexión del tipo TCP/IP, se puede usar sobre cualquier capa de transporte segura (no como UDP, que puede perder mensajes).

----

### HTTP: Generalidades
Sigue el modelo cliente-servidor, en el que un cliente establece una conexión con el servidor, realiza una petición y espera hasta que recibe una respuesta.
una página web completa resulta de la unión de distintos sub-documentos recibidos, como, por ejemplo: un documento que especifique el estilo de maquetación de la página web (CSS), el texto, las imágenes, vídeos, scripts, etc...

![Fetching a Page](images/http/fetching-a-page.svg)

---

### HTTP: Generalidades
Clientes y servidores se comunican intercambiando mensajes individuales. 
Los mensajes que envía el cliente se llaman **peticiones**, y los mensajes enviados por el servidor se llaman 
**respuestas**

![Capas de HTTP](images/http/http-layers.svg)

----

### Arquitectura de los sistemas basados en HTTP

Las peticiones son enviadas por una entidad: el agente del usuario (normalmente un navegador Web),
Entre cada petición y respuesta, hay varios intermediarios, normalmente denominados proxies, los cuales realizan distintas 
funciones, como: gateways (puerta de enlace) o caches (almacena termporalmente respuestas http).

![Cadena de Cliente-Servidor](images/http/client-server-chain.svg)

---

# ### HTTP: Servidor Web

Un servidor "sirve" los datos pedidos por el cliente.
Un servidor se considera una entidad única, aunque puede estar formado por varios elementos:
- Balanceador de carga
- Gestores de cache, 
- Bases de datos, 
- Correo electrónico.

Un servidor no tiene que ser un único equipo físico.
Varios servidores pueden estar funcionando en un único computador.

---

### Proxies

Pueden modificar o no las peticiones que pasan por ellos, cumpliendo estas funciones: 
- caching (la caché puede ser pública o privada, como la caché de un navegador)
- filtrado (como un anti-virus, control parental, ...)
- balanceo de carga de peticiones (para permitir a varios servidores responder a la carga total de peticiones que reciben)
- autentificación (para el control al acceso de recursos y datos)
- registro de eventos (para tener un histórico de los eventos que se producen)

---

### Características del protocolo HTTP

- Es sencillo
Esta pensado y desarrollado para ser leído y fácilmente interpretado por las personas. Facil la depuración de errores, 
- HTTP es extensible
Las cabeceras de han hecho que sea fácil de ampliar y de experimentar. 
- HTTP es un protocolo con sesiones, pero sin estados
No guarda ningún dato entre dos peticiones en la mísma sesión. El uso de cookies permite guardar datos con respecto a la sesión de comunicación. 
- HTTP y conexiones
No se requiere que se mantenga una conexión continua entre los participantes en la comunicación. 

---

### ¿Qué se puede controlar con HTTP?

- cache: que podemos almacenar y por cuanto tiempo.
- Flexibilidad del requisito de origen (cabeceras http)
- Autentificación
- Proxies y tunneling (esconder IP en intranets)
- Sesiones (cookies)

---

### Flujo de HTTP: Comunicación Cliente-Servidor

1. Abre una conexión TCP
2. Hace una petición HTTP
```
GET / HTTP/1.1 Host: developer.mozilla.org Accept-Language: fr
```
3. Leer la respuesta enviada por el servidor:
```html
    HTTP/1.1 200 OK
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Server: Apache
    Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
    ETag: "51142bc1-7449-479b075b2891b"
    Accept-Ranges: bytes
    Content-Length: 29769
    Content-Type: text/html

    <!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
```
4. Cierre o reuso de la conexión para futuras peticiones.

---

## Mensajes HTTP

- Peticiones
- Respuestas

---

## Mensajes HTTP: Peticiones

Se compone de:
- Un **método HTTP**: GET, POST, OPTIONS, HEAD, que defina la operación que el cliente quiera realizar. 
- La **dirección** o URL del recurso.
- La versión del protocolo HTTP. 
- **Cabeceras HTTP** opcionales, que aportam información adicional a los servidores.
- Un **cuerpo de mensaje**, en algún método, como puede ser POST, en el cual envía la información para el servidor.

---

## Mensajes HTTP: Peticiones

![Peticiones](images/http/http-request.svg)

---

## Mensajes HTTP: Respuestas

Las respuestas están formadas por:
- La **versión** del protocolo HTTP 
- Un **código de estado**, indicando si la petición ha sido exitosa o no.
- Un **mensaje de estado**, una breve descripción del código de estado.
- **Cabeceras HTTP**, como las de las peticiones.
- **Opcionalmente**, el recurso que se ha pedido.

---

### Ejercicio: Análisis

1. Abrir alguna web:
   - [Tienda Claro](https://tienda.claro.com.ar)
   - [Mercado Libre](https://www.mercadolibre.com.ar/)
2. Abrir las herramientas de desarrollo
3. Recargar la página
4. Verificar toda la información de la Petición y la Respuesta

---

Más info en:

[MDN Web Docs](https://developer.mozilla.org/es/docs/Web/HTTP&#41)

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

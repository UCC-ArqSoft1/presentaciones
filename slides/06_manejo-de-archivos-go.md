---
title: Manejo de Archivos en GO
theme: solarized
slideNumber: true
---

<style>
h1 {
  background-color: rgba(255,255,255,.7);
}
</style>

<section data-background-image="images/go/background.jpeg">

<br><br><br><br><br><br>

<h1> Manejo de Archivos</h1>

</section>

---

## Temario

- Defer
- Crear un archivo
- Escribir un archivo
- Leer un archivo

---

## Defer

Aplaza la ejecución de una función hasta que finaliza la función que la rodea. Se utiliza para garantizar que se realicen acciones de limpieza al terminar una función.

Usos de defer:

- Gestionar recursos
- Garantizar que las acciones de limpieza se realicen al finalizar una función
- Intercalar diferir correctamente al llamar a funciones que devuelven un error

---

## Defer

```go []
func main(){
	defer fmt.Println(3)
	fmt.Println(1)
	fmt.Println(2)
}
```

---

## Manejo de Archivos

Se realiza mediante paquetes y funciones que permiten leer, escribir y recorrer directorios.

---

## Manejo de Archivos

Crear un archivo en Go.

```go []
const path = "hola.txt"

func CreateFile(path string) error {
  file, err := os.Create(path)
  defer file.Close()

  if err != nil {
     return err
  }

  return nil
}
```

---

## Escribir un Archivo: WriteFile

<!-- .slide: style="font-size: 0.90em" -->

```go []
func WriteFile(path string, content []byte) error {
  if err := os.WriteFile(path, content, os.ModeAppend); err != nil {
     return err
  }
  return nil
}
```

Ejemplo:

```go []
data := []byte("Hola mundo!")
err := os.WriteFile("archivo.txt", data, 0644)
//0644 el propietario puede leer-escribir - otros usuarios solo lectura
```

- Crea o sobreescribe el archivo.
- Escribe todos los datos que se envien como parámetro.
- Cierra el archivo automáticamente.

---

## Escribir un Archivo: Write

```go []
file, err := os.Create("archivo.txt")
defer file.Close()
_, err = file.Write([]byte("Hola mundo"))
```

- Se requiere abrir o crear el archivo primero (os.Open, os.Create, etc.).
- Ofrece más control: se puede escribir en varias partes del archivo, usar **Seek** para moverse dentro del archivo, escribir en **chunks**, etc.

---

## Escribir un Archivo

<!-- .slide: style="font-size: 0.60em" -->

<table>
<thead>
  <tr>
  <th></th>
  <th>os.WriteFile</th>
  <th>Write</th>
  </tr>
</thead>
<tbody>
<tr>
  <td>
  PROS
  </td>
  <td>
   <li>Simple para archivos pequeños. </li>
   <li>No es necesario abrir ni cerrar el archivo manualmente.</li>
  </td>
  <td>
  <li>Ofrece más control (ej. escribir en varias partes) </li>
  <li>Para archivos grandes o escritura continua </li>
  <li>Se puede escribir en diferentes posiciones del archivo</li>
  </td>
</tr>
<tr>
  <td>
  CONS
  </td>
  <td>
  <li>No es eficiente para escribir grandes volúmenes de datos o escribir por partes (streams). </li>
  <li>No se pueden hacer varias escrituras seguidas fácilmente.</li>
  </td>
  <td>
  <li>Se debe abrir y cerrar el archivo manualmente. </li> 
  <li>Ligeramente más código. </li>
  </td>
</tr>
</tbody>
</table>

---

## Lectura de archivos

<!-- .slide: style="font-size: 0.80em" -->

```go []
func readFile(path string) ([]byte, error) {

  file, err := os.Open(path)
  if err != nil {
     return nil, err
  }

  defer func() {
     err = file.Close()
     if err != nil {
        log.Fatal(err)
     }
  }() //Se agregan parentesis para que se ejecute la función

  bytes, err := ioutil.ReadAll(file)
  if err != nil {
     return nil, err
  }

  return bytes, nil
}
```

---

### Close

Si el archivo no se cierra pueden ocurrir diversos problemas:

- Parte del contenido puede quedar en la memoria y no llegar a escribirse al disco.
- El recurso asignado no se libera y ocurren errores como "too many open files"
- Puede bloquear otros procesos

---

### Ejercicio 6: Gestor de Contactos

<!-- .slide: style="font-size: 0.70em" -->

Crear un programa que permita agregar y mostrar contactos.

- Los **contactos** deben poseer: nombre, email y teléfono (**struc**).
- Los contactos se deben almacenar en un archivo **json**.
- Se debe hacer manejo de errores para los archivos.

Ejemplo de salida de pantalla:

```bash
==== GESTOR DE CONTACTOS ====
1. Agregar un contacto
2. Mostrar todos los contactos
3. Salir
Elige una opción: 1
Nombre: Agus
Email: agus@email.com
Phone: 3513892288
```

Ejemplo de archivo **json**:

```bash
[
  {
    "name": "Agus",
    "e-mail": "agus@email.com",
    "phone": "3513892288"
  }
]
```

---

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

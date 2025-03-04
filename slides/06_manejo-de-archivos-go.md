---
title: Manejo de Archivos en GO
theme: solarized
slideNumber: true
---

# Manejo de Archivos en GO

---

## Temario

---

## Defer

```go []
func printHello() {
  fmt.Println("Hello World")
}

func main() {
  defer printHello()
}

//Se puede invocar una función anónima:
func main() {
  defer func() {
     fmt.Println("Hello World")
  }()
}
```

---

## Manejo de Archivos

Crear un archivo en Go.

```go []
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

## Escribir un Archivo

```go []
func WriteFile(path string, content []byte) error {
  if err := os.WriteFile(path, content, os.ModeAppend); err != nil {
     return err
  }
  return nil
}
```

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

## ¿Dudas, Preguntas, Comentarios?

![Preguntas](images/pregunta.gif)

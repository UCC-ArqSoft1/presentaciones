function numAleatorio(a, b) {
  document.prueba1.textoP.value = Math.round(
    Math.random() * (b - a) + parseInt(a)
  );
}

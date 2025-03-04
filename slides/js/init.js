window.onload = function () {
  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "//use.fontawesome.com/releases/v5.8.1/css/all.css";
  //link.integrity = "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf";
  link.crossorigin = "anonymous";
  head.appendChild(link);
};

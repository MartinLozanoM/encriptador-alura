function encriptarTexto() {
  const textArea = document.getElementById("encriptar-texto").value;

  const newText = textArea
    .replaceAll("a", "ai")
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  if (textArea.length == 0) {
  } else {
    document
      .getElementById("pantalla-sin-mensaje")
      .classList.add("desactivar-elemento");

    document
      .getElementById("pantalla-con-mensaje")
      .classList.remove("desactivar-elemento");

    document.getElementById("mensaje-encriptado").innerHTML = newText;
  }
}

function desencriptarTexto() {
  const textArea = document.getElementById("encriptar-texto").value;
  const newText = textArea
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  document.getElementById("mensaje-encriptado").innerHTML = newText;
}

function copiarTexto() {
  const textoACopiar = document.getElementById("mensaje-encriptado");
  const botonCopiar = document.getElementById("boton-copiar");

  navigator.clipboard.writeText(textoACopiar.textContent);

  botonCopiar.style.backgroundColor = "#06C85B";
  botonCopiar.style.color = "#ffffff";
  botonCopiar.innerHTML = "Copiado!";

  setTimeout(function () {
    botonCopiar.style.backgroundColor = "#052051";
    botonCopiar.innerHTML = "Copiar";
  }, 1000);
}

function borrarEncriptador() {
  const mensajeEncriptado = document.getElementById("mensaje-encriptado");
  document.getElementById("encriptar-texto").value = "";
  mensajeEncriptado.innerHTML = "";
  document
    .getElementById("pantalla-sin-mensaje")
    .classList.remove("desactivar-elemento");

  document
    .getElementById("pantalla-con-mensaje")
    .classList.add("desactivar-elemento");
}

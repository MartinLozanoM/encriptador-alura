function encriptarTexto() {
  const textArea = document.getElementById("encriptar-texto").value;

  const newText = textArea
    .replaceAll("a", "ai")
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  document
    .getElementById("pantalla-sin-mensaje")
    .classList.add("desactivar-elemento");

  document
    .getElementById("pantalla-con-mensaje")
    .classList.remove("desactivar-elemento");

  document.getElementById("mensaje-encriptado").innerHTML = newText;
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

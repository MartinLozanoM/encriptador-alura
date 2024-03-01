const textArea = document.getElementById("encriptar-texto");
const mensaje = document.getElementById("mensaje-encriptado");
const pantallaSinMensaje = document.getElementById("pantalla-sin-mensaje");
const pantallaConMensaje = document.getElementById("pantalla-con-mensaje");

function botonEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  if (textoEncriptado.length != 0) {
    pantallaSinMensaje.classList.add("desactivar-elemento");

    pantallaConMensaje.classList.remove("desactivar-elemento");

    mensaje.innerHTML = textoEncriptado;
  }
}

function encriptar(stringEncriptado) {
  let vocalesEncriptadas = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < vocalesEncriptadas.length; i++) {
    if (stringEncriptado.includes(vocalesEncriptadas[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        vocalesEncriptadas[i][0],
        vocalesEncriptadas[i][1]
      );
    }
  }

  return stringEncriptado;
}

function botonDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.innerHTML = textoDesencriptado;
}

function desencriptar(stringDesencriptado) {
  let vocalesEncriptadas = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < vocalesEncriptadas.length; i++) {
    if (stringDesencriptado.includes(vocalesEncriptadas[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        vocalesEncriptadas[i][1],
        vocalesEncriptadas[i][0]
      );
    }
  }

  return stringDesencriptado;
}

function copiarTexto() {
  const botonCopiar = document.getElementById("boton-copiar");

  navigator.clipboard.writeText(mensaje.textContent);

  botonCopiar.style.backgroundColor = "#06C85B";
  botonCopiar.style.color = "#ffffff";
  botonCopiar.innerHTML = "Copiado!";

  setTimeout(function () {
    botonCopiar.style.backgroundColor = "#052051";
    botonCopiar.innerHTML = "Copiar";
  }, 1000);
}

function borrarEncriptador() {
  document.getElementById("encriptar-texto").value = "";

  mensaje.innerHTML = "";

  pantallaSinMensaje.classList.remove("desactivar-elemento");

  pantallaConMensaje.classList.add("desactivar-elemento");
}

// function encriptarTexto() {
//   const newText = textArea.value
//     .replaceAll("a", "ai")
//     .replaceAll("e", "enter")
//     .replaceAll("i", "imes")
//     .replaceAll("o", "ober")
//     .replaceAll("u", "ufat");

//   if (newText.length != 0) {
//     pantallaSinMensaje.classList.add("desactivar-elemento");

//     pantallaConMensaje.classList.remove("desactivar-elemento");

//     mensaje.innerHTML = newText;
//   }
// }

// function desencriptarTexto() {
//   const newText = textArea.value
//     .replaceAll("ai", "a")
//     .replaceAll("enter", "e")
//     .replaceAll("imes", "i")
//     .replaceAll("ober", "o")
//     .replaceAll("ufat", "u");

//   mensaje.innerHTML = newText;
// }

const inputTexto = document.querySelector(".input-text");
const textarea = document.querySelector(".textarea");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const muneco = document.querySelector(".muneco-on");
const copiartexto = document.querySelector(".copiartexto");
const btncopiar = document.querySelector(".btncopiar");
const letra = ["e", "i", "a", "o", "u"];
const codigo = ["enter", "imes", "ai", "ober", "ufat"];
let textocod = "";

//--------------------Eventlisener------------------
btnEncriptar.addEventListener("click", () => {
  textocod = encriptar(inputTexto.value);
  enviar(textocod);
  //console.log(textocod);
});

btnDesencriptar.addEventListener("click", () => {
  textocod = desencriptar(inputTexto.value);
  enviar(textocod);
  //console.log(textocod);
});

btncopiar.addEventListener("click", () => {
  copiar();
});

//-------------Functions Encripting--------------------
function encriptar(texto) {
  texto = texto.toLowerCase();
  for (let i = 0; i < letra.length; i++) {
    if (texto.includes(letra[i])) {
      texto = texto.replaceAll(letra[i], codigo[i]);
    }
  }
  return texto;
}

function desencriptar(texto) {
  texto = texto.toLowerCase();
  for (let i = 0; i < codigo.length; i++) {
    if (texto.includes(codigo[i])) {
      texto = texto.replaceAll(codigo[i], letra[i]);
    }
  }
  return texto;
}

//---------------Functions Actions-----------------------
function enviar(texto) {
  console.log(texto);
  if (texto != "") {
    textarea.value = texto;
    muneco.style.display = "none";
    copiartexto.style.display = "flex";
    inputTexto.value = "";
    inputTexto.placeholder = "Ingrese aqui su texto";
  }
}

function copiar() {
  navigator.clipboard.writeText(textarea.value);
  muneco.style.display = "flex";
  copiartexto.style.display = "none";
  console.log(navigator.clipboard.readText);
}

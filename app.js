const inputTexto = document.querySelector(".input-text");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const btncopiar = document.querySelector(".btncopiar");

btnEncriptar.addEventListener("click", () => {
  console.log("Cliqueado");
});

function encriptar(texto) {
  let letra = ["e", "e", "a", "o", "u"];
  let codigo = ["enter", "imes", "ai", "ober", "ufat"];
  texto = texto.toLowercase();

  for (let i = 0; i < letra.length; i++) {
    if (texto.includes(letra[i])) {
      texto = texto.replaceall(letra[i], codigo[i]);
    }
  }
  return texto;
}

// btnEncriptar.onclick(console.log("apretado"));

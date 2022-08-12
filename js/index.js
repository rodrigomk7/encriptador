// Constantes para función de codificación/decodificación.
const ENCRIPTAR = false;
const DESENCRIPTAR = true;

// Variables de Objetos del DOM.
var textBox = document.querySelector("#textBox");
var textoEncriptado = document.querySelector(".textoEncriptado");
var imagen = document.querySelector(".imagenSinMensaje");
var mensaje1 = document.querySelector(".mensaje1");
var mensaje2 = document.querySelector(".mensaje2");
var btnEncriptar = document.querySelector(".btnEncriptar");
var btnDesencriptar = document.querySelector(".btnDesencriptar");
var btnCopiar = document.querySelector(".btnCopiar");

//Funciones del codificador/decodificador
function encriptar(texto) {
    return coder(texto, ENCRIPTAR);
}

function desencriptar(texto) {
    return coder(texto, DESENCRIPTAR);
}

function coder(texto, proceso) {
    let matrizCodigo = [
        ["e", "xm"],
        ["i", "ty"],
        ["a", "ry"],
        ["o", "oj"],
        ["u", "god"]
    ]

    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        texto = texto.replaceAll(matrizCodigo[i][+proceso], matrizCodigo[i][+(!proceso)]);
    }

    return texto;
}

//Funciones de Botones.
function btnEncriptarClick() {
    if (textBox.value != "") {
        switchMensaje(false);
        textoEncriptado.innerHTML = encriptar(textBox.value);
    } else {
        switchMensaje(true);
    }
}

function btnDesncriptarClick() {
    if (textBox.value != "") {
        switchMensaje(false);
        textoEncriptado.innerHTML = desencriptar(textBox.value);
    } else {
        switchMensaje(true);
    }
}

function btnCopiarClick(event) {
    navigator.clipboard.writeText(textoEncriptado.innerHTML);
}

//Funciones varias
function switchMensaje(estado) {
    if (estado) {
        var displayPrimario = "block";
        var displaySecundario = "none"
    } else {
        var displayPrimario = "none";
        var displaySecundario = "block"
    }

    imagen.style.display = displayPrimario;
    textoEncriptado.style.display = displayPrimario;
    mensaje1.style.display = displayPrimario;
    mensaje2.style.display = displayPrimario;
    btnCopiar.style.display = displaySecundario;
    textoEncriptado.style.display = displaySecundario;
}

//Asignación de funciones a los botones.
btnEncriptar.onclick = btnEncriptarClick;
btnDesencriptar.onclick = btnDesncriptarClick;
btnCopiar.onclick = btnCopiarClick;
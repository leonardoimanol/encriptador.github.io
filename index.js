let area = document.querySelector(".area")
let encriptar = document.querySelector(".encriptar")
let desencriptar = document.querySelector(".desencriptar")
let imagenn = document.querySelector(".imagenn")
let subtitulo = document.querySelector(".subtitulo")
let parrafo = document.querySelector(".parrafo")
let mensaje = document.querySelector(".mensaje")
let copiar = document.querySelector(".copiar")
let escuchar = document.querySelector(".escuchar")

//cursor
area.focus()

////////////////////////////////////////////////////////

function validarEntrada(texto) { //validar que el texto recibido solo tenga minusculas, sin acentos o caracteres especiales
    let regexp= /[a-z\ñ\s]+$/ 
    if (regexp.test(texto)) {
        return area.value
    }
    else {
        return alert("Solo letras minúsculas y sin acentos")
    }
}

function ocultarObjetos() { //oculta elementos agregando la clase ocultar de css
    imagenn.classList.add("ocultar")
    subtitulo.classList.add("ocultar")
    parrafo.classList.add("ocultar")
}

function encriptarTexto() {
    let texto = validarEntrada(area.value) //validar el texto
    area.focus()
    let encriptado = texto //el contenido de texto pasa a encriptado
    .replaceAll("e", "enter") //reemplazar el contenido 
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")
    mensaje.value = encriptado //el contenido que se mostrara en el cuadro derecho sera el nuevo contenido de "encriptado"
    ocultarObjetos() //ocultar contenido llamando a la funcion
}

function desencriptarTexto() {
    let texto = area.value //el contenido de texto sera el valor de area(el primer valor dado)
    let desencriptado = texto //el contenido de texto pasa a desencriptado
    .replaceAll("enter", "e") //reemplazar el contenido
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")
    mensaje.value = desencriptado
    ocultarObjetos()
}

////////////////////////////////////////////////////////

function pegarTexto() {
    navigator.clipboard.readText().then(texto => { //recuperar el texto en el portapapeles y pegarlo en "area"(cuadro de la izquierda)
        area.value = texto
    })
}

function copiarTexto() {
    let texto = mensaje.value 
    navigator.clipboard.writeText(texto)
    mensaje.value = ""
    let area = document.querySelector(".area")
    area.value = ""
    area.focus()
    pegarTexto()
}

function traductor() {
    let texto = mensaje.value
    let voz = new SpeechSynthesisUtterance() //crear nueva voz
    voz.text = texto
    voz.lang = "es-Es"
    window.speechSynthesis.speak(voz)
}

////////////////////////////////////////////////////////

//invocarFunciones
encriptar.onclick = encriptarTexto
desencriptar.onclick = desencriptarTexto
copiar.onclick = copiarTexto
escuchar.onclick = traductor
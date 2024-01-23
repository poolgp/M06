// Define palabras y otras configuraciones
let palabras = [
    // ... (lista de palabras)
];

const maxErrores = 6;
let palabraSeleccionada = "";
let palabraDescubierta = [];
let letrasUtilizadas = [];
let errores = 0;

// Función para seleccionar una palabra al azar
function seleccionarPalabra() {
    let palabraIndex = Math.floor(Math.random() * palabras.length);
    palabraSeleccionada = palabras[palabraIndex].nombre.toUpperCase();
    palabraDescubierta = Array(palabraSeleccionada.length).fill('_');
}

// Función para mostrar la máscara de la palabra
function mostrarPalabra() {
    let palabraElement = document.getElementById("palabra");
    palabraElement.textContent = palabraDescubierta.join(" ");
}

// Función para mostrar el dibujo del penjat
function mostrarDibujo() {
    // Implementa la lógica para mostrar el dibujo del penjat según los errores
}

// Función para actualizar la información de errores
function actualizarErrores() {
    document.getElementById("score").textContent = errores;
}

// Función para mostrar la imagen y la información educativa al finalizar el juego
function mostrarFinalizacion(imagenSrc, descripcion) {
    let imgFinal = document.querySelector(".imgFinal img");
    imgFinal.src = imagenSrc;

    let descripcionFinal = document.getElementById("descripcion");
    descripcionFinal.textContent = descripcion;

    // Implementa la lógica para mostrar el bloque de finalización y ocultar otras secciones
}

// Función principal del juego
function iniciarJuego() {
    // Reiniciar variables
    seleccionarPalabra();
    letrasUtilizadas = [];
    errores = 0;

    // Implementa la lógica para reiniciar la interfaz gráfica

    mostrarPalabra();
    mostrarDibujo();
    actualizarErrores();
}

// Event listener para el formulario de inicio
document.getElementById("idForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let inputNameUser = document.getElementById("inputNameUser").value;

    // Implementa la lógica para comenzar el juego con el nombre del usuario
    iniciarJuego();
});

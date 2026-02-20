console.log(" JAVASCRIPT cargado correctamente ");

// 1. Seleccionar el botón por su ID
const boton = document.querySelector("#btn");
const titulo = document.querySelector("#titulo");

// 2. Agregar un evento de clic al botón
boton.addEventListener("click", function() {
    titulo.textContent = "¡Has hecho click!";
});
console.log(" JAVASCRIPT cargado correctamente ");

// 1. Seleccionar el botón por su ID
const boton = document.querySelector("#btn");

// 2. Agregar un evento de clic al botón
boton.addEventListener("click", function() {
    // Seleccionar los inputs de las notas
    const nota1 = document.querySelector("#nota1");
    const nota2 = document.querySelector("#nota2");

    // Obtener los valores de las notas y convertirlos a números
    const valorNota1 = Number(nota1.value);
    const valorNota2 = Number(nota2.value);

    // Calcular la media de las notas
    const media = (valorNota1 + valorNota2) / 2;

    if (media >= 5) {
        alert("¡APROBADO! La media de las notas es: " + media.toFixed(2));
    } else {
        alert("!SUSPENSO! La media de las notas es: " + media.toFixed(2));
    }
});
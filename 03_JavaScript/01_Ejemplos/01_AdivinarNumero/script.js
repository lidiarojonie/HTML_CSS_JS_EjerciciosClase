// Creamos el número secreto
let numeroSecreto = 7;

//Creamos una variable para almacenar el número de intentos por el usuario
let intentos = 0;

// Creamos una variable para almacenar el número introducido por el usuario
let numeroUsuario = 0;

// Bucle while: se repetirá mientras no acierte
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = Number(prompt("Introduce un número entre 1 y 10:"));

    // Sumamos intentos
    intentos++;

    // Comprobamos si el número es menor
    if (numeroUsuario < numeroSecreto) {
        alert("El número es mayor");
    }

    // Comprobamos si el número es mayor
    else if (numeroUsuario > numeroSecreto) {
        alert("El número es menor");
    }

    // Si no es menor ni mayor (o sea, es igual) salimos del bucle y mostramos el mensaje de felicitación
    else {
        alert("¡Felicidades! Has acertado el número en " + intentos + " intentos.");
    }
}
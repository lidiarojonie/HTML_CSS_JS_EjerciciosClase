console.log("JAVASCRIPT cargado correctamente");

// Obtener referencias a los elementos del DOM
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const btnSuma = document.getElementById("btn-suma");
const btnResta = document.getElementById("btn-resta");
const btnMultiplicar = document.getElementById("btn-multiplicar");
const btnDividir = document.getElementById("btn-dividir");
const resultadoP = document.querySelector(".resultado");
const errorP = document.querySelector(".error");

// En vez de calcular, redirige a la página premium
function calcular(operacion) {
    const num1 = inputNum1.value.trim();
    const num2 = inputNum2.value.trim();

    // Validar que ambos inputs tengan valores válidos
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2)) || num1 === "" || num2 === "") {
        errorP.textContent = "Error: Tipo de dato no válido";
        resultadoP.textContent = "Resultado: ...";
        return;
    }

    // ¡La broma! Redirige a la página de suscripción Premium
    window.location.href = "premium.html";
}

// Agregar event listeners a los botones
btnSuma.addEventListener("click", () => calcular("btnSuma"));
btnResta.addEventListener("click", () => calcular("btnResta"));
btnMultiplicar.addEventListener("click", () => calcular("btnMultiplicar"));
btnDividir.addEventListener("click", () => calcular("btnDividir"));

// Validación visual de entradas no numéricas
inputNum1.addEventListener("input", () => {
    if (isNaN(inputNum1.value) && inputNum1.value.trim() !== "") {
        inputNum1.style.borderColor = "red";
    } else {
        inputNum1.style.borderColor = "#ccc";
    }
});

inputNum2.addEventListener("input", () => {
    if (isNaN(inputNum2.value) && inputNum2.value.trim() !== "") {
        inputNum2.style.borderColor = "red";
    } else {
        inputNum2.style.borderColor = "#ccc";
    }
});

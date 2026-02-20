console.log(" JAVASCRIPT cargado correctamente ");

// Obtener referencias a los elementos del DOM
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const btnSuma = document.getElementById("btn-suma");
const btnResta = document.getElementById("btn-resta");
const btnMultiplicar = document.getElementById("btn-multiplicar");
const btnDividir = document.getElementById("btn-dividir");
const resultadoP = document.querySelector(".resultado");
const errorP = document.querySelector(".error");    

// Función para realizar la operación y mostrar el resultado
function calcular(operacion) {
    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);
    
    // Validar que ambos inputs tengan valores válidos
    if (isNaN(num1) || isNaN(num2) || inputNum1.value.trim() === "" || inputNum2.value.trim() === "") {
        errorP.textContent = "Error: Tipo de dato no válido";
        resultadoP.textContent = "Resultado: ...";
        return;
    }
    
    let resultado;
    switch (operacion) {
        case "btnSuma":
            resultado = num1 + num2;
            break;
        case "btnResta":
            resultado = num1 - num2;
            break;
        case "btnMultiplicar":
            resultado = num1 * num2;
            break;
        case "btnDividir":
            if (num2 === 0) {
                errorP.textContent = "Error: División por cero";
                resultadoP.textContent = "Resultado: ...";
                return;
            }
            resultado = num1 / num2;
            break;
    }
    
    // Si la operación fue exitosa, limpiar error y mostrar resultado
    errorP.textContent = "Error: ...";
    resultadoP.textContent = `Resultado: ${resultado}`;
}

// Agregar event listeners a los botones
btnSuma.addEventListener("click", () => calcular("btnSuma"));
btnResta.addEventListener("click", () => calcular("btnResta"));
btnMultiplicar.addEventListener("click", () => calcular("btnMultiplicar"));
btnDividir.addEventListener("click", () => calcular("btnDividir"));

// Opcional: Agregar validación para entradas no numéricas
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

console.log(" JAVASCRIPT cargado correctamente ");

// Obtener referencias a los elementos del DOM
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const btnSuma = document.getElementById("btn-suma");
const btnResta = document.getElementById("btn-resta");
const btnMultiplicar = document.getElementById("btn-multiplicar");
const btnDividir = document.getElementById("btn-dividir");
const resultadoP = document.querySelector(".resultado");    

// Función para realizar la operación y mostrar el resultado
function calcular(operacion) {
    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);
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
            resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero";
            break;
    }   
    resultadoP.textContent = `Resultado: ${resultado}`;
}

// Agregar event listeners a los botones
btnSuma.addEventListener("click", () => calcular("btnSuma"));
btnResta.addEventListener("click", () => calcular("btnResta"));
btnMultiplicar.addEventListener("click", () => calcular("btnMultiplicar"));
btnDividir.addEventListener("click", () => calcular("btnDividir"));


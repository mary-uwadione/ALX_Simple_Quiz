function add(number1,number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function divide(number1, number2) {
    return number1 / number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}

const addButton = document.getElementById("add");
const subtraction = document.getElementById
("subtract");
const multplyButton = document.getElementById("multiply");

let firstnumber = document.getElementById("number1").value;
let secondnumber = document.getElementById("number2").value;

let firstNumber = parseFloat(firstnumber);
let secondNumber = parseFloat(secondnumber);

addButton.addEventListener("click", () => {
    let result = add(firstNumber, secondNumber);
    document.getElementById("calculation-result").textContent = result;
})

subtractButton.addEventListener("click", () => {
    let result = subtract(firstNumber, secondNumber);
    document.getElementById("caculation-result").textContent = result;
})

multiplyButton.addEventListener("click", () => {
    let result = subtract(firstNumber, secondNumber);
    document.getElementById("caculation-result").textContent = result;
})

divideButton.addEventListener("click", () => {
 let result = divide(firstNumber, secondNumber); 
 document.getElementById("caculation-result").textContent = result;  
})

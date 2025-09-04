const getDigitButtons = document.querySelectorAll(".digit");
const getOperatorButtons = document.querySelectorAll(".operator");
const getEqualsButton = document.querySelector(".equals");
const getClearButton = document.querySelector(".clear-button");
const getDisplay = document.querySelector("#display");
const btn = document.querySelector("button");

let firstNumber = null;
let secondNumber = null;
let operator = null; 

let currentDisplayValue = '';

getDigitButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        currentDisplayValue = currentDisplayValue + e.target.textContent;
        

        if (operator != null) {
            if (firstNumber === null) {
                firstNumber = currentDisplayValue;
                currentDisplayValue = '';
            } else {
                secondNumber = currentDisplayValue;
                currentDisplayValue = '';
            };
        };
        console.log(`first number ${firstNumber}`);
        console.log(`second number ${secondNumber}`);
        getDisplay.textContent = currentDisplayValue;
    });
});

getOperatorButtons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        operator = event.target.textContent;
    })
})

function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
};

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
};

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
};

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
};

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (num2 === 0) {
                return 'Error: dibision by 0!';
            }
            return divide(num1, num2);
        default:
            return 'Invalid operator';
    };
};
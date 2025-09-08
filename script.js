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
        getDisplay.textContent = currentDisplayValue;
        if (firstNumber != null) {
            secondNumber = currentDisplayValue;
            console.log(`the second number is ${secondNumber}`)
        };
    });
});

getOperatorButtons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        if (secondNumber != null) {
            let resultOperation = operate(operator, +firstNumber, +secondNumber);
            firstNumber = resultOperation;
            secondNumber = null;
            currentDisplayValue = resultOperation;
            getDisplay.textContent = currentDisplayValue;
            currentDisplayValue = ''
            console.log(resultOperation);
        } else {
            firstNumber = currentDisplayValue;
            currentDisplayValue = '';
        }
    operator = event.target.textContent;
    })
});

getEqualsButton.addEventListener("click", (e) => {
    let getOperationResult = operate(operator, +firstNumber, +secondNumber)
    firstNumber = getOperationResult;
    secondNumber = null;

    currentDisplayValue = getOperationResult;
    getDisplay.textContent = currentDisplayValue;
});

getClearButton.addEventListener("click", (e) => {
    firstNumber = null;
    secondNumber = null;
    currentDisplayValue = '';
    operator = null;
    getDisplay.textContent = '';
});


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
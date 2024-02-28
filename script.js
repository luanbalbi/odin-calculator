const numbers = /[0-9]/;
const operators = /\+|\-|\*|\//
var number1 = '';
var number2 = '';
var operator = '';
let lastButton = '';

const display = document.querySelector(".display");
const minidisplay = document.querySelector(".minidisplay");
const button = document.querySelectorAll(".calc-row > button");

 button.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (numbers.test(btn.textContent)) {
            if (display.textContent == '0' || display.textContent === 'ERROR'){
                    display.textContent = '';
                }
            if (lastButton === '=') {
                display.textContent = '';
                minidisplay.textContent = '';
                number1 = '';
                number2 = '';
                operator = '';
            }
            if (!operator) {
                number1 += btn.textContent;
            }
            if (operator && number1) {
                if (!number2) {
                    display.textContent = '';
                }
            number2 += btn.textContent;
            }
            display.textContent += btn.textContent;
        }
        if (operators.test(btn.textContent)) {
            if (btn.textContent === '+/-') {
                display.textContent = +display.textContent * (-1);
            } else {
                if (lastButton === '=') {
                    number2 = '';
                }
                if (operator === '/' && number2 == '0'){
                    minidisplay.textContent = '';
                    number1 = '';
                    number2 = '';
                    operator = '';
                    display.textContent = 'ERROR';
                }
                operator = btn.textContent;
                if (number1 && number2) {
                        display.textContent = operate(+number1, +number2, operator);
                        number1 = display.textContent;
                        number2 = '';
                }
                if (number1 && operator) {
                    minidisplay.textContent = +number1 + operator;
                }
                if (!number1 && !number2) {
                    operator = '';
            }
            }
        }
        if (btn.textContent === '=') {
            if (display.textContent === 'ERROR'){
                display.textContent = '0';
            }
            if (number1 && !operator) {
                minidisplay.textContent = +number1 + '=';
            }
            if (number1 && operator) {
                if (!number2) {
                    number2 = number1;
                }              
                if (operator === '/' && number2 == '0'){
                    minidisplay.textContent = '';
                    number1 = '';
                    number2 = '';
                    operator = '';
                    display.textContent = 'ERROR';
                } else {
                    minidisplay.textContent = +number1 + operator + +number2 + '=';
                    display.textContent = operate(+number1, +number2, operator);
                    number1 = display.textContent;
                }
            }
        }
        if (btn.textContent === 'C') {
            display.textContent = '0';
            minidisplay.textContent = '';
            number1 = '';
            number2 = '';
            operator = '';
        }
        if (btn.textContent === 'CE') {
            display.textContent = '0';
        }
        lastButton = btn.textContent;
    });
});

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}



function operate(number1, number2, operator) {
    switch (operator) {
        case '+':
            return add(number1, number2);
            break;
        case '-':
            return subtract(number1, number2);
            break;
        case '*':
            return multiply(number1, number2);
            break;
        case '/':
            return divide(number1, number2);
            break;
        default:
            console.log('error?')
            break;
    }
}
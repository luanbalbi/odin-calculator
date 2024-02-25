const numbers = /[0-9]/;
const operators = /\+|\-|\*|\//
let number1 = 0;
let number2 = '';
let operator = '';

const display = document.querySelector(".display");
const button = document.querySelectorAll(".calc-row > button");

 button.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (numbers.test(btn.textContent)) {
            if (display.textContent == '0') display.textContent = '';
            display.textContent += btn.textContent;
        }
        if (operators.test(btn.textContent)) {
            if (btn.textContent === '+/-') {
                display.textContent = +display.textContent * (-1);
            } else {
                display.textContent = 0;
                if (operator != '') {
                    number2 = display.textContent;
                    console.log(operate(+number1, +number2, operator));
                    display.textContent = operate(+number1, +number2, operator);
                    number1 = display.textContent;
                }
                operator = btn.textContent;
                if (number1 === '') {number1 = display.textContent};
            }
        }
        if (btn.textContent === 'CE') {
            display.textContent = '0';
            number1 = 0;
            number2 = '';
            operator = '';
        }
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
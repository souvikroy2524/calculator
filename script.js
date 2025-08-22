let display = document.getElementById('display');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(operator) {
    display.value += operator;
}

function appendDecimal() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}
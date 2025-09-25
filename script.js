
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText >= '0' && buttonText <= '9' || buttonText === '.') {
            currentInput += buttonText;
            display.textContent = currentInput;
        } else if (button.classList.contains('operator')) {
            operator = buttonText;
            previousInput = currentInput;
            currentInput = '';
        } else if (button.classList.contains('equal')) {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(previousInput) + parseFloat(currentInput);
                    break;
                case '-':
                    result = parseFloat(previousInput) - parseFloat(currentInput);
                    break;
                case '*':
                    result = parseFloat(previousInput) * parseFloat(currentInput);
                    break;
                case '/':
                    result = parseFloat(previousInput) / parseFloat(currentInput);
                    break;
            }
            display.textContent = result;
            currentInput = result;
        } else if (button.classList.contains('clear')) {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.textContent = '';
        }
    });
});

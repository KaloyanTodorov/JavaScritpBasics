function solve() {
    let buttons = document.querySelectorAll('button');
    let expression = document.querySelector('#expressionOutput');
    let result = document.querySelector('#resultOutput');

    let leftOperand = '';
    let rightOperand = '';
    let operator = '';
    Array.from(buttons).forEach(btn => btn.addEventListener('click', (event, name) => {
        btnName = btn.value;

        switch(btnName) {
            case '=':
                if(operator !== '' && rightOperand === '') {
                    result.textContent = 'NaN';
                    return;
                }

                let resultValue = calculation(leftOperand, rightOperand, operator);
                result.textContent = resultValue;
                break;
            case 'Clear': 
                expression.textContent = ''; 
                result.textContent = '';
                break;
            case '.':
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                operator = btnName;
                break;
            default:
                if(operator === '') {
                    leftOperand += btnName; 
                } else {
                    rightOperand += btnName;
                }
        }

        expression.textContent += addTextValues(btnName);

        function calculation(leftOperand, rightOperand, operation) {
            
            switch(operation) {
                case '+': return Number(leftOperand) + Number(rightOperand);
                case '-': return Number(leftOperand) - Number(rightOperand);
                case '*': return Number(leftOperand) * Number(rightOperand);
                case '/': return Number(leftOperand) / Number(rightOperand);
            }
        }

        function addTextValues(button) {
            switch(button) {
                case 'Clear':
                case '=': 
                    return '';
                case '+':
                case '-':
                case '*':
                case '/':
                    return ` ${button} `;
                default:
                    return button;
            }
        }
    }));

}
function calculator(a, b, operator) {
    let sum = function (a, b) {
        return a + b;
    };

    let extract = function (a, b) {
        return a - b;
    };

    let multiply = function (a, b) {
        return a * b;
    };

    let divide = function (a, b) {
        return a / b;
    };

    switch (operator) {
        case '+': return sum(a, b);
        case '-': return extract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return 'error';
    }
    //
    // switch (operator) {
    //     case '+': return a + b;
    //     case '-': return a - b;
    //     case '*': return a * b;
    //     case '/': return a / b;
    //     default: return 'error';
    // }
}


console.log(calculator(2, 4, '+'));
console.log(calculator(3, 3, '/'));
console.log(calculator(18, -1, '*'));
console.log(calculator('0', 4, 'asd'));

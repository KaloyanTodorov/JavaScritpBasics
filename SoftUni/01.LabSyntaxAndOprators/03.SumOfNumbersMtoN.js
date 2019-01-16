function solve(num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);

    let sum = 0;
    for(let i = number1; i <= number2; i++) {
        sum += i;
    }
    console.log(sum);
}

solve('1', '5');
solve('-8', '20');
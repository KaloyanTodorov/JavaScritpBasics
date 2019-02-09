function solve(num1, num2) {
    const biggerNum = Math.max(num1, num2);
    const lowerNum = Math.max(num1, num2);

    let d = 0;
    let g;
    while(num1 % 2 === 0 && num2 % 2 === 0) {
        num1 = num1 / 2;
        num2 = num2 / 2;
        d = d + 1;
    }

    while(num1 !== num2) {
        if(num1 % 2 === 0) {
            num1 = num1 / 2;
        } else if(num2 % 2 === 0) {
            num2 = num2 / 2;
        } else if(num1 > num2) {
            num1 = (num1 - num2) / 2;
        } else {
            num2 = (num2 - num1) / 2;
        }
    }
    g = num1;

    console.log(g * Math.pow(2, d));
}

solve(5, 15);
solve(2154, 458);
solve(2, 3);
function greatestCD() {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    
    let d = 0;
    let g = 0;
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

    const gcd = g * Math.pow(2, d);
    let result = document.querySelector('#result');
    result.textContent = gcd;
}
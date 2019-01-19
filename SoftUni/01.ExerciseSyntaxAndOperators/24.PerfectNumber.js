function solve(arr) {
    const perfectNumbers = [];
    for (const number of arr) {
        if(number <= 1) {
            continue;
        }

        const divisors = []
        for (let i = 1; i <= number; i++) {
            if(number % i === 0) {
                divisors.push(i);
            }
        }
        let shortDivisors = [];
        if(divisors.length > 1) {
            shortDivisors = divisors.slice(0, divisors.length - 1);
        }
        const sumOfDivisors = shortDivisors.reduce((a,b) => a + b);
        if(number === sumOfDivisors) {
            perfectNumbers.push(number);
        }
    }

    if(perfectNumbers.length > 0) {
        const numbersAsText = perfectNumbers.join(', ');
        console.log(numbersAsText);
    } else {
        console.log('No perfect number');
    }
}

solve([5, 6, 28]);
solve([5, 32, 82]);
solve([3]);
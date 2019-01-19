function solve(amount, arr) {
    const sortedArr = arr.sort((a, b) => b - a);
    const finalArr = [];
    
    for (const coin of sortedArr) {
        while(amount >= coin) {
            finalArr.push(coin);
            amount -= coin;
        }
    }

    console.log(finalArr.join(', '));
}

solve(46, [10, 25, 5, 1, 2]);
solve(123, [5, 50, 2, 1, 10]);
function printSquare(num) {
    for (let i = 1; i <= num; i++) {
        console.log('* '.repeat(num).trim());
    }
}

printSquare(42);